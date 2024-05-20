import React from "react";
import { BottomMenu } from "../../components/BottomMenu";

export default function ArdenneVet({ onClick }) {
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

        <div className="py-10 px-16 h-full text-white overflow-auto">
          <p className="font-bold text-3xl mb-5">Ardenne Vétérinaire</p>
          <div className="flex gap-5 overflow-auto pb-5 mb-5">
            <img
              className="h-60 rounded-lg bg-white"
              src="projets-logo/ardennevet.svg"
              alt=""
            />
          </div>

          <div className="my-5">
            <p className="mb-2 text-2xl font-bold">Objectif du projet</p>

            <p>
              Créer un site web pour augmenter la visibilité en ligne de la
              clinique vétérinaire, de présenter leurs services, d'introduire
              leur équipe, et de faciliter la prise de rendez-vous pour les
              clients et les appels via la numéro d'urgence.
              <br />
              <br />
              Le site vise également à fournir des informations utiles sur les
              soins vétérinaires, partager les expériences/retours des clients
              et à renforcer la crédibilité et la confiance envers la clinique.
            </p>
          </div>

          <div className="my-5">
            <p className="mb-2 text-2xl font-bold">Ce que j'ai réalisé</p>

            <p>
              Le site web que j'ai créé pour la clinique vétérinaire comprend
              cinq pages : Accueil, Services, Équipe, Galerie Photos et Contact.
              <br />
              <br />
              Chaque page a été conçue pour être claire et épurée, facilitant
              ainsi la navigation pour toutes les générations. J'ai également
              intégré une localisation via Google Maps pour simplifier l'accès à
              la clinique pour les clients.
              <br />
              <br />
              Une compagne publicitaire à été faite sur Google et Facebook.
            </p>
          </div>

          <div className="flex gap-5 justify-center my-10">
            <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
              <img
                src="icons-tech/react.svg"
                alt="react"
                className="object-cover"
              />
            </div>
            <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
              <img
                src="icons-tech/ads.svg"
                alt="ads"
                className=" object-cover"
              />
            </div>
            <div className="h-28 w-28 bg-white rounded-lg flex justify-center items-center p-4">
              <img
                src="icons-tech/gmaps.svg"
                alt="gmaps"
                className=" object-cover"
              />
            </div>
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

      <div className="w-full flex justify-center">
        <BottomMenu />
      </div>
    </div>
  );
}
