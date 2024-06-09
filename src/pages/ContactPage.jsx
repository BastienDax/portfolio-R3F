import React from "react";

export default function ContactPage({ onClick }) {
  return (
    <>
      <div>
        <div className="container mb-16 sm:mb-0 flex flex-col xl:flex-row">
          <div className="absolute top-4 left-4">
            <button
              className="h-9 w-9 bg-gray-300 bg-opacity-15 rounded-full flex justify-center items-center"
              onClick={onClick}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:anim="http://www.w3.org/2000/anim"
              >
                <path
                  id="Clear"
                  d="M1.06152 10.3618C0.955729 10.256 0.885905 10.1333 0.852051 9.99365C0.818197 9.854 0.818197 9.71436 0.852051 9.57471C0.885905 9.43506 0.953613 9.31445 1.05518 9.21289L4.83838 5.42334L1.05518 1.64014C0.953613 1.54281 0.885905 1.42432 0.852051 1.28467C0.822428 1.14079 0.822428 0.999023 0.852051 0.859375C0.885905 0.719727 0.955729 0.597005 1.06152 0.491211C1.16309 0.385417 1.28369 0.315592 1.42334 0.281738C1.56722 0.247884 1.70898 0.247884 1.84863 0.281738C1.99251 0.315592 2.11523 0.383301 2.2168 0.484863L6 4.26807L9.7832 0.484863C9.88477 0.383301 10.0054 0.315592 10.145 0.281738C10.2847 0.247884 10.4243 0.247884 10.564 0.281738C10.7036 0.315592 10.8263 0.387533 10.9321 0.497559C11.0379 0.599121 11.1077 0.719727 11.1416 0.859375C11.1797 0.999023 11.1797 1.13867 11.1416 1.27832C11.1077 1.41797 11.04 1.53857 10.9385 1.64014L7.16162 5.42334L10.9385 9.21289C11.04 9.31445 11.1077 9.43506 11.1416 9.57471C11.1755 9.71436 11.1755 9.854 11.1416 9.99365C11.1077 10.1333 11.0379 10.256 10.9321 10.3618C10.8263 10.4676 10.7036 10.5374 10.564 10.5713C10.4243 10.6051 10.2847 10.6051 10.145 10.5713C10.0054 10.5374 9.88477 10.4697 9.7832 10.3682L6 6.58496L2.2168 10.3682C2.11523 10.4697 1.99463 10.5374 1.85498 10.5713C1.71533 10.6051 1.57357 10.6051 1.42969 10.5713C1.29004 10.5374 1.16732 10.4676 1.06152 10.3618Z"
                  fill="white"
                  fill-opacity="0.45"
                ></path>
              </svg>
            </button>
          </div>

          <div className="overflow-auto flex flex-col xl:flex-row">
            <div className="pt-10 lg:py-10 pl-8 md:pl-16 w-full md:w-2/3 h-full text-white">
              <div>
                <img
                  className="h-36 w-36 sm:h-48 sm:w-48 rounded-full"
                  src="bastien_profil.jpeg"
                  alt="bastien_profil"
                />
              </div>

              <div>
                <h1 className="mt-6 mb-2 font-bold text-xl md:text-2xl lg:text-3xl">
                  Bastien Daxhelet
                </h1>
                <h2 className="mb-2 text-base md:text-xl">
                  Développeur Créatif <br /> React | JavaScript | ThreeJS
                </h2>
                <h3>Québec, QC, Canada</h3>
              </div>
            </div>

            <div className="pt-0 pb-10 xl:pt-10 px-8 md:px-16 h-full text-white">
              <p className="mt-6 mb-4 font-bold text-xl md:text-2xl xl:text-3xl">
                Discutons ensemble !
              </p>
              <p className="mb-8">
                Si vous avez une idée, un projet ou une demande, n'hésitez pas.
              </p>
              <a
                className="mb-2 flex items-center gap-2"
                href={"mailto:bastien.daxhelet@gmail.com"}
              >
                <svg
                  className="h-4"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M5.10325 10.2747V12.9804C5.10369 13.0724 5.13306 13.1619 5.18719 13.2362C5.24132 13.3105 5.31747 13.3659 5.40485 13.3946C5.49223 13.4233 5.58641 13.4237 5.67405 13.3958C5.76169 13.368 5.83834 13.3133 5.89316 13.2394L7.47589 11.0856L5.10325 10.2747ZM13.8161 0.0811342C13.7504 0.0343195 13.673 0.00659941 13.5925 0.00103963C13.512 -0.00452015 13.4315 0.012297 13.3599 0.0496313L0.233714 6.90443C0.15819 6.94435 0.0959624 7.00544 0.0546674 7.08022C0.0133724 7.155 -0.00519293 7.24021 0.00124976 7.32539C0.00769245 7.41057 0.0388629 7.49201 0.0909357 7.55973C0.143008 7.62745 0.213718 7.67849 0.294387 7.70659L3.94347 8.95387L11.7148 2.30909L5.70122 9.55418L11.8169 11.6445C11.8776 11.6648 11.942 11.6717 12.0056 11.6646C12.0692 11.6575 12.1305 11.6366 12.1852 11.6033C12.2399 11.57 12.2866 11.5251 12.3222 11.4719C12.3577 11.4186 12.3812 11.3583 12.3909 11.295L13.9952 0.50234C14.0071 0.422445 13.9967 0.340822 13.9651 0.26649C13.9335 0.192158 13.8819 0.12801 13.8161 0.0811342Z"
                    fill="white"
                  ></path>
                </svg>
                <p>bastien.daxhelet@gmail.com</p>
              </a>
              <a
                className="flex items-center gap-2"
                href={"tel:+1 367 380 3028"}
              >
                <svg
                  className="h-4"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame" clip-path="url(#clip0_268_2733)">
                    <path
                      id="Vector"
                      d="M13.9483 10.777C13.8521 10.2245 13.379 9.78413 12.7974 9.70655L9.57215 9.27488C8.98707 9.19497 8.40724 9.50588 8.16515 10.0274C8.10308 10.1612 8.05102 10.2994 8.0094 10.441C7.10582 10.0641 6.29498 9.51988 5.59499 8.82047C4.89498 8.12105 4.35132 7.31022 3.97449 6.40663C4.1174 6.36405 4.25507 6.31213 4.38807 6.24972C4.90957 6.00705 5.21815 5.42897 5.13999 4.8433L4.70832 1.61863C4.63073 1.03705 4.1909 0.563382 3.62799 0.465965C3.45039 0.434553 3.27049 0.417968 3.09015 0.416382C2.5663 0.418015 2.05149 0.552955 1.59419 0.808494C1.1369 1.06403 0.752168 1.43176 0.476235 1.87705C-0.122265 2.85238 -0.038848 4.10072 0.0999853 5.07897C0.415569 7.29447 1.55365 9.52222 3.22315 11.1917C4.46316 12.432 5.98449 13.3544 7.65765 13.8803C8.5029 14.1445 9.56107 14.4199 10.5796 14.4199C11.342 14.4199 12.0822 14.2653 12.6942 13.8365C13.0973 13.5533 13.4264 13.1772 13.6536 12.74C13.8808 12.3029 13.9995 11.8174 13.9997 11.3247C13.9997 11.162 13.9839 10.991 13.9483 10.777Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_268_2733">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0 0.416382)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p>+1 367-380-3028</p>
              </a>

              <div className="flex gap-5 mt-10">
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/bastiendaxhelet/"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-16 rounded-2xl"
                      src="socials-logo/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/bastien-daxhelet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-16 rounded-2xl"
                      src="socials-logo/linkedin.svg"
                      alt="Linkedin"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/BastienDax"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-16 rounded-2xl"
                      src="socials-logo/github.svg"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
