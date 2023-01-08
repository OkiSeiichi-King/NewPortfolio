/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Oki Seiichi's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>
            I will prove myself with my ability, and everyone will accept me.<br />
            I try to advance the time and want to save it.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more here,
        or you can check out my {' '}
        <a href="https://drive.google.com/file/d/1ZT5dCRokou8BGxsp410kF7ETN3L6h9lv/view?usp=sharing">resume</a>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        It has been 4 years since I was born in the Japan and started web development after completing my university course.
        <br />
        I am presently a full-stack developer living in Canada, where he has worked as an officer and remote worker for multiple firms,
        as well as a freelancer for a variety of customers.
        <br />
        It can be said that the strengths that I can see are the simultaneous guarantee of project speed and quality, accurate time
        management, and sincerity.
        <br />
        I am looking for a new job opportunity or team or client! Regards!
      </p>
    </article>
  </Main>
);

export default Index;
