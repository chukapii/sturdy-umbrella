import React from 'react';
import Layout from '../../../components/Layout/Layout';
import CompanyWorkTemplate from '../../../components/WorkTemplate/CompanyWorkTemplate';
import YouTubeImage from '../../../img/youtube_clone123.png';
import YouTubeCloneImage1 from '../../../img/youtube_clone.gif';

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  //url: 'https://react-youtube-clone-app.netlify.app/',
  title: 'YouTube clone app',
  description:
    'This is a YouTube clone application. You can search videos by keywords. When you search, videos related to the keyword will be displayed. When you select one of them, you will be taken to a detailed page where you can play it. Also, a video list related to the one you choose will be displayed in the side area. Enjoy videos the same as you do on YouTube!',
  headline: 'What I worked on',
};

const tags = [
  'React Hooks',
  'context API',
  'Sass',
];

const images = [YouTubeCloneImage1];

const achievements = [
  'Used YouTube API as if it worked like real YouTube',
  'Used styled components to avoid making style sheets complex',
  "Used context API to manage React state. It's easy to manage it rather than Redux.",
  'I tested fetching data from mock APIs and displaying the data correctly in the DOM.',
];

//change this below
const relatedWebsites = {
  'React YouTube clone website': 'https://react-youtube-clone-app.netlify.app/',
};
//////////////////////////////////////
//////////////////////////////////////

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const achievementList = achievements.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const relatedWebsitesLists = Object.keys(relatedWebsites).map(
  (keyName, index) => {
    return (
      <li key={index}>
        <a
          href={relatedWebsites[keyName]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {keyName}
        </a>
      </li>
    );
  }
);

//section was work in the original
const WorkYouTubeClone = () => (
  <Layout section="works" imgSrc={YouTubeImage} url={workObj.url}>
    <CompanyWorkTemplate
      title={workObj.title}
      subTitle={workObj.subTitle}
      tags={tagList}
      description={workObj.description}
      headline={workObj.headline}
      achievementDescription={achievementList}
      contentImage={imageList}
      //relatedWebsitesLists={relatedWebsitesLists}
    />
  </Layout>
);

export default WorkYouTubeClone;
