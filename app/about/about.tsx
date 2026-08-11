import type { Route } from "./+types/about";

import Footer from "../footer/footer";
import Menu from "../menu/menu";
import strings from "../resources/strings";
import nikkeiSky from "../resources/nikkei-sky-clean.png";
import melodyAvatar from "../resources/melody_avatar.png";
import chenAvatar from "../resources/chen_avatar.jpg";
import { defaultMeta } from "../meta";
import { getInstagramUrl } from "../resources/socials";

export function meta({ }: Route.MetaArgs) {
    return defaultMeta();
}

export default function About() {
    const melodyIg = getInstagramUrl("王馨濂");
    const chenIg = getInstagramUrl("陳志嘉");

    return (
        <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-text-main pb-24">
            {/* Japanese Anime Sky Atmosphere */}
            <div className="fixed inset-0 pointer-events-none transform-gpu">
                <img
                    src={nikkeiSky}
                    alt="Anime Twilight Sky"
                    className="w-full h-full object-cover opacity-35"
                    loading="eager"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
            </div>

            {/* Centralized Page Container */}
            <div className="relative z-10 page-container">
                {/* Header */}
                <div className="text-center max-w-xl mb-10">
                    <div className="jp-badge mb-3">
                        <span>✦</span>
                        <span>ABOUT // 耕云について</span>
                        <span>✦</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-title tracking-tight text-gradient-sunset mb-2 drop-shadow">
                        {strings.about}
                    </h1>
                    <p className="text-sm md:text-base text-text-muted font-maru mt-1">
                        艾立樂器 • 耕云音樂祭團隊
                    </p>
                </div>

                {/* Section 1: The Story & Able Music Community */}
                <div className="w-full mb-10">
                    <div className="glass-panel rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono text-primary-variant font-bold tracking-widest uppercase bg-primary-variant/15 border border-primary-variant/30 px-3 py-0.5 rounded-full">
                                ✦ ABOUT CULTIVATE // 關於耕云祭
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-title text-white mb-4">
                            在音符裡播種，在舞台上綻放
                        </h2>

                        <div className="space-y-4 text-sm md:text-base text-text-main font-maru leading-relaxed">
                            <p>
                                「耕云祭（Cultivate）」是由台北信義區的音樂空間<strong className="text-primary-variant">「艾立樂器 / 艾白音樂 (Able Music)」</strong>師生共同孕育的年度現場音樂祭。
                            </p>
                            <p>
                                每一位站上舞台的演出者，平時在生活中擁有各自不同的職業與角色；但在琴房與練團室裡，大家都是全心投入音樂的夥伴。從指尖的第一個和弦、無數次合奏磨合的汗水，到今天站上 <span className="text-primary-variant">PIPE Live Music</span> 的聚光燈下——耕云祭正是大家用心耕耘、分享音樂熱情的成果。
                            </p>
                        </div>

                        {/* Able Music Studio Info Card */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-background-dark/50 rounded-2xl p-4 md:p-5 border border-white/5">
                            <div className="space-y-1 font-maru">
                                <div className="flex items-center gap-2 text-primary-variant font-bold text-sm">
                                    <span>🎵</span>
                                    <span>Able Music 艾白音樂工作室 / Ally Music 艾立樂器</span>
                                </div>
                                <p className="text-xs md:text-sm text-text-muted">
                                    📍 台北市信義區松德路 25 巷 1 號 / 松德路 540 巷 19 號
                                </p>
                                <p className="text-xs text-text-subtle">
                                    吉他 • 貝斯 • 爵士鼓 • 流行鋼琴 • 歌唱美聲 • 樂器保養維修 • 教室出租
                                </p>
                            </div>

                            <a
                                href="https://ablemusicable.wixsite.com/website/general-clean"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 px-4 py-2.5 rounded-full transition-all duration-200 shadow-md flex-shrink-0"
                            >
                                <span>造訪官方網站</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section 2: Organizers & Mentors Profiles */}
                <div className="w-full mb-10">
                    <div className="text-xs font-mono text-primary-variant/70 tracking-widest uppercase mb-4 px-1">
                        ✦ MAIN ORGANIZERS & MENTORS // 主辦人與音樂導師
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Melody Profile Card */}
                        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-primary/45 transition-all duration-300 group">
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-purple p-0.5 shadow-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src={melodyAvatar}
                                            alt="Melody (王馨濂)"
                                            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-[11px] font-maru font-semibold text-primary-variant bg-primary-variant/10 border border-primary-variant/25 px-3 py-1 rounded-full">
                                        主辦人 / 歌唱・鍵盤指導
                                    </span>
                                </div>

                                <h3 className="text-2xl font-title text-white group-hover:text-primary-variant transition-colors">
                                    Melody <span className="text-base text-text-muted font-maru font-normal">（王馨濂）</span>
                                </h3>
                                <p className="text-xs text-primary-variant font-mono mt-0.5 mb-4">
                                    Vocal • Piano • Chorus Arranging
                                </p>

                                <ul className="space-y-2 text-xs md:text-sm text-text-muted font-maru leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>國立台灣師範大學表演藝術研究所音樂劇場組碩士</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>現任「冰霜之淚 Frost Tears」主唱、和聲編寫（曾巡迴日本、馬來西亞、韓國）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>專精流行歌唱、古典美聲、音樂劇、流行鋼琴與嗓音調整</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>台大流行音樂歌唱社等大專院校社團指導老師與比賽評審</span>
                                    </li>
                                </ul>
                            </div>

                            {melodyIg && (
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href={melodyIg}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-maru text-text-muted hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-all border border-white/10 hover:border-primary/40"
                                    >
                                        <svg className="w-3.5 h-3.5 fill-current text-secondary" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span>@len_frosttears</span>
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Chen Profile Card */}
                        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-primary/45 transition-all duration-300 group">
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary via-primary to-primary-variant p-0.5 shadow-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src={chenAvatar}
                                            alt="Chen (陳志嘉)"
                                            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-[11px] font-maru font-semibold text-primary-variant bg-primary-variant/10 border border-primary-variant/25 px-3 py-1 rounded-full">
                                        主辦人 / 吉他・貝斯指導
                                    </span>
                                </div>

                                <h3 className="text-2xl font-title text-white group-hover:text-primary-variant transition-colors">
                                    Chen <span className="text-base text-text-muted font-maru font-normal">（陳志嘉 / Takumi）</span>
                                </h3>
                                <p className="text-xs text-primary-variant font-mono mt-0.5 mb-4">
                                    Electric & Acoustic Guitar • Bass • Arranging
                                </p>

                                <ul className="space-y-2 text-xs md:text-sm text-text-muted font-maru leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>2000 年 YAMAHA 全國流行熱門音樂大賽中區最佳吉他手</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>現任「冰霜之淚 Frost Tears」團長、吉他手</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>專精電吉他、木吉他、貝斯、烏克麗麗、各曲風編曲</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>專業電吉他/電貝斯電路維修改裝、琴頸調整技師，多校熱音社指導老師</span>
                                    </li>
                                </ul>
                            </div>

                            {chenIg && (
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                        href={chenIg}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-maru text-text-muted hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-all border border-white/10 hover:border-primary/40"
                                    >
                                        <svg className="w-3.5 h-3.5 fill-current text-secondary" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span>@taku_frosttears</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Section 3: Reserved Letter / Message placeholder */}
                <div className="w-full">
                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-dashed border-white/15 text-center">
                        <span className="text-xs uppercase tracking-[0.25em] text-primary-variant/70 font-maru font-bold block mb-1">
                            ── ✦ 演出倒數中 ✦ ──
                        </span>
                        <h4 className="text-lg md:text-xl font-title text-text-muted">
                            主辦的話（即將公開）
                        </h4>
                    </div>
                </div>

                {/* Footer Tag */}
                <Footer />
            </div>

            <Menu />
        </div>
    );
}
