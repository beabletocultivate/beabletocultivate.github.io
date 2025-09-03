import { Link } from 'react-router';

import type { Route } from "./+types/welcome";
import './welcome.css';

import Menu from '../menu/menu';
import strings from '../resources/strings';
import skyImage from '../resources/sky.png';
import sunImage from '../resources/sun.png';
import fieldsImage from '../resources/fields.png';
import notesImage from '../resources/notes.png';
import { defaultMeta } from "../meta";

export function meta({ }: Route.MetaArgs) {
  return defaultMeta();
}

export default function Welcome() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img src={skyImage} alt="Sky" className="absolute w-full h-full object-cover animate-sky-brighten" />
      <img src={sunImage} alt="Sun" className="absolute w-full h-full object-cover animate-sunrise" />
      <img src={fieldsImage} alt="Fields" className="absolute w-full h-full object-cover animate-fields-brighten" />
      <img src={notesImage} alt="Notes" className="absolute w-full h-full right-0 object-cover object-right animate-notes-sweep" />

      {/* Instagram link */}
      <div className="absolute right-8 top-10 text-right text-on-primary-variant">
        <a
          href="https://www.instagram.com/be.able.to.cultivate/"
          target="_blank"
          className="font-serif text-xl underline hover:brightness-90 cursor-pointer"
        >
          {strings.cultivateInstagram}
        </a>
      </div>

      <div className="absolute top-1/2 md:left-12 transform -translate-y-24 flex flex-col items-center md:items-start gap-6 not-md:w-screen">
        {/* Title */}
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-7xl md:text-9xl text-center text-on-primary opacity-0 animate-fade-up">
            {strings.eventName}
          </h1>
          <h3 className="text-3xl md:text-4xl text-center text-on-primary-variant opacity-0 animate-fade-up-delay-1">
            {strings.eventEngFullName}
          </h3>
        </div>
        {/* Links to other pages */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/program">
            <button
              className="bg-on-primary text-on-secondary font-serif rounded-full text-2xl transition hover:brightness-105 p-4 opacity-0 animate-fade-up-delay-1 cursor-pointer"
            >
              {strings.readProgram}
            </button>
          </Link>
          <Link to="/information">
            <button
              className="bg-background text-on-primary font-serif rounded-full text-2xl transition hover:brightness-105 p-4 opacity-0 animate-fade-up-delay-1 cursor-pointer"
            >
              {strings.readInformation}
            </button>
          </Link>
        </div>
      </div>
      <Menu />
    </main >
  );
}
