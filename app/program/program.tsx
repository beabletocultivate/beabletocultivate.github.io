import { useState, useEffect } from 'react';
import type { Route } from './+types/program';
import './program.css';

import Footer from '../footer/footer';
import Menu from '../menu/menu';
import bassIcon from '../resources/bass.png';
import strings from '../resources/strings';
import nikkeiSky from '../resources/nikkei-sky-clean.png';
import songsJson from '../resources/songs.json';
import { getInstagramUrl, getInstagramHandle } from '../resources/socials';
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
    onSelectSong: (songInfo: { song: any; index: number }) => void;
}) {
    const { performerName, onClose, onSelectSong } = props;
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 180);
    };

    // Handle Escape key to close modal
    useEffect(() => {
        if (!performerName) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [performerName]);

    // Lock background body scroll when modal is open
    useEffect(() => {
        if (!performerName) return;
        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
        };
    }, [performerName]);

    if (!performerName) return null;

    const instagramUrl = getInstagramUrl(performerName);
    const instagramHandle = getInstagramHandle(performerName);

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
            className={`fixed inset-0 z-50 bg-background-dark/85 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden touch-none ${isClosing ? 'backdrop-fade-out pointer-events-none' : 'animate-fade-up'}`}
        >
            <div
                className={`glass-panel w-full max-w-lg rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl relative flex flex-col max-h-[85vh] overflow-hidden touch-auto overscroll-contain ${isClosing ? 'modal-scale-out' : 'modal-scale-in'}`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
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
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>@{instagramHandle}</span>
                        </a>
                    )}
                </div>

                {/* Festival Track Lineup */}
                <div className="flex-1 overflow-y-auto pr-1 my-4 space-y-2.5 overscroll-contain touch-pan-y">
                    <div className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase mb-2 px-1">
                        ✦ FESTIVAL LINEUP // 出演曲目
                    </div>
                    {performerTracks.map((track) => (
                        <div
                            key={track.trackNumber}
                            onClick={() => {
                                const songIndex = track.trackNumber - 1;
                                const targetSong = songsJson[songIndex];
                                if (targetSong) {
                                    handleClose();
                                    setTimeout(() => {
                                        onSelectSong({ song: targetSong, index: songIndex });
                                    }, 180);
                                }
                            }}
                            className="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-3 border border-white/10 hover:border-primary/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-200 cursor-pointer group"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="text-lg md:text-xl font-maru font-bold text-gradient-sunset min-w-[1.75rem] text-center flex-shrink-0">
                                    {String(track.trackNumber).padStart(2, '0')}
                                </span>
                                <div className="min-w-0">
                                    <h4 className="font-maru font-bold text-white text-sm md:text-base truncate group-hover:text-primary-variant transition-colors">
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

                            <div className="flex items-center gap-2 flex-shrink-0">
                                <div className="flex flex-wrap gap-1">
                                    {track.roles.map((r, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-maru bg-background-dark/90 text-primary-variant px-2.5 py-1 rounded-full border border-white/10"
                                        >
                                            {positionToDisplay(r)}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-xs text-text-muted group-hover:text-primary-variant group-hover:translate-x-0.5 transition-all opacity-70">
                                    ›
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SongModal(props: {
    selectedSong: {
        song: {
            name: string;
            translatedName?: string;
            artist: string;
            genre?: string;
            bandName?: string;
            description?: string;
            performers: string[][];
        };
        index: number;
    } | null;
    totalSongs: number;
    onClose: () => void;
    onNavigate: (newIndex: number) => void;
    onSelectPerformer: (name: string) => void;
}) {
    const { selectedSong, totalSongs, onClose, onNavigate, onSelectPerformer } = props;
    const [direction, setDirection] = useState<'right' | 'left'>('right');
    const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 180);
    };

    const handleNavigate = (newIndex: number) => {
        if (!selectedSong) return;
        setDirection(newIndex > selectedSong.index ? 'right' : 'left');
        onNavigate(newIndex);
    };

    // Handle Keyboard events (Escape to close, ArrowLeft/Right to flip songs)
    useEffect(() => {
        if (!selectedSong) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            } else if (e.key === 'ArrowLeft') {
                if (selectedSong.index > 0) {
                    handleNavigate(selectedSong.index - 1);
                }
            } else if (e.key === 'ArrowRight') {
                if (selectedSong.index < totalSongs - 1) {
                    handleNavigate(selectedSong.index + 1);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedSong, totalSongs]);

    // Lock background body and HTML scroll when modal is open
    useEffect(() => {
        if (!selectedSong) return;
        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
        };
    }, [selectedSong]);

    if (!selectedSong) return null;

    const { song, index } = selectedSong;
    const badgeText = song.genre || song.bandName;
    const description = song.description;
    const hasPrev = index > 0;
    const hasNext = index < totalSongs - 1;

    // Mobile touch swipe gesture handlers (smart axis detection)
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartPos({
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY,
        });
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStartPos) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartPos.x - touchEndX;
        const diffY = touchStartPos.y - touchEndY;

        // Trigger horizontal swipe ONLY if the swipe is predominantly horizontal
        if (Math.abs(diffX) > Math.abs(diffY) * 1.3 && Math.abs(diffX) > 40) {
            if (diffX > 0 && hasNext) {
                handleNavigate(index + 1); // Swiped left -> next song
            } else if (diffX < 0 && hasPrev) {
                handleNavigate(index - 1); // Swiped right -> prev song
            }
        }
        setTouchStartPos(null);
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-background-dark/85 backdrop-blur-md flex flex-col items-center justify-center p-3 pb-20 md:p-4 md:pb-24 overflow-hidden touch-none ${isClosing ? 'backdrop-fade-out pointer-events-none' : 'animate-fade-up'}`}
        >
            {/* Modal Dialog Card */}
            <div
                className={`glass-panel w-full max-w-lg rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl relative flex flex-col max-h-[72vh] md:max-h-[78vh] overflow-hidden select-none touch-auto overscroll-contain ${isClosing ? 'modal-scale-out' : 'modal-scale-in'}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    aria-label="Close modal"
                    className="absolute top-5 right-5 w-9 h-9 rounded-full glass-card flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 transition-all duration-200 cursor-pointer z-10"
                >
                    ✕
                </button>

                {/* Animated Directional Slide Track Content Container */}
                <div
                    key={index}
                    className={`${direction === 'left' ? 'track-slide-from-left' : 'track-slide-from-right'} flex flex-col flex-1 overflow-hidden`}
                >
                    {/* Song Header */}
                    <div className="flex flex-col items-start pt-2 pb-4 border-b border-white/10 pr-10">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="text-xs font-mono text-primary-variant font-bold tracking-widest uppercase bg-primary-variant/15 border border-primary-variant/30 px-2.5 py-0.5 rounded-full">
                                TRACK {String(index + 1).padStart(2, '0')}
                            </span>
                            {badgeText && (
                                <span className="text-xs font-maru font-semibold text-white bg-gradient-to-r from-secondary to-primary px-3 py-0.5 rounded-full shadow-sm">
                                    ✦ {badgeText}
                                </span>
                            )}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-title text-gradient-sunset tracking-wide">
                            {song.name}
                        </h2>
                        {song.translatedName && (
                            <p className="text-sm text-text-muted font-maru mt-0.5">
                                （{song.translatedName}）
                            </p>
                        )}
                        <p className="text-sm md:text-base text-primary-variant font-maru font-medium mt-1">
                            原唱：{song.artist}
                        </p>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto pr-1 my-4 space-y-5 overscroll-contain touch-pan-y">
                        {/* Song Description */}
                        <div>
                            <div className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase mb-2 px-1">
                                ✦ SONG STORY // 曲目簡介
                            </div>
                            <div className="glass-card rounded-2xl p-4 md:p-5 border border-white/10 text-sm md:text-base text-text-main font-maru leading-relaxed bg-background-dark/70">
                                {description || "這首歌曲將在 2026 耕云祭 4.0 現場帶來充滿感染力的樂團演出，敬請期待！"}
                            </div>
                        </div>

                        {/* Performer Lineup */}
                        <div>
                            <div className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase mb-2 px-1">
                                ✦ STAGE LINEUP // 演出人員
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                {Array.isArray(song.performers) &&
                                    song.performers.map(([position, name]) => (
                                        <Performer
                                            key={position + '-' + name}
                                            position={position}
                                            name={name}
                                            onSelect={(pName) => {
                                                handleClose();
                                                setTimeout(() => {
                                                    onSelectPerformer(pName);
                                                }, 180);
                                            }}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimalist Floating Track Navigator */}
            <div
                className={`fixed bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-1.5 rounded-full bg-[#0A0914]/85 backdrop-blur-xl border border-white/15 shadow-xl select-none z-50 ${isClosing ? 'backdrop-fade-out pointer-events-none' : 'animate-fade-up'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    disabled={!hasPrev}
                    onClick={() => hasPrev && handleNavigate(index - 1)}
                    aria-label="Previous track"
                    className={`w-7 h-7 flex items-center justify-center text-lg font-bold transition-all ${!hasPrev
                            ? "opacity-20 cursor-not-allowed text-white/30"
                            : "text-text-muted hover:text-white hover:scale-110 active:scale-90 cursor-pointer"
                        }`}
                >
                    ‹
                </button>

                <span className="text-xs font-mono tracking-widest text-text-muted font-medium min-w-[60px] text-center">
                    <span className="text-white font-bold">{index + 1}</span> / {totalSongs}
                </span>

                <button
                    type="button"
                    disabled={!hasNext}
                    onClick={() => hasNext && handleNavigate(index + 1)}
                    aria-label="Next track"
                    className={`w-7 h-7 flex items-center justify-center text-lg font-bold transition-all ${!hasNext
                            ? "opacity-20 cursor-not-allowed text-white/30"
                            : "text-text-muted hover:text-white hover:scale-110 active:scale-90 cursor-pointer"
                        }`}
                >
                    ›
                </button>
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
            onClick={(e) => {
                e.stopPropagation();
                onSelect(name);
            }}
            title={`點擊查看 ${name} 的出演曲目與個人檔案`}
            className="text-xs bg-background-dark/85 text-text-muted hover:text-white border border-white/10 hover:border-primary/60 hover:bg-background-dark rounded-full px-3 py-1 font-maru flex items-center gap-1.5 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer glow-hover relative z-10"
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
        description?: string;
        performers: string[][];
    };
    index: number;
    onSelectPerformer: (name: string) => void;
    onSelectSong: (item: { song: any; index: number }) => void;
}) {
    const { song, index, onSelectPerformer, onSelectSong } = props;
    const badgeText = song.genre || song.bandName;

    return (
        <div className="w-full mx-auto my-2.5">
            <div
                onClick={() => onSelectSong({ song, index })}
                title="點擊查看曲目簡介"
                className="song-card relative w-full rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 border border-white/10 hover:border-primary/45 hover:bg-background-card-hover/90 shadow-md cursor-pointer transition-all duration-200 group active:scale-[0.995]"
            >
                {/* Desktop Top-Right Genre Badge */}
                {badgeText && (
                    <div className="hidden md:block absolute top-5 right-6 z-10">
                        <span className="text-xs font-maru font-semibold text-white bg-gradient-to-r from-secondary to-primary group-hover:from-primary group-hover:to-secondary px-3.5 py-1 rounded-full shadow-sm inline-block transition-all duration-200">
                            ✦ {badgeText}
                        </span>
                    </div>
                )}

                {/* Song order & Mobile Genre Badge Header */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 w-full md:w-auto flex-shrink-0">
                    <div className="flex flex-col items-start md:items-center justify-center text-left md:text-center min-w-fit">
                        <span className="text-[10px] md:text-xs font-mono text-primary-variant/70 tracking-widest uppercase">TRACK</span>
                        <span className="text-3xl md:text-5xl font-maru font-bold text-gradient-sunset min-w-[2.5rem] md:w-14 text-left md:text-center group-hover:scale-105 transition-transform duration-200">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Mobile Genre Badge (Flows to right, and wraps to next row if space is constrained) */}
                    {badgeText && (
                        <div className="md:hidden z-10">
                            <span className="text-[11px] font-maru font-semibold text-white bg-gradient-to-r from-secondary to-primary group-hover:from-primary group-hover:to-secondary px-3 py-0.5 rounded-full shadow-sm inline-block transition-all duration-200">
                                ✦ {badgeText}
                            </span>
                        </div>
                    )}
                </div>

                {/* Song info */}
                <div className="flex-1 flex flex-col items-start min-w-0 pr-0 md:pr-28">
                    <div className="flex flex-wrap items-baseline gap-2 w-full">
                        <h2 className="text-xl md:text-2xl font-maru font-bold text-white tracking-wide group-hover:text-primary-variant transition-colors">
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

                    {/* Performers list */}
                    <div className="flex flex-wrap items-center gap-2 mt-3.5">
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
                <div className="w-full my-8 py-6 px-6 rounded-2xl glass-panel text-center border border-primary/35 glow-primary">
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
    const [selectedSong, setSelectedSong] = useState<{ song: any; index: number } | null>(null);

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
            <div className="relative z-10 page-container">
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
                            onSelectSong={(item) => setSelectedSong(item)}
                        />
                    ))}
                </div>

                {/* Japanese Footer Tag */}
                <Footer />
            </div>

            {/* Song Introduction Modal */}
            <SongModal
                selectedSong={selectedSong}
                totalSongs={songsJson.length}
                onClose={() => setSelectedSong(null)}
                onNavigate={(newIndex) => setSelectedSong({ song: songsJson[newIndex], index: newIndex })}
                onSelectPerformer={(name) => setSelectedPerformer(name)}
            />

            {/* Performer Profile & Lineup Modal */}
            <PerformerModal
                performerName={selectedPerformer}
                onClose={() => setSelectedPerformer(null)}
                onSelectSong={(item) => setSelectedSong(item)}
            />

            <Menu />
        </div>
    );
}



