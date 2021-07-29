import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
//import About from '../../pages/about/About';

const Layout = ({ section, imgSrc, url, children }) => {
  return (
    <div>
      <Navigation />
      <Header section={section} imgSrc={imgSrc} url={url} />
      <div>{children}</div>
      {/*<About/>*/}
    </div>
  );
};

export default Layout;
