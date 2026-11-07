'use client';
import {useState} from 'react';
import Link from 'next/link';
import {extendedStories} from '../../../lib/extended-literature';
export default function ExtendedLiterature(){
 const [selected,setSelected]=useState<number|null>(null);
 const [answers,setAnswers]=useState<Record<number,number>>({});
 const [checked,setChecked]=useState<Record<number,boolean>>({});
 const [grammarAnswers,setGrammarAnswers]=useState<Record<number,string>>({});
 const [grammarChecked,setGrammarChecked]=useState<Record<number,boolean>>({});
 const [draft,setDraft]=useState('');
 const [showVocab,setShowVocab]=useState(false);
 const story=selected===null?null:extendedStories[selected];
 const count=draft.trim()?draft.trim().split(/\s+/).length:0;
 const score=story?story.questions.filter((q,i)=>checked[i]&&answers[i]===q[2]).length:0;
 function open(i:number){setSelected(i);setAnswers({});setChecked({});setGrammarAnswers({});setGrammarChecked({});setDraft('');setShowVocab(false);}
 return <div className="stack"><h1>📖 B1 Extended Reading</h1><p>Pięć dłuższych, autorskich opowiadań o codziennych decyzjach, nawykach, tajemnicach, przyrodzie i podróżach. Każdy tekst ma 6 pytań, 10 wyrażeń, 3 ćwiczenia gramatyczne i Writing z planem.</p>
 {!story?<section className="grid">{extendedStories.map((s,i)=><article key={s.title} className="tile stack"><span className="badge">B1 · {s.topic}</span><h2>{s.title}</h2><p>{s.words} słów · 6 pytań · 10 wyrażeń · 3 ćwiczenia</p><button className="btn" onClick={()=>open(i)}>Otwórz czytankę</button></article>)}</section>:<>
 <section className="panel stack"><button className="btn secondary" onClick={()=>setSelected(null)}>← Wszystkie teksty</button><span className="badge">B1 Extended · {story.topic} · {story.words} słów</span><h2>{story.title}</h2><div lang="en" style={{lineHeight:1.85}}>{story.paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div><button className="btn secondary" onClick={()=>setShowVocab(v=>!v)}>{showVocab?'Ukryj słowniczek':'Pokaż 10 wyrażeń'}</button>{showVocab&&<div className="grid">{story.vocab.map(([word,meaning])=><div key={word} className="tile"><strong>{word}</strong><p>{meaning}</p></div>)}</div>}</section>
 <section className="panel stack"><h2>Reading comprehension — 6 pytań</h2><p>Niektóre pytania sprawdzają szczegóły, inne przyczyny, wnioski i główną myśl.</p>{story.questions.map(([question,options,correct,why],i)=><article key={i} className="tile stack"><h3>{i+1}. {question}</h3><div className="stack">{options.map((option,j)=><label key={j} className="row"><input type="radio" name={'extended-q-'+i} checked={answers[i]===j} disabled={checked[i]} onChange={()=>setAnswers(a=>({...a,[i]:j}))}/>{option}</label>)}</div>{!checked[i]?<button className="btn secondary" disabled={answers[i]===undefined} onClick={()=>setChecked(a=>({...a,[i]:true}))}>Sprawdź</button>:<div className="feedback"><strong>{answers[i]===correct?'✓ Poprawnie':'✗ Poprawna odpowiedź: '+options[correct]}</strong><p>{why}</p></div>}</article>)}<p><strong>Wynik: {score}/{story.questions.length}</strong></p></section>
 <section className="panel stack"><h2>Grammar — 3 ćwiczenia z wyjaśnieniami</h2>{story.grammar.map(([prompt,answer,explanation],i)=><div className="tile stack" key={i}><p>{i+1}. {prompt}</p><input className="field" value={grammarAnswers[i]||''} onChange={e=>setGrammarAnswers(a=>({...a,[i]:e.target.value}))} aria-label={'Odpowiedź gramatyczna '+(i+1)}/><button className="btn secondary" onClick={()=>setGrammarChecked(a=>({...a,[i]:true}))}>Sprawdź i wyjaśnij</button>{grammarChecked[i]&&<div className="feedback"><strong>{(grammarAnswers[i]||'').trim().toLowerCase()===answer.toLowerCase()?'✓ Poprawnie':'Poprawna odpowiedź: '+answer}</strong><p>{explanation}</p></div>}</div>)}</section>
 <section className="panel stack"><h2>Writing — uzasadnij własną opinię</h2><p>{story.writing}</p><h3>Plan wypowiedzi (90–120 słów)</h3><ol>{story.plan.map(p=><li key={p}>{p}</li>)}</ol><textarea className="field" rows={8} lang="en" value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Write your answer in English..." aria-label="Twoja wypowiedź"/><p><strong>{count} słów</strong> · zalecane 90–120</p><button className="btn secondary" disabled={!draft.trim()} onClick={()=>{try{localStorage.setItem('english-extended-literature-draft',draft);}catch{}navigator.clipboard?.writeText(draft).catch(()=>{});}}>Zapisz na urządzeniu i skopiuj</button><Link className="btn" href="/writing">Przejdź do korekty Writing →</Link></section></>}
 <Link className="btn secondary" href="/reading/literature">← B1 Easy Reading i pozostałe czytanki</Link></div>;
}
