import './slash.css';

import { InstagramEmbed } from 'react-social-media-embed';
import Masonry from 'react-masonry-css';

import Menu from '../menu/menu';
import sky from "../resources/sky.jpg";
import fields from "../resources/fields.png";
import strings from '../resources/strings';

const instagramPosts = [
  "https://www.instagram.com/p/CB5FBbaHhal/", // joywhenflowers
  "https://www.instagram.com/p/DM24NMLPTqX/", // paw.and.pastry
  "https://www.instagram.com/p/DN8Qbm3Efqf/", // solune.crystal
  "https://www.instagram.com/p/CzFj0nCvTF8/", // chih_yi_lin_0814
  "https://www.instagram.com/p/DH_Ox8Dz_g-/", // nl___art
  "https://www.instagram.com/p/DOdx8uSEt9a/", // starry.lightening
];

export default function Slash() {
  return (
    <>
      <img src={sky} alt="Sky" className="absolute w-svw h-svh object-cover brightness-30 contrast-120 hue-rotate-190 saturate-50" />
      <img src={fields} alt="Fields" className="absolute w-svw h-svh object-cover brightness-30 contrast-110 hue-rotate-190 saturate-50" />
      <div className="absolute w-svw h-svh pb-8 lg:px-32 overflow-y-auto">
        <h1 className="text-5xl lg:text-6xl text-center text-gray-50 mt-8 mb-8">
          {strings.slash}
        </h1>
        <p className="text-lg text-gray-300 text-center px-4 mb-8">
          {strings.slashDescription}
        </p>
        <Masonry
          breakpointCols={{ default: 2, 700: 1 }}
          className="slash-grid"
          columnClassName="slash-grid_column"
        >
          {instagramPosts.map(url => (
            <InstagramEmbed key={url} url={url} />
          ))}
        </Masonry>
        <div className="text-sm text-gray-300 text-center">
          Made with ♥ by <a href="https://github.com/elisedc" target="_blank" className="underline">Elise</a>
        </div>
      </div>
      <Menu style="dark" />
    </>
  );
}
