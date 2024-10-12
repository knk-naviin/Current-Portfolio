import React, { useState } from "react";
import "../Styles/achievement.css";

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="achievements">
      <div className="achievement-container">
        <div className="content mx-auto max-w-7xl px-6 mt-20 lg:px-8">
          <div>
            <h1 className="title text-3xl font-comfortaa font-extrabold text-gray-900 sm:text-4xl font  mt-2 text-center  ">
              Achievement
            </h1>
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
              <p className="achievement-text indent-6 m-2 col-span-2 text-justify text-xl leading-8 text-gray-500">
                Our team, Yolo Racer, achieved the prestigious Best Hill Climb
                Award at the 2024 SIEP India e-bike challenge, organized by the
                Imperial Society of Innovative Engineers (ISIE India). The event
                took place in January 2024 at IES University, Bhopal, Madhya
                Pradesh. Our team's victory in the hill climb segment showcased
                not only technical expertise but also strategic mastery in
                optimizing the e-bike for the challenging terrain. This
                accomplishment reflects the hard work, innovation, and
                dedication of our team in the field of electric vehicle
                competitions, marking a significant achievement in e-bike design
                and performance.
              </p>

              {/* Clickable Image */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGeYH7s3SmY-A/feedshare-shrink_1280/feedshare-shrink_1280/0/1706780160186?e=1731542400&v=beta&t=YhST73WoAdoFhBe6T7DLT6llO-Rq2XqDxvgCco_u_84"
                className="m-2 cursor-pointer"
                alt="Achievement"
                onClick={() =>
                  openModal(
                    "https://media.licdn.com/dms/image/v2/D4D22AQGeYH7s3SmY-A/feedshare-shrink_1280/feedshare-shrink_1280/0/1706780160186?e=1731542400&v=beta&t=YhST73WoAdoFhBe6T7DLT6llO-Rq2XqDxvgCco_u_84"
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={modalImage} alt="Full view" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
