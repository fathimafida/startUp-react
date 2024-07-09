import Google from '../../assets/google.png'
import FaceBook from '../../assets/facebook.png'
import AirBnb from '../../assets/airbnb.png'
import Spotify from '../../assets/spotify.png'
import Microsoft from '../../assets/microsoft.png'
import { useEffect } from 'react'
import gsap from 'gsap'
const BrandSection = () => {
useEffect(() => {
  
  gsap.fromTo('#brand-section', { opacity: 0, x: -100 }, {
    opacity: 1, x: 0, duration: 1.5, ease: "ease-in ", scale: 1.1,
    scrollTrigger: {
      trigger: "#brand-section",
      start: "top 90%",
      end: "bottom 25%",
      scrub: true,
    }
  })
  gsap.fromTo(
    "#brand-section-img",
    { opacity: 0, x: -50 },
    {
      opacity: 3,
      x: 0,
      duration: 1.5,
      ease: "ease-in ",
      scale: 1.1,
      scrollTrigger: {
        trigger: "#brand-section-img",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    }
  );
})

  return (
    <div
      id="brand-section"
      className=" flex flex-col items-center justify-center px-8 py-3 overflow-hidden"
    >
      <h1 className="font-semibold text-sm text-[#74C69D]">PARTNERS</h1>
      <p className="text-lg font-bold">Lorem Ipsum Dolor </p>
      <p className="text-md">Lorem ipsum, dolor sit amet consectetur </p>
      <p className="text-md mb-4">adipisicing elit.</p>
      <div
        id="brand-section-img"
        className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 items-center mb-4"
      >
        <img className="w-[100px] object-cover" src={Google} />
        <img className="w-[100px] object-cover" src={Microsoft} />

        <img className="w-[100px] object-cover" src={AirBnb} />
        <img className="w-[100px] object-cover" src={FaceBook} />
        <img className="w-[100px] object-cover" src={Spotify} />
      </div>
      <button className="bg-black text-white w-fit px-4 py-2 rounded-md font-semibold mb-5 ">
        Learn More
      </button>
    </div>
  );
}

export default BrandSection