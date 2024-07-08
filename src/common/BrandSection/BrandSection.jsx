import Google from '../../assets/google.png'
import FaceBook from '../../assets/facebook.png'
import AirBnb from '../../assets/airbnb.png'
import Spotify from '../../assets/spotify.png'
import Microsoft from '../../assets/microsoft.png'
const BrandSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-3 ">
      <h1 className="font-semibold text-sm text-[#74C69D]">PARTNERS</h1>
      <p className="text-lg font-bold">Lorem Ipsum Dolor </p>
      <p className="text-md">Lorem ipsum, dolor sit amet consectetur </p>
      <p className="text-md mb-4">adipisicing elit.</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 items-center mb-4">
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