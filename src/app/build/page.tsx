"use client";
import {useMemo,useState} from "react";
import {Sidebar} from "@/components/Sidebar";
import {MapPin,Mic2,Camera,Video,Sparkles,CakeSlice,Lightbulb,Flower2,RefreshCw,Check,X,Users,TreePine,Building2,Heart} from "lucide-react";

const BUDGET=2500000;
const fixed=[["Ведущий","Современный · без конкурсов",170000,Mic2],["Фотограф","Editorial + репортаж",150000,Camera],["Видео","Киношный highlight",130000,Video],["Reels-maker","Контент в день свадьбы",50000,Sparkles],["Декор","Ткани · минимализм",390000,Flower2],["Свет и звук","Полный комплект",320000,Lightbulb],["Торт","Минималистичный",30000,CakeSlice]] as const;
const venues=[
 {id:1,name:"Forest Glass House",kind:"Загородная площадка",place:"25 км от Москвы",capacity:"до 80",price:620000,tone:"forest",photo:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",tags:["панорамные окна","лес","церемония на улице"],Icon:TreePine},
 {id:2,name:"White Manor",kind:"Усадьба",place:"Москва",capacity:"до 100",price:760000,tone:"manor",photo:"https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=85",tags:["светлый зал","терраса","размещение"],Icon:Building2},
 {id:3,name:"Lake Pavilion",kind:"Павильон у воды",place:"35 км от Москвы",capacity:"до 70",price:540000,tone:"lake",photo:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",tags:["вода","закат","современная архитектура"],Icon:Sparkles},
 {id:4,name:"Loft Garden",kind:"Городская площадка",place:"Москва",capacity:"до 90",price:430000,tone:"loft",photo:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",tags:["лофт","сад","центр"],Icon:Building2}
];

export default function Build(){
 const [mode,setMode]=useState("Balanced"); const [show,setShow]=useState(false); const [venueId,setVenueId]=useState(1);
 const venue=venues.find(v=>v.id===venueId)!;
 const fixedTotal=fixed.reduce((s,x)=>s+x[2],0); const selected=venue.price+fixedTotal; const remaining=BUDGET-selected;
 const pct=Math.round(venue.price/BUDGET*100);
 const reservePct=Math.max(0,100-pct-42);
 const money=(n:number)=>n.toLocaleString("ru-RU")+" ₽";
 const advice=useMemo(()=>remaining>=600000?"Есть запас: можно усилить декор, площадку или entertainment.":remaining>=300000?"Сборка сбалансирована — остаётся комфортный резерв.":"Резерв небольшой. WEDLY предложит более доступные замены.",[remaining]);
 return <div className="app"><Sidebar/><main className="marketMain">
 <header className="buildHead"><div><span className="eyebrow">ВАША СБОРКА</span><h1>Москва · 60 гостей</h1><p>Бюджет {money(BUDGET)} · июль 2027</p></div><div className={"remaining "+(remaining<300000?"low":"")}><small>Свободно в бюджете</small><b>{money(remaining)}</b></div></header>
 <div className="modes">{["Balanced","Venue first","Wow effect"].map(x=><button key={x} className={mode===x?"selected":""} onClick={()=>setMode(x)}>{x}</button>)}</div>
 <section className="allocation"><div className="allocationTop"><div><span className="eyebrow">РАСПРЕДЕЛЕНИЕ</span><h2>{mode}</h2></div><b>{money(selected)} <small>выбрано</small></b></div><div className="allocationBar dynamic"><i style={{width:pct+"%"}}/><i style={{width:"20%"}}/><i style={{width:"16%"}}/><i style={{width:"13%"}}/><i style={{width:reservePct+"%"}}/></div><div className="legend"><span>Площадка {Math.round(venue.price/1000)}k</span><span>Команда 500k</span><span>Декор 390k</span><span>Техника 320k</span><span>Резерв {Math.round(remaining/1000)}k</span></div><div className="budgetAdvice"><Sparkles/><span>{advice}</span></div></section>
 <h2 className="chooseTitle">Соберите свадьбу</h2><section className="categoryList">
 <article className="category featuredCategory"><div className="categoryNo">01</div><div className={"categoryIcon venueMini "+venue.tone}><venue.Icon/></div><div className="categoryText"><small>Площадка · выбрано</small><h3>{venue.name}</h3><span>{venue.kind} · {money(venue.price)}</span></div><button onClick={()=>setShow(true)}><RefreshCw/> Заменить</button></article>
 {fixed.map(([name,desc,price,Icon],i)=><article className="category" key={name}><div className="categoryNo">{String(i+2).padStart(2,"0")}</div><div className="categoryIcon"><Icon/></div><div className="categoryText"><small>{name}</small><h3>{desc}</h3><span>{money(price)}</span></div><button><RefreshCw/> Смотреть варианты</button></article>)}</section>
 {show&&<div className="venueOverlay" onClick={()=>setShow(false)}><section className="venueDrawer" onClick={e=>e.stopPropagation()}><header><div><span className="eyebrow">ПЛОЩАДКИ · DEMO DATA</span><h2>Выберите место</h2><p>Подходят под 60 гостей и ваш бюджет. Цены сейчас демонстрационные.</p></div><button className="close" onClick={()=>setShow(false)}><X/></button></header><div className="venueGrid">{venues.map(v=><article className={"venueCard "+(v.id===venueId?"chosen":"")} key={v.id}><div className={"venueVisual "+v.tone} style={{backgroundImage:`linear-gradient(180deg,rgba(20,18,15,.04),rgba(20,18,15,.34)),url("${v.photo}")`}}><Heart className="heart"/><span>{v.kind}</span></div><div className="venueBody"><div className="venueMeta"><span><MapPin/> {v.place}</span><span><Users/> {v.capacity}</span></div><h3>{v.name}</h3><div className="tags">{v.tags.map(t=><span key={t}>{t}</span>)}</div><footer><b>от {money(v.price)}</b><button onClick={()=>{setVenueId(v.id);setShow(false)}}>{v.id===venueId?<><Check/> Выбрано</>:"Выбрать"}</button></footer></div></article>)}</div></section></div>}
 </main></div>
}