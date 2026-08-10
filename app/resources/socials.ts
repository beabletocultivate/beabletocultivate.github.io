/**
 * Performer Instagram handles directory.
 * Key: Performer's display name as written in songs.json
 * Value: Instagram handle without URL (e.g. "username" or "@username")
 */
export const instagramHandles: Record<string, string> = {
  "王瑞逸": "",
  "潘品翰": "",
  "翁林正": "",
  "陳靜誼": "",
  "溫昱喆": "",
  "吳宛罄": "",
  "吳泓溢": "hyi.1203",
  "李孟軒": "",
  "林鈺堯": "",
  "張宜蓁": "",
  "鄭德馨": "sleepy_roo_",
  "郭桓廷": "",
  "范才悅": "",
  "博雅": "",
  "楊森": "",
  "黃舜安": "",
  "江昶翰": "",
  "洪淑婷": "",
  "詠新": "",
  "葉政峰": "wavendars",
  "葉又銘": "i.am.yumiii",
  "劉信盟": "frosttears_mone",
  "魏子翔": "hsiang_0601",
  "王馨濂": "len_frosttears",
  "劉咸慈": "",
  "唯媛": "",
  "馬譽尚": "mason_madafaka",
  "李安鈜": "",
  "叢友忻": "",
  "黃筱晴": "",
  "宇其": "",
  "陳宜美": "",
  "張詩汶": "",
  "林嘉榕": "",
  "鄭安志": "mydearjohn.6",
  "陳志嘉": "taku_frosttears",
  "余宣德": "",
  "王大維": "",
  "鄭唯冬": "",
  "洪莉晴": "",
  "鄞廷宇": "",
  "楊哲峻": "",
  "陳浩": "",
  "王柏元": "",
  "Chen": "",
  "洪建豪": "jacky08233333",
  "黃冠中": "",
  "張慶忠": "",
  "翁寯凱": "",
  "翊慈": "",
  "謝又安": "",
  "劉若眉": "",
  "幻想旅途": "fantasy_journey_tw",
  "枋橋天台": "fromrooftop_",
  // Add handles for any performer as needed (e.g., "王瑞逸": "instagram_handle")
};

/**
 * Extracts and cleans the raw Instagram handle (e.g. "username").
 */
export function getInstagramHandle(name: string): string | undefined {
  let val = instagramHandles[name]?.trim();
  if (!val) return undefined;

  // If full URL was provided, extract just the handle
  val = val.replace(/^https?:\/\/(www\.)?instagram\.com\//, "");
  val = val.replace(/\/.*$/, ""); // strip trailing paths/slashes
  val = val.replace(/^@/, "");

  return val.trim() || undefined;
}

/**
 * Returns the full Instagram profile URL for a performer name.
 */
export function getInstagramUrl(name: string): string | undefined {
  const handle = getInstagramHandle(name);
  if (!handle) return undefined;
  return `https://www.instagram.com/${handle}/`;
}
