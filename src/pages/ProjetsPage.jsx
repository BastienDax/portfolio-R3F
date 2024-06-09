import React, { useState } from "react";

import Fillup from "./projets/Fillup";
import ArdenneVet from "./projets/ArdenneVet";
import Smile from "./projets/Smile";
import Unisaide from "./projets/Unisaide";
import Lystya from "./projets/Lystya";

export default function ProjetsPage({ onClick }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = () => {
    setCurrentPage(0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Fillup onClick={handleClick} />;
      case 2:
        return <ArdenneVet onClick={handleClick} />;
      case 3:
        return <Smile onClick={handleClick} />;
      case 4:
        return <Unisaide onClick={handleClick} />;
      case 5:
        return <Lystya onClick={handleClick} />;

      default:
        return null;
    }
  };

  return (
    <div>
      {currentPage === 0 && (
        <>
          <div className="container mb-16 sm:mb-0">
            <div className="absolute top-4 left-4">
              <button
                className="h-9 w-9 bg-gray-900 bg-opacity-15 rounded-full flex justify-center items-center"
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

            <div className="mb-20 pb-12 h-full text-white overflow-auto">
              <div className="flex bg-projets px-8 sm:h-[80%] sm:px-16 text-black">
                <div className="mt-40 mb-20 w-full sm:w-2/3 flex flex-col">
                  <p className="mb-2 text-sm">Projet à la une</p>
                  <p className="mb-2 font-bold text-4xl">FillUP</p>
                  <p className="w-full sm:w-3/4">
                    J'ai été mandaté par cette startup pour développer une
                    application web destinée à réduire les files d'attente dans
                    les bars et lors des événements.
                  </p>
                  {/* <a className="btn-projets mb-20 sm:mb-0" href="#projets">
                    En voir plus
                  </a> */}
                </div>
              </div>
              <div className="mt-8 pl-8 sm:pl-16">
                <p
                  id="projets"
                  className="mb-8 font-bold text-xl sm:text-3xl md:text-4xl"
                >
                  Mes clients
                </p>
                <div className="-ml-8 sm:-ml-16 px-8 sm:px-16 overflow-x-auto whitespace-nowrap flex gap-x-6 md:gap-x-12 gap-y-32 h-56">
                  <div className="min-w-80 h-36 rounded-lg bg-fillup">
                    <button
                      onClick={() => setCurrentPage(1)}
                      className="text-start"
                    >
                      <div className="min-w-80 flex justify-center items-center rounded-lg">
                        <img
                          className="h-36 object-cover rounded-lg"
                          src="projets-logo/fillup.png"
                          alt="Projet Fillup"
                        />
                      </div>
                      <p className="mt-2 text-lg sm:text-xl font-bold">
                        FillUP
                      </p>
                      <p>Plateforme événementielle</p>
                    </button>
                  </div>
                  <div className="min-w-80 h-36 bg-white rounded-lg">
                    <button
                      onClick={() => setCurrentPage(2)}
                      className="text-start"
                    >
                      <div className="h-36 min-w-80 flex items-center justify-center">
                        <img
                          className="h-32 rounded-lg"
                          src="projets-logo/ardennevet.svg"
                          alt="Projet Ardenne Vet"
                        />
                      </div>
                      <p className="mt-2 text-lg sm:text-xl font-bold">
                        Ardenne Vétérinaires
                      </p>
                      <p>Clinique vétérinaire</p>
                    </button>
                  </div>
                  <div className="min-w-80 h-36 bg-white rounded-lg">
                    <button
                      onClick={() => setCurrentPage(3)}
                      className="text-start"
                    >
                      <div className="h-36 flex justify-center items-center">
                        <img
                          className="h-32 object-cover rounded-lg"
                          src="projets-logo/smile.png"
                          alt="Projet Smile"
                        />
                      </div>
                      <p className="mt-2 text-lg sm:text-xl font-bold">
                        SMILE Care Group
                      </p>
                      <p>Soins médicaux infirmiers</p>
                    </button>
                  </div>
                  <div className="min-w-80 h-36 bg-unisaide rounded-lg">
                    <button
                      onClick={() => setCurrentPage(4)}
                      className="text-start"
                    >
                      <div className="flex justify-center items-center overflow-auto rounded-lg">
                        <img
                          className="h-36 object-cover rounded-lg"
                          src="projets-logo/unisaide.png"
                          alt="Projet Unisaide"
                        />
                      </div>
                      <p className="mt-2 text-lg sm:text-xl font-bold">
                        Unisaide
                      </p>
                      <p>Plateforme d'entraide pour les étudiants</p>
                    </button>
                  </div>
                  <div className="min-w-80 h-36 bg-white rounded-lg">
                    <button
                      onClick={() => setCurrentPage(5)}
                      className="text-start"
                    >
                      <div className="h-36 flex justify-center items-center overflow-auto rounded-lg">
                        <img
                          className="h-32 object-cover rounded-lg"
                          src="projets-logo/lystya.png"
                          alt="Projet Lystya"
                        />
                      </div>
                      <p className="mt-2 text-lg sm:text-xl font-bold">
                        Lystya
                      </p>
                      <p>Plateforme d'entraide entre citoyens</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {currentPage !== 0 && <div>{renderCurrentPage()}</div>}
    </div>
  );
}
