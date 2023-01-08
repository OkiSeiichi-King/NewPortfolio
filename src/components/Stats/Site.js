/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable linebreak-style */import React from 'react';

const Stats = () => {
  return (
    <div>
      <h3>Some certifications of mine</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
        <img src="/images/cert/1.png" alt="triplebyte" style={{ width: '100%', padding: '10px' }} />
        <img src="/images/cert/2.png" alt="triplebyte" style={{ width: '100%', padding: '10px' }} />
        <img src="/images/cert/3.png" alt="triplebyte" style={{ width: '100%', padding: '10px' }} />
      </div>
    </div>
  );
};

export default Stats;
