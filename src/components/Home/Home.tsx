import './Home.css';
import React from 'react';

import image from '../../images/dummy-picture.jpg';

const Home = () => {
  return (
    <section className="home">
      <img className="khan-image" src={image} alt="khan-face" />
      <article className="home-text">
        <h2>I'm Khan.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nam
          quo aspernatur inventore dolor officia aut, quos consectetur
          doloremque ipsam voluptates quasi autem voluptate soluta voluptatem
          perspiciatis nobis nulla necessitatibus.
        </p>
      </article>
    </section>
  );
};

export default Home;
