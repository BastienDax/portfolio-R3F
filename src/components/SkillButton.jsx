import React from "react";

export default function SkillButton({ text }) {
  const skill = text;
  return (
    <div className="py-1.5 px-4 bg-gray-300 rounded-full text-center bg-opacity-20 font-bold">
      {skill}
    </div>
  );
}
