'use client';
import {useState} from 'react';
import Link from 'next/link';
type Level='B1'|'B2'|'C1';
type Item={en:string;pl:string;why:string};
const day:Item[]=[
{en:'Waterproof jacket and rain trousers',pl:'Kurtka i spodnie przeciwdeszczowe',why:'Weather can change quickly at altitude.'},
{en:'Warm fleece or insulated layer',pl:'Polar lub ciepła warstwa izolacyjna',why:'Keep an extra warm layer within reach.'},
{en:'Warm hat, gloves and sun hat',pl:'Ciepła czapka, rękawiczki i kapelusz przeciwsłoneczny',why:'Protect yourself from cold and strong sun.'},
{en:'Water bottles or hydration system',pl:'Butelki na wodę lub system nawadniania',why:'Ask the operator how much water to carry each day; protect it from freezing on summit night.'},
{en:'Sunglasses and sunscreen',pl:'Okulary przeciwsłoneczne i krem z filtrem',why:'UV exposure can be intense at high altitude.'},
{en:'Headlamp and spare batteries',pl:'Czołówka i zapasowe baterie',why:'Essential for dark conditions, especially summit night.'},
{en:'Personal medication and small first-aid kit',pl:'Leki osobiste i mała apteczka',why:'Discuss altitude and personal medical risks with a qualified clinician before travel.'},
{en:'Snacks, tissues and hand sanitiser',pl:'Przekąski, chusteczki i środek do dezynfekcji rąk',why:'Keep frequently used items easy to reach.'},
{en:'Passport copy, emergency contact and phone',pl:'Kopia paszportu, kontakt alarmowy i telefon',why:'Protect documents and electronics from rain.'}
];
const main:Item[]=[
{en:'Broken-in waterproof hiking boots',pl:'Rozchodzone wodoodporne buty trekkingowe',why:'Wear suitable boots while hiking; pack camp shoes separately.'},
{en:'Thermal base layers and hiking clothes',pl:'Bielizna termiczna i ubrania trekkingowe',why:'Use a layering system for different temperatures.'},
{en:'Insulated jacket and warm trousers',pl:'Kurtka ocieplana i ciepłe spodnie',why:'Summit conditions can be extremely cold.'},
{en:'Sleeping bag suitable for the expected temperatures',pl:'Śpiwór dostosowany do przewidywanych temperatur',why:'Confirm the sleeping arrangements and rating with your operator.'},
{en:'Spare socks, underwear and camp shoes',pl:'Zapasowe skarpety, bielizna i obuwie obozowe',why:'Keep spare clothes dry in waterproof bags.'},
{en:'Toiletries and personal hygiene supplies',pl:'Przybory toaletowe i środki higieny',why:'Choose compact, leakproof containers.'},
{en:'Waterproof dry bags and a suitable duffel',pl:'Wodoszczelne worki i odpowiednia torba wyprawowa',why:'Check the operator’s luggage and porter-weight limits.'}
];
const grammar:Record<Level,{title:string;examples:{en:string;pl:string;note:string}[]}>={
B1:{title:'B1 · Polecenia i podstawowe rady',examples:[{en:'Pack a waterproof jacket.',pl:'Spakuj kurtkę przeciwdeszczową.',note:'Imperative: czasownik w formie podstawowej.'},{en:'You should bring warm gloves.',pl:'Powinieneś/powinnaś zabrać ciepłe rękawiczki.',note:'Should + bezokolicznik bez to: rada.'},{en:'Do not forget your headlamp.',pl:'Nie zapomnij czołówki.',note:'Do not + czasownik: zakaz lub ostrzeżenie.'}]},
B2:{title:'B2 · Konieczność, warunek i cel',examples:[{en:'You must keep essential items in your daypack.',pl:'Najpotrzebniejsze rzeczy musisz trzymać w plecaku dziennym.',note:'Must wyraża silną konieczność.'},{en:'If the weather changes, put on your waterproof layer.',pl:'Jeśli pogoda się zmieni, załóż warstwę przeciwdeszczową.',note:'First Conditional: if + Present Simple, tryb rozkazujący.'},{en:'Use dry bags to keep your clothes dry.',pl:'Używaj worków wodoszczelnych, aby ubrania pozostały suche.',note:'To + bezokolicznik wyraża cel.'}]},
C1:{title:'C1 · Precyzyjne instrukcje i uzasadnienia',examples:[{en:'Ensure that essential equipment remains accessible throughout the ascent.',pl:'Zadbaj, aby niezbędny sprzęt pozostawał dostępny przez całe podejście.',note:'Ensure that + zdanie podrzędne: formalna instrukcja.'},{en:'Given the possibility of sudden weather changes, a reliable layering system is advisable.',pl:'Ze względu na możliwość nagłych zmian pogody zaleca się niezawodny system warstwowy.',note:'Given + rzeczownik: wyrażenie przyczyny.'},{en:'Equipment requirements should be confirmed with the licensed tour operator before departure.',pl:'Wymagania sprzętowe należy potwierdzić u uprawnionego organizatora przed wyjazdem.',note:'Modal Passive: should be + past participle.'}]}
};
const questions=[{q:'Where should you keep your waterproof jacket during the hike?',opts:['In your daypack','Only in the main duffel','At home'],correct:0,why:'A rain layer should be easily accessible.'},{q:'What does “You should bring gloves” express?',opts:['A past event','Advice','A completed action'],correct:1,why:'Should + verb expresses advice.'},{q:'Which phrase expresses purpose?',opts:['To keep your clothes dry','Because the clothes were wet','Although it was cold'],correct:0,why:'To + infinitive often explains why you do something.'}];
export default function Kilimanjaro(){
const [level,setLevel]=useState<Level>('B1');
const [translation,setTranslation]=useState(true);
const [checked,setChecked]=useState<Record<string,boolean>>({});
const [answers,setAnswers]=useState<Record<number,number>>({});
const [showKeys,setShowKeys]=useState(false);
const total=day.length+main.length;
const count=Object.values(checked).filter(Boolean).length;
function list(items:Item[],prefix:string){return <div className="stack">{items.map((item,i)=><label key={prefix+i} className="feedback" style={{display:'flex',gap:12,alignItems:'flex-start'}}><input type="checkbox" checked={!!checked[prefix+i]} onChange={e=>setChecked(prev=>({...prev,[prefix+i]:e.target.checked}))} style={{marginTop:6}}/><span><strong lang="en">{item.en}</strong>{translation&&<span style={{display:'block'}}>{item.pl}</span>}<small className="muted" lang="en">{item.why}</small></span></label>)}</div>}
return <div className="stack">
<p><Link href="/creative">← Creative English</Link></p>
<section className="hero stack"><span className="badge">Travel English · B1–C1</span><h1>🎒 Packing for Kilimanjaro</h1><p>Autorski samouczek: co zabrać na wyprawę, jak czytać listę sprzętu po angielsku i jak formułować instrukcje.</p><p className="hint">To edukacyjna lista przykładowa, a nie kompletna lista bezpieczeństwa dla konkretnej wyprawy. Sprzęt, limity bagażu, trasa i warunki zależą od organizatora, pory roku i pogody.</p></section>
<section className="panel stack"><div className="row"><label>Poziom językowy <select className="field" value={level} onChange={e=>setLevel(e.target.value as Level)}><option>B1</option><option>B2</option><option>C1</option></select></label><label><input type="checkbox" checked={translation} onChange={e=>setTranslation(e.target.checked)}/> Pokaż tłumaczenie</label></div>
<div className="feedback"><p lang="en"><strong>Read:</strong> On Kilimanjaro, hikers usually carry a daypack with items they may need during the walk. Other equipment is often transported separately according to the tour operator’s arrangements. Pack warm layers, rain protection and essential supplies where you can reach them.</p>{translation&&<p><strong>Przetłumaczono:</strong> Na Kilimandżaro uczestnicy zwykle niosą plecak dzienny z rzeczami potrzebnymi podczas marszu. Pozostały sprzęt jest często transportowany oddzielnie zgodnie z organizacją wyprawy. Ciepłe warstwy, ochronę przed deszczem i najpotrzebniejsze przedmioty spakuj tak, aby mieć do nich dostęp.</p>}</div>
<div className="row"><strong>Lista kontrolna: {count}/{total}</strong><button className="btn secondary" onClick={()=>setChecked({})}>Wyczyść zaznaczenia</button></div><div className="progress"><div style={{width:(count/total*100)+'%'}}/></div></section>
<section className="panel stack"><h2>1. Daypack · Plecak dzienny</h2><p>Keep these items within easy reach. / Trzymaj te rzeczy pod ręką.</p>{list(day,'d')}</section>
<section className="panel stack"><h2>2. Main expedition bag · Bagaż główny</h2><p>Check the operator’s packing and porter requirements. / Sprawdź zasady pakowania i limity bagażu organizatora.</p>{list(main,'m')}</section>
<section className="panel stack"><h2>{grammar[level].title}</h2>{grammar[level].examples.map((x,i)=><div className="feedback" key={i}><strong lang="en">{x.en}</strong>{translation&&<p>{x.pl}</p>}<p className="hint">{x.note}</p></div>)}</section>
<section className="panel stack"><h2>Quick quiz · Sprawdź się</h2>{questions.map((q,i)=><div className="stack" key={i}><strong>{i+1}. {q.q}</strong>{q.opts.map((o,j)=><button key={j} className={'option'+(answers[i]===j?(j===q.correct?' correct':' wrong'):'')} onClick={()=>setAnswers(a=>({...a,[i]:j}))}>{o}</button>)}{answers[i]!==undefined&&<p className="hint">{answers[i]===q.correct?'✓ Correct! ':'Try again. '}{q.why}</p>}</div>)}<p><strong>Wynik: {questions.filter((q,i)=>answers[i]===q.correct).length}/{questions.length}</strong></p><button className="btn secondary" onClick={()=>setAnswers({})}>Powtórz quiz</button></section>
<section className="panel stack"><h2>Writing challenge · B1–C1</h2><p lang="en">Write packing advice for a friend preparing for a Kilimanjaro trek. Explain which items belong in the daypack, which go in the main bag, and why. Use at least three instructions and two reasons.</p><button className="btn secondary" onClick={()=>setShowKeys(v=>!v)}>{showKeys?'Ukryj':'Pokaż'} przydatne zwroty</button>{showKeys&&<div className="feedback">First, pack… · Make sure you… · You should… · In case of rain… · It is essential to… · Before departure, confirm…</div>}<p>Przygotuj własną instrukcję i przećwicz ją w <Link href="/writing" style={{textDecoration:'underline'}}>Writing</Link>. Obecnie to osobne zadanie — automatyczne przekazywanie treści do analizy będzie kolejnym etapem.</p></section>
<section className="panel stack"><h2>Safety note · Ważne przed prawdziwą wyprawą</h2><p>Kilimandżaro ma wysokość 5895 m. Ryzyko choroby wysokościowej dotyczy także sprawnych osób. Przed wyjazdem omów aklimatyzację, trasę, ubezpieczenie, stan zdrowia i ewentualne leki z odpowiednimi specjalistami oraz organizatorem. Sama lista sprzętu nie zastępuje przygotowania do wyprawy.</p></section>
</div>;
}
