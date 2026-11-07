'use client';
import {useState} from 'react';
import {drawQuestions,type Level,type Question} from '../../lib/questions';
const lessons=[
 ['Present Simple','Zwyczaje i fakty','She usually studies in the evening.','Podmiot he/she/it: końcówka -s lub -es.'],
 ['Present Continuous','Czynność w tej chwili','She is studying right now.','am/is/are + czasownik -ing.'],
 ['Past Simple','Zakończona przeszłość','She studied yesterday.','II forma czasownika, często z yesterday, last week.'],
 ['Past Continuous','Czynność trwająca w przeszłości','She was studying when I called.','was/were + -ing.'],
 ['Present Perfect','Przeszłość z efektem teraz','She has already finished.','have/has + III forma.'],
 ['Future arrangement','Ustalona przyszłość','I am meeting her tomorrow.','Present Continuous dla uzgodnionych planów.'],
 ['Past Perfect','Coś wydarzyło się wcześniej','She had left before I arrived.','had + III forma.'],
 ['Present Perfect Continuous','Czynność trwająca do teraz','She has been working for hours.','have/has been + -ing.'],
 ['Third conditional','Nierealna przeszłość','If I had known, I would have helped.','If + Past Perfect, would have + III forma.'],
 ['Future Continuous','Czynność w chwili przyszłej','Tomorrow at noon I will be working.','will be + -ing.']
] as const;
export default function Grammar(){
 const [level,setLevel]=useState<Level>('B1'),[topic,setTopic]=useState('Wszystkie');
 const [items,setItems]=useState<Question[]>([]),[index,setIndex]=useState(0),[selected,setSelected]=useState<number|null>(null),[score,setScore]=useState(0);
 const [finished,setFinished]=useState(false);
 const available=lessons.filter((_,i)=>level==='B2'||(level==='B1+'?i<8:i<6));
 function start(){
  const pool=drawQuestions(level,60).filter(q=>topic==='Wszystkie'||q.topic.split(' · ')[0]===topic);
  const result=pool.slice(0,10);
  setItems(result);setIndex(0);setSelected(null);setScore(0);setFinished(false);
 }
 function choose(i:number){if(selected!==null)return;setSelected(i);if(i===items[index].correct)setScore(v=>v+1)}
 function next(){if(index+1<items.length){setIndex(v=>v+1);setSelected(null)}else{setFinished(true);try{const old=JSON.parse(localStorage.getItem('english-grammar-results')||'[]');localStorage.setItem('english-grammar-results',JSON.stringify([...old,{date:new Date().toISOString(),level,topic,score,total:items.length}].slice(-100)))}catch{}}}
 return <div className="stack"><h1>🧠 Grammar — zasady i ćwiczenia</h1><section className="panel stack"><p>Powtórz zasady po polsku, a następnie rozwiązuj ćwiczenia z tej samej bezpłatnej puli, która zasila rozgrzewkę. Pytania są zapisane w aplikacji i nie wymagają AI.</p><div className="row" style={{gap:10,flexWrap:'wrap'}}><label>Poziom <select value={level} onChange={e=>{setLevel(e.target.value as Level);setTopic('Wszystkie');setItems([])}}><option>B1</option><option>B1+</option><option>B2</option></select></label><label>Zagadnienie <select value={topic} onChange={e=>{setTopic(e.target.value);setItems([])}}><option>Wszystkie</option>{available.map(x=><option key={x[0]}>{x[0]}</option>)}</select></label></div></section>
 <section className="grid">{available.map(([name,description,example,rule])=><article key={name} className="tile"><strong>{name}</strong><p>{description}</p><p><em>{example}</em></p><p className="muted">{rule}</p></article>)}</section>
 <section className="panel stack"><h2>Sprawdź gramatykę</h2>{items.length===0?<button className="btn" onClick={start}>Rozpocznij ćwiczenia →</button>:finished?<><h3>Wynik: {score}/{items.length}</h3><p>Wynik zapisany na tym urządzeniu.</p><button className="btn" onClick={start}>Nowy zestaw</button></>:<><span className="badge">{index+1}/{items.length} · {items[index].topic}</span><h2>{items[index].prompt}</h2><div className="options">{items[index].options.map((o,i)=><button key={i} className={'option '+(selected!==null?(i===items[index].correct?'correct':i===selected?'wrong':''):'')} disabled={selected!==null} onClick={()=>choose(i)}>{String.fromCharCode(65+i)}. {o}</button>)}</div>{selected!==null&&<><p className="feedback">{items[index].explanations[selected]}</p>{selected!==items[index].correct&&<p>Poprawnie: <strong>{items[index].options[items[index].correct]}</strong></p>}<button className="btn" onClick={next}>{index+1===items.length?'Zakończ':'Następne pytanie →'}</button></>}</>}</section></div>;
}
