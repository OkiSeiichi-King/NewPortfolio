/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { skills, categories } from '../data/resume/skills';
import Skills from '../components/Resume/Skills';

const About = () => (
  <Main
    title="About"
    description="Learn about Oki Seiichi"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About My Skills</Link></h2>
        </div>
      </header>
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default About;
