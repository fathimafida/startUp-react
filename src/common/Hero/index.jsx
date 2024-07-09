import { useEffect } from "react";
import GroupImg from "../../assets/Group.png";
import gsap from "gsap";


const Hero = () => {
  useEffect(() => {
    gsap.fromTo('#hero', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.5, ease: "ease-in " })
        gsap.fromTo(
          "#hero",
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, ease: "ease-in-out",
            
          },
          
        );
        gsap.fromTo(
          "#hero-img",
          { opacity: 0, scale: 0.5, x: -50 },
          {
            opacity: 1, scale: 1, x: 0, duration: 1.5, ease: "ease-in-out",
            scrollTrigger: {
              trigger: "#hero-img",
              start: "top 95%",
              end: "bottom 20%",
              scrub: true,
            }
           },
      
      
        );
  })
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row text-white px-8 py-3 bg-[#74C69D]  items-center justify-between">
      <div id="hero" className="flex flex-col mb-4">
        <h1 className="text-md">WELCOME</h1>
        <p className="text-xl font-bold">Lorem ipsum dolor sit t</p>
        <p className="text-xl font-bold"> amet consectetur </p>
        <p className="text-sm mb-3">
          WELCOME Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit
          amet <br />
          consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor
          aperiam nobis cum est eos error ipsum, <br />
          voluptate culpa nesciunt delectus iste.
        </p>
        <button className="bg-white text-black w-fit px-4 py-2 rounded-sm font-semibold ">
          Explore
        </button>
      </div>
      <div>
        <img
          id="hero-img"
          src={GroupImg}
          className="w-[450px]  h-[190px]   mb-4"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
