// export default Navbar;
import React from "react";
import "../Ui/navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="flex items-center justify-between ">
            <div className="links justify-center">
              <a href="#home">About Me</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#certificates">Certificates</a>
              <a href="#achievements">Achievements</a>
              <a href="#contactme">Contact Me</a>
              <div>
                <a
                  href="/assets/resume.pdf"
                  download
                  className="h-20 live-btn px-5 text-indigo-700 transition-colors duration-150 border-0 border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-white "
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
