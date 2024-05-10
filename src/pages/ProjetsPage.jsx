import React from "react";

export default function ProjetsPage({ onClick }) {
  return (
    <div>
      <div className="container flex justify-center items-center">
        <button className="contact" onClick={onClick}>
          Back
        </button>
      </div>
    </div>
  );
}
