import React from "react";
import "../index.css";
import "../Styles/skills.css";
import Java from "../assests/java.png";
import Flutter from "../assests/flutter.png";
import C from "../assests/C.png";
import ReactL from "../assests/react.png";
import Python from "../assests/python.png";
import Nodejs from "../assests/nodejs.png";
import Expressjs from "../assests/expressjs.png";
import Dbms from "../assests/dbms.png";

const Skills = () => {
  return (
    <section id="skills">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-0">
            <h2 className="text-3xl font-comfortaa font-extrabold text-gray-900 sm:text-4xl">
              Skills
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A collection of tools, languages, and frameworks I’ve mastered.
            </p>
          </div>

          {/* Skills Icons Grid */}
          <div className="mx-auto grid gap-x-8 gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* Skill 1 - Java */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Java}
                alt="Java"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 2 - Python */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Python}
                alt="Python"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 3 - React */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={ReactL}
                alt="React"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 4 - C */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={C}
                alt="C"
                style={{ width: "70px", height: "100px", objectFit: "contain" }}
              />
            </div>

            {/* Skill 5 - Flutter */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Flutter}
                alt="Flutter"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 6 - MongoDB */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*iMxRdJodRNcKsMn37nNlog.png"
                alt="MongoDB"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 7 - Node.js */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Nodejs}
                alt="Node.js"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 8 - Express.js */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Expressjs}
                alt="Express.js"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Skill 9 - DBMS */}
            <div className="flex justify-center">
              <img
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                src={Dbms}
                alt="DBMS"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
