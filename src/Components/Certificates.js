import React, { useState } from "react";
import "../Styles/certificates.css"; // Include your styles here

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  const certificates = [
    {
      id: 1,
      title: "E-Bike Challenge",
      issuer: "Imperial Society of Innovative Engineers (ISIE)",
      date: "Jan 2024",
      credentialId: "ISIE/E-Bike24/775",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D562DAQHIo_PEGN8fjg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719358012787?e=1730185200&v=beta&t=mgw6-Yrdh1wH1udTXuWAx2olME1Jwh15Z0K3gAlD1TM",
    },
    {
      id: 2,
      title: "Flutter App Development",
      issuer: "Techobytes Technologies",
      date: "Nov 2023",
      credentialId: "TB-CHESIITM-FLUTTER-041",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D562DAQGYsbljWs2a2g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719357768671?e=1730185200&v=beta&t=UUGw6sCDmfi6BLnMob1E53s_ER4XTtKv9GhA5_qpsNU",
    },
    {
      id: 3,
      title: "React (Basics)",
      issuer: "HackerRank",
      date: "Jan 2024",
      credentialId: "f87f75a65b2d",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D2DAQGNg3Mr8KFtow/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707813825118?e=1730185200&v=beta&t=rWeeeM7NNwIKRsUEhXo036oJHxoOp2aM0vJqaxvYK30",
    },
    {
      id: 4,
      title: "CSS (Basics)",
      issuer: "HackerRank",
      date: "Oct 2023",
      credentialId: "2415A0A3D14",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D2DAQEro2Y6YY_uoA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1707813339612?e=1730185200&v=beta&t=oqu4W8IExP5w9HXpxnl166g8tbz-VHEsffC008WeARc",
    },
    {
      id: 5,
      title: "JavaScript (Basics)",
      issuer: "HackerRank",
      date: "Oct 2023",
      credentialId: "a5a564787886",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D2DAQHMZykiqx3DMg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707813775431?e=1730185200&v=beta&t=ZlbB9M0JkssrOtSZq-xk5l0g9fqRXU-wAKNS9VtmG1Y",
    },
    {
      id: 6,
      title: "Java (Basics)",
      issuer: "HackerRank",
      date: "Oct 2023",
      credentialId: "ed7ececdeb2d",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D2DAQGXzpVdf-BCuw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707813749920?e=1730185200&v=beta&t=L3wlxyY_XViNXgpOu-JUSKXvNKZxynlPRBxeWgRgLJE",
    },
    // Add more certificate objects here
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the image URL when clicked
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <section id="certificates">
      <div className="certificates-container  mx-auto max-w-7xl py-20 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-comfortaa font-extrabold text-gray-900 sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A collection of Certificates that I have completed.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="max-w-sm box rounded border border-grey-600 dark:bg-gray-800 dark:border-gray-700"
              onClick={() => openModal(cert.imageUrl)}
            >
              <img
                className="rounded-t-lg cursor-pointer"
                src={cert.imageUrl}
                alt={cert.title}
              />
              <div className="p-1">
                <h5 className="text-lg pl-1 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {cert.title}
                </h5>
                <h2 className="pl-1 mt-1 line-clamp-2 text-sl leading-6 text-gray-600">
                  Issued by {cert.issuer} on {cert.date}
                </h2>
                <p className="mt-1 pl-1 line-clamp-3 text-sm leading-6 text-gray-500">
                  Credential ID {cert.credentialId}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Full-screen certificate" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
