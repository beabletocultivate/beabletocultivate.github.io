import strings from "../resources/strings";

export default function Footer(props: { className?: string }) {
    const { className = "mt-16" } = props;

    return (
        <div className={`w-full text-center text-xs text-text-subtle font-maru ${className}`}>
            <p>© {strings.eventYear} {strings.eventName} ({strings.eventEngName}) • {strings.eventVenue}</p>
        </div>
    );
}
