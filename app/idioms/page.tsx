'use client';
import {useEffect,useState} from 'react';
import {expressions} from '../../lib/expressions';
const idioms=expressions.filter(x=>x.kind==='idiom');
function pickDaily(date:Date){
 const start=new Date(date.getFullYear(),0,1);
 const day=Math.floor((Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())-Date.UTC(date.getFullYear(),0,1))/86400000);
 const week=Math.floor(day/Math.max(1,Math.ceil(idioms.length/5)));
 let seed=date.getFullYear()*1000+week*7919;
 const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};
 const shuffled=[...idioms];for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
 const offset=(day%Math.ceil(idioms.length/5))*5;
 return Array.from({length:Math.min(5,idioms.length)},(_,i)=>shuffled[(offset+i)%shuffled.length]);
}
export default function DailyIdioms(){
 const [today,setToday]=useState<Date|null>(null);
 const [shown,setShown]=useState<number[]>([]);
 const [known,setKnown]=useState<number[]>([]);
 useEffect(()=>{setToday(new Date());try{setKnown(JSON.parse(localStorage.getItem('english-daily-idioms-known')||'[]'))}catch{}},[]);
 const items=today?pickDaily(today):[];
 function mark(id:number){const next=known.includes(id)?known.filter(x=>x!==id):[...known,id];setKnown(next);try{localStorage.setItem('english-daily-idioms-known',JSON.stringify(next))}catch{}}
 return <div className="stack"><h1>💬 Idiomy · kapsułka dnia</h1><section className="panel stack"><span className="badge">5 wyrażeń dziennie · B1–B2</span><p>Każdego dnia dostajesz pięć idiomów w nowej, wymieszanej kolejności. Zobacz przykład, spróbuj odgadnąć znaczenie, a potem je odkryj.</p><p className="muted">Zestaw zmienia się według daty na Twoim urządzeniu. Po wykorzystaniu całej puli idiomy wracają w nowej kolejności.</p></section>{items.map((item,i)=><section className="panel stack" key={item.id}><div className="row" style={{justifyContent:'space-between',flexWrap:'wrap'}}><span className="badge">{i+1}/5 · {item.level} · {item.context}</span><span className="muted">{known.includes(item.id)?'✓ Znam':'Do nauczenia'}</span></div><h2>{item.phrase}</h2><p><em>{item.example}</em></p>{shown.includes(item.id)?<p><strong>Znaczenie:</strong> {item.meaning}</p>:<button className="btn secondary" onClick={()=>setShown(v=>[...v,item.id])}>Odkryj znaczenie</button>}<button className="btn ghost" onClick={()=>mark(item.id)}>{known.includes(item.id)?'Cofnij oznaczenie':'✓ Znam ten idiom'}</button></section>)}{today&&<section className="panel"><p>Oznaczone jako znane: <strong>{items.filter(x=>known.includes(x.id)).length}/5</strong>. Jutro pojawi się następna kapsułka.</p></section>}</div>;
}
