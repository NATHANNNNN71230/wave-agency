"use client";
import { useEffect } from "react";
export default function SplashCursor(){
  useEffect(()=>{
    if (typeof window === "undefined") return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas');
    c.className = 'pointer-events-none fixed inset-0 z-50';
    const ctx = c.getContext('2d')!; document.body.appendChild(c);
    let raf:number; let w=0,h=0; const resize=()=>{w= c.width = innerWidth; h= c.height = innerHeight;}; resize();
    addEventListener('resize', resize);
    const dots: {x:number;y:number;a:number}[] = [];
    const onMove = (e:MouseEvent)=>{dots.push({x:e.clientX,y:e.clientY,a:1});};
    addEventListener('mousemove', onMove);
    const loop=()=>{raf=requestAnimationFrame(loop); ctx.clearRect(0,0,w,h); dots.forEach(d=>{d.a*=0.94; ctx.globalAlpha=d.a; ctx.beginPath(); ctx.arc(d.x,d.y, 32*(1-d.a), 0, Math.PI*2); ctx.fillStyle='#7c3eff'; ctx.fill();}); for(let i=dots.length-1;i>=0;i--) if(dots[i].a<.05) dots.splice(i,1)}; loop();
    return ()=>{cancelAnimationFrame(raf); removeEventListener('mousemove', onMove); removeEventListener('resize', resize); c.remove();};
  },[]);
  return null;
}
