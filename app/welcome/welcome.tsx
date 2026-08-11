import { Link } from 'react-router';

import type { Route } from "./+types/welcome";
import './welcome.css';

import Menu from '../menu/menu';
import strings from '../resources/strings';
import nikkeiBg from '../resources/nikkei-twilight-bg.png';
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
  return defaultMeta();
}

export default function Welcome() {
  return (
    <main className="relative w-screen h-screen overflow-hidden select-none">
      {/* Makoto Shinkai Anime Twilight Sky Background */}
      <img
        src={nikkeiBg}
        alt="Be Able To Cultivate Twilight Festival"
        className="absolute w-full h-full object-cover object-center animate-twilight-bg scale-105"
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-background/60 pointer-events-none" />

      {/* Top Right Instagram Pill with Japanese subtitle */}
      <div className="absolute right-6 top-8 z-30 text-right opacity-0 animate-fade-up">
        <a
          href="https://www.instagram.com/be.able.to.cultivate/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full font-maru text-xs md:text-sm text-primary-variant hover:text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-primary/40 active:scale-95 cursor-pointer shadow-lg"
        >
          <span className="text-secondary">✦</span>
          <span className="hidden sm:inline opacity-70">官方 IG</span>
          <span>{strings.cultivateInstagram}</span>
        </a>
      </div>

      {/* Hero Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-16 lg:pl-24 max-w-5xl z-10 pointer-events-none">
        {/* Festival Badge */}
        <div className="opacity-0 animate-fade-up mb-3 pointer-events-auto">
          <div className="jp-badge">
            <span>✦</span>
            <span>{strings.eventDate}</span>
            <span>•</span>
            <span>{strings.eventVenue}</span>
            <span>✦</span>
          </div>
        </div>

        {/* Title & Subtitles */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-xs md:text-sm font-maru text-primary-variant/90 uppercase mb-1 flex flex-col md:flex-row items-center md:gap-2">
            <span className="tracking-[0.3em]">{strings.eventJpName}</span>
            <span className="hidden md:inline opacity-60">//</span>
            <span className="tracking-[0.25em] text-[11px] md:text-sm opacity-80 md:opacity-100 mt-0.5 md:mt-0">INDIE LIVE FESTIVAL</span>
          </div>
          <h1 className="title-animated text-7xl md:text-9xl tracking-tight font-title opacity-0 drop-shadow-2xl">
            {strings.eventName}
          </h1>
          <h3 className="text-xl md:text-3xl tracking-[0.2em] text-primary-variant font-maru font-bold opacity-0 animate-fade-up-delay-1 mt-2 drop-shadow uppercase">
            {strings.eventEngName}
          </h3>
          <p className="text-base md:text-xl font-maru text-text-main/90 tracking-[0.2em] font-medium opacity-0 animate-fade-up-delay-1 mt-3 drop-shadow-md">
            {strings.eventTagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 opacity-0 animate-fade-up-delay-2 pointer-events-auto">
          <Link to="/program">
            <button
              className="bg-gradient-to-r from-primary to-secondary text-white font-maru rounded-full text-lg md:text-xl px-8 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 glow-primary cursor-pointer font-bold tracking-wider flex items-center gap-2"
            >
              <span>{strings.readProgram}</span>
              <span className="text-xs opacity-80 font-normal">/ TIMETABLE</span>
              <span className="text-base">→</span>
            </button>
          </Link>
          <Link to="/information">
            <button
              className="glass-card text-text-main font-maru rounded-full text-lg md:text-xl px-8 py-3.5 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 hover:border-primary-variant/50 cursor-pointer font-bold tracking-wider flex items-center gap-2"
            >
              <span>{strings.readInformation}</span>
              <span className="text-xs text-text-muted font-normal">/ INFO</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Credit */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20 pointer-events-none opacity-0 animate-fade-up-delay-2">
        <p className="text-xs font-maru text-text-muted/80 tracking-wider">
          Made with 🤍 by Elise
        </p>
      </div>

      <Menu />
    </main>
  );
}


