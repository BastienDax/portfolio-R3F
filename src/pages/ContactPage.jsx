import React from "react";
import { BottomMenu } from "../components/BottomMenu";

export default function ContactPage({ onClick }) {
  return (
    <>
      <div>
        <div className="container mb-16 sm:mb-0 flex flex-col xl:flex-row">
          <div className="absolute top-4 left-4">
            <button
              className="h-9 w-9 bg-gray-300 bg-opacity-15 rounded-full flex justify-center pt-1"
              onClick={onClick}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M8.25387 15C8.54113 15 8.77767 14.91 8.96349 14.7301C9.14937 14.5501 9.24231 14.3211 9.24231 14.0431V10.9187H9.48731C10.5799 10.9187 11.5458 11.0223 12.385 11.2295C13.2242 11.4367 13.9649 11.7925 14.6069 12.2968C15.2489 12.8012 15.815 13.5005 16.305 14.3947C16.4515 14.6564 16.6162 14.8227 16.7992 14.8936C16.9822 14.9645 17.1639 15 17.3441 15C17.5694 15 17.7708 14.9059 17.9482 14.7178C18.1256 14.5297 18.2143 14.2584 18.2143 13.904C18.2143 12.3937 18.0439 11.0346 17.7032 9.82686C17.3624 8.61912 16.8386 7.58722 16.1318 6.73117C15.425 5.87512 14.521 5.22082 13.4199 4.76825C12.3188 4.31569 11.008 4.08941 9.48731 4.08941H9.24231V0.99782C9.24231 0.72519 9.14937 0.490729 8.96349 0.294437C8.77767 0.0981457 8.5355 0 8.23697 0C8.02859 0 7.84273 0.0449836 7.67939 0.134951C7.51606 0.224918 7.32175 0.3735 7.09647 0.580696L0.430857 6.61667C0.267526 6.76389 0.154883 6.91383 0.0929301 7.0665C0.0309767 7.21918 0 7.36367 0 7.49998C0 7.63084 0.0309767 7.77261 0.0929301 7.92528C0.154883 8.07795 0.267526 8.2279 0.430857 8.37512L7.09647 14.4683C7.29923 14.6537 7.49072 14.7887 7.67095 14.8732C7.85118 14.9577 8.04549 15 8.25387 15Z"
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
                <h1 className="mt-6 mb-2 font-bold text-2xl md:text-3xl">
                  Bastien Daxhelet
                </h1>
                <h2 className="mb-2 text-lg md:text-xl">
                  Développeur Créatif <br /> React | JavaScript | ThreeJS
                </h2>
                <h3>Québec, QC, Canada</h3>
              </div>
            </div>

            <div className="pt-0 pb-10 xl:pt-10 px-8 md:px-16 h-full text-white">
              <p className="mt-6 mb-4 font-bold text-2xl md:text-3xl">
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

        <div className="w-full flex justify-center">
          <bottomMenu />
        </div>
      </div>
    </>
  );
}
