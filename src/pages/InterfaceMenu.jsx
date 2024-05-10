import React from "react";

export default function InterfaceMenu() {
  const goToPage = (page) => {
    if (page === 1) {
      console.log("1");
    } else if (page === 2) {
      console.log("2");
    } else if (page === 3) {
      console.log("3");
    } else if (page === 4) {
      console.log("4");
    }
  };

  return (
    <div className="flex gap-x-40 text-white ">
      <div className="flex flex-col items-center">
        <button onClick={() => goToPage(1)}>
          <img className="h-56" src="/icons-menu/a-propos.svg" alt="A propos" />
          <p className="text-4xl font-bold">A propos</p>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => goToPage(2)}>
          <img className="h-56" src="/icons-menu/projets.svg" alt="Projets" />
          <p className="text-4xl font-bold">Projets</p>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => goToPage(3)}>
          <img className="h-56" src="/icons-menu/contact.svg" alt="Contact" />
          <p className="text-4xl font-bold">Contact</p>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => goToPage(4)}>
          <img className="h-56" s src="/icons-menu/musique.svg" alt="Musique" />
          <p className="text-4xl font-bold">Musique</p>
        </button>
      </div>
    </div>
  );
}
