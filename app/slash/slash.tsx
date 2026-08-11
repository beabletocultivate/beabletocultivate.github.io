import './slash.css';

import { InstagramEmbed } from 'react-social-media-embed';
import Masonry from 'react-masonry-css';

import type { Route } from "./+types/slash";
import Menu from '../menu/menu';
import nikkeiSky from "../resources/nikkei-sky-clean.png";
import strings from '../resources/strings';
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
  return defaultMeta();
}

const instagramPosts = [
  "https://www.instagram.com/p/CB5FBbaHhal/", // joywhenflowers
  "https://www.instagram.com/p/DM24NMLPTqX/", // paw.and.pastry
  "https://www.instagram.com/p/DN8Qbm3Efqf/", // solune.crystal
  "https://www.instagram.com/p/CzFj0nCvTF8/", // chih_yi_lin_0814
  "https://www.instagram.com/p/DNoedH4z13d/", // mong114
  "https://www.instagram.com/p/DH_Ox8Dz_g-/", // nl___art
  "https://www.instagram.com/p/DOdx8uSEt9a/", // starry.lightening
];

export default function Slash() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden text-text-main pb-20">
      {/* Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src={nikkeiSky}
          alt="Twilight Background"
          className="w-full h-full object-cover opacity-35 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 page-container">
        {/* Header */}
        <div className="text-center max-w-xl mb-10">
          <div className="jp-badge mb-3">
            <span>✦</span>
            <span>SLASH ZONE // パラレルキャリア</span>
            <span>✦</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-title tracking-tight text-gradient-sunset mb-3 drop-shadow">
            {strings.slash}
          </h1>
          <p className="text-base md:text-lg text-text-muted px-4 font-maru">
            {strings.slashDescription}
          </p>
        </div>

        {/* Masonry Feed */}
        <div className="w-full max-w-4xl">
          <Masonry
            breakpointCols={{ default: 2, 768: 1 }}
            className="slash-grid"
            columnClassName="slash-grid_column"
          >
            {instagramPosts.map((url) => (
              <div key={url} className="glass-card rounded-2xl overflow-hidden p-2.5 border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex justify-center">
                <InstagramEmbed url={url} width="100%" />
              </div>
            ))}
          </Masonry>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-xs text-text-subtle font-maru">
          <p>Made with ♥ by <a href="https://github.com/elisedc" target="_blank" rel="noopener noreferrer" className="underline text-primary-variant hover:text-white transition-colors">Elise</a></p>
        </div>
      </div>

      <Menu />
    </div>
  );
}


