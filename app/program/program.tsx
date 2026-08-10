import { useState, useEffect } from 'react';
import type { Route } from './+types/program';
import './program.css';

import Menu from '../menu/menu';
import bassIcon from '../resources/bass.png';
import strings from '../resources/strings';
import nikkeiSky from '../resources/nikkei-sky-clean.png';
import songsJson from '../resources/songs.json';
import { getInstagramUrl, instagramHandles } from '../resources/socials';
import { defaultMeta } from "../meta";

const INTERMISSION_AFTER_SONG = 9;

export function meta({ }: Route.MetaArgs) {
  return defaultMeta();
}

function positionToDisplay(pos: string) {
    const p = pos.toLowerCase();
    switch (p) {
        case 'v':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Vocal">🎤</span>Vo.</span>;
        case 'eg':
        case 'gt':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Electric Guitar">🎸</span>Gt.</span>;
        case 'eg2':
        case 'gt2':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Guitar 2">🎸</span>Gt.2</span>;
        case 'ag':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Acoustic Guitar">🎸</span>AG</span>;
        case 'b':
        case 'bs':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><img src={bassIcon} alt="Bass" className="h-3.5 w-3.5 filter invert opacity-90 inline-block" />Ba.</span>;
        case 'd':
        case 'dr':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Drums">🥁</span>Dr.</span>;
        case 'kb':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Keyboard">🎹</span>Key.</span>;
        case 'cho':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Chorus">🎙️</span>Cho.</span>;
        case '二胡':
        case 'erhu':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="二胡">🎻</span>二胡</span>;
        case '非洲鼓':
        case 'djembe':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="非洲鼓">🪘</span>非洲鼓</span>;
        case 'special':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span title="Special">✦</span>Band</span>;
        case 'v/gt':
        case 'v/eg':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span>🎤🎸</span>Vo./Gt.</span>;
        case 'v/ag':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span>🎤🎸</span>Vo./AG</span>;
        case 'v/d':
        case 'v/dr':
            return <span key={pos} className="inline-flex items-center gap-1 font-mono text-[11px]"><span>🎤🥁</span>Vo./Dr.</span>;
        default:
            return <span key={pos} className="font-mono text-[11px]">{pos}</span>;
    }
}

