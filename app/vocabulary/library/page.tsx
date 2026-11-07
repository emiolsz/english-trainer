'use client';
import {useEffect,useMemo,useState} from 'react';
import Link from 'next/link';
import {libraryWords,type LibraryWord} from '../../lib/library-vocabulary';
type Progress={step:number;due:number;attempts:number;correct:number};
type History=Record<string,Progress>;
const KEY='english-library-vocab-v1';
const intervals=[0,1,3,7,14,30,60];
const DAY=86400000;
const shuffle=<T,>(a:T[])=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
export default function LibraryVocabulary(){
 const [history,setHistory]=useState<History>({}),[ready,setReady]=useState(false),[level,setLevel]=useState<'B1'|'B2'>('B1');
 const [daily,setDaily]=useState(5),[queue,setQueue]=useState<LibraryWord[]>([]),[index,setIndex]=useState(0),[revealed,setRevealed]=useState(false);
 const [mode,setMode]=useState<'cards'|'quiz'>('cards'),[choices,setChoices]=useState<string[]>([]),[answer,setAnswer]=useState<string|null>(null),[finished,setFinished]=useState(false);
 useEffect(()=>{try{const stored=JSON.parse(localStorage.getItem(KEY)||'{}');if(stored&&typeof stored==='object')setHistory(stored);}catch{}setReady(true)},[]);
 const pool=useMemo(()=>libraryWords.filter(w=>level==='B2'||w.level==='B1'),[level]);
 const due=pool.filter(w=>history[w.id]&&history[w.id].due<=Date.now());
 const unseen=pool.filter(w=>!history[w.id]);
 const current=queue[index];
 function save(word:LibraryWord,good:boolean){const previous=history[word.id]||{step:0,due:0,attempts:0,correct:0};const step=good?Math.min(previous.step+1,intervals.length-1):0;const next={...history,[word.id]:{step,due:Date.now()+(good?intervals[step]*DAY:0),attempts:previous.attempts+1,correct:previous.correct+(good?1:0)}};setHistory(next);try{localStorage.setItem(KEY,JSON.stringify(next))}catch{}}
 function makeChoices(word:LibraryWord){const wrong=shuffle(libraryWords.filter(w=>w.meaning!==word.meaning)).slice(0,3).map(w=>w.meaning);setChoices(shuffle([word.meaning,...wrong]));setAnswer(null)}
 function start(nextMode:'cards'|'quiz'){const selected=[...shuffle(due),...shuffle(unseen).slice(0,daily)];if(!selected.length)return;const list=selected.slice(0,25);setQueue(list);setIndex(0);setRevealed(false);setFinished(false);setMode(nextMode);makeChoices(list[0]);}
 function advance(){if(index+1>=queue.length){setFinished(true);return}const n=index+1;setIndex(n);setRevealed(false);makeChoices(queue[n]);}
 function mark(good:boolean){if(!current)return;save(current,good);advance();}
 function check(value:string){if(answer!==null||!current)return;setAnswer(value);save(current,value===current.meaning);}
 if(!ready)return <div className="panel">Ładowanie słownictwa…</div>;
 return <div className="stack"><p><Link href="/library">← Biblioteka tematyczna</Link></p><section className="hero stack"><span className="badge">English Trainer · bez AI</span><h1>🗂️ Słownictwo z biblioteki</h1><p>Ucz się wyrażeń z artykułów. Zaznaczaj, które już znasz, a system zaplanuje powtórki na podstawie odpowiedzi. Historia jest zapisywana na tym urządzeniu.</p></section>
 <section className="panel stack"><div className="row" style={{flexWrap:'wrap',gap:12}}><label>Poziom <select className="field" value={level} onChange={e=>setLevel(e.target.value as 'B1'|'B2')}><option>B1</option><option>B2</option></select></label><label>Nowych wyrażeń na sesję <select className="field" value={daily} onChange={e=>setDaily(Number(e.target.value))}><option value={5}>5</option><option value={10}>10</option><option value={15}>15</option></select></label></div><p><strong>{pool.length}</strong> wyrażeń w tym zakresie · <strong>{unseen.length}</strong> jeszcze niepoznanych · <strong>{due.length}</strong> do powtórki teraz.</p><p className="hint">Poziom B2 obejmuje także wyrażenia B1. Powtórki: 1, 3, 7, 14, 30 i 60 dni; błędna odpowiedź wraca do najbliższej sesji. Liczba 5/10/15 ogranicza nowe słowa, a nie zaległe powtórki.</p><div className="row" style={{flexWrap:'wrap',gap:10}}><button className="btn" disabled={!due.length&&!unseen.length} onClick={()=>start('cards')}>Rozpocznij fiszki →</button><button className="btn secondary" disabled={!due.length&&!unseen.length} onClick={()=>start('quiz')}>Test znaczeń →</button></div></section>
 {current&&!finished&&<section className="panel stack"><span className="badge">{index+1}/{queue.length} · {current.level} · {current.source}</span><h2 lang="en">{current.phrase}</h2><p lang="en"><em>{current.example}</em></p>{mode==='cards'?<><button className="btn secondary" onClick={()=>setRevealed(v=>!v)}>{revealed?'Ukryj znaczenie':'Pokaż znaczenie'}</button>{revealed&&<p><strong>Znaczenie:</strong> {current.meaning}</p>}<div className="row" style={{flexWrap:'wrap',gap:10}}><button className="btn secondary" onClick={()=>mark(false)}>Nie znam / powtórz</button><button className="btn" onClick={()=>mark(true)}>Znam →</button></div></>:<><p>Co oznacza to wyrażenie?</p><div className="options">{choices.map((value,i)=><button key={i} className={'option '+(answer!==null?(value===current.meaning?'correct':value===answer?'wrong':''):'')} disabled={answer!==null} onClick={()=>check(value)}>{String.fromCharCode(65+i)}. {value}</button>)}</div>{answer!==null&&<><p className="feedback">{answer===current.meaning?'✓ Poprawnie!':'Poprawne znaczenie: '+current.meaning}</p><button className="btn" onClick={advance}>Dalej →</button></>}</>}</section>}
 {finished&&<section className="panel stack"><h2>Sesja zakończona</h2><p>Twoje odpowiedzi zapisano na tym urządzeniu. Wyrażenia wrócą w kolejnych powtórkach zgodnie z wynikiem.</p><button className="btn" onClick={()=>{setQueue([]);setFinished(false)}}>Wróć do wyboru</button></section>}
 <section className="panel stack"><h2>Skąd pochodzą wyrażenia?</h2><p>Bank zawiera opracowane zwroty i przykłady z tematów Biblioteki tematycznej. Powtarzające się zwroty zapisujemy tylko raz; przy każdym zachowujemy temat źródłowy. Kolejne artykuły mogą stopniowo powiększać tę bazę.</p><Link href="/vocabulary" className="btn secondary">Pozostałe ćwiczenia Vocabulary →</Link></section></div>;
}
