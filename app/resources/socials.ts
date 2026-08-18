/**
 * Performer Instagram handles directory.
 * Key: Performer's display name as written in songs.json
 * Value: Instagram handle without URL (e.g. "username" or "@username")
 */
export const instagramHandles: Record<string, string> = {
  "鄭德馨": "sleepy_roo_",
  "陳志嘉": "taku_frosttears",
  "余宣德": "4stringkeyboard_xuanyu",
  "吳宛罄": "11111111111111116.3",
  "吳泓溢": "hyi.1203",
  "李孟軒": "mong1114",
  "江昶翰": "paul31917",
  "洪建豪": "jacky08233333",
  "洪莉晴": "elvaaahhh",
  "溫昱喆": "kiwi_bird_0826_",
  "翁林正": "bee0930",
  "范才悅": "wfcm03_gaster",
  "葉又銘": "i.am.yumiii",
  "葉政峰": "wavendars",
  "鄭唯冬": "z.w.d_11.30",
  "黃舜安": "syousinsyoumei",
  "劉信盟": "frosttears_mone",
  "魏子翔": "hsiang_0601",
  "王馨濂": "len_frosttears",
  "馬譽尚": "mason_madafaka",
  "鄭安志": "mydearjohn.6",
  "王柏元": "dogwang0817",
  "幻想旅途": "fantasy_journey_tw",
  "枋橋天台": "fromrooftop_",
  // Performers without active handles in records:
  "王瑞逸": "",
  "潘品翰": "",
  "陳靜誼": "",
  "林鈺堯": "",
  "張宜蓁": "",
  "郭桓廷": "",
  "博雅": "",
  "楊森": "",
  "洪淑婷": "",
  "詠新": "",
  "劉咸慈": "",
  "唯媛": "https://www.instagram.com/yui._.gt",
  "李安鈜": "",
  "叢友忻": "",
  "黃筱晴": "",
  "宇其": "",
  "陳宜美": "",
  "張詩汶": "",
  "林嘉榕": "https://www.instagram.com/fiona_lin_97047/",
  "王大維": "",
  "鄞廷宇": "",
  "楊哲峻": "",
  "陳浩": "",
  "Chen": "",
  "黃冠中": "",
  "張慶忠": "",
  "翁寯凱": "",
  "翊慈": "",
  "謝又安": "https://www.instagram.com/tezmaru13",
  "劉若眉": "",
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
