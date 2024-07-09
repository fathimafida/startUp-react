import { useEffect } from 'react';
import Group3 from '../../assets/Group3.png'
import gsap from 'gsap';

const Section5 = () => {

  useEffect(() => {
    gsap.fromTo('#section5', { opacity: 0, x: -100 }, {
      opacity: 1, x: 0, duration: 1.5, ease: "ease-in ", scale: 1.1,
      scrollTrigger: {
        trigger: "#section5",
        start: "top 90%",
        end: "bottom 25%",
        scrub: true,
      }
    })
    gsap.fromTo(
      "#section5-img",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "ease-in ",
        scale: 1.1,
        scrollTrigger: {
          trigger: "#section5-img",
          start: "top 90%",
          end: "bottom 25%",
          scrub: true,
        },
      }
    );
  })

  return (
    <div id='section5' className="flex flex-col-reverse md:flex md:flex-row py-3 px-8 items-center justify-center ">
      <div className="flex flex-col mb-4">
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
      <div id="section5-img">
        <img src={Group3} className="w-[390px]  h-[200px] mb-4 mr-14 "></img>
      </div>
    </div>
  );
}

export default Section5
