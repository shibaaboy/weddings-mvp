import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { CalendarDays, ChevronRight, CircleAlert, Users, WalletCards, Armchair, Wine, HeartPulse, Store } from "lucide-react";

export default function Home(){return <div className="app"><Sidebar/><main>
<section className="controlHero"><div><span className="eyebrow">WEDDING CONTROL CENTER</span><h1>Алексей & Софья</h1><p>08 июля 2027 · Roka Park Collection</p></div><div className="readiness"><div className="ring"><b>68%</b></div><div><span>Готовность свадьбы</span><small>Хороший темп · 274 дня впереди</small></div></div><div className="date"><CalendarDays/>274 дня</div></section>

<section className="controlGrid">
<Link href="/guests" className="controlCard"><div className="cardTitle"><Users/><span>RSVP</span><em>90%</em></div><strong>57 <i>/ 63</i></strong><p>подтвердили участие</p><div className="progress"><span style={{width:"90%"}}/></div><footer><span className="dangerDot"/>6 гостей ждём <ChevronRight/></footer></Link>
<Link href="/seating" className="controlCard"><div className="cardTitle"><Armchair/><span>Рассадка</span><em>93%</em></div><strong>53 <i>/ 57</i></strong><p>гостей уже за столами</p><div className="progress"><span style={{width:"93%"}}/></div><footer><span className="dangerDot"/>4 без места <ChevronRight/></footer></Link>
<Link href="/budget" className="controlCard"><div className="cardTitle"><WalletCards/><span>Бюджет</span><em>74%</em></div><strong>1,84 млн ₽</strong><p>из 2,5 млн ₽ запланировано</p><div className="progress"><span style={{width:"74%"}}/></div><footer>Следующий платёж · 12 окт <ChevronRight/></footer></Link>
<Link href="/vendors" className="controlCard"><div className="cardTitle"><Store/><span>Подрядчики</span><em>8 / 10</em></div><strong>8</strong><p>подтверждено и в работе</p><div className="progress"><span style={{width:"80%"}}/></div><footer>2 категории ещё не закрыты <ChevronRight/></footer></Link>
</section>

<div className="grid two lower">
<article className="panel"><div className="sectionHead"><div><span className="eyebrow">ГОСТИ</span><h2>Что важно знать ресторану</h2></div><Link href="/guests">Все гости →</Link></div><div className="guestFacts"><div><HeartPulse/><b>3</b><span>аллергии</span></div><div><Wine/><b>27</b><span>белое вино</span></div><div><Wine/><b>18</b><span>красное</span></div><div><Wine/><b>11</b><span>виски</span></div></div><div className="exportHint">Данные собираются из RSVP автоматически <button>Выгрузить для ресторана</button></div></article>
<article className="panel"><div className="sectionHead"><div><span className="eyebrow">СЕЙЧАС</span><h2>Требует решения</h2></div></div><div className="decision"><CircleAlert/><div><b>6 гостей не ответили</b><span>RSVP · можно отправить напоминание</span></div><ChevronRight/></div><div className="decision"><CircleAlert/><div><b>4 гостя без рассадки</b><span>Рассадка · распределить по столам</span></div><ChevronRight/></div><div className="decision"><CircleAlert/><div><b>Оплата фотографу</b><span>150 000 ₽ · через 5 дней</span></div><ChevronRight/></div></article>
</div>
</main></div>}