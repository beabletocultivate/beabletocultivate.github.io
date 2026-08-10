import type { Route } from './+types/program';
import './program.css';

import Menu from '../menu/menu';
import bassIcon from '../resources/bass.png';
import strings from '../resources/strings';
import nikkeiSky from '../resources/nikkei-sky-clean.png';
import songsJson from '../resources/songs.json';
import performersJson from '../resources/performers.json';
import { defaultMeta } from "../meta";

const INTERMISSION_AFTER_SONG = 10;

export function meta({ }: Route.MetaArgs) {
  return defaultMeta();
}

interface PerformerItem {
    id: string;
    name: string;
    link?: string;
}

const performersList = performersJson as PerformerItem[];

function Performer(props: {
    position: string,
    performerId: string
}) {
    function positionToDisplay(pos: string) {
        switch (pos) {
            case 'v':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span title="Vocal">🎤</span>Vo.</span>;
            case 'eg':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span title="Electric Guitar">🎸</span>Gt.</span>;
            case 'b':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><img src={bassIcon} alt="Bass" className="h-3.5 w-3.5 filter invert opacity-90 inline-block" />Ba.</span>;
            case 'd':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span title="Drums">🥁</span>Dr.</span>;
            case 'kb':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span title="Keyboard">🎹</span>Key.</span>;
            case 'eg/v':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span>🎸🎤</span>Gt./Vo.</span>;
            case 'v/eg':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span>🎤🎸</span>Vo./Gt.</span>;
            case 'v/d':
                return <span key={pos} className="flex items-center gap-1 font-mono text-[11px]"><span>🎤🥁</span>Vo./Dr.</span>;
            default:
                return <span key={pos} className="font-mono text-[11px]">{pos}</span>;
        }
    }

    const { position, performerId } = props;
    const performer = performersList.find(p => p.id === performerId);
    if (!performer) return null;

    return (
        <div className="text-xs bg-background-dark/85 text-text-muted hover:text-white border border-white/10 hover:border-primary/50 rounded-full px-3 py-1 font-maru flex items-center gap-1.5 transition-all duration-200">
            <span className="text-primary-variant/90">{positionToDisplay(position)}</span>
            <span className="text-white/30">|</span>
            {performer.link ? (
                <a
                    href={performer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-variant underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
                >
                    {performer.name}
                </a>
            ) : (
                <span className="font-medium text-white/90">{performer.name}</span>
            )}
        </div>
    );
}

function Song(props: {
    song: {
        name: string;
        translatedName?: string;
        artist: string;
        bandName: string;
        performers: string[][];
    };
    index: number;
}) {
    const { song, index } = props;
    return (
        <div className="w-full max-w-4xl mx-auto px-4 my-2.5">
            <div className="glass-card song-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 border border-white/10 hover:border-primary/40">
                {/* Song order / Japanese Track Badge */}
                <div className="flex md:flex-col items-center justify-between md:justify-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase">TRACK</span>
                        <span className="text-4xl md:text-5xl font-maru font-bold text-gradient-sunset w-14 text-center">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="md:hidden text-xs text-text-subtle font-maru">
                        {song.bandName}
                    </span>
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

                    {/* Band & Performers */}
                    <div className="flex flex-wrap items-center gap-2 mt-3.5">
                        {/* Japanese Live House Band Badge */}
                        <span className="text-xs font-maru font-semibold text-white bg-gradient-to-r from-secondary to-primary px-3.5 py-1 rounded-full shadow-sm">
                            ✦ {song.bandName}
                        </span>

                        {/* Performer list */}
                        {Array.isArray(song.performers) &&
                            song.performers.map(([position, performerId]) => (
                                <Performer
                                    key={position + '-' + performerId}
                                    position={position}
                                    performerId={performerId}
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
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient-sunset tracking-wider">
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
    return (
        <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-text-main pb-24">
            {/* Japanese Anime Sky Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <img
                    src={nikkeiSky}
                    alt="Anime Twilight Sky"
                    className="w-full h-full object-cover opacity-35 filter blur-[1px]"
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
                        <Song key={index} song={songInfo} index={index} />
                    ))}
                </div>

                {/* Japanese Footer Tag */}
                <div className="mt-16 text-center text-xs text-text-subtle font-maru">
                    <p>© {strings.eventYear} {strings.eventName} // {strings.eventJpName} • {strings.eventVenue}</p>
                </div>
            </div>

            <Menu />
        </div>
    );
}


