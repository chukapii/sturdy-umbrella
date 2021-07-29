import React from "react";
import SpeechBubble from "../../img/speech_bubble_.gif";
//import Background from "../../img/header.jpg";
import "./Header.scss";

//headers for all sections
const Header = (props) => {
  if (props.section === "header") {
    return (
      <header>
        <div className="main-img">
          <a href="/About" target="_blank">
            <img
              src={SpeechBubble}
              alt="speech-bubble"
              id="speech-bubble"
            ></img>
          </a>
        {/*insert photo below*/}
          <img src={null} alt="" id="profile-photo"></img>
        </div>
        <div className="introduction">
          <div className="introduction-inner">
            <h1>
              Hi! I'm <span id="name">Ritika</span>
              <br />
              <span id="job-title">an aspiring Frontend developer.</span>
            </h1>
            <p>
              Skilled in React, Redux, HTML5, CSS3, and SASS
              <br />
              <br />I am passionate about building
              in JavaScript (including React).Ping me if you are interested!
            </p>

            <ul>
              <li>
            {/*change tht github url*/}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {/*github icon*/}
                </a>
              </li>
              {/*<li>
                <a
                  href="https://www.linkedin.com/in/marieotaki/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>*/}
             {/* <li>
                <a
                  href="https://marieotaki.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>*/}
              {/*<li>
                <a
                  href="https://twitter.com/marie_otaki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>*/}
              <li>
                <a
                  href="/Resume.pdf" /*replace it will real resume later*/
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-file-pdf"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rbasnet2017@my.fit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  } else if (props.section === "works") {
    return (
      <header className="work-header"> {/*url passed as props from layout to header*/}
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.imgSrc} alt="work" id="work-photo" />
          <h> in progress</h>
        </a>
      </header>
    );
  // } else if (props.section === "work_ph") {  /*where si this WORK_Ph coming from?*/
  //   return (
  //     <header className="work-ph-header">
  //       <a
  //         href={props.url}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         id="link_msgif"
  //       >
  //         <>
  //           <a
  //             href="https://www.producthunt.com/posts/msgif?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-msgif"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             id="productHunt_msgif"
  //           >
  //             <img
  //               src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=183178&theme=light"
  //               alt="Msgif - A GIF generator that converts your message into a GIF | Product Hunt Embed"
  //             />
  //           </a>
  //         </>
  //         <img src={props.imgSrc} alt="work" id="work-ph-photo"></img>
  //       </a>
  //     </header>
  //   );
  } 
  else {
    return (
      <header className="about-header">
    {/*{about image passed from layout...was passed to layout from pages/about }*/}
        {/*<img src={props.imgSrc} alt="about" id="about_photo" />*/}
      </header>
    );
  }
};

export default Header;
