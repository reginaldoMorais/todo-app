import React from 'react';
import PageHeader from '../template/pageHeader'

class About extends React.Component {
  render() {
    return (
      <div>
        <PageHeader name='Sobre'></PageHeader>

        <h3>Nossa História</h3>
        <p>Lorem ipsum dolor sit amet...</p>
        <h3>Missão e Visão</h3>
        <p>Lorem ipsum dolor sit amet...</p>
        <h3>Imprensa</h3>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    );
  }
};

export default About;
