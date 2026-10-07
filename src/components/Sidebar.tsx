"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gauge, Users, PanelsTopLeft, Armchair, WalletCards, Store, Sparkles } from "lucide-react";
const items=[["/","Обзор",Gauge],["/guests","Гости",Users],["/site","Приглашение",PanelsTopLeft],["/seating","Рассадка",Armchair],["/budget","Бюджет",WalletCards],["/vendors","Подрядчики",Store],["/planner","AI Planner",Sparkles]] as const;
export function Sidebar(){const p=usePathname();return <aside className="sidebar"><div className="brand">WEDLY</div><nav>{items.map(([href,label,Icon])=><Link key={href} href={href} className={p===href?"active":""}><Icon size={17}/><span>{label}</span></Link>)}</nav><div className="couple"><div className="avatar">А&С</div><div><b>Алексей & Софья</b><small>08 июля 2027</small></div></div></aside>}