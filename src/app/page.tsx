"use client";
import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { MapPin, CalendarDays, Users, WalletCards, ArrowRight, Sparkles } from "lucide-react";
export default function Home(){
 const [budget,setBudget]=useState(2500000);
 return <div className="app"><Sidebar/><main className="marketMain">
 <section className="marketHero"><span className="eyebrow">WEDLY · WEDDING BUILDER</span><h1>Соберите свадьбу,<br/><i>которая вам подходит.</i></h1><p>Задайте бюджет и параметры. Мы покажем, на что его реально хватит, и соберём подходящие варианты площадок и команды.</p></section>
 <section className="builder">
  <div className="builderField"><MapPin/><small>Где</small><b>Москва и область</b></div>
  <div className="builderField"><CalendarDays/><small>Когда</small><b>Июль 2027</b></div>
  <div className="builderField"><Users/><small>Гостей</small><b>60 человек</b></div>
  <div className="builderField budgetField"><WalletCards/><small>Бюджет</small><b>{budget.toLocaleString("ru-RU")} ₽</b></div>
  <Link href="/build" className="buildButton">Собрать свадьбу <ArrowRight/></Link>
 </section>
 <div className="budgetSlider"><input aria-label="Бюджет свадьбы" type="range" min="1000000" max="5000000" step="100000" value={budget} onChange={e=>setBudget(Number(e.target.value))}/><div><span>1 млн ₽</span><span>5 млн ₽</span></div></div>
 <section className="marketIntro"><span className="eyebrow">НЕ ПРОСТО КАТАЛОГ</span><h2>Меняйте одно —<br/>мы пересчитаем остальное.</h2><p>Выбрали площадку дороже? WEDLY покажет, где можно сохранить бюджет без потери общей картинки свадьбы.</p></section>
 <section className="scenarioGrid">
  <Link href="/build" className="scenario"><span>01</span><div><small>BALANCED</small><h3>Сбалансированная</h3><p>Сильная площадка, команда и декор без перекоса бюджета.</p></div><b>≈ 2,47 млн ₽</b></Link>
  <Link href="/build" className="scenario"><span>02</span><div><small>VENUE FIRST</small><h3>Ставка на площадку</h3><p>Больше бюджета на место и банкет, спокойнее остальные категории.</p></div><b>≈ 2,49 млн ₽</b></Link>
  <Link href="/build" className="scenario"><span>03</span><div><small>WOW EFFECT</small><h3>Визуал и атмосфера</h3><p>Больше на декор, свет и контент — меньше на аренду.</p></div><b>≈ 2,51 млн ₽</b></Link>
 </section>
 <div className="aiStrip"><Sparkles/><div><b>Можно просто описать свадьбу словами</b><span>«Хочу загородную площадку как Roka, много воздуха, без классического декора, до 2,5 млн»</span></div><button>Подобрать с AI</button></div>
 </main></div>
}