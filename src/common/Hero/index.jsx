import GroupImg from "../../assets/Group.png";


const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row text-white px-4  bg-[#74C69D]  items-center justify-between">
      <div className="flex flex-col mb-4">
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
        <img src={GroupImg} className="w-[480px]  h-[200px] mb-4"></img>
      </div>
    </div>
  );
};

export default Hero;