function PerformerModal(props: {
    performerName: string | null;
    onClose: () => void;
}) {
    const { performerName, onClose } = props;

    // Handle Escape key to close modal
    useEffect(() => {
        if (!performerName) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [performerName, onClose]);

    if (!performerName) return null;

    const instagramUrl = getInstagramUrl(performerName);
    const rawHandle = instagramHandles[performerName]?.trim();

    // Find all tracks the performer plays in
    const performerTracks = songsJson.flatMap((song, index) => {
        const matchingRoles = song.performers?.filter(([_, pName]) => pName.toLowerCase() === performerName.toLowerCase());
        if (matchingRoles && matchingRoles.length > 0) {
            return [{
                trackNumber: index + 1,
                name: song.name,
                translatedName: song.translatedName,
                artist: song.artist,
                genre: (song as any).genre || (song as any).bandName,
                roles: matchingRoles.map(([r]) => r)
            }];
        }
        return [];
    });

    return (
        <div 
            className="fixed inset-0 z-50 bg-background-dark/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
            onClick={onClose}
        >
            <div 
                className="glass-panel modal-scale-in w-full max-w-lg rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl relative flex flex-col max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-5 right-5 w-9 h-9 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-all duration-200 cursor-pointer"
                >
                    ✕
                </button>

                {/* Performer Header */}
                <div className="flex flex-col items-center text-center pt-2 pb-4 border-b border-white/10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-purple p-0.5 shadow-lg mb-3">
                        <div className="w-full h-full rounded-full bg-background-dark flex items-center justify-center text-2xl font-title text-primary-variant">
                            {performerName.charAt(0)}
                        </div>
                    </div>
                    
                    <h2 className="text-3xl font-title text-gradient-sunset tracking-wide mb-1">
                        {performerName}
                    </h2>
                    
                    <div className="jp-badge mt-1">
                        <span>✦ 出演：全 {performerTracks.length} 曲 ✦</span>
                    </div>

                    {/* Instagram Link (Only rendered if configured) */}
                    {instagramUrl && (
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-maru font-bold text-sm py-2 px-5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span>@{rawHandle?.replace(/^@/, '') || performerName}</span>
                            <span className="text-xs">↗</span>
                        </a>
                    )}
                </div>

                {/* Festival Track Lineup */}
                <div className="flex-1 overflow-y-auto pr-1 my-4 space-y-2.5">
                    <div className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase mb-2 px-1">
                        ✦ FESTIVAL LINEUP // 出演曲目
                    </div>
                    {performerTracks.map((track) => (
                        <div 
                            key={track.trackNumber}
                            className="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-3 border border-white/10 hover:border-primary/40 transition-colors"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="text-lg md:text-xl font-maru font-bold text-gradient-sunset w-7 text-center flex-shrink-0">
                                    {String(track.trackNumber).padStart(2, '0')}
                                </span>
                                <div className="min-w-0">
                                    <h4 className="font-maru font-bold text-white text-sm md:text-base truncate">
                                        {track.name}
                                        {track.translatedName && (
                                            <span className="text-xs text-text-muted font-normal ml-1">
                                                （{track.translatedName}）
                                            </span>
                                        )}
                                    </h4>
                                    <p className="text-xs text-primary-variant/90 truncate">
                                        {track.artist} {track.genre && <>• <span className="text-text-muted">{track.genre}</span></>}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 flex-shrink-0">
                                {track.roles.map((r, i) => (
                                    <span 
                                        key={i} 
                                        className="text-xs font-maru bg-background-dark/90 text-primary-variant px-2.5 py-1 rounded-full border border-white/10"
                                    >
                                        {positionToDisplay(r)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Performer(props: {
    position: string;
    name: string;
    onSelect: (name: string) => void;
}) {
    const { position, name, onSelect } = props;

    return (
        <button
            type="button"
            onClick={() => onSelect(name)}
            title={`點擊查看 ${name} 的出演曲目與個人檔案`}
            className="text-xs bg-background-dark/85 text-text-muted hover:text-white border border-white/10 hover:border-primary/60 hover:bg-background-dark rounded-full px-3 py-1 font-maru flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer glow-hover"
        >
            <span className="text-primary-variant/90">{positionToDisplay(position)}</span>
            <span className="text-white/30">|</span>
            <span className="font-medium text-white/90">{name}</span>
        </button>
    );
}

function Song(props: {
    song: {
        name: string;
        translatedName?: string;
        artist: string;
        genre?: string;
        bandName?: string;
        performers: string[][];
    };
    index: number;
    onSelectPerformer: (name: string) => void;
}) {
    const { song, index, onSelectPerformer } = props;
    const badgeText = song.genre || song.bandName;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 my-2.5">
            <div className="song-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 border border-white/10 hover:border-primary/40 shadow-md">
                {/* Song order / Japanese Track Badge */}
                <div className="flex md:flex-col items-center justify-between md:justify-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase">TRACK</span>
                        <span className="text-4xl md:text-5xl font-maru font-bold text-gradient-sunset w-14 text-center">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    {badgeText && (
                        <span className="md:hidden text-xs text-text-subtle font-maru">
                            {badgeText}
                        </span>
                    )}
                </div>

                {/* Song info */}
                <div className="flex-1 flex flex-col items-start min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                        <h2 className="text-xl md:text-2xl font-maru font-bold text-white tracking-wide">
                            {song.name}
                        </h2>
                        {song.translatedName && (
                            <span className="text-sm md:text-base font-maru font-normal text-text-muted">
                                （{song.translatedName}）
                            </span>
                        )}
                    </div>
                    <p className="text-sm md:text-base text-primary-variant font-maru font-medium mt-0.5">
                        {song.artist}
                    </p>

                    {/* Genre & Performers */}
                    <div className="flex flex-wrap items-center gap-2 mt-3.5">
                        {/* Japanese Live House Genre / Style Badge */}
                        {badgeText && (
                            <span className="text-xs font-maru font-semibold text-white bg-gradient-to-r from-secondary to-primary px-3.5 py-1 rounded-full shadow-sm">
                                ✦ {badgeText}
                            </span>
                        )}

                        {/* Performer list */}
                        {Array.isArray(song.performers) &&
                            song.performers.map(([position, name]) => (
                                <Performer
                                    key={position + '-' + name}
                                    position={position}
                                    name={name}
                                    onSelect={onSelectPerformer}
                                />
                            ))}
                    </div>
                </div>
            </div>

            {/* Japanese Intermission Break Banner */}
            {index === INTERMISSION_AFTER_SONG && (
                <div className="my-8 py-6 px-6 rounded-2xl glass-panel text-center border border-primary/35 glow-primary">
                    <span className="text-xs uppercase tracking-[0.25em] text-primary-variant font-maru font-bold block mb-1">
                        ── ✦ 休憩 TIME ✦ ──
                    </span>
                    <h3 className="text-2xl md:text-3xl font-title text-gradient-sunset tracking-wider">
                        {strings.intermission}
                    </h3>
                    <p className="text-xs text-text-muted font-maru mt-1">
                        ドリンクを片手に、後半のステージをお楽しみに！
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Program() {
    const [selectedPerformer, setSelectedPerformer] = useState<string | null>(null);

    return (
        <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-text-main pb-24">
            {/* Japanese Anime Sky Atmosphere */}
            <div className="fixed inset-0 pointer-events-none transform-gpu">
                <img
                    src={nikkeiSky}
                    alt="Anime Twilight Sky"
                    className="w-full h-full object-cover opacity-35"
                    loading="eager"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-center">
                {/* Japanese Timetable Header */}
                <div className="text-center max-w-xl mb-8">
                    <div className="jp-badge mb-3">
                        <span>✦</span>
                        <span>TIMETABLE // タイムテーブル</span>
                        <span>✦</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-title tracking-tight text-gradient-sunset mb-2 drop-shadow">
                        {strings.program}
                    </h1>
                    <p className="text-sm md:text-base text-text-muted font-maru mt-2">
                        {strings.followUsOnInstagram}
                    </p>
                </div>

                {/* Song List */}
                <div className="w-full">
                    {songsJson.map((songInfo, index) => (
                        <Song 
                            key={index} 
                            song={songInfo} 
                            index={index} 
                            onSelectPerformer={(name) => setSelectedPerformer(name)}
                        />
                    ))}
                </div>

                {/* Japanese Footer Tag */}
                <div className="mt-16 text-center text-xs text-text-subtle font-maru">
                    <p>© {strings.eventYear} {strings.eventName} // {strings.eventJpName} • {strings.eventVenue}</p>
                </div>
            </div>

            {/* Performer Profile & Lineup Modal */}
            <PerformerModal
                performerName={selectedPerformer}
                onClose={() => setSelectedPerformer(null)}
            />

            <Menu />
        </div>
    );
}



