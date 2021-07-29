import React from 'react';
import Layout from '../../components/Layout/Layout';
import MyStack from '../MyStack/MyStack';
//import aboutImage from '../../img/about_photo.png';
import './About.scss';

const About = () => {
  const links = {
   // GitHub: 'https://github.com/marieooq',
    //LinkedIn: 'https://www.linkedin.com',
    //Medium: 'https://marieotaki.medium.com/',
    //Twitter: 'https://twitter.com/marie_otaki',
    Resume: '/_Resume.pdf',
    Email: 'mailto:rbasnet2017@my.fit.edu',
  };

  const snsLinks = Object.keys(links).map((keyName, index) => {
    return (
      <li key={index}>
        <a href={links[keyName]} target="_blank" rel="noopener noreferrer">
          {keyName}
        </a>
      </li>
    );
  });

  const topicsObj = {
    development: {
      emoji: (
        <span role="img" aria-label="laptop">
          💻{' '}
        </span>
      ),
      headline: 'Software development',
      text:
        'I’m developing web apps using HTML5, CSS3, SCSS, JavaScript, React, and Redux. Especially I’ve been putting much effort into developing with React. I keep brushing up my developing skills.',
    },
    // idea: {
    //   emoji: (
    //     <span role="img" aria-label="note">
    //       🗒{' '}
    //     </span>
    //   ),
    //   headline: 'Thinking new ideas',
    //   text:
    //     "I always take notes whatever grabs my attention, which make me come up with new idea for web apps. It also useful for solving problems even if it's a tiny one. Everything around me is hints for solving problems.",
    // },
    // cooking: {
    //   emoji: (
    //     <span role="img" aria-label="fry-pan">
    //       🍳{' '}
    //     </span>
    //   ),
    //   headline: 'Cooking',
    //   text:
    //     'I’m a good cooker. I can make a variety of food within limited ingredients. It’s like a puzzle. I love to try new taste so every time I face new meal I can get new hint to my recipe lists. The way of thinking helps me when I am coding as well.  ',
    // },
    // traveling: {
    //   emoji: (
    //     <span role="img" aria-label="globe">
    //       🌎{' '}
    //     </span>
    //   ),
    //   headline: 'Traveling',
    //   text:
    //     'Love to off to new world! Of all the countries I have visited, Laos and Vietnam are  my favorite! ',
    // },
  };

  const topicsLinks = Object.keys(topicsObj).map((keyName, index) => {
    return (
      <div className="topic" key={index}>
        <h2>
          {topicsObj[keyName].emoji} {topicsObj[keyName].headline}
        </h2>
        <p>{topicsObj[keyName].text}</p>
      </div>
    );
  });

  return (
    /*insert about image here*/
    <Layout section="about" imgSrc={null}>
      <div className="about">
        <div className="about-inner">
          <section className="about-introduction">
            <h1>
              <span role="img" aria-label="wave">
                👋🏼{' '}
              </span>
             I love to build web applications, 
             Learning and improving is the greatest joy!
            </h1>
            <ul id="sns-links">{snsLinks}</ul>
          </section>
          <MyStack />
          {/*<section className="about-topics">{topicsLinks}</section>*/}
        </div>
      </div>
    </Layout>
  );
};

export default About;
