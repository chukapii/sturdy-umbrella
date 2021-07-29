import React from "react";
import Content from "../Content/Content";
import { Link, useLocation } from "react-router-dom";
import "./ContentsContainer.css";
import SimpleSelect from "../../components/Select/SimpleSelect"; //dropdown menu for personal/aalll project

const ContentsContainer = (props) => {
  let location = useLocation();

//where is filtering work comign from
  const returnFilteredObject = (filteringWord, projectArray) => {
    if (filteringWord === "all") {
      return projectArray;
    } else {
      const filteredObj = projectArray.filter(
        (val) => val.project === filteringWord
      );
      return filteredObj;
    }
  };

//called the above function? obj==workslist from works.js
  const filteredObj = returnFilteredObject(props.project, props.obj);

  const contentLists = filteredObj.map((obj, index) => {
    return <Content contentObj={obj} key={index} />;
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">
        <SimpleSelect
          project={props.project}
          handleChange={props.handleChange}
        />
        {contentLists}
        {location.pathname === "/" && (
          <div className="view_more">
            <Link to="/works">View more works</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentsContainer;
