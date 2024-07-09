import TeamCard from "./components/TeamCard";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import { useEffect } from "react";
import gsap from "gsap";

const Section6 = () => {
  useEffect(() => {
    gsap.fromTo(
      "#teams",
      { opacity: 0, x: -500 },
      {
        opacity: 3,
        x: 50,
         duration: 0.8,
        stagger: 0.1,
        ease: "ease-in-out",
        
        scale: 1,
        scrollTrigger: {
          trigger: "#teams",
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  });
  return (
    <div className="flex flex-col items-center justify-center px-8 py-3 ">
      <h1 className="font-semibold text-sm text-[#74C69D] font-sans">TEAMS</h1>
      <p className="text-lg font-bold">Our Talents </p>
      <p className="text-md">Lorem ipsum, dolor sit amet consectetur </p>
      <p className="text-md mb-4">Suscipit nemo hic quos, ab.</p>

      <div
        id="teams"
        className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 "
      >
        <TeamCard title="Peg Legge" image={Image1} position="CEO" />
        <TeamCard title="Richard Guerra" image={Image2} position="CTO" />
        <TeamCard title="Alexandra Stolz" image={Image3} position="DESIGNER" />
        <TeamCard title="Janet Bray" image={Image4} position="DEVELOPER" />
      </div>
      <button className="bg-black text-white w-fit px-4 py-3  mb-16 rounded-md font-semibold ">
        View Team
      </button>
    </div>
  );
};

export default Section6;
