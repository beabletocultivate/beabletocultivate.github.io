import type { Route } from './+types/information';
import './information.css';

import Footer from "../footer/footer";
import Menu from "../menu/menu";
import strings from "../resources/strings";
import nikkeiSky from "../resources/nikkei-sky-clean.png";
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
    return defaultMeta();
}

function Map() {
    const mapsApiKey = import.meta.env.VITE_MAPS_API_KEY;

    return (
        <div className="w-full lg:w-1/2 h-80 lg:h-[480px] rounded-2xl overflow-hidden glass-card p-1.5 border border-white/10 glow-primary">
            <iframe
                className="w-full h-full rounded-xl"
                loading="lazy"
                title="Event Venue Location"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(strings.eventVenue)}`}
            />
        </div>
    );
}

export default function Information() {
    return (
        <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-text-main pb-24">
            {/* Japanese Anime Sky Backdrop */}
            <div className="fixed inset-0 pointer-events-none">
                <img
                    src={nikkeiSky}
                    alt="Atmosphere"
                    className="w-full h-full object-cover opacity-40 filter blur-[1px]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 page-container">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="jp-badge mb-3">
                        <span>✦</span>
                        <span>INFORMATION</span>
                        <span>✦</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-title tracking-tight text-gradient-sunset drop-shadow">
                        {strings.information}
                    </h1>
                </div>

                {/* Content Grid */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                    {/* Information Panel */}
                    <div className="w-full lg:w-1/2 glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 border border-white/10 shadow-2xl">
                        {/* Time & Date */}
                        <div className="flex flex-col gap-1.5 font-maru">
                            <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase">
                                <span>📅</span>
                                <span>{strings.eventDateTitle} // DATE & TIME</span>
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-white tracking-wide">
                                {strings.eventDate}
                            </p>
                            <p className="text-base text-text-muted">
                                {strings.eventTime}
                            </p>
                            <div className="mt-2">
                                <a
                                    href={strings.eventCalendarUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-primary-variant hover:text-white bg-primary/10 hover:bg-primary/25 border border-primary/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                                >
                                    <span>➕</span>
                                    <span>{strings.eventAddToCalendar}（Google Calendar）</span>
                                </a>
                            </div>
                        </div>

                        <hr className="border-white/10 border-dashed" />

                        {/* Location */}
                        <div className="flex flex-col gap-1.5 font-maru">
                            <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase">
                                <span>📍</span>
                                <span>{strings.eventVenueTitle} // VENUE</span>
                            </div>
                            <p className="text-xl md:text-2xl font-bold text-white">
                                {strings.eventVenue}
                            </p>
                            <p className="text-base text-text-muted">
                                {strings.eventVenueAddress}
                            </p>
                        </div>

                        <hr className="border-white/10 border-dashed" />

                        {/* Ticketing */}
                        <div className="flex flex-col gap-2 font-maru">
                            <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase">
                                <span>🎟️</span>
                                <span>{strings.eventTicketTitle} // TICKETS</span>
                            </div>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-extrabold text-gradient-gold">
                                    {strings.eventTicketPrice}
                                </span>
                                <span className="text-xs text-text-muted">/ 入場票券</span>
                            </div>
                            <div className="mt-3">
                                <button
                                    type="button"
                                    disabled
                                    aria-disabled="true"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-white/5 border border-dashed border-white/20 text-text-muted font-maru text-base md:text-lg font-bold py-3.5 px-6 rounded-full cursor-not-allowed opacity-80 select-none"
                                >
                                    <span>✦</span>
                                    <span>線上購票（即將開放）</span>
                                    <span>✦</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Map Component */}
                    <Map />
                </div>

                {/* Footer Tag */}
                <Footer />
            </div>

            <Menu />
        </div>
    );
}