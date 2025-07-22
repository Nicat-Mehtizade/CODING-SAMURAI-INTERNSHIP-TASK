"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { title: "HTML", percent: 95 },
  { title: "CSS", percent: 95 },
  { title: "JavaScript", percent: 75 },
  { title: "TypeScript", percent: 55 },
  { title: "Bootstrap", percent: 95 },
  { title: "Tailwind", percent: 95 },
  { title: "React", percent: 88 },
  { title: "Next.Js", percent: 40 },
];

const MySkills = ({ mode }) => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animated) {
          const circles = sectionRef.current.querySelectorAll("[data-percent]");
          circles.forEach((el) => {
            const percent = parseInt(el.dataset.percent);
            const label = el.querySelector(".label");
            const circle = el.querySelector(".outer");
            let current = 0;

            const interval = setInterval(() => {
              if (current <= percent) {
                label.textContent = `${current}%`;
                circle.style.background = `conic-gradient(#22c55e ${
                  current * 3.6
                }deg, #e5e7eb 0deg)`;
                current++;
              } else {
                clearInterval(interval);
              }
            }, 20);
          });

          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [animated]);

  return (
    <div ref={sectionRef} className="py-16 text-center" id="Skills">
      <h1 className={`text-3xl font-bold mb-10 ${mode=="light" ? "text-gray-800" : "text-white"}`}>My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map(({ title, percent }, index) => (
          <div
            key={index}
            data-percent={percent}
            className="flex flex-col items-center"
          >
            <div className="outer w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
              <div
                className={`inner w-24 h-24 rounded-full flex items-center justify-center ${
                  mode == "light" ? "bg-white" : "bg-[#232A34]"
                }`}
              >
                <span className={`label text-xl font-bold ${mode=="light" ? "text-gray-800" : "text-white"}`}>
                  0%
                </span>
              </div>
            </div>
            <p className={`mt-3 font-medium ${mode=="light" ? "text-gray-700" : "text-white"}`}>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
