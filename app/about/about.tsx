import type { Route } from "./+types/about";

import Footer from "../footer/footer";
import Menu from "../menu/menu";
import strings from "../resources/strings";
import nikkeiSky from "../resources/nikkei-sky-clean.png";
import ableLogo from "../resources/able_music_logo.jpg";
import allyLogo from "../resources/ally_music_logo.jpg";
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
    return defaultMeta();
}

export default function About() {
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
                        <span>ABOUT</span>
                        <span>✦</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-title tracking-tight text-gradient-sunset mb-2 drop-shadow">
                        {strings.about}
                    </h1>
                    <p className="text-sm md:text-base text-text-muted font-maru mt-1">
                        耕云音樂祭團隊
                    </p>
                </div>

                {/* Section 1: The Story & Be Able To Cultivate Festival */}
                <div className="w-full mb-10">
                    <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase font-maru mb-4 px-1">
                        <span>✦</span>
                        <span>關於耕云祭 // ABOUT BE ABLE TO CULTIVATE</span>
                    </div>

                    <div className="glass-panel rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-title text-white mb-4">
                            在音符裡播種，在舞台上綻放
                        </h2>

                        <div className="space-y-4 text-sm md:text-base text-text-main font-maru leading-relaxed">
                            <p>
                                「耕云祭（Be Able To Cultivate）」是由台北信義區的音樂空間<strong className="text-primary-variant">「艾立樂器 / 艾白音樂 (Able Music)」</strong>師生共同孕育的年度現場音樂祭。
                            </p>
                            <p>
                                每一位站上舞台的演出者，平時在生活中擁有各自不同的職業與角色；但在琴房與練團室裡，大家都是全心投入音樂的夥伴。從指尖的第一個和弦、無數次合奏磨合的汗水，到今天站上 <span className="text-primary-variant">PIPE Live Music</span> 的聚光燈下——耕云祭正是大家用心耕耘、分享音樂熱情的成果。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Studio Organizers Profiles */}
                <div className="w-full mb-10">
                    <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase font-maru mb-4 px-1">
                        <span>✦</span>
                        <span>主辦團隊 // ORGANIZERS</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Able Music Card */}
                        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-primary/45 transition-all duration-300 group">
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent-purple p-0.5 shadow-lg overflow-hidden flex-shrink-0 bg-white/5">
                                        <img
                                            src={ableLogo}
                                            alt="Able Music 艾白音樂"
                                            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="text-xs font-maru text-primary-variant/80 flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        <span>音樂教學・練團空間</span>
                                    </span>
                                </div>

                                <h3 className="text-2xl font-title text-white group-hover:text-primary-variant transition-colors">
                                    Able Music <span className="text-base text-text-muted font-maru font-normal">（艾白音樂工作室）</span>
                                </h3>
                                <p className="text-xs text-primary-variant font-mono mt-0.5 mb-4">
                                    Vocal • Piano • Drums • Guitar • Band Studio
                                </p>

                                <ul className="space-y-2 text-xs md:text-sm text-text-muted font-maru leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>提供流行歌唱、古典美聲、音樂劇、流行鋼琴、爵士鼓與吉他專業教學</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>專為音樂人打造舒適教學與練團環境，培育無數學生從琴房邁向 Live 舞台</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>凝聚熱愛音樂的學生與師資社群，共同孕育「耕云祭」年度成果演出</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">📍</span>
                                        <span>台北市信義區松德路 25 巷 1 號（松德一館）</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="text-xs text-text-subtle font-maru">捷運永春站步行 5 分鐘</span>
                                <a
                                    href="https://ablemusicable.wixsite.com/website/general-clean"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 px-4 py-1.5 rounded-full transition-all duration-200 shadow-md glow-primary"
                                >
                                    <span>造訪官方網站</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Ally Music Card */}
                        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-between hover:border-primary/45 transition-all duration-300 group">
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary via-primary to-primary-variant p-0.5 shadow-lg overflow-hidden flex-shrink-0 bg-white/5">
                                         <img
                                             src={allyLogo}
                                             alt="Ally Music 艾立樂器"
                                             className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                         />
                                     </div>
                                     <span className="text-xs font-maru text-primary-variant/80 flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                         <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                         <span>樂器維修・門市銷售</span>
                                     </span>
                                 </div>

                                 <h3 className="text-2xl font-title text-white group-hover:text-primary-variant transition-colors">
                                    Ally Music <span className="text-base text-text-muted font-maru font-normal">（艾立樂器）</span>
                                </h3>
                                <p className="text-xs text-primary-variant font-mono mt-0.5 mb-4">
                                    Electric & Acoustic Guitar • Bass • Repair & Setup
                                </p>

                                <ul className="space-y-2 text-xs md:text-sm text-text-muted font-maru leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>提供電吉他、木吉他、電貝斯專業維修保養、電路升級改裝與手感設定</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>門市精選吉他、烏克麗麗、各大品牌琴弦與專業配件銷售</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">✦</span>
                                        <span>提供獨立琴房、爵士鼓練習室出租與專業諮詢服務</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">📍</span>
                                        <span>台北市信義區松德路 540 巷 19 號（松德二館）</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="text-xs text-text-subtle font-maru">捷運象山站 / 永春站</span>
                                <a
                                    href="https://ablemusicable.wixsite.com/website/general-clean"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 px-4 py-1.5 rounded-full transition-all duration-200 shadow-md glow-primary"
                                >
                                    <span>造訪官方網站</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Reserved Letter / Message placeholder */}
                <div className="w-full mb-4">
                    <div className="flex items-center gap-2 text-primary-variant font-bold text-sm tracking-wider uppercase font-maru mb-4 px-1">
                        <span>✦</span>
                        <span>主辦的話 // MESSAGE</span>
                    </div>

                    <div className="glass-card rounded-3xl p-6 md:p-8 border border-dashed border-white/15 text-center">
                        <span className="text-xs uppercase tracking-[0.25em] text-primary-variant/70 font-maru font-bold block mb-1">
                            ── 演出倒數中 ──
                        </span>
                        <h4 className="text-lg md:text-xl font-title text-text-muted">
                            即將公開
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
