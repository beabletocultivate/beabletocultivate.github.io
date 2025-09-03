import type { Route } from './+types/information';
import './information.css';

import Menu from "../menu/menu";
import strings from "../resources/strings";
import cultivateBg from "../resources/cultivate-bg.jpg";
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
    return defaultMeta();
}

function Map() {
    const mapsApiKey = import.meta.env.VITE_MAPS_API_KEY;

    return (
        <iframe
            className="w-full md:w-1/3 h-full md:h-2/3 md:rounded-lg"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${strings.eventVenue}`}>
        </iframe>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <h3 className="text-2xl text-primary-variant brightness-120 mt-6 mb-1.5">
            {title}
        </h3>
    );
}

function SectionContent({ content }: { content: string }) {
    return (
        <p className="text-lg text-white mb-1">
            {content}
        </p>
    );
}

function SectionLink({ href, text }: { href: string, text: string }) {
    return (

        <a
            href={href}
            target="_blank"
            className="text-lg font-serif text-white brightness-90 hover:brightness-80 underline cursor-pointer"
        >
            {text}
        </a>
    );
}

export default function Information() {
    return (
        <div
            style={{ backgroundImage: `url(${cultivateBg})` }}
            className="h-svh w-svw bg-cover bg-center"
        >
            <div className="overflow-auto h-svh w-svw flex flex-col md:flex-row-reverse items-center justify-center gap-8 backdrop-blur-md backdrop-brightness-50">
                <div className="flex flex-col items-center md:items-start text-center md:text-left not-md:pt-8">
                    <h1 className="text-2xl md:text-xl text-primary-variant mb-2">
                        {strings.eventFullName}
                    </h1>
                    <h1 className="text-5xl md:text-4xl text-primary-variant brightness-120 mb-4 md:mb-2">
                        {strings.information}
                    </h1>
                    {/* Event Date */}
                    <SectionTitle title={strings.eventDateTitle} />
                    <SectionContent content={strings.eventDate} />
                    <SectionContent content={strings.eventTime} />
                    <SectionLink href="https://calendar.app.google/PE62RD1HWoKMbAVp8" text={strings.eventAddToCalendar} />
                    {/* Event Venue */}
                    <SectionTitle title={strings.eventVenueTitle} />
                    <SectionContent content={strings.eventVenue} />
                    <SectionContent content={strings.eventVenueAddress} />
                    {/* Event Ticket Price */}
                    <SectionTitle title={strings.eventTicketTitle} />
                    <SectionContent content={strings.eventTicketPrice} />
                    <SectionLink href="https://reurl.cc/lYYy5d" text={strings.eventBuyTickets} />
                </div>
                <Map />
            </div>
            <Menu style="dark" />
        </div>
    );
}