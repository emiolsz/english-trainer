'use client';
import {useEffect,useState} from 'react';
import {expressions} from '../../lib/expressions';
const idioms=expressions.filter(x=>x.kind==='idiom');
type Answer={id:number;correct:boolean};
const shuffle=<T,>(items:T[],seed:number)=>{const a=[...items];let s=seed>>>0;for(let i=a.length-1;i>0;i--){s=(Math.imul(s,1664525)+1013904223)>>>0;const j=Math.floor(s/4294967296*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function daily(date:Date,count:5|10){
 const day=Math.floor((Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())-Date.UTC(date.getFullYear(),0,1))/86400000);
 const sets=Math.ceil(idioms.length/count);
 const cycle=Math.floor(day/sets);
 const pool=shuffle(idioms,date.getFullYear()*1009+cycle*9973);
 return pool.slice((day%sets)*count,(day%sets+1)*count);
}
export default function Idioms(){
 const [dailyCount,setDailyCount]=useState<5|10>(5),[now,setNow]=useState<Date|null>(null),[stage,setStage]=useState<'learn'|'test'|'done'>('learn');
 const [index,setIndex]=useState(0),[revealed,setRevealed]=useState<number[]>([]);
 const [chosen,setChosen]=useState<number[]>([]),[answers,setAnswers]=useState<Answer[]>([]),[checked,setChecked]=useState(false);
 const [history,setHistory]=useState<Answer[]>([]);
 useEffect(()=>{const date=new Date();setNow(date);const preference=localStorage.getItem('english-idioms-daily-count');const count:5|10=preference==='10'?10:5;setDailyCount(count);const key='english-idioms-'+count+'-'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){setAnswers(saved);setStage('done')}setHistory(JSON.parse(localStorage.getItem('english-idioms-history')||'[]'))}catch{}},[]);
 const items=now?daily(now,dailyCount):[];const item=items[index];
 const words=item?item.phrase.split(' '):[];
 const tiles=item?shuffle([...words.map((word,i)=>({word,i})),...['always','never','again','today','very','soon'].slice(item.id%3,item.id%3+2).map((word,i)=>({word,i:100+i}))],item.id*37+11):[];
 const isCorrect=chosen.map(i=>tiles[i]?.word).join(' ').toLowerCase()===item?.phrase.toLowerCase();
 function changeCount(count:5|10){setDailyCount(count);setStage('learn');setIndex(0);setChosen([]);setAnswers([]);setChecked(false);setRevealed([]);try{localStorage.setItem('english-idioms-daily-count',String(count));const date=now!;const key='english-idioms-'+count+'-'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){setAnswers(saved);setStage('done')}}catch{}}
 function submit(){if(!item||checked||chosen.length!==words.length)return;setChecked(true);setAnswers(v=>[...v,{id:item.id,correct:isCorrect}]);}
 function next(){setChosen([]);setChecked(false);if(index+1<items.length){setIndex(v=>v+1);return;}const date=now!;const key='english-idioms-'+dailyCount+'-'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();try{localStorage.setItem(key,JSON.stringify(answers));localStorage.setItem('english-idioms-history',JSON.stringify([...history,...answers].slice(-500)))}catch{}setHistory(v=>[...v,...answers]);setStage('done');}
 const correct=answers.filter(a=>a.correct).length;
 return <div className="stack"><h1>💬 Idiomy — kapsułka dnia</h1><section className="panel stack"><span className="badge">{dailyCount} idiomów dziennie · B1–B2 · baza {idioms.length} idiomów</span><p>Najpierw poznaj wybraną liczbę wyrażeń, potem sprawdź pamięć: zobaczysz polskie znaczenie i ułożysz angielski idiom z wymieszanych słów. Wynik zapisuje się na tym urządzeniu.</p><div className="row" style={{flexWrap:'wrap',gap:10}}><strong>Daily goal / Cel dzienny:</strong><button className={'btn '+(dailyCount===5?'':'secondary')} onClick={()=>changeCount(5)}>5 idiomów</button><button className={'btn '+(dailyCount===10?'':'secondary')} onClick={()=>changeCount(10)}>10 idiomów</button></div><p className="hint">Wybór jest zapamiętywany w tej przeglądarce. Możesz zmienić go w dowolnym momencie; każdy wariant ma osobny dzienny wynik.</p></section>
 {stage==='learn'&&<section className="panel stack"><h2>Dzisiejszy zestaw: {dailyCount} idiomów</h2>{items.map((x,i)=><div key={x.id} className="stack" style={{borderBottom:'1px solid #e2e8f0',paddingBottom:12}}><strong>{i+1}. {x.phrase}</strong><em>{x.example}</em>{revealed.includes(x.id)?<p><strong>Znaczenie:</strong> {x.meaning}</p>:<button className="btn secondary" onClick={()=>setRevealed(v=>[...v,x.id])}>Pokaż znaczenie</button>}</div>)}<button className="btn" onClick={()=>{setStage('test');setIndex(0);setChosen([]);setAnswers([])}}>Sprawdź, co pamiętam →</button></section>}
 {stage==='test'&&item&&<section className="panel stack"><span className="badge">Sprawdzian {index+1}/{items.length}</span><h2>{item.meaning}</h2><p>Ułóż angielski idiom, klikając słowa we właściwej kolejności. Dwa słowa są zbędne.</p><div className="panel" style={{minHeight:70,display:'flex',flexWrap:'wrap',gap:8}}>{chosen.length?chosen.map((n,i)=><button key={i} className="btn secondary" disabled={checked} onClick={()=>setChosen(v=>v.filter((_,j)=>j!==i))}>{tiles[n].word} ×</button>):<span className="muted">Wybierz słowa poniżej…</span>}</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{tiles.map((tile,i)=><button key={tile.i} className="btn ghost" disabled={checked||chosen.includes(i)||chosen.length>=words.length} onClick={()=>setChosen(v=>[...v,i])}>{tile.word}</button>)}</div>{!checked?<button className="btn" disabled={chosen.length!==words.length} onClick={submit}>Sprawdź odpowiedź</button>:<><p className={'feedback '+(isCorrect?'':'error')}><strong>{isCorrect?'✓ Poprawnie!':'✗ Spróbuj zapamiętać poprawną kolejność.'}</strong> {item.phrase}</p><p><em>{item.example}</em></p><button className="btn" onClick={next}>{index===items.length-1?'Zobacz wynik':'Następny idiom →'}</button></>}</section>}
 {stage==='done'&&<section className="panel stack"><h2>Twój wynik: {correct}/{items.length} ({Math.round(correct/Math.max(1,items.length)*100)}%)</h2><p>Poprawne: {correct}. Do powtórki: {items.length-correct}.</p>{items.map(x=><p key={x.id}>{answers.find(a=>a.id===x.id)?.correct?'✓':'↻'} <strong>{x.phrase}</strong> — {x.meaning}</p>)}<p className="muted">Nowy zestaw pojawi się jutro. Dzisiejszy wynik pozostanie zapisany na tym urządzeniu.</p></section>}
 </div>;
}
