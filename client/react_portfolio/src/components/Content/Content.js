import React from 'react';
import './Content.scss';
import { Link, useLocation } from 'react-router-dom';

//contentObj received as props from Contentscontainer
const Content = ({ contentObj }) => {
  let location = useLocation();

//where do yu get project from? #personal?
  const generateProjectLabel = (project) => {
    return <span className="project-label">{`#${project}`}</span>;
  };

//workslist.github  =conentObj.github
  const generateGitHubLabel = (project) => {
    if (project === 'personal') {
      return (
        <a
          // href={contentObj.gitHub}
          // alt="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      );
    }
  };

//idk what the logic of index is 
  const stackLink = contentObj.stack.map((val, index) => {
    if (index < contentObj.stack.length - 1) {
      return <li key={index}>{`${val} /`}</li>;
    } else {
      return <li key={index}>{`${val}`}</li>;
    }
  });
  return (
    <div className="contents">
      {contentObj.featured && location.pathname === '/' ? (
        <div className="contents_image">
          <span className="feature_lalbel">Featured</span>
          <Link to={contentObj.url}>
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      ) : (
        <div className="contents_image">
          <Link to={contentObj.url}>  {/*links to works/youtubeclone*/}
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      )}

      <div className="contents_description">
        <h3>
          <Link to={contentObj.url}> 
            {contentObj.title}   {/*youtubeclone app*/}
            {generateProjectLabel(contentObj.project)}
          </Link>
        </h3>

        <div className="contents_stack_wrapper">
          <ul className="contents_stack">{stackLink}</ul>
          {generateGitHubLabel(contentObj.project)}
        </div>
        <p>{contentObj.description}</p>
        <Link to={contentObj.url} className="contents-detail">
          Find Out More
        </Link>
      </div>
    </div>
  );
};

export default Content;
