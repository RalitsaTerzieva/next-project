import React from 'react';

const Skills = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5">My Skills</h2>
      
      <h3 className="text-2xl font-semibold text-center mb-3">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard skill="React" level="Expert" />
        <SkillCard skill="React Native" level="Intermediate" />
        <SkillCard skill="Python" level="Expert" />
        <SkillCard skill="Django" level="Intermediate" />
        <SkillCard skill="Material UI" level="Intermediate" />
        <SkillCard skill="Bootstrap" level="Intermediate" />
        <SkillCard skill="Tailwind CSS" level="Intermediate" />
        <SkillCard skill="Express.js" level="Intermediate" />
        <SkillCard skill="Next.js" level="Intermediate" />
      </div>

      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-center mt-10 mb-3">Tools & Methodologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard skill="Agile & Scrum" level="Familiar" />
          <SkillCard skill="Figma" level="Familiar" />
          <SkillCard skill="Notion" level="Familiar" />
          <SkillCard skill="Trello" level="Familiar" />
          <SkillCard skill="Jira" level="Familiar" />
          <SkillCard skill="Grafana" level="Familiar" />
          <SkillCard skill="CircleCI" level="Familiar" />
          <SkillCard skill="Sentry" level="Familiar" />
        </div>
      </section>

      <h3 className="text-2xl font-semibold text-center mt-10 mb-3">Soft Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard skill="Team Player" level="Strong" />
        <SkillCard skill="Organized" level="Strong" />
        <SkillCard skill="Eager Learner" level="Strong" />
        <SkillCard skill="Positive Attitude" level="Strong" />
      </div>
    </div>
  );
};

const SkillCard = ({ skill, level }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-xl font-semibold">{skill}</h3>
      <p className="text-gray-700">Proficiency: {level}</p>
    </div>
  );
};

export default Skills;
