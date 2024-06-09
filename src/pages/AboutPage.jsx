import React from "react";
import SkillButton from "../components/SkillButton";

export default function AboutPage({ onClick }) {
  return (
    <div>
      <div className="container sm:mb-0">
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

        <div className="px-8 py-10 sm:px-16 h-full text-white overflow-y-auto">
          <div className="flex justify-between">
            <div>
              <img
                className="h-36 w-36 sm:h-48 sm:w-48 rounded-full"
                src="bastien_profil.jpeg"
                alt="bastien_profil"
              />
            </div>
            <div className="hidden sm:block">
              <img className="h-48" src="man.svg" alt="typing animation" />
            </div>
          </div>
          <h1 className="mt-6 font-bold text-xl sm:text-2xl">
            Bastien Daxhelet
          </h1>
          <p>Développeur Front-end Créatif</p>

          <h2 className="my-6">
            J’aide les marques et les entreprises à présenter leurs produits,
            idées et histoires de façon immersive pour captiver leurs clients et
            renforcer leur présence en ligne.
            <br />
            <br />
            Depuis mon plus jeune âge, je me suis plongé avec passion dans
            l'univers de la technologie et de l'innovation. J'ai déménagé de
            Belgique pour m'installer à Québec, au Canada, pour me développer et
            continuer d'apprendre.
          </h2>
          <h3 className="mt-4 sm:mt-0 font-bold text-xl sm:text-2xl">
            Mon objectif
          </h3>
          <p className="my-6">
            En créant des expériences immersives en ligne qui vont au-delà des
            attentes, en particulier dans le domaine captivant du Web et XR.
            Chaque projet est pour moi une opportunité d'offrir aux utilisateurs
            une immersion totale, où chaque interaction est une expérience
            unique et captivante.
          </p>

          <h3 className="my-6 font-bold text-xl sm:text-2xl">Mon parcours</h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-x-6">
              <div className="h-32 w-32">
                <div className="h-32 w-32 bg-slate-50 rounded-2xl overflow-x-auto flex justify-center items-center ">
                  <img src="projets-logo/fillup.png" alt="" />
                </div>
              </div>
              <div>
                <p className="mt-4 sm:mt-0 font-bold text-lg">FillUP</p>
                <p>Plateforme événementielle</p>
                <p>Freelance - 5 mois</p>
                <div className="-mx-8 px-8 flex gap-x-2 mt-2 overflow-x-auto">
                  <SkillButton text="React" />
                  <SkillButton text="NodeJS" />
                  <SkillButton text="MangoDB" />
                  <SkillButton text="Stripe" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img
                  className="w-20"
                  src="projets-logo/ardennevet.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="mt-4 sm:mt-0 font-bold text-lg">
                  Ardenne Vétérinaires
                </p>
                <p>Clinique vétérinaire</p>
                <p>Freelance</p>
                <div className="-mx-8 px-8 flex gap-x-2 mt-2 overflow-x-auto">
                  <SkillButton text="React" />
                  <SkillButton text="UI/UX" />
                  <SkillButton text="SEO" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img src="projets-logo/smile.png" alt="" />
              </div>
              <div>
                <p className="mt-4 sm:mt-0 font-bold text-lg">
                  SMILE Care Group
                </p>
                <p>Soins médicaux infirmiers</p>
                <p>Freelance</p>
                <div className="-mx-8 px-8 flex gap-x-2 mt-2 overflow-x-auto">
                  <SkillButton text="React" />
                  <SkillButton text="UI/UX" />
                  <SkillButton text="SEO" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-6">
              <div className="h-32 w-32">
                <div className="h-32 w-32 bg-slate-50 rounded-2xl overflow-x-auto">
                  <img src="projets-logo/unisaide.png" alt="" />
                </div>
              </div>
              <div>
                <p className="mt-4 sm:mt-0 font-bold text-lg">Unisaide</p>
                <p>Plateforme d'entraide pour les étudiants</p>
                <p>Freelance - 6 mois</p>
                <div className="-mx-8 px-8 flex gap-x-2 mt-2 overflow-x-auto">
                  <SkillButton text="React" />
                  <SkillButton text="NodeJS" />
                  <SkillButton text="MangoDB" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img src="projets-logo/lystya.png" alt="" />
              </div>
              <div>
                <p className="mt-4 sm:mt-0 font-bold text-lg">Lystya</p>
                <p>Plateforme d'entraide entre citoyens</p>
                <p>Freelance - 4 mois</p>
                <div className="-mx-8 px-8 flex gap-x-2 mt-2 overflow-x-auto">
                  <SkillButton text="PHP" />
                  <SkillButton text="MySQL" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>
          </div>

          <h3 className="my-6 font-extrabold text-2xl">Mes réseaux</h3>
          <div className=" flex gap-x-6">
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/bastiendaxhelet/"
                rel="noopener noreferrer"
              >
                <img
                  className="h-16 sm:h-20 md:h-24 rounded-2xl"
                  src="socials-logo/instagram.svg"
                  alt=""
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
                  className="h-16 sm:h-20 md:h-24 rounded-2xl"
                  src="socials-logo/linkedin.svg"
                  alt=""
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
                  className="h-16 sm:h-20 md:h-24 rounded-2xl"
                  src="socials-logo/github.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
