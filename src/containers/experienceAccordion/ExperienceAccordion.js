import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

const ExperienceAccordion = (props) => {
  const theme = props.theme;
  return (
    <div className="experience-accord">
      <Accordion onChange={({ expanded }) => console.log(expanded)}>
        {props.sections.map((section) => {
          return (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
            >
              {section["experiences"].map((experience) => {
                return <ExperienceCard experience={experience} theme={theme} />;
              })}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
