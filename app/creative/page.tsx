'use client';
import {useState} from 'react';
import Link from 'next/link';

type Level='B1'|'B2'|'C1';
const steps=[
{en:'Prepare eight seed beads, a beading needle and a suitable thread.',pl:'Przygotuj osiem koralików, igłę do koralików i odpowiednią nić.',detail:'Start with eight beads on the thread. Leave a tail long enough to secure the work later.',plDetail:'Nawlecz osiem koralików. Zostaw koniec nici wystarczająco długi do późniejszego zabezpieczenia pracy.',target:-1},
{en:'Pick up one new bead and pass the needle through the seventh bead of the original row.',pl:'Nabierz nowy koralik i przeprowadź igłę przez siódmy koralik początkowego rzędu.',detail:'Count from the first bead you picked up. The seventh bead is the second from the working end.',plDetail:'Licz od pierwszego nawleczonego koralika. Siódmy to drugi koralik od końca roboczego.',target:6},
{en:'Pick up another bead and pass through the fifth bead.',pl:'Nabierz kolejny koralik i przeprowadź igłę przez piąty koralik.',detail:'Pull the thread gently so that the new bead sits above the previous row.',plDetail:'Delikatnie dociągnij nić, aby nowy koralik ułożył się nad poprzednim rzędem.',target:4},
{en:'Repeat the movement through the third and then the first bead.',pl:'Powtórz ruch przez trzeci, a następnie pierwszy koralik.',detail:'Add one new bead before each pass. Four raised beads form the next peyote row.',plDetail:'Przed każdym przejściem dodaj jeden nowy koralik. Cztery wystające koraliki tworzą kolejny rząd peyote.',target:0},
{en:'Turn your work and weave back through the raised beads, adding one bead at a time.',pl:'Odwróć robótkę i przeplataj nić przez wystające koraliki, dodając po jednym koraliku.',detail:'Continue in alternating directions. Keep the tension even; do not pull too tightly.',plDetail:'Kontynuuj naprzemiennie w obu kierunkach. Zachowaj równomierne napięcie nici, nie zaciskaj zbyt mocno.',target:-2},
{en:'Continue to the desired length and secure the thread and clasp.',pl:'Kontynuuj do pożądanej długości, a następnie zabezpiecz nić i zamocuj zapięcie.',detail:'Choose a clasp suitable for beadwork. Check the fastening before wearing the bracelet.',plDetail:'Wybierz zapięcie odpowiednie do koralikowej biżuterii. Sprawdź mocowanie przed założeniem bransoletki.',target:-3}
];
const vocab=[['seed bead','drobny koralik'],['needle','igła'],['thread','nić'],['pick up','nabrać na igłę'],['pass through','przeprowadzić przez'],['raised bead','wystający koralik'],['row','rząd'],['tension','napięcie nici'],['clasp','zapięcie'],['repeat','powtórzyć']];
const grammar:Record<Level,{title:string;items:string[]}>={
B1:{title:'B1 · Tryb rozkazujący (Imperative)',items:['Pick up one bead. — Nabierz jeden koralik.','Pass the needle through the bead. — Przeprowadź igłę przez koralik.','Repeat the step. — Powtórz krok.','Polecenia zaczynają się od podstawowej formy czasownika, bez podmiotu you.']},
B2:{title:'B2 · Kolejność, przyimki i zdania podrzędne',items:['After adding a bead, pass the needle through the next raised bead. — Po dodaniu koralika…','Make sure the thread is not too tight. — Upewnij się, że nić nie jest zbyt napięta.','Through oznacza „przez wnętrze”, whereas over oznacza „ponad”.','While you weave, keep the tension even. — Podczas wyplatania utrzymuj równe napięcie.']},
C1:{title:'C1 · Precyzyjne instrukcje techniczne',items:['Maintain consistent thread tension to prevent distortion of the beadwork.','Having completed the row, reverse the direction of weaving.','The needle should be passed through the protruding bead without splitting the thread.','C1 ćwiczy zwięzłość, precyzję i poprawne zależności między czynnościami — nie tylko trudniejsze słowa.']}
};
const quiz=[{q:'„Przeprowadź igłę przez koralik” to:',options:['Pass the needle through the bead.','Put the needle above the bead.','Remove the needle from the bead.'],correct:0,why:'Through opisuje przejście przez otwór koralika.'},{q:'Które zdanie jest poleceniem (Imperative)?',options:['She is picking up beads.','Pick up another bead.','The bead was picked up.'],correct:1,why:'Tryb rozkazujący rozpoczyna się od podstawowej formy czasownika.'},{q:'Co znaczy „Keep the tension even”?',options:['Zmień kolor nici.','Zachowaj równomierne napięcie nici.','Poluzuj zapięcie.'],correct:1,why:'Even oznacza tutaj równomierny, a tension — napięcie.'}];
function BeadDiagram({step}:{step:number}){
const base=Array.from({length:8},(_,i)=>({x:32+i*37,y:115,n:i+1}));
const added=[{x:32+6.5*37,y:76},{x:32+4.5*37,y:76},{x:32+2.5*37,y:76},{x:32+.5*37,y:76}];
const visible=step===0?0:step===1?1:step===2?2:step===3?4:4;
return <svg viewBox="0 0 345 170" role="img" aria-label="Schemat autorski: osiem koralików początkowych i kolejne koraliki dodawane ściegiem peyote" style={{width:'100%',maxWidth:560,display:'block',margin:'0 auto'}}>
<path d="M 13 115 L 321 115" stroke="#64748b" strokeWidth="2" fill="none"/>
{base.map((b,i)=><g key={i}><circle cx={b.x} cy={b.y} r="15" fill={i%2?'#d7e9ef':'#f4d6a0'} stroke="#426078" strokeWidth="1.6"/><circle cx={b.x} cy={b.y} r="3" fill="#fff"/><text x={b.x} y="146" fontSize="10" textAnchor="middle" fill="#52647a">{b.n}</text></g>)}
{added.slice(0,visible).map((b,i)=><g key={i}><circle cx={b.x} cy={b.y} r="15" fill="#26a69a" stroke="#196c70" strokeWidth="1.8"/><circle cx={b.x} cy={b.y} r="3" fill="white"/></g>)}
{step>=1&&step<=3&&<><path d={step===1?'M 327 58 Q 310 58 290 75 L 254 115':step===2?'M 290 75 Q 275 52 253 76 L 180 115':'M 253 76 Q 224 45 179 76 L 106 115 Q 80 47 69 76 L 32 115'} fill="none" stroke="#dc493a" strokeWidth="2.5" strokeDasharray="5 3"/><text x="172" y="22" textAnchor="middle" fontSize="12" fill="#b4362d">Czerwona linia: kierunek przejścia nici (poglądowo)</text></>}
{step===0&&<text x="172" y="35" textAnchor="middle" fontSize="12" fill="#42546c">8 koralików początkowych</text>}
{step>=4&&<text x="172" y="35" textAnchor="middle" fontSize="12" fill="#42546c">Kontynuuj przeplatanie naprzemiennych rzędów</text>}
</svg>
}
export default function CreativeEnglish(){
const [level,setLevel]=useState<Level>('B1');
const [step,setStep]=useState(0);
const [showPolish,setShowPolish]=useState(true);
const [answers,setAnswers]=useState<Record<number,number>>({});
const [showDetails,setShowDetails]=useState(true);
const score=quiz.filter((q,i)=>answers[i]===q.correct).length;
return <div className="stack">
<p><Link href="/">← Wszystkie moduły</Link></p>
<section className="hero stack"><span className="badge">Creative English · B1–C1</span><h1>🧵 Learn English by Making Things</h1><p>Ucz się angielskiego, wykonując prawdziwy projekt. Pierwsza lekcja: płaski ścieg peyote z parzystą liczbą koralików.</p><p className="hint">Wszystkie schematy w tej lekcji są autorskimi rysunkami SVG — bez cudzych fotografii i wzorów.</p></section>
<section className="panel stack"><h2>🇮🇹 Nowa lekcja: Two Days in Rome</h2><p>Autorski tekst o dwóch dniach w Rzymie, tłumaczenie, słownictwo, analiza B1–C1 i quiz.</p><Link href="/creative/rome" className="btn" style={{display:"inline-block",width:"fit-content"}}>Otwórz lekcję o Rzymie →</Link></section>
<section className="panel stack"><h2>🐈 Why Are Cats Obligate Carnivores?</h2><p>Żywienie kotów: tauryna, arginina, witamina A, mleko i słodycze. Tekst EN/PL, słownictwo i analiza B1–C1.</p><Link href="/creative/cat-nutrition" className="btn" style={{display:"inline-block",width:"fit-content"}}>Otwórz lekcję o kotach →</Link></section>
<section className="panel stack"><h2>Biblioteka Creative English</h2><p>Nowa lekcja podróżnicza: przygotuj plecak na Kilimandżaro, poznaj słownictwo sprzętowe i gramatykę B1–C1.</p><Link href="/creative/kilimanjaro" className="btn" style={{display:"inline-block",width:"fit-content"}}>🎒 Packing for Kilimanjaro →</Link></section>
<section className="panel stack"><div className="row"><h2 style={{margin:0}}>Peyote Bracelet · Even Count</h2><label>Poziom językowy <select className="field" value={level} onChange={e=>setLevel(e.target.value as Level)}><option>B1</option><option>B2</option><option>C1</option></select></label></div><p>Materiały: seed beads (koraliki), beading needle (igła), beading thread (nić), scissors (nożyczki), clasp (zapięcie).</p><p className="hint">Poziom trudności rękodzieła: początkujący. Poziom B1–C1 dotyczy języka instrukcji i analizy gramatycznej.</p>
<div className="row"><strong>Krok {step+1} z {steps.length}</strong><label><input type="checkbox" checked={showPolish} onChange={e=>setShowPolish(e.target.checked)}/> Pokaż tłumaczenie</label></div>
<div className="progress"><div style={{width:((step+1)/steps.length*100)+'%'}}/></div>
<BeadDiagram step={step}/>
<div className="feedback stack"><h3 style={{margin:0}} lang="en">{steps[step].en}</h3>{showPolish&&<p>{steps[step].pl}</p>}<button className="btn secondary" type="button" onClick={()=>setShowDetails(v=>!v)}>{showDetails?'Ukryj':'Pokaż'} wskazówkę</button>{showDetails&&<><p lang="en">{steps[step].detail}</p>{showPolish&&<p className="muted">{steps[step].plDetail}</p>}</>}</div>
<div className="row"><button className="btn secondary" disabled={step===0} onClick={()=>{setStep(v=>v-1);setShowDetails(true)}}>← Poprzedni krok</button><button className="btn" disabled={step===steps.length-1} onClick={()=>{setStep(v=>v+1);setShowDetails(true)}}>Następny krok →</button></div>
<p className="hint">Rysunek przedstawia zasadę przeplatania. Czerwona linia jest poglądowa; przed wykonaniem biżuterii sprawdź rzeczywisty tor nici i sposób zakończenia na próbce.</p></section>
<section className="panel stack"><h2>Słowniczek · Vocabulary</h2><div className="grid">{vocab.map(([en,pl])=><div className="feedback" key={en}><strong lang="en">{en}</strong><div>{pl}</div></div>)}</div></section>
<section className="panel stack"><h2>{grammar[level].title}</h2>{grammar[level].items.map((item,i)=><p className="feedback" key={i}>{item}</p>)}<p className="hint">Zmień poziom B1, B2 lub C1 u góry, aby porównać sposób objaśniania języka.</p></section>
<section className="panel stack"><h2>Sprawdź się · Quick quiz</h2>{quiz.map((q,i)=><div className="stack" key={i}><strong>{i+1}. {q.q}</strong>{q.options.map((option,j)=><button key={j} type="button" className={'option'+(answers[i]===j?(j===q.correct?' correct':' wrong'):'')} onClick={()=>setAnswers(prev=>({...prev,[i]:j}))}>{option}</button>)}{answers[i]!==undefined&&<p className="hint">{answers[i]===q.correct?'✓ Dobrze! ':'Spróbuj ponownie. '}{q.why}</p>}</div>)}<p><strong>Wynik: {score}/{quiz.length}</strong></p><button className="btn secondary" onClick={()=>setAnswers({})}>Powtórz quiz</button></section>
<section className="panel stack"><h2>Writing challenge · B1–C1</h2><p lang="en">Describe how to make a peyote bracelet. Use sequencing words (first, next, then, finally) and explain how to keep the thread tension even.</p><p>Przygotuj własną instrukcję po angielsku. Możesz ją następnie sprawdzić w istniejącym module Writing.</p><Link href="/writing" className="btn" style={{display:'inline-block',width:'fit-content'}}>Przejdź do Writing →</Link><p className="hint">W tej pierwszej wersji zadanie nie jest jeszcze automatycznie przenoszone do Writing. Wybierz tam zadanie o podobnym charakterze lub wykorzystaj tekst do samodzielnej praktyki.</p></section>
</div>;
}
