import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { Link } from "react-router-dom";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, setPlay, hasScroll } = usePlay();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <>
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <h1 className="logo">
              <b>Bastien Daxhelet</b> — Développeur Créatif
            </h1>
            <p className="intro__scroll">Scroll pour découvrir mon univers</p>
            <button
              className="explore"
              onClick={() => {
                setPlay(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path d="M1.8418 12.3999C1.57324 12.3999 1.3584 12.3022 1.19727 12.1069C1.04102 11.9165 0.962891 11.6626 0.962891 11.3452V1.04736C0.962891 0.72998 1.04102 0.476074 1.19727 0.285645C1.3584 0.0952148 1.57324 0 1.8418 0C1.98828 0 2.12744 0.0268555 2.25928 0.0805664C2.39111 0.129395 2.53027 0.195312 2.67676 0.27832L11.2168 5.22217C11.5244 5.39795 11.7368 5.55664 11.854 5.69824C11.9761 5.83496 12.0371 6.00098 12.0371 6.19629C12.0371 6.3916 11.9761 6.56006 11.854 6.70166C11.7368 6.83838 11.5244 6.99707 11.2168 7.17773L2.67676 12.1143C2.53027 12.2021 2.39111 12.2705 2.25928 12.3193C2.12744 12.373 1.98828 12.3999 1.8418 12.3999Z" />
              </svg>
              Démarrer l'expérience
            </button>
          </div>
          <div className="absolute top-8 left-8">
            <img className="h-20" src="logo/logo_blanc.svg" alt="" />
          </div>
          <div className="absolute top-8 right-8">
            <button
              className="contact"
              onClick={() => {
                setPlay(true);
              }}
            >
              Me contacter
            </button>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div>NAMUR, BE & QC, CA</div>
            <div>
              <a to={"mailto:bastien.daxhelet@gmail.com"}>
                BASTIEN.DAXHELET@GMAIL.COM
              </a>
            </div>
            <div>
              <a to={"tel:+32 472 09 18 22"}>+32 472 09 18 22</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
