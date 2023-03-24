import React from "react";
import "./aboutUs.css";
import theTeam from "../../../theTeam.json";
import AboutUsCard from "../../AboutUsCard/AboutUsCard";

function AboutUs() {
  return (
    <div>
      <h1 className="team-title">The TEAM</h1>
      <h3 className="team-description">
      Our team of web developers is made up of a group of passionate individuals who are dedicated to creating high-quality
       websites and applications. We pride ourselves on being hardworking and committed to delivering exceptional results.
       <br></br>
       When you work with us, you can rest assured that you are working with a team of talented professionals who are committed to delivering the very best.
      </h3>
      <div className="divider"></div>
      <div className="members">
        <AboutUsCard
          name={theTeam[0].name}
          image={theTeam[0].image}
          occupation={theTeam[0].occupation}
          description={theTeam[0].description}
          githublink={theTeam[0].githubLink}
        />
        <AboutUsCard
          name={theTeam[1].name}
          image={theTeam[1].image}
          occupation={theTeam[1].occupation}
          description={theTeam[1].description}
          githublink={theTeam[1].githubLink}
        />
        <AboutUsCard
          name={theTeam[2].name}
          image={theTeam[2].image}
          occupation={theTeam[2].occupation}
          description={theTeam[2].description}
          githublink={theTeam[2].githubLink}
        />
        <AboutUsCard
          name={theTeam[3].name}
          image={theTeam[3].image}
          occupation={theTeam[3].occupation}
          description={theTeam[3].description}
          githublink={theTeam[3].githubLink}
        />    
      </div>
    </div>
  );
}

export default AboutUs;
