import React, { useState, useEffect } from "react";

export default function FaceSVGAnimation() {
  const [currentSVGIndex, setCurrentSVGIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSVGIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="svg-container">
      {Array.from({ length: 4 }, (_, index) => (
        <svg
          key={index}
          className={index === currentSVGIndex ? "visible" : "hidden"}
          xmlns="http://www.w3.org/2000/svg"
          width="213"
          height="213"
          viewBox="0 0 213 213"
          fill="none"
        >
          {index === 0 && (
            <>
              <path
                d="M7.89258 43.1469V42.5766C7.89258 23.4808 23.3734 8 42.4691 8H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M204.893 169.853V170.423C204.893 189.519 189.412 205 170.316 205H169.746"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.89258 169.853V170.423C7.89258 189.519 23.3734 205 42.4691 205H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M169.746 8H170.316C189.412 8 204.893 23.4808 204.893 42.5766V43.1469"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M83.5831 36H83.321C77.5616 36 72.8926 40.669 72.8926 46.4285V53.111C72.8926 58.8705 77.5616 63.5395 83.321 63.5395H83.5831C89.3426 63.5395 94.0116 58.8705 94.0116 53.111V46.4285C94.0116 40.669 89.3426 36 83.5831 36Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M166.101 36H165.839C160.079 36 155.41 40.669 155.41 46.4285V53.111C155.41 58.8705 160.079 63.5395 165.839 63.5395H166.101C171.86 63.5395 176.529 58.8705 176.529 53.111V46.4285C176.529 40.669 171.86 36 166.101 36Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M89.4883 141.58C98.8068 151.368 111.162 156.598 124.712 156.598C138.262 156.598 150.618 151.368 159.936 141.58"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M125.332 74.2686L133.475 82.4117C134.446 83.3829 134.446 84.9591 133.475 85.9341L118.014 101.396"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </>
          )}

          {index === 1 && (
            <>
              <path
                d="M7.89258 43.1469V42.5766C7.89258 23.4808 23.3734 8 42.4691 8H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M204.893 169.853V170.423C204.893 189.519 189.412 205 170.316 205H169.746"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.89258 169.853V170.423C7.89258 189.519 23.3734 205 42.4691 205H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M169.746 8H170.316C189.412 8 204.893 23.4808 204.893 42.5766V43.1469"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M49.5831 36H49.321C43.5616 36 38.8926 40.669 38.8926 46.4285V53.111C38.8926 58.8705 43.5616 63.5395 49.321 63.5395H49.5831C55.3426 63.5395 60.0116 58.8705 60.0116 53.111V46.4285C60.0116 40.669 55.3426 36 49.5831 36Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M132.101 36H131.839C126.079 36 121.41 40.669 121.41 46.4285V53.111C121.41 58.8705 126.079 63.5395 131.839 63.5395H132.101C137.86 63.5395 142.529 58.8705 142.529 53.111V46.4285C142.529 40.669 137.86 36 132.101 36Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M55.4883 141.58C64.8068 151.368 77.1622 156.598 90.7123 156.598C104.262 156.598 116.618 151.368 125.936 141.58"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M91.3321 74.2686L99.4752 82.4117C100.446 83.3829 100.446 84.9591 99.4752 85.9341L84.0137 101.396"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </>
          )}

          {index === 2 && (
            <>
              <path
                d="M7.89258 43.1469V42.5766C7.89258 23.4808 23.3734 8 42.4691 8H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M204.893 169.853V170.424C204.893 189.519 189.412 205 170.316 205H169.746"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.89258 169.853V170.424C7.89258 189.519 23.3734 205 42.4691 205H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M169.746 8H170.316C189.412 8 204.893 23.4808 204.893 42.5766V43.1469"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M49.5831 62H49.321C43.5616 62 38.8926 66.669 38.8926 72.4285V79.111C38.8926 84.8705 43.5616 89.5395 49.321 89.5395H49.5831C55.3426 89.5395 60.0116 84.8705 60.0116 79.111V72.4285C60.0116 66.669 55.3426 62 49.5831 62Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M132.101 62H131.839C126.079 62 121.41 66.669 121.41 72.4285V79.111C121.41 84.8705 126.079 89.5395 131.839 89.5395H132.101C137.86 89.5395 142.529 84.8705 142.529 79.111V72.4285C142.529 66.669 137.86 62 132.101 62Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M55.4883 167.58C64.8068 177.368 77.1622 182.598 90.7123 182.598C104.262 182.598 116.618 177.368 125.936 167.58"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M91.3321 100.269L99.4752 108.412C100.446 109.383 100.446 110.959 99.4752 111.934L84.0137 127.396"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </>
          )}

          {index === 3 && (
            <>
              <path
                d="M7.89258 43.1469V42.5766C7.89258 23.4808 23.3734 8 42.4691 8H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M204.893 169.853V170.424C204.893 189.519 189.412 205 170.316 205H169.746"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.89258 169.853V170.424C7.89258 189.519 23.3734 205 42.4691 205H43.0395"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M169.746 8H170.316C189.412 8 204.893 23.4808 204.893 42.5766V43.1469"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M93.5831 62H93.321C87.5616 62 82.8926 66.669 82.8926 72.4285V79.111C82.8926 84.8705 87.5616 89.5395 93.321 89.5395H93.5831C99.3426 89.5395 104.012 84.8705 104.012 79.111V72.4285C104.012 66.669 99.3426 62 93.5831 62Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M176.101 62H175.839C170.079 62 165.41 66.669 165.41 72.4285V79.111C165.41 84.8705 170.079 89.5395 175.839 89.5395H176.101C181.86 89.5395 186.529 84.8705 186.529 79.111V72.4285C186.529 66.669 181.86 62 176.101 62Z"
                fill="white"
                fillOpacity="0.92"
              />
              <path
                d="M99.4883 167.58C108.807 177.368 121.162 182.598 134.712 182.598C148.262 182.598 160.618 177.368 169.936 167.58"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M135.332 100.269L143.475 108.412C144.446 109.383 144.446 110.959 143.475 111.934L128.014 127.396"
                stroke="white"
                strokeOpacity="0.92"
                strokeWidth="15"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
      ))}
    </div>
  );
}
