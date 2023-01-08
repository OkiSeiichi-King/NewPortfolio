/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Oki Seiichi</h2>
        <p><a href="mailto:okiseiichi2@gmail.com">okiseiichi2@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I&apos;m Oki. I have been working as a Web Developer for 4 years in both Front-end and Back-end web development.
        Also I have good experience in Blockchain technology. As a problem solver who loves facing challenges in my work,
        I'm excited to be at the deployment phase of my career as a web developer.
        I'm passionate and ambitious about my work, and love to be on a team that questions possibilities.
        I am looking for a new job opportunity in Full Stack development.
        I will work harder with all my ability and knowledge for the company. Congratulations!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Oki &apos;Seiichi <Link to="/">okiseiichi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
