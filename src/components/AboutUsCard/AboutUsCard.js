import React from "react";
import "./AboutUsCard.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function TeamMember(props) {
    return (

        <div className="member">
          <img width={275} height={275} alt={props.name} src={window.location.origin + props.image}/>
          <div className="description">
              <h1>{props.name}</h1>
              <h2>{props.occupation}</h2>
              <p>
              {props.description}
              </p>
              <div className="social-media">
                <a href={props.githublink} target="_blank" rel="noreferrer noopener"><GitHubIcon /></a>
              </div>
          </div>
        </div>
  );
}

export default TeamMember;