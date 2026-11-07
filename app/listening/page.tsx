'use client';
import {useEffect,useRef,useState} from 'react';
import {listeningLessons,type ListeningLesson} from '../../lib/listening-lessons';
type Level='B1'|'B1+'|'B2';
type Stage='choose'|'listen'|'questions'|'results';
export default function Listening(){
 const [level,setLevel]=useState<Level>('B1');
 const [lesson,setLesson]=useState<ListeningLesson|null>(null);
 const [stage,setStage]=useState<Stage>('choose');
 const [voices,setVoices]=useState<SpeechSynthesisVoice[]>([]);
 const [voiceName,setVoiceName]=useState('');
 const [rate,setRate]=useState(0.9);
 const [speaking,setSpeaking]=useState(false);
 const [plays,setPlays]=useState(0);
 const [answers,setAnswers]=useState<number[]>([]);
 const [index,setIndex]=useState(0);
 const [checked,setChecked]=useState(false);
 const [transcript,setTranscript]=useState(false);
 const [history,setHistory]=useState<{date:string;lesson:string;level:Level;score:number;total:number;plays:number}[]>([]);
 const token=useRef(0);
 useEffect(()=>{try{setHistory(JSON.parse(localStorage.getItem('english-listening-results')||'[]'))}catch{};if(!('speechSynthesis' in window))return;const load=()=>{const vs=window.speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('en'));setVoices(vs);setVoiceName(old=>old||vs.find(v=>v.lang==='en-GB')?.name||vs[0]?.name||'')};load();window.speechSynthesis.addEventListener('voiceschanged',load);return()=>{window.speechSynthesis.removeEventListener('voiceschanged',load);window.speechSynthesis.cancel()}},[]);
 function stop(){token.current++;if('speechSynthesis' in window)window.speechSynthesis.cancel();setSpeaking(false)}
 function play(){if(!lesson||!('speechSynthesis' in window))return;stop();const id=token.current;const u=new SpeechSynthesisUtterance(lesson.text);u.lang='en-GB';u.rate=rate;const voice=voices.find(v=>v.name===voiceName);if(voice){u.voice=voice;u.lang=voice.lang}u.onend=()=>{if(id===token.current)setSpeaking(false)};u.onerror=()=>{if(id===token.current)setSpeaking(false)};setSpeaking(true);setPlays(n=>n+1);window.speechSynthesis.speak(u)}
 function select(l:ListeningLesson){stop();setLesson(l);setStage('listen');setPlays(0);setAnswers([]);setIndex(0);setChecked(false);setTranscript(false)}
 function answer(i:number){if(checked)return;setAnswers(v=>[...v,i]);setChecked(true)}
 function next(){if(!lesson)return;if(index+1<lesson.questions.length){setIndex(i=>i+1);setChecked(false);return}const score=answers.filter((a,i)=>a===lesson.questions[i].correct).length;const result={date:new Date().toISOString(),lesson:lesson.id,level:lesson.level,score,total:lesson.questions.length,plays};try{const prev=JSON.parse(localStorage.getItem('english-listening-results')||'[]');localStorage.setItem('english-listening-results',JSON.stringify([...prev,result].slice(-100)))}catch{}setHistory(h=>[...h,result]);setStage('results')}
 const question=lesson?.questions[index];const score=lesson?answers.filter((a,i)=>a===lesson.questions[i].correct).length:0;
 return <div className="stack"><h1>🎧 Listening — understand spoken English</h1><section className="panel stack"><p>Listen to original English stories, answer comprehension questions and learn useful expressions. Polish explanations and the transcript are available after you answer.</p><p className="hint">Audio uses your browser's English voices. Voice quality and availability depend on your device. Headphones recommended.</p></section>
 {stage==='choose'&&<section className="panel stack"><h2>Choose your level</h2><div className="row" style={{flexWrap:'wrap',gap:8}}>{(['B1','B1+','B2'] as Level[]).map(x=><button key={x} className={'btn '+(level===x?'':'secondary')} onClick={()=>setLevel(x)}>{x}</button>)}</div><h2>Choose a listening lesson</h2><div className="grid">{listeningLessons.filter(x=>x.level===level).map(x=><button key={x.id} className="tile" style={{textAlign:'left',cursor:'pointer'}} onClick={()=>select(x)}><strong>{x.title}</strong><span className="muted">{x.topic} · {x.questions.length} questions</span></button>)}</div></section>}
 {lesson&&stage!=='choose'&&<section className="panel stack"><span className="badge">{lesson.level} · {lesson.title}</span><h2>Listen to the recording</h2><div className="row" style={{flexWrap:'wrap',gap:8}}><button className="btn" onClick={play} disabled={voices.length===0}>{speaking?'↻ Play again':'▶ Play audio'}</button><button className="btn secondary" onClick={stop} disabled={!speaking}>■ Stop</button><label>Speed <select className="field" value={rate} onChange={e=>setRate(Number(e.target.value))}><option value={0.75}>0.75×</option><option value={0.9}>0.9×</option><option value={1}>1×</option><option value={1.15}>1.15×</option></select></label></div>{voices.length>0?<label>English voice <select className="field" value={voiceName} onChange={e=>setVoiceName(e.target.value)}>{voices.map(v=><option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}</select></label>:<p className="hint">No English text-to-speech voice is available in this browser. Try another browser or install an English system voice.</p>}<p className="hint">Listens started: {plays}. Replay whenever you need.</p>
 {stage==='listen'&&<button className="btn" onClick={()=>{stop();setStage('questions')}}>Start comprehension questions →</button>}
 {stage==='questions'&&question&&<div className="stack"><span className="badge">Question {index+1}/{lesson.questions.length}</span><h3>{question.question}</h3>{question.options.map((opt,i)=><button key={i} className="btn secondary" style={{textAlign:'left',whiteSpace:'normal'}} disabled={checked} onClick={()=>answer(i)}>{String.fromCharCode(65+i)}. {opt}</button>)}{checked&&<div className="stack"><p><strong>{answers[index]===question.correct?'✓ Correct!':'✗ Not quite.'}</strong> Correct answer: {question.options[question.correct]}</p><p><strong>Wyjaśnienie:</strong> {question.explanation}</p><button className="btn" onClick={next}>{index+1===lesson.questions.length?'See my results →':'Next question →'}</button></div>}</div>}
 {stage==='results'&&<div className="stack"><h2>Listening result: {score}/{lesson.questions.length}</h2><p>Accuracy: {Math.round(score/lesson.questions.length*100)}% · Plays: {plays}</p><h3>Useful vocabulary</h3>{lesson.vocabulary.map(x=><p key={x.word}><strong>{x.word}</strong> — {x.meaning}</p>)}<button className="btn secondary" onClick={()=>setTranscript(v=>!v)}>{transcript?'Hide transcript':'Show transcript'}</button>{transcript&&<p style={{whiteSpace:'pre-wrap',lineHeight:1.8}}>{lesson.text}</p>}<button className="btn" onClick={()=>select(lesson)}>Try this lesson again</button><button className="btn secondary" onClick={()=>{stop();setStage('choose');setLesson(null)}}>Choose another lesson</button></div>}
 </section>}
 {stage==='choose'&&history.length>0&&<section className="panel stack"><h2>Recent listening results</h2>{history.slice(-5).reverse().map((h,i)=><p key={i}>{new Date(h.date).toLocaleDateString('en-GB')} · {h.level} · {h.score}/{h.total} · {h.plays} plays</p>)}</section>}
 </div>;
}