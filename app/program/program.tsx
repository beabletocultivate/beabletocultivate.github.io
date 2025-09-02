import Menu from '../menu/menu';
import bassIcon from '../resources/bass.png';
import strings from '../resources/strings';
import skyImage from '../resources/sky.png';
import fieldsImage from '../resources/fields.png';
import songsJson from '../resources/songs.json';
import performersJson from '../resources/performers.json';

function Performer(props: {
    position: string,
    performerId: string
}) {
    function positionToIcon(position: string) {
        switch (position) {
            case 'v':
                return <span key={position}>🎤</span>;
            case 'eg':
                return <span key={position}>🎸</span>;
            case 'b':
                return <img key={position} src={bassIcon} className="h-5 w-5" />;
            case 'd':
                return <span key={position}>🥁</span>;
            case 'kb':
                return <span key={position}>🎹</span>;
            default:
                return undefined;
        }
    }

    const { position, performerId } = props;
    const performer = performersJson.find(p => p.id === performerId);
    return (performer &&
        (<div className="text-md bg-background text-on-primary rounded-full px-2 py-1 font-serif flex gap-1 items-center text-center">
            {position.split('/').map(positionToIcon)}
            {
                performer.link ?
                    <a href={performer.link} className="underline text-on-primary-variant" target="_blank">{performer.name}</a>
                    : performer.name
            }
        </div>)
    );
}

function Song(props: {
    song: {
        name: string;
        translatedName?: string;
        artist: string;
        bandName: string;
        performers: string[][];
    }, index: number
}) {
    const { song, index } = props;
    return (
        <div className="mx-4">
            <div className="flex items-center gap-8 p-4 my-1">
                {/* Song order */}
                <h1 className="text-6xl text-on-primary font-bold w-16 text-center flex-shrink-0">
                    {index + 1}
                </h1>
                <div className="flex flex-col items-start">
                    {/* Song name & artist */}
                    <h2 className="text-2xl text-on-primary">
                        {song.name}
                        {
                            song.translatedName && (
                                <span className="text-xl font-normal text-on-primary-variant">
                                    （{song.translatedName}）
                                </span>
                            )
                        }
                    </h2>
                    <p className="text-lg text-on-primary-variant">{song.artist}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {/* Band name */}
                        <div className="text-md bg-primary-variant text-background rounded-full px-2 py-1 font-serif text-center">
                            {song.bandName}
                        </div>
                        {/* Performers */}
                        {Array.isArray(song.performers) && song.performers.map(([position, performerId]) => (
                            <Performer
                                key={position + '-' + performerId}
                                position={position}
                                performerId={performerId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {index < songsJson.length - 1 && (
                <hr className="border-t border-on-primary-variant opacity-30" />
            )}
        </div>
    )
}

export default function Program() {
    return (
        <div style={{ 'backgroundImage': `url(${skyImage})` }} className="relative overflow-y-auto w-svw h-svh bg-cover bg-center">
            <div className="absolute w-full h-full flex flex-col">
                <h3 className="text-2xl lg:text-3xl text-on-primary-variant text-center mt-8 mb-2">
                    {strings.eventFullName}
                </h3>
                <h1 className="text-5xl lg:text-7xl text-center text-on-primary mb-4">
                    {strings.program}
                </h1>
                {songsJson.map((songInfo, index) => (
                    <Song key={index} song={songInfo} index={index} />))}
                <img src={fieldsImage} alt="Fields" className="object-contain -mt-28 pointer-events-none" />
            </div>
            <Menu />
        </div>
    )
}
