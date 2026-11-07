'use client';
import {useEffect,useState} from 'react';
import LevelSelect from '../../components/LevelSelect';
import {countWords,type Analysis} from '../../lib/writing';
import type {Level} from '../../lib/questions';
import {writingLibrary} from '../../lib/writing-library';

type Task={type:string;title:string;instruction:string;min:number;max:number};
const baseTasks:Record<Level,Task[]>={
'B1':[
{type:'Email',title:'Change a hotel booking',instruction:'Write an email to a hotel. Explain why you need to change your arrival date and ask for confirmation.',min:80,max:120},
{type:'Email',title:'A weekend with friends',instruction:'Write an email to a friend about your last weekend. Describe what you did and ask about their plans.',min:80,max:120},
{type:'Description',title:'A place to visit',instruction:'Describe a place you would like to visit. Explain why and what you would do there.',min:90,max:130},
{type:'Opinion',title:'Studying together',instruction:'Do you prefer studying alone or with other people? Explain your opinion and give examples.',min:90,max:130}],
'B1+':[
{type:'Formal email',title:'A delayed delivery',instruction:'Write a polite email to customer service about a delayed order. Explain the problem, describe its impact and suggest a solution.',min:120,max:170},
{type:'Review',title:'A memorable restaurant',instruction:'Write a review of a restaurant you visited. Describe the experience, evaluate the service and recommend who might enjoy it.',min:120,max:170},
{type:'Story',title:'An unexpected journey',instruction:'Write a story beginning with: “I knew something was wrong when I arrived at the station.” Include a problem and its resolution.',min:130,max:180},
{type:'Opinion',title:'Learning online',instruction:'Discuss the advantages and disadvantages of learning online. Give examples and state your opinion.',min:130,max:180}],
'B2':[
{type:'Essay',title:'Remote work',instruction:'Some people believe remote work improves quality of life, while others think it harms teamwork. Discuss both views and give your opinion.',min:180,max:240},
{type:'Formal letter',title:'Improving public transport',instruction:'Write to your local council proposing improvements to public transport. Explain the problems, present solutions and justify their benefits.',min:180,max:240},
{type:'Review',title:'A book or film',instruction:'Write a balanced review of a book or film. Evaluate its strengths and weaknesses and explain who you would recommend it to.',min:170,max:230},
{type:'Article',title:'Technology and friendships',instruction:'Write an article exploring how technology has changed friendships. Include examples, contrasting perspectives and a conclusion.',min:180,max:240}]};
const tasks:Record<Level,Task[]>={B1:[...baseTasks.B1,...writingLibrary.filter(t=>t.level==='B1')], 'B1+':[...baseTasks['B1+'],...writingLibrary.filter(t=>t.level==='B1+')], B2:[...baseTasks.B2,...writingLibrary.filter(t=>t.level==='B2')]};
const guide=(task:Task)=>writingLibrary.find(t=>t.title===task.title);
export default function Writing(){
const [level,setLevel]=useState<Level>('B1');
const [taskIndex,setTaskIndex]=useState(0);
const [draft,setDraft]=useState('');
const [result,setResult]=useState<Analysis|null>(null);
const [loading,setLoading]=useState(false);
const [error,setError]=useState('');
const [showGuide,setShowGuide]=useState(true);
const [history,setHistory]=useState<{date:string;level:Level;title:string;words:number;mode:string}[]>([]);
const task=tasks[level][taskIndex]||tasks[level][0];
const key='english-writing-draft-'+level+'-'+taskIndex;
const currentGuide=guide(task);
useEffect(()=>{try{const params=new URLSearchParams(window.location.search);const topic=params.get('topic');const selected=topic?writingLibrary.find(t=>t.title.toLowerCase().includes(topic.toLowerCase())):undefined;if(selected){setLevel(selected.level);setTaskIndex(tasks[selected.level].findIndex(t=>t.title===selected.title));}}catch{}},[]);
useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('english-writing-history')||'[]');if(Array.isArray(saved))setHistory(saved.slice(0,12))}catch{}},[]);
useEffect(()=>{try{setDraft(localStorage.getItem(key)||'')}catch{setDraft('')}setResult(null);setError('')},[key]);
function update(value:string){setDraft(value);setResult(null);try{localStorage.setItem(key,value)}catch{}}
async function analyze(){
setLoading(true);setError('');setResult(null);
try{
const response=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:draft,level,task:task.instruction,taskType:task.type})});
const data=await response.json();if(!response.ok)throw Error(data.error||'Błąd analizy');
setResult(data);
const item={date:new Date().toLocaleDateString('pl-PL'),level,title:task.title,words:countWords(draft),mode:data.mode};
setHistory(previous=>{const next=[item,...previous].slice(0,12);try{localStorage.setItem('english-writing-history',JSON.stringify(next))}catch{}return next});
}catch(e){setError(e instanceof Error?e.message:'Nieznany błąd')}finally{setLoading(false)}
}
const words=countWords(draft);
return <div className="stack">
<h1>✍️ Writing — pisanie i korekta</h1>
<section className="panel stack">
<LevelSelect onChange={value=>{setLevel(value);setTaskIndex(0)}}/>
<label>Wybierz zadanie: <select className="field" value={taskIndex} onChange={e=>setTaskIndex(Number(e.target.value))}>{tasks[level].map((item,i)=><option key={i} value={i}>{item.type}: {item.title}</option>)}</select></label>
<p className="hint">Dostępne zadania: {tasks[level].length} na poziomie {level}, w tym tematy z biblioteki artykułów.</p>
<div className="feedback"><strong>{task.type} — {task.title}</strong><p lang="en">{task.instruction}</p><p className="muted">Zalecana długość: {task.min}–{task.max} słów</p></div>
{currentGuide&&<div className="feedback stack"><button type="button" className="btn secondary" onClick={()=>setShowGuide(v=>!v)}>{showGuide?'Ukryj':'Pokaż'} pomoc do zadania</button>{showGuide&&<><h3>Plan i przydatne zwroty</h3>{currentGuide.starters.map((s,i)=><p key={i} lang="en">{i+1}. {s}</p>)}<h3>Sprawdź przed wysłaniem</h3>{currentGuide.checks.map((s,i)=><p key={i}>□ {s}</p>)}<p className="hint">Wskazówki są pomocą, nie automatyczną oceną tekstu.</p></>}</div>}
<label htmlFor="essay"><strong>Twoja odpowiedź po angielsku</strong></label>
<textarea id="essay" className="field" rows={12} value={draft} onChange={e=>update(e.target.value)} placeholder="Write your answer here…" spellCheck lang="en"/>
<div className="row"><strong>Licznik słów: {words}</strong><span className="muted">{draft.length} znaków</span></div>
<div className="progress"><div style={{width:`${Math.min(100,words/task.min*100)}%`}}/></div>
<p className="hint">{words<task.min?'Spróbuj rozwinąć odpowiedź, aby osiągnąć zalecaną długość.':words>task.max?'Tekst jest dłuższy od zalecanego zakresu.':'Długość tekstu mieści się w zalecanym zakresie.'}</p>
<p className="hint">Wersja robocza zapisuje się tylko w tej przeglądarce. Analiza wysyła tekst na serwer, a przy aktywnym Groq także do dostawcy AI. Nie wpisuj danych osobowych ani poufnych informacji.</p>
<div className="row"><button className="btn" disabled={loading||!draft.trim()} onClick={analyze}>{loading?'Analizuję…':result?'Sprawdź ponownie':'Sprawdź tekst i wyjaśnij błędy'}</button><button className="btn secondary" type="button" disabled={!draft||loading} onClick={()=>{if(window.confirm('Wyczyścić bieżący tekst?'))update('')}}>Wyczyść</button></div>
{error&&<p role="alert" className="warning">{error}</p>}
{result&&<section className="feedback stack" aria-live="polite"><p>Twoja wypowiedź została przeanalizowana pod kątem poprawności językowej, stylu i realizacji zadania.</p>{result.mode==='basic'&&<p className="hint">Dostępna jest obecnie tylko analiza podstawowa oparta na regułach, a nie pełna ocena językowa.</p>}<p>{result.summary}</p>{result.findings.length?result.findings.map((f,i)=><div className="result" key={i}><strong>{f.fragment}</strong><p>{f.message}</p>{f.suggestion&&<p className="good">Propozycja: {f.suggestion}</p>}</div>):<p>{result.mode==='ai'?'Nie wykryto błędów językowych w tej analizie.':'Nie wykryto błędów z listy podstawowych reguł. Nie oznacza to pełnej poprawności.'}</p>}{result.improved&&<><h3>Proponowana wersja poprawiona</h3><div className="result" style={{whiteSpace:'pre-wrap'}}>{result.improved}</div></>}<h3>Wskazówki</h3>{result.tips.map((tip,i)=><p key={i}>• {tip}</p>)}<p className="hint">Popraw swój tekst w edytorze i wybierz „Sprawdź ponownie”.</p></section>}
</section>
{history.length>0&&<section className="panel stack"><h2>Ostatnie analizy na tym urządzeniu</h2>{history.map((entry,i)=><p key={i}>{entry.date} · {entry.level} · {entry.title} · {entry.words} słów · {entry.mode==='ai'?'AI':'podstawowa'}</p>)}</section>}
</div>
  }
