import strings from "./resources/strings";

export function defaultMeta() {
  const title = `${strings.eventName} ${strings.eventYear}`;
  const description = `${strings.eventName} ${strings.eventYear}（${strings.eventEngName}）— ${strings.eventTagline}`;
  const url = "https://beabletocultivate.github.io/";
  const image = "https://beabletocultivate.github.io/og-image.jpg";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
