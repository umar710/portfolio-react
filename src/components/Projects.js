import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPersonCircleQuestion,
  faEarthAmericas,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Project Food-Much Website",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "/pro1.PNG",
      link: "https://usonlinefood.ccbp.tech/",
    },
    {
      name: "Project Nxt-Watch Youtube Clone",
      des: "Technologies used : React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization Authentication Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
      mission: "Login Details:- username: rahul , password: rahul@2021",
      language:
        "React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token, Authorization, Authentication",
      images: "/pro2.PNG",
      link: "https://nxtumarwatch.ccbp.tech/",
    },
    {
      name: "Project Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
      des: "Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.",
      mission: "Back-end Developer, system analysis and design",
      language: "React JS, JS, CSS,...",
      images: "/pro3.PNG",
      link: "https://nxtumarecom.ccbp.tech/",
    },
    {
      name: "Project IPL Dashboard)",
      des: "Functionality to be added The app must have the following functionalities When the app is opened, Home Route should be displayed When the Home Route is opened, Make HTTP GET request to the teamsApiUrl loader should be displayed while fetching the data After fetching the data, the list of teams should be displayed When a team card in Home Route is clicked, Page should be navigated to the Team Matches Route with the URL /team-matches/:id When the Team Matches Route is opened, Make HTTP GET request to the teamMatchesApiUrl with the team id to get the recent matches data of the team Example: https://apis.ccbp.in/ipl/KKR loader should be displayed while fetching the data After fetching the data, the team banner, latest match, and list of recent matches should be displayed",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, SockerIO,...",
      images: "/pro4.PNG",
      link: "https://iplumardash.ccbp.tech/",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur
        consequatur quisquam harum.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div>
                  <a href={value.link} className="des">
                    Project Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
