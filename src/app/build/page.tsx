"use client";
import {useMemo,useState} from "react";
import {Sidebar} from "@/components/Sidebar";
import {MapPin,Users,CalendarDays,WalletCards,Building2,Mic2,Camera,Video,Sparkles,Flower2,Lightbulb,CakeSlice,Heart,Check,ChevronRight,X,Search,SlidersHorizontal} from "lucide-react";

const money=(n:number)=>n.toLocaleString("ru-RU")+" ₽";
const categories=[
 {id:"venue",label:"Площадка",Icon:Building2,items:[
  {id:"roka",name:"Roka Park Collection",meta:"Балашиха · камерный формат",price:400000,img:"https://www.architime.ru/news/sukhaya/4.jpg",tags:["панорамные окна","проживание","природа"]},
  {id:"michetti",name:"Villa Michetti",meta:"Солнечногорск · 30–80 гостей",price:600000,img:"https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=85",tags:["усадьба","парк","у воды"]},
  {id:"forest",name:"Дом у Леса",meta:"Алабушево · до 45 гостей",price:719000,img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",tags:["лес","камерно","панорама"]}
 ]},
 {id:"host",label:"Ведущий",Icon:Mic2,items:[
  {id:"h1",name:"Александр · modern host",meta:"Интеллигентно · без конкурсов",price:170000,img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",tags:["modern","60 гостей","DJ set"]},
  {id:"h2",name:"Михаил · event host",meta:"Энергично · современно",price:145000,img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",tags:["party","импровизация","Москва"]}
 ]},
 {id:"photo",label:"Фотограф",Icon:Camera,items:[
  {id:"p1",name:"Editorial Stories",meta:"Editorial + репортаж",price:150000,img:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",tags:["плёнка","editorial","12 часов"]},
  {id:"p2",name:"Film & Feel",meta:"Живой репортаж · плёнка",price:125000,img:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",tags:["film","reportage","10 часов"]}
 ]},
 {id:"video",label:"Видео",Icon:Video,items:[
  {id:"v1",name:"Motion Wedding",meta:"Киношный highlight",price:130000,img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",tags:["highlight","reels","2 камеры"]},
  {id:"v2",name:"Daylight Films",meta:"Документальный стиль",price:110000,img:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85",tags:["documentary","teaser","10 часов"]}
 ]},
 {id:"decor",label:"Декор",Icon:Flower2,items:[
  {id:"d1",name:"Soft Architecture",meta:"Ткани · свет · минимализм",price:390000,img:"https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1000&q=85",tags:["текстиль","церемония","свечи"]},
  {id:"d2",name:"Air Studio",meta:"Воздушная архитектура",price:320000,img:"https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1000&q=85",tags:["минимализм","свет","монтаж"]}
 ]},
 {id:"tech",label:"Свет и звук",Icon:Lightbulb,items:[
  {id:"t1",name:"Full Production",meta:"Свет · звук · haze · команда",price:320000,img:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",tags:["wash","spot","hazer"]},
  {id:"t2",name:"Light Set",meta:"Компактный production",price:240000,img:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",tags:["свет","звук","команда"]}
 ]},
 {id:"cake",label:"Торт",Icon:CakeSlice,items:[
  {id:"c1",name:"Minimal Cake",meta:"3 яруса · современный",price:30000,img:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85",tags:["дегустация","доставка","декор"]},
  {id:"c2",name:"Sculptural Cake",meta:"Скульптурный · 4 яруса",price:45000,img:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=85",tags:["wow","доставка","эскиз"]}
 ]}
] as const;
type Pick={category:string,item:any};

export default function Build(){
 const budget=2500000; const [picks,setPicks]=useState<Pick[]>([
  {category:"venue",item:categories[0].items[0]},{category:"host",item:categories[1].items[0]},{category:"photo",item:categories[2].items[0]}
 ]);
 const [open,setOpen]=useState<any>(null); const [query,setQuery]=useState(""); const [liked,setLiked]=useState<string[]>([]);
 const total=picks.reduce((s,p)=>s+p.item.price,0); const left=budget-total; const progress=Math.round(picks.length/categories.length*100);
 const selected=(id:string)=>picks.find(p=>p.category===id)?.item;
 const choose=(category:string,item:any)=>{setPicks(v=>[...v.filter(x=>x.category!==category),{category,item}]);setOpen(null)};
 const ai=useMemo(()=>left>900000?"Есть хороший запас. Можно усилить декор и production или оставить резерв на банкет.":left>400000?"Сборка выглядит сбалансированно. Я бы сохранил минимум 300–400 тыс. ₽ резерва.":"Бюджет плотный — есть смысл посмотреть более лёгкую площадку или production.",[left]);
 return <div className="app"><Sidebar/><main className="mvp">
  <section className="mvpTop"><div><span className="eyebrow">WEDLY · YOUR WEDDING</span><h1>Собираем вашу<br/><i>идеальную свадьбу.</i></h1></div><div className="mvpBrief"><span><MapPin/> Москва и область</span><span><CalendarDays/> Июль 2027</span><span><Users/> 60 гостей</span><span><WalletCards/> {money(budget)}</span></div></section>
  <section className="mvpStats"><div><small>СОБРАНО</small><strong>{progress}%</strong><div className="progress"><i style={{width:progress+"%"}}/></div></div><div><small>ВЫБРАНО</small><strong>{money(total)}</strong><span>{picks.length} из {categories.length} категорий</span></div><div className={left<350000?"danger":""}><small>ОСТАЛОСЬ</small><strong>{money(left)}</strong><span>на остальные категории и резерв</span></div><div className="aiMini"><Sparkles/><p>{ai}</p></div></section>
  <section className="mvpSectionHead"><div><span className="eyebrow">КОНФИГУРАТОР</span><h2>Соберите команду</h2></div><button><SlidersHorizontal/> Настроить подбор</button></section>
  <section className="categoryRail">{categories.map((c,i)=>{const pick=selected(c.id);return <article className={"mvpCat "+(pick?"picked":"")} key={c.id} onClick={()=>setOpen(c)}><div className="catIndex">0{i+1}</div><div className="catIcon"><c.Icon/></div><div className="catCopy"><small>{c.label}</small>{pick?<><b>{pick.name}</b><span>{money(pick.price)}</span></>:<><b>Не выбрано</b><span>Посмотреть варианты</span></>}</div>{pick?<Check className="catCheck"/>:<ChevronRight className="catArrow"/>}</article>})}</section>
  <section className="mvpSectionHead discoverHead"><div><span className="eyebrow">ВАШИ ВАРИАНТЫ</span><h2>Подходит под ваш стиль</h2></div><div className="searchFake"><Search/> Москва · до 2,5 млн</div></section>
  <section className="editorialGrid">{categories.slice(0,4).map(c=>{const x=c.items[0];return <article className="editorialCard" key={c.id} onClick={()=>setOpen(c)}><div className="editorialPhoto" style={{backgroundImage:`linear-gradient(180deg,transparent 50%,rgba(20,18,15,.5)),url("${x.img}")`}}><button onClick={e=>{e.stopPropagation();setLiked(v=>v.includes(x.id)?v.filter(k=>k!==x.id):[...v,x.id])}}><Heart className={liked.includes(x.id)?"filled":""}/></button><span>{c.label}</span></div><div><small>{x.meta}</small><h3>{x.name}</h3><footer><b>от {money(x.price)}</b><span>Смотреть <ChevronRight/></span></footer></div></article>})}</section>
  <section className="mvpAi"><Sparkles/><div><span className="eyebrow">WEDLY AI</span><h2>«Сделай визуально дороже,<br/>но не выходи за 2,5 млн»</h2><p>AI пересоберёт категории и покажет, где деньги сильнее влияют на впечатление от свадьбы.</p></div><button>Пересобрать бюджет →</button></section>
  {open&&<div className="pickerOverlay" onClick={()=>setOpen(null)}><section className="picker" onClick={e=>e.stopPropagation()}><header><div><span className="eyebrow">{open.label}</span><h2>Выберите вариант</h2></div><button onClick={()=>setOpen(null)}><X/></button></header><div className="pickerSearch"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={"Поиск: "+open.label.toLowerCase()}/></div><div className="pickerGrid">{open.items.filter((x:any)=>x.name.toLowerCase().includes(query.toLowerCase())).map((x:any)=><article className="vendorCard" key={x.id}><div className="vendorPhoto" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(20,18,15,.25)),url("${x.img}")`}}><button onClick={()=>setLiked(v=>v.includes(x.id)?v.filter(k=>k!==x.id):[...v,x.id])}><Heart className={liked.includes(x.id)?"filled":""}/></button></div><div className="vendorBody"><small>{x.meta}</small><h3>{x.name}</h3><div className="vendorTags">{x.tags.map((t:string)=><span key={t}>{t}</span>)}</div><footer><b>{money(x.price)}</b><button onClick={()=>choose(open.id,x)}>{selected(open.id)?.id===x.id?<><Check/> Выбрано</>:"Добавить"}</button></footer></div></article>)}</div></section></div>}
 </main></div>
}