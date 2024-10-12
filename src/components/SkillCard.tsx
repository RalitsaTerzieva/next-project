import React from 'react';

interface SkillCardProps {
    skill: string;
    level: string;
  }

const SkillCard: React.FC<SkillCardProps> = ({ skill, level }) => {
    return (
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-semibold">{skill}</h3>
        <p className="text-gray-700">Proficiency: {level}</p>
      </div>
    );
  };

export default SkillCard;