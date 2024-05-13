import React from "react";
import SkillButton from "../components/SkillButton";
import { BottomMenu } from "../components/BottomMenu";

export default function AboutPage({ onClick }) {
  return (
    <div>
      <div className="container">
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

        <div className="py-10 px-16 h-full text-white overflow-hidden overflow-y-auto">
          <div className="flex justify-between">
            <div>
              <img
                className="h-48 w-48 rounded-full"
                src="bastien_profil.jpeg"
                alt="bastien_profil"
              />
            </div>
            <div>
              <img className="h-48" src="man.svg" alt="typing animation" />
            </div>
          </div>
          <h1 className="mt-6 font-bold text-2xl">Bastien Daxhelet</h1>
          <h2 className="my-6">
            Tortor viverra mollis mauris malesuada sed lobortis. Pharetra
            porttitor amet ac ipsum venenatis. Tristique et neque non sit
            phasellus mattis hac morbi facilisis.
          </h2>
          <h3 className="font-bold text-2xl">Ce que je réalise</h3>
          <p className="my-6">
            Tortor viverra mollis mauris malesuada sed lobortis. Pharetra
            porttitor amet ac ipsum venenatis. Tristique et neque non sit
            phasellus mattis hac morbi facilisis.Tortor viverra mollis mauris
            malesuada sed lobortis. Pharetra porttitor amet ac ipsum venenatis.
            Tristique et neque non sit phasellus mattis hac morbi facilisis.
          </p>

          <h3 className="my-6 font-bold text-2xl">Mon parcours</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl overflow-hidden">
                <img src="fillup.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">FillUP</p>
                <p>Plateforme pour de l'événementiel</p>
                <p>Freelance - 5 mois</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="React" />
                  <SkillButton text="NodeJS" />
                  <SkillButton text="MangoDB" />
                  <SkillButton text="Stripe" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img className="w-20" src="ardennevet.svg" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">Ardenne Vétérinaires</p>
                <p>Site web d'une clinique vétérinaire</p>
                <p>Freelance</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="React" />
                  <SkillButton text="UI/UX" />
                  <SkillButton text="SEO" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img src="smile.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">SMILE Care Group</p>
                <p>Site web pour des soins médicaux infirmiers</p>
                <p>Freelance</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="React" />
                  <SkillButton text="UI/UX" />
                  <SkillButton text="SEO" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl overflow-auto">
                <img className="h-full" src="unisaide.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">Unisaide</p>
                <p>Plateforme d'entraide pour les étudiants</p>
                <p>Freelance - 6 mois</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="React" />
                  <SkillButton text="NodeJS" />
                  <SkillButton text="MangoDB" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="h-32 w-32 bg-slate-50 rounded-2xl flex justify-center items-center">
                <img src="lystya.png" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">Lystya</p>
                <p>Plateforme d'entraide entre citoyens</p>
                <p>Freelance - 4 mois</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="PHP" />
                  <SkillButton text="MySQL" />
                  <SkillButton text="UI/UX" />
                </div>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="h-32 w-32 rounded-2xl flex justify-center items-center overflow-auto bg-yellow">
                <img className="h-28" src="storylific.jpeg" alt="" />
              </div>
              <div>
                <p className="font-bold text-lg">Story Lific</p>
                <p>Site web pour un podcast</p>
                <p>Bénévole</p>
                <div className="flex gap-x-2 mt-2">
                  <SkillButton text="Wordpress" />
                  <SkillButton text="Design" />
                  <SkillButton text="Responsive" />
                </div>
              </div>
            </div>
          </div>

          <h3 className="my-6 font-bold text-2xl">Retour des clients</h3>

          <p>Ajouter avis ici</p>

          <h3 className="my-6 font-bold text-2xl">Mes réseaux</h3>
          <div className=" flex gap-x-6">
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/bastiendaxhelet/"
                rel="noopener noreferrer"
              >
                <img className="h-24 rounded-2xl" src="instagram.svg" alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/bastien-daxhelet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-24 rounded-2xl" src="linkedin.svg" alt="" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/BastienDax"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-24 rounded-2xl" src="github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <BottomMenu />
      </div>
    </div>
  );
}