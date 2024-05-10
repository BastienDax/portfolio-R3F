import React, { useState } from "react";
import AboutPage from "./AboutPage";
import ProjetsPage from "./ProjetsPage";
import ContactPage from "./ContactPage";
import MusiquePage from "./MusiquePage";

export default function InterfaceMenu() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = () => {
    setCurrentPage(0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <AboutPage onClick={handleClick} />;
      case 2:
        return <ProjetsPage onClick={handleClick} />;
      case 3:
        return <ContactPage onClick={handleClick} />;
      case 4:
        return <MusiquePage onClick={handleClick} />;
      default:
        return null;
    }
  };

  return (
    <>
      {currentPage === 0 && (
        <div className="interfaceMenu flex justify-center items-center">
          <div className="flex gap-x-24 text-white">
            <div className="flex flex-col items-center">
              <button onClick={() => setCurrentPage(1)}>
                <img
                  className="h-36 hover:scale-105"
                  src="/icons-menu/a-propos.png"
                  alt="A propos"
                />
                <p className="text-2xl font-bold">A propos</p>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => setCurrentPage(2)}>
                <img
                  className="h-36 hover:scale-105"
                  src="/icons-menu/projets.png"
                  alt="Projets"
                />
                <p className="text-2xl font-bold">Projets</p>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => setCurrentPage(3)}>
                <img
                  className="h-36 hover:scale-105"
                  src="/icons-menu/contact.png"
                  alt="Contact"
                />
                <p className="text-2xl font-bold">Contact</p>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => setCurrentPage(4)}>
                <img
                  className="h-36 hover:scale-105"
                  src="/icons-menu/musique.png"
                  alt="Musique"
                />
                <p className="text-2xl font-bold">Musique</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {currentPage !== 0 && (
        <div className="flex justify-center items-centers">
          {renderCurrentPage()}
        </div>
      )}
    </>
  );
}
