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
        alt="Cultivate Twilight Festival"
        className="absolute w-full h-full object-cover object-center animate-twilight-bg scale-105"
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-background/60 pointer-events-none" />

      {/* Top Right Instagram Pill with Japanese subtitle */}
      <div className="absolute right-6 top-8 z-10 text-right opacity-0 animate-fade-up">
        <a
          href="https://www.instagram.com/be.able.to.cultivate/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-4 py-2 rounded-full font-maru text-xs md:text-sm text-primary-variant hover:text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-primary/40"
        >
          <span className="text-secondary">✦</span>
          <span className="hidden sm:inline opacity-70">公式 IG</span>
          <span>{strings.cultivateInstagram}</span>
        </a>
      </div>

      {/* Japanese Vertical Poetic Tagline (Desktop) */}
      <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 z-10 opacity-0 animate-fade-up-delay-1 pointer-events-none">
        <div className="writing-vertical text-primary-variant/75 text-sm tracking-[0.35em] font-serif border-r border-primary-variant/25 pr-3 py-4">
          {strings.eventTagline}
        </div>
      </div>

      {/* Hero Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-16 lg:pl-24 max-w-5xl z-10">
        {/* Japanese Festival Badge */}
        <div className="opacity-0 animate-fade-up mb-3">
          <div className="jp-badge">
            <span>✦</span>
            <span>{strings.eventDate}</span>
            <span>•</span>
            <span>{strings.eventVenue}</span>
            <span>✦</span>
          </div>
        </div>

        {/* Title & Japanese Subtitles */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xs md:text-sm tracking-[0.3em] font-maru text-primary-variant/90 uppercase mb-1">
            {strings.eventJpName} // INDIE LIVE FESTIVAL
          </div>
          <h1 className="text-7xl md:text-9xl tracking-tight text-gradient-sunset font-title opacity-0 animate-fade-up drop-shadow-2xl">
            {strings.eventName}
          </h1>
          <h3 className="text-xl md:text-3xl tracking-[0.25em] text-primary-variant font-maru font-bold opacity-0 animate-fade-up-delay-1 mt-2 drop-shadow">
            {strings.eventEngFullName}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 opacity-0 animate-fade-up-delay-2">
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

      <Menu />
    </main>
  );
}


