'use client';
import {useState} from 'react';
import Link from 'next/link';
const topics=[
 {title:'The Choice Ahead',pl:'Wybór przede mną',theme:'Odwaga i decyzje',words:['choice','path','courage','future','hope'],prompts:['Describe a moment before a decision.','Show how you feel about the choice.','Finish with your next step.']},
 {title:'A Quiet Morning',pl:'Cichy poranek',theme:'Spokój i przyroda',words:['sunrise','silence','breeze','peaceful','dew'],prompts:['Describe what you see in the morning.','Add a sound or a feeling.','End with a peaceful image.']},
 {title:'A New Beginning',pl:'Nowy początek',theme:'Zmiana i nadzieja',words:['beginning','grow','change','hope','tomorrow'],prompts:['Show something new starting.','Describe a change or a feeling.','End with a hopeful image.']},
 {title:'After the Rain',pl:'Po deszczu',theme:'Wytrwałość i optymizm',words:['rain','clouds','rainbow','strength','sunlight'],prompts:['Describe the rain or clouds.','Show what happens as the rain stops.','End with a sign of hope.']},
 {title:'A Wish Upon a Star',pl:'Życzenie do gwiazdy',theme:'Marzenia i przyszłość',words:['star','wish','dream','night','sky'],prompts:['Describe the evening sky.','Express a dream or a wish.','End with a feeling about the future.']}
];
export default function CreativePoetry(){
 const [topic,setTopic]=useState(0);
 const [lines,setLines]=useState(['','','']);
 const [showHelp,setShowHelp]=useState(true);
 const [saved,setSaved]=useState(false);
 const current=topics[topic];
 const text=lines.join('\n');
 const ready=lines.every(x=>x.trim().length>0);
 const choose=(i:number)=>{setTopic(i);setLines(['','','']);setSaved(false);};
 const update=(i:number,v:string)=>{setLines(a=>a.map((x,j)=>j===i?v.replace(/\r?\n/g,' '):x));setSaved(false);};
 return <div className="stack"><section className="panel stack" style={{textAlign:'center'}}><p style={{fontSize:'1.15rem',fontWeight:600,marginBottom:0}}>I understand English</p><p style={{marginTop:0}}>Rozumiem angielski</p><p style={{fontSize:'1.15rem',fontWeight:600,marginBottom:0}}>I can express myself</p><p style={{marginTop:0}}>Potrafię się wyrazić</p><p style={{fontSize:'1.15rem',fontWeight:600,marginBottom:0}}>I can create in English</p><p style={{marginTop:0}}>Potrafię tworzyć po angielsku</p></section><h1>✍️ Creative Poetry — My First Haiku</h1><p>Pięć tematów do napisania własnego krótkiego wiersza po angielsku. Bez ilustracji — liczą się Twoje słowa i wyobraźnia.</p>
 <section className="panel stack"><h2>Wybierz temat</h2><div className="grid">{topics.map((t,i)=><button key={t.title} className={'btn '+(topic===i?'':'secondary')} onClick={()=>choose(i)} aria-pressed={topic===i}>{t.title} · {t.pl}</button>)}</div></section>
 <section className="panel stack"><span className="badge">B1 · Creative Writing</span><h2>{current.title}</h2><p>{current.pl} · {current.theme}</p><p lang="en">Write a three-line haiku about this theme. Try the 5–7–5 syllable pattern, but remember: a meaningful image is more important than perfect counting. Your poem does not need to rhyme.</p><button className="btn secondary" onClick={()=>setShowHelp(x=>!x)}>{showHelp?'Ukryj wskazówki':'Pokaż wskazówki'}</button>{showHelp&&<div className="tile stack"><p><strong>Useful words:</strong> {current.words.join(' · ')}</p><ol>{current.prompts.map(x=><li key={x}>{x}</li>)}</ol><p className="hint">Haiku często przedstawia jeden moment lub obraz z przyrody. Możesz połączyć go z emocją albo wyborem. Liczba sylab w języku angielskim nie zawsze wynika z pisowni.</p></div>}
 {lines.map((value,i)=><div className="stack" key={i}><label htmlFor={'haiku-line-'+i}>Line {i+1} · suggested {i===1?7:5} syllables</label><input id={'haiku-line-'+i} className="field" value={value} onChange={e=>update(i,e.target.value)} placeholder={current.prompts[i]} lang="en" maxLength={160}/></div>)}
 <div className="tile stack"><h3>My haiku</h3><p lang="en" style={{whiteSpace:'pre-line',fontFamily:'Georgia,serif',lineHeight:2}}>{ready?text:'Your three lines will appear here.'}</p></div>
 <div className="row"><button className="btn secondary" disabled={!ready} onClick={()=>{try{localStorage.setItem('english-creative-haiku-'+topic,text);setSaved(true);}catch{setSaved(false);}navigator.clipboard?.writeText(text).catch(()=>{});}}>Zapisz i skopiuj</button><button className="btn secondary" onClick={()=>{setLines(['','','']);setSaved(false);}}>Wyczyść</button></div>{saved&&<p role="status">Haiku zapisane na tym urządzeniu. Spróbowano również skopiować je do schowka.</p>}
 <p className="hint">Po napisaniu możesz wkleić wiersz do modułu Writing i poprosić o korektę językową. Automatyczna ocena liczby sylab nie jest tu dostępna.</p><Link className="btn" href="/writing">Przejdź do Writing →</Link></section>
 <Link className="btn secondary" href="/poetry">← English Through Poetry</Link></div>;
}
