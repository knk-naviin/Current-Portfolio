import Shalong from "../assests/shalong.jpg";
import "../Styles/projects.css";
import Ivm from "../assests/ivm.jpg";
import { saveAs } from "file-saver";
import React, { useState } from "react";
import Pop from "../assests/popappz.png";
const Projects = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const apkUrl = "../../assets/navir.apk"; // Your APK file URL
      const response = await fetch(apkUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      saveAs(blob, "Inventory Management.apk");

      setDownloading(false);
    } catch (error) {
      console.error("Error downloading the file:", error);
      setDownloading(false);
    }
  };

  return (
    <section id="projects">
      <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center py-10 ">
            <h2 className="text-3xl font-comfortaa font-extrabold text-gray-900 sm:text-4xl">
              Works and Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              My Current works and project where listed below with live link.
            </p>
          </div>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Oct 2021</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Flutter
              </a>
              <a class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Firebase
              </a>
              <a class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Play Console
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Shalong - An Online Haircut Booking application</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Shalong is a Barber Shop App using Flutter and Firebase, where
                my UI and backend work increased bookings by 30% and improved
                user satisfaction.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={Shalong}
                alt=""
                class="h-10 w-20 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/Shalong-app"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Feb 2022</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Flutter
              </a>
              <a class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Firebase
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Inventory Management - Mobile App using Flutter</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Developed a Flutter app for supermarket inventory management,
                integrated with Firebase for real-time data storage, improving
                stock control, efficiency, and Ux.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img src={Ivm} alt="" class="h-10 w-20 rounded-full bg-gray-50" />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/Inventory-Management"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
                {downloading ? (
                  <p>Downloading...</p>
                ) : (
                  <button
                    className="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white"
                    onClick={handleDownload}
                  >
                    Download APK
                  </button>
                )}
              </div>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Jun 2023</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                Java
              </a>
              <a class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                IDE-Eclipse
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Event Management - Java Console application</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Event Management is a Java console app I developed using JDBC to
                log and manage event details, improving efficiency and data
                accuracy for streamlined record-keeping.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://as1.ftcdn.net/v2/jpg/03/94/43/32/1000_F_394433269_W2inRMhcHk6iNTYcmgh1cSQV1htNnCyA.jpg"
                alt="Java Console Application"
                class="h-10 w-20 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/EventManagementApp"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Aug 2022</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Flutter
              </a>
              <a class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Ui/Ux
              </a>
              <a class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Play Console
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Marine Ques - Question bank for DGS exit exam</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Designed the UI/UX for "Marine Ques," a Flutter question bank
                app for the DGS exit exam, focusing on user-friendly navigation
                and exam preparation.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://play-lh.googleusercontent.com/99pNNW_CcrPTpTaq8P3JsOfSY9_YNVhBAZKtxOppo8KOmTwYeUnWb4c4xy_qVnXaj-4H=w480-h960-rw"
                alt=""
                class="h-10 w-17 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/rajesht1989/marine_ques"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.yaash.marineques.marine_ques&pcampaignid=web_share">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Nov 2021</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Flutter
              </a>
              <a class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Play Console
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>iTest - Internet Speed Checking using pub package.</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Developed the iTest app using Flutter to check internet speed,
                featuring real-time performance metrics and seamless
                connectivity testing for users.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://github.com/knk-naviin/iTest/blob/main/itest/images/itest.png?raw=true"
                alt=""
                class="h-10 w-17 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/iTest"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://play.google.com/apps/test/com.yaash.itest.itest/1">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Feb 2024</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                React JS
              </a>
              <a class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Ui/Ux
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>My Old Portfolio Website - Using React JS</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                This is an old portfolio website that I previously used; I
                updated it with a new version in React.js, featuring a
                responsive design
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/746/868/non_2x/portfolio-button-speech-bubble-banner-label-portfolio-vector.jpg"
                alt=""
                class="h-19 w-20 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/My_Portfolio"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://a-nviinportfolio.netlify.app">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>May 2024</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                React JS
              </a>
              <a class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Ui/Ux
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>
                  Pop Appz - Sample Website for popappz solutions company.
                </h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Designed the Pop Appz Solution website by converting Figma
                designs into code using React.js, focusing on UI/UX to improve
                user experience and engagement.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img src={Pop} alt="" class="h-10 w-17 rounded-full bg-gray-50" />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/popappz-website"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://a-popappz-sample.netlify.app">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>
          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>Oct 2024</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                React JS
              </a>
              <a class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                Ui/Ux
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Current Portfolio - Using React JS</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                I updated my portfolio website, previously created in React.js,
                to showcase my projects and skills with a modern, responsive
                design.
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/746/868/non_2x/portfolio-button-speech-bubble-banner-label-portfolio-vector.jpg"
                alt=""
                class="h-19 w-20 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/My_Portfolio"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://a-naviinportfolio.netlify.app/">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>

          <article class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <div>
                <h1>2024</h1>
              </div>
              <a class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                React JS
              </a>
              <a class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                Mongo DB
              </a>
              <a class="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-600/20">
                Node JS
              </a>
              <a class="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/20">
                Express JS
              </a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <h1>Go Ride - Car Rental Web App using MERN Stack.</h1>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                Developed the UI/UX for Go Ride, a car rental web app using the
                MERN stack, enhancing user engagement and streamlining the
                booking process.(𝐈𝐧 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬)
              </p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                class="h-10 w-17 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <a
                  className="inline-flex btn items-center gap-2 rounded border border-indigo-600 px-4 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="https://github.com/knk-naviin/GoRide_Car_Rental"
                >
                  <span className="text-sm font-medium"> Source Code </span>
                </a>
              </div>
              <a href="https://a-goridecar.netlify.app">
                <button class="h-10 live-btn px-5 text-red-700 transition-colors duration-150 border-0 border-red-500 rounded-lg focus:shadow-outline hover:bg-red-500 hover:text-white">
                  ●︎ Live
                </button>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
