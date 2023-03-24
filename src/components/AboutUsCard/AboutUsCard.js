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
    // <div className="col-lg-3 col-md-6 d-flex align-items-strech">
    //     <div className="member" data-aos="fade-up" data-aos-delay="100">
    //         <div className="member-img">
    //             <img className="img-fluid" alt={props.name} src={window.location.origin + props.image} />

    //             <div className="social">
    //                 <a href=""><i className="icofont-github"></i></a> 
    //             </div>
    //         </div>

    //         <div className="member-info">
    //             <h4>{props.name}</h4>
    //             <span>{props.occupation}</span>
    //         </div>
    //     </div>
    // </div>


    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default TeamMember;