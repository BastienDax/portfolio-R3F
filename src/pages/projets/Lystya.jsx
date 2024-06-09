import React from "react";

export default function Lystya({ onClick }) {
  return (
    <div>
      <div className="container mb-16 sm:mb-0">
        <div className="absolute top-4 left-4">
          <button
            className="h-9 w-9 bg-gray-300 bg-opacity-15 rounded-full flex justify-center pt-1"
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

        <div className="px-8 py-10 md:px-16 h-full text-white overflow-auto">
          <p className="font-bold text-3xl my-5">Lystya</p>
          <div className="flex gap-5 overflow-auto pb-5 mb-5">
            <img
              className="h-80 rounded-lg bg-white"
              src="lystya/one.jpeg"
              alt="lystya"
            />
          </div>

          <p className="mb-5">
            <a href="https://www.lystya.org" target="_blank">
              www.lystya.org
            </a>
          </p>

          <p>Projet d'une association : Plateforme d'entraide citoyenne.</p>

          <div className="my-5">
            <p className="mb-2 text-2xl font-bold">Objectif du projet</p>

            <p>
              Une plateforme permettant aux habitants d'un village de proposer
              leurs services ou leur aide et d'autres peuvent partager leurs
              difficultés.
            </p>
          </div>

          <div className="my-5">
            <p className="mb-2 text-2xl font-bold">Ce que j'ai réalisé</p>

            <p>
              J'ai créé une plateforme web où les citoyens pouvaient s'inscrire,
              partager leurs besoins et entrer en contact les uns avec les
              autres. Son objectif principal était de rassembler et de renforcer
              les actions citoyennes actuelles et futures.
            </p>
          </div>

          <div className="-mx-8 px-8 md:-mx-16 md:px-16 flex gap-5 my-10 overflow-x-auto lg:overflow-hidden whitespace-nowrap">
            <div>
              <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
                <img
                  src="icons-tech/php.svg"
                  alt="react"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
                <img
                  src="icons-tech/mysql.svg"
                  alt="nodejs"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
                <img
                  src="icons-tech/figma.svg"
                  alt="figma"
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
