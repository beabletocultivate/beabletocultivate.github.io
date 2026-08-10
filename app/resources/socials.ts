/**
 * Performer Instagram handles / social links directory.
 * Key: Performer's display name as written in songs.json
 * Value: Instagram username (e.g. "username" or "@username") or full URL
 */
export const instagramHandles: Record<string, string> = {
  "王瑞逸": "",
  "潘品翰": "",
  "翁林正": "",
  "陳靜誼": "",
  "溫昱喆": "",
  "吳宛罄": "",
  "吳泓溢": "",
  "李孟軒": "",
  "林鈺堯": "",
  "張宜蓁": "",
  "鄭德馨": "https://www.instagram.com/sleepy_roo_/",
  "郭桓廷": "",
  "范才悅": "",
  "博雅": "",
  "楊森": "",
  "黃舜安": "",
  "江昶翰": "",
  "洪淑婷": "",
  "詠新": "",
  "葉政峰": "",
  "葉又銘": "",
  "劉信盟": "",
  "魏子翔": "",
  "王馨濂": "https://www.instagram.com/len_frosttears/",
  "劉咸慈": "",
  "唯媛": "",
  "馬譽尚": "",
  "李安鈜": "",
  "叢友忻": "",
  "黃筱晴": "",
  "宇其": "",
  "陳宜美": "",
  "張詩汶": "",
  "林嘉榕": "",
  "鄭安志": "",
  "陳志嘉": "https://www.instagram.com/taku_frosttears/",
  "余宣德": "",
  "王大維": "",
  "鄭唯冬": "",
  "洪莉晴": "",
  "鄞廷宇": "",
  "楊哲峻": "",
  "陳浩": "",
  "王柏元": "",
  "Chen": "",
  "洪建豪": "",
  "黃冠中": "",
  "張慶忠": "",
  "翁寯凱": "",
  "翊慈": "",
  "謝又安": "",
  "劉若眉": "",
  "幻想旅途": "https://www.instagram.com/fantasy_journey_tw/",
  "枋橋天台": "https://www.instagram.com/fromrooftop_/",
  // Add handles for any performer as needed (e.g., "王瑞逸": "instagram_handle")
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
