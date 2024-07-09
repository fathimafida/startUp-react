import { useEffect } from 'react';
import Group2 from '../../assets/Group 2.png'
import gsap from 'gsap';

const Section4 = () => {
  useEffect(() => {
    gsap.fromTo(
      "#sec-4 ",
      { opacity: 0, x: -500 },
      {
        opacity: 2, x: 0,
        
        duration: 1,
        ease: "ease-in ",

        scrollTrigger: {
          trigger: "#sec-4",
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
   
  })
  return (
    <div id='sec-4' className="flex flex-col md:flex md:flex-row py-3 px-8 items-center justify-center ">
      <div>
        <img  src={Group2} className="w-[390px]  h-[200px]  mb-4 mr-14 "></img>
      </div>
      <div  className="flex flex-col mb-4">
        <p className="text-xl font-bold">Lorem ipsum dolor sit</p>
        <p className="text-xl font-bold"> amet consectetur </p>
        <p className="text-sm mb-3 text-gray-400">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
          <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
          <br />
          error ipsum, voluptate culpa nesciunt delectus iste.
        </p>
        <button className="bg-black text-white w-fit px-4 py-2 rounded-md font-semibold ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Section4