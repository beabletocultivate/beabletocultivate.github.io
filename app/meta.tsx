import strings from "./resources/strings";

export function defaultMeta() {
  return [
    { title: `${strings.eventName} ${strings.eventYear}` },
    { name: "description", content: `${strings.eventName} ${strings.eventYear}（${strings.eventEngName}）— ${strings.eventTagline}` },
  ];
}
