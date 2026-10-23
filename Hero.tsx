"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-visual">
        <Image src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=2200&q=90" alt="Still blue water in a modern swimming pool" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
            <div className="eyebrow eyebrow-light"><span /> Thoughtful technology. Everyday wellbeing.</div>
            <h1>Smarter Water.<br /><em>Better</em> Environments.</h1>
            <p>We bring water, wellness and atmosphere together through considered technical solutions for the spaces where life happens.</p>
            <Link href="#solutions" className="button button-aqua">Explore our solutions <ArrowUpRight size={17} /></Link>
          </motion.div>
          <div className="hero-note"><Sparkles size={17} /><span>Engineered for a better<br />everyday experience</span></div>
          <a className="scroll-cue" href="#solutions" aria-label="Scroll to our solutions"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-index"><span>01</span><i /> 03</div>
      </div>
    </section>
  );
}
