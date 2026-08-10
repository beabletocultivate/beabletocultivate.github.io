/**
 * Performer Instagram handles / social links directory.
 * Key: Performer's display name as written in songs.json
 * Value: Instagram username (e.g. "username" or "@username") or full URL
 */
export const instagramHandles: Record<string, string> = {
  "Cheng": "elisedc",
  "Elise": "elisedc",
  "Dennis": "dennis.guitar",
  "Sharon": "",
  "Melody": "",
  "Wade": "",
  "Moon": "",
  "Dog": "",
  "Hunter": "",
  "Wayne": "",
  "Paul": "",
  "Wei": "",
  "Linda": "",
  "Yum": "",
  "Hsu": "",
  "Yeh": "",
  "Charlie": "",
  "Wan": "",
  "Fan": "",
  "Shin": "",
  "Roo": "",
  "Wen": "",
  // Add handles for any performer as needed (e.g., "Name": "handle")
};

/**
 * Helper to get the full Instagram profile URL for a performer name.
 */
export function getInstagramUrl(name: string): string | undefined {
  const handle = instagramHandles[name]?.trim();
  if (!handle) return undefined;

  if (handle.startsWith("http://") || handle.startsWith("https://")) {
    return handle;
  }
  const cleanHandle = handle.replace(/^@/, "");
  return `https://www.instagram.com/${cleanHandle}/`;
}
