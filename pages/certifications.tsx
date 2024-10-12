import React from 'react';
import SkillCard from './../src/components/SkillCard';

const Certifications = () => {
 return (
    <div className="p-5">
        <h2 className="text-3xl font-bold text-center mb-5 bg-yellow-600 text-white py-5">My Certifications</h2>

        <h3 className="text-2xl font-semibold text-center mb-3 bg-green-400 text-white py-5">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard skill="React Native - The Practical Guide [2024]" level="Expert" />
        <SkillCard skill="Certificate of completion - Django Masterclass : Build 9 Real World Django Projects " level="Expert" />
        <SkillCard skill="Certificate Angular March - 2022" level="Expert" />
        <SkillCard skill="Certificate RectJS - November 2021" level="Expert" />
        <SkillCard skill="Certificate Js Back-End - September 2021" level="Expert" />
        <SkillCard skill="Certificate JavaScript Applications " level="Expert" />
        <SkillCard skill="Certificate JavaScript Advanced - May 2021 " level="Expert" />
        <SkillCard skill="Certificate Programming Fundamentals with Javascript " level="Expert" />
        <SkillCard skill="Certificate Python Web Framework " level="Expert" />
        <SkillCard skill="Certificate Python Web Basics" level="Expert" />
        <SkillCard skill="Certificate Python OOP" level="Expert" />
        <SkillCard skill="Certificate Python Advanced" level="Expert" />
        <SkillCard skill="Certificate Python Fundamentals January 2020" level="Expert" />
        <SkillCard skill="Certificate of Programming Basics with Python" level="Expert" />
        </div>
    </div>
 )
}

export default Certifications;