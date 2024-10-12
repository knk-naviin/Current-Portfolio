import React from "react";
import "../index.css";
import "../Styles/header.css";
import Frame from "../assests/frame.png";
import LinkIn from "../assests/linkin.png";
const Header = () => {
  return (
    <section id="home">
      <div>
        <p className="text-center ease-in-out duration-300   main-text"></p>
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div class="absolute inset-0 -z-10 overflow-hidden">
            <svg
              class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  stroke-width="0"
                />
              </svg>

              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          {/* Name and Designation */}
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div class="lg:pr-4">
                <div class="lg:max-w-lg">
                  <h1 class="mt-2 text-3xl font  tracking-tight text-gray-900 sm:text-4xl">
                    NAVEENKUMAR K
                  </h1>
                  <p class="text-base font-semibold leading-7 text-indigo-600">
                    B.Tech IT
                  </p>
                  <p class="mt-6 text-xl leading-8 text-gray-700">
                    I am seeking a challenging and fulfilling IT position where
                    I can leverage my skills and expertise, contribute to the
                    organization's growth, and remain adaptable, innovative, and
                    resourceful.
                  </p>
                </div>
              </div>
            </div>

            <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl width-20px ring-1 ring-gray-400/10 sm:w-[57rem]"
                src={LinkIn}
                alt="Linked in Profile Pic"
              />
            </div>

            <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              {/* Educaion Backgrounds */}
              <div class="lg:pr-4">
                <ul role="list" class="divide-y divide-gray-100">
                  <li class="flex justify-between gap-x-8 py-1">
                    <h1 className="text-3xl font-comfortaa font-extrabold text-gray-900 sm:text-4xl">
                      Education
                    </h1>
                  </li>
                  {/* SSLC */}
                  <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://yt3.googleusercontent.com/Q217fl3JmitKGWyIuoG8PBeybDajvwhQZ_WabWWdYfDSdWWLkpkcpolSxFMJL5_igPqXWxEwbak=s160-c-k-c0x00ffffff-no-rj"
                        alt=""
                      />
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          SSLC
                        </p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                          Bharathi Vidhya Mandhir Mat Hr Sec School Nagalapuram
                        </p>
                      </div>
                    </div>
                    <div class="flex shrink-0 flex-col items-end">
                      <p class="text-sm leading-6 text-gray-900">88.4%</p>
                      <p class="mt-1 text-xs leading-5 text-gray-500">
                        Batch-2019
                      </p>
                    </div>
                  </li>
                  {/* HSC */}
                  <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="https://yt3.googleusercontent.com/Q217fl3JmitKGWyIuoG8PBeybDajvwhQZ_WabWWdYfDSdWWLkpkcpolSxFMJL5_igPqXWxEwbak=s160-c-k-c0x00ffffff-no-rj"
                        alt=""
                      />
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          HSC
                        </p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                          Bharathi Vidhya Mandhir Mat Hr Sec School Nagalapuram
                        </p>
                      </div>
                    </div>
                    <div class="flex shrink-0 flex-col items-end">
                      <p class="text-sm leading-6 text-gray-900">91.6%</p>
                      <p class="mt-1 text-xs leading-5 text-gray-500">
                        Batch-2021
                      </p>
                    </div>
                  </li>
                  {/* College */}
                  <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhARDxAWFRAQEBMXDxIWDw8WEBMVGhcXFhkVFxgaHSgsGR8lGxUXITEhJSk3LjoxGyAzOD8sNygtLzcBCgoKDg0OGxAQGi0fICU3Ky0tLy0rKy0yLysrLS0rKystLjcuKy03LzctNS8tMTUtLTUtKy4tLTUtNy0tLS0tK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABGEAABAwIDBQMGCQoGAwAAAAABAAIDBBEFEiEGEzFBUSJhcRQjMoGRkiQzU2KhsbLR4QcVFjRScnOCovAlVJOzwdJCRHT/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAwYC/8QALREAAgICAQMCAwgDAAAAAAAAAAECAwQRMRIhUQVBE5HRIjJhcYGh4fAjYrH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA4tt3tXWtrZ4op3RxxODWNYbcgSSefErX/0txD/OS/6hWbb8f4hV3+UH2Wla+r2quHQu3sc/bbPrfd8n6D2FxOSqooJpjeRweHusBfK9zb2HWyv1qn5Lx/htP4y/7r1taprUlNpF3S264t+D6iItZtCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDw94AJJsALk8lWnaCl+WHsd9y9bRfq837q5wVV52dKiSjFIssLCjfFykzpVLjFPI4NZIC48BqL+1T1zDCT5+D+NH9oLp4W7BypXxbkuDTm4yomlF8lNiuzFFUv3lRTte+1s3aDiO/KRf1qGNg8L/yjffl/wCy2VCrFWTS0myvdUG9tIxU1OyNrWRtDWMFmtAAaB0AWVafjONTtlexj8rWm1gGm/eq849VfKn3Wfcqiz1aqM3Fp9izr9NslFNaOgItP2fxqd8zGSPzNffiGi2hPLwW4KZjZMb4dUSNfRKmXTIIouIVrIWF7zoOA5k9AtSk2rqLnK1gHIWJt3cV4yMyqhpSfc9UYtl3eKN3RaK7aup6M90/etj2cxN9RGXPbZzXWJHonT8VijOqul0x5Pd2FbVHqlwXCIimEQIiIAiIgCIiAIiIAiIgIWL07pIZGN9JzdB3rQX4PU/Iv91dKRQsrBhkSUm9aJmNmzoTUVs59hGDVG+iLo3Nax7XEuFhYG66Ci8yPDQXONmgXJJ0A6lbMbFjRHpj32a8nJlfLql20ekWqP8Ayi4WCR5QTY8RDMR9lZqDbrDp5GxR1HbebNDo5WgnkLkWueCmumaW9MhK6tvXUvmUWOnz8375+oKuJWxY1gM7pnvjaHNeb+k0EaDTVQDs7V/Jf1x/euOvxLviyai+X7HVUZFXw4/aXHk+bNfrMPi77JW/SSBoJcbAC5PIBc3G9ppWktyyMNwCNPxFlNxbaKSdgjyhov27OJzfgpeFlxx6pRl97wR8vElfZGUfu65MWO4oaiS4+Lbowf8AJ7yqwlLr1FE57gxgu5xsAq2c52z6n3bLKEI1Q0uyRnwygfUSBjP5jyaOq6LRUrYmNYwWa0ad/eVFwTC207A0avOr3dT9ysl0mBhqiG3y/wC6Oezct3S0uEfURFYEEIiIAiIgCIiAIiIAiIgCIiA+Kq2t/Uq3/wCSf/bcrZQcapDPT1EINjNDIwE8AXNLb/SsxfdHma3Fo/NSlYX8dB/Gj+0FdP2DxMEjyVxseIfEQf6lNwTYLETPDvIN2xsjS97nx2aAQTwOqvZXV9L7o5+NNnUvsv5HcQirqvGaeJ2SSUBw4jUkexYv0jpPlh7Hfcucd1aenJfM6ZUWtbUX8iv25YN1G63aElr9xab/AFBaXdXu1OONqMscWrGm+ax7TuAt7SqWoppI7bxjm5hdtxa/93XO57VlrlDujo8CDrpUZ9mebq72Sqo2TWkGrxZjuh6etUF0zKLTP4c1NexKuqVkHB+511Fr+yuNb5u7kPnWD329fHqtgXWVWxtgpROStqlVNwlyj6iItprCIiAIiIAiIgCIiAIiIAiIgCIiAL4V9QoDlGPu+Ez/AMR31qAHKVtC74TUfxXfWq/OuVuW7Jfmdtjx/wAUfyRe7KNDquEEXF3H1hpI+lb/AIxhraiMsdoeLHc2u6rnuxjr1kP8/wBhy6irb0+tOlprllD6tKUMiLT4S/6zkdbTvie6OQWc069/eFhzrpG0mBtqWXbpM0dh3X5p7lzSpidG5zJGlrmmzgeSrsrEdMu3Ba4WXHIj/suUZ6WrdG9sjDZzTcFdOwTE2VMYe3jwe3m13RclzraNgWy74uaDuspEh1yk/wDiPH8Vu9PtlCfT7M0+qY0J1fE4a/ujoaIivzmAiIgCIiAIiIAiIgCIiA+KsxTGo4JaaJ7XF1U9zYyA3KCLHta6cVZrRPyj0r5Z8MjjkMbpJpWiQXu24bcjvtde6oqUtM1XScY7X4GxUO0MU1RJTwse/cjz0wDdwx37Ga+ru4D6iseLbVU9NUwUsmbeT5bEBuRmZ2VuYk6XPcqPY6byCebDJiAAXS0khAG9jNycx0u4W49x5ALXJqOsxBtdUw0weypeBTymUNkjZC4huRtudtdVujVHqe+PqaJXS6Vrn6HRdo8ejomRvkje/eytjY2NrS8uIcRoSP2VEw3ayKWdlPJBPBLIHGITRBgfYXIaQTyWr7Q4ma2gwqUOyyPr4GvcLXZIA9riB4628FIoqd9PikTcQlfM4sd+bpnFrYwSLPYWgaP5Xv05kIqo9Pfnv+wd0upa47fufMZxKhknqC6hqnup3ls8kUYMYI5mz+gUmfD8LbR+XWeYMgcLPOY65coBPHNooOEYVU1FTizYawwRmqc2VogjeX3vwcdW+pfdoKEsdQYVRR70U/wiZjnhoc1rtM7uQLi64tzC1SxMeUl2X4/IkR9Qyox7SeuF89I2LZCkonxsq6VjhvAQM5u9upBBFyAbhYajbiIGQw01RPFCSJZoogYgRxsSRe3VVWyDpoaitoZ2CF1QHVFO1r8zW5rtcGuFr6290quwnGm0lD5HJU+R1dNJJvM1MZd4C5zhlB0IOYa93Re4Y8INqK7fU1WZVlmpTffvtvyvY6LQ4lFNC2ojfeJzMwdwsOd78LWPsVPgWL0WKB72w3MTg0iWKPPY6gjU6HX2Fa5W4vVPwmnjeD5ZXyGFjcgjOUvcL5QAAMlhf5wKx4UKigrqZ09O2GGqiZTENlDwXsAEbjoNeDfasuiLi98+36GFkyUo647b/UvaPEMOlrJKEUjRLGHXcYId27La4ab34HpyUzZraamqpJqenjc3yfQktYIyMxbdljw06LQsbkfBUV1bEPOU1eB/LJC5h+nKrz8ntDuKqaIizm0NMX/vOGZ39RKzLHrjHqXhfyYWTbKai3vu/wCDoiIijEsIiIAiIgCIiAIiIAiIgCjTS2cBYcL3cbc7af30UlVmO4k2mYx7mh13kauIAsx8hOgPJhHDmsPfsZRk8rBLbtGtra6gZg3XTT0uHcV7kqcodlaOy5oA8cuv9SrpNoYBvBu3lzTYtyNGZwa5zhcm3ZDHXv00ugx2CwzsIzDTRpBNmkMubXOvDuvoF51LyZ3HfBYCcXtlaACPEnLe4Fv71RlRePO5ouLEDkOGt7aeKhyY7TsJDw5uQDMS1pDfiyRoTw30fdr3FfaTG4Xu3bGPB3u7tuwBmtJm58ty8Hw53Cal5G4+CUypObKGi9zci5GmXu+cvs1Rlc7sjssvfmeOn0KPWYkIo5X5B5qZkYGYgHO6NoJIabfGdDwUM7RxOAMcLnylkRDSABeUxgNznh8c0+B9Sal5G4+CyFXc2ygOBsbngbXIv4Ly+qaSCWAgH0uJAytdmGnzlC/SODLdzHehGdGgtcXbmzW9f1iLUgce4qxhq2udEGt7M0LpASCHADd2BB4aSfQmpeRuPgxituHOyDsNuPEta7/lenVZu0FgPo8naXcR004c1V0m0sLw1z4iC8tAytL9HMD9dBqA4XAvxFrrI3aSAG2Rwacm7s0EuDg52bKOAs2/XXgsdM/JncfBO8sGgLBZ+TXTUuPA/Ws9LPn1sAS1p0NzY346dyq6baFjr54XNtK5oALXWY0s7buFvjG6C6n4ViMc4c6IOsHWJLbZtAQ4er1rKUvdmG4+yJ6Ii9nkIiIAiIgCIiAIiIAiIgCh4hVMjDM7c2Z+Vo7HHK4k3cQB2QfapiiYhI9rW5Id6S9oLczG2HEu7XG1kBWy4rR2cSwFrr5/ME3yNa+5FtbMIK+S41RtL940DIw5iYtbXyObw6i1ufeszaufX4DpckXliub2J0HA6uHqHXT55VObk0HHQjfQlx19lufFAeW4tSC/ZsSCywh1Ia57Q3QajzbiB3KXQVUEuaSIX87lc7dkEvAtc6a6OtdeaaeRxBdSmPXW7onG1nHkdNWM94dFFgray5+BBjcpNt8wuL9OmnVAe241T53RkEHftYSWABz7lod39qO1+tljkxeBuu4dn3QIAZDnsHPswdrrE63LhzIXry+qsSKA5jqLzwakZbZreJ91Z555vOgUmbKx27O8jyyHNYNN/RvoSgPVFPDNna2MFrQ0G4iLHBzQbaE8g3Q/NU4RtuDYXaCGm3AG1wPdHsVY2rnBcRREXcL2lhzOFwMx8Bc8VkkragEgUtwHuAO9YLgHRwHe1ATXU7Da7G9ktLeyNCOFull58ki+Tb6Wb0G+lxzeOvFQm19Sf/TI7dtZojYWPa0PDQd+q9wVs7mBxpi1+cBzS9ug1u4Hnrp9KAm7hn7I7+yO77h7F9jia2+VoGYkusALk8Sep71WQ19WfSoiCG6nyiLKTbgLa8e5SqCplfn3kBiAtlu9js3G57J05cUBNREQBERAEREAREQBERAEREAUatgc9uVsjoyHNOZts2hzW15EjXuuFJRAVX5un0+FvBBGoji19G97g/sn3isbcKnF7VslybnssI4O0F72F3A+oK5RAVkVBM10Z8pcWNa0SNLQc+Vtr3PC5sdO9YY8HmFvhsxsBxDDezs4vprwynqParlEBWfm6XLG0VLwGBwfYAmToSXXIPgfYvjcMkERjNVJmNrS6Z29beI5FWiICrkw6W5Lal7QXA2sHaXBt2r8gR69bnVZsNpJI828ndLmItma0ZeN7W1N781ORAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k="
                        alt=""
                      />
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          B.Tech IT
                        </p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                          Karpagam College of Engineering Coimbatore-32
                        </p>
                      </div>
                    </div>
                    <div class="flex shrink-0 flex-col items-end">
                      <p class="text-sm leading-6 text-gray-900">7.5 CGPA</p>
                      <p class="mt-1 text-xs leading-5 text-gray-500">
                        Batch-2025
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
