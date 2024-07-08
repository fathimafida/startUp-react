import Group3 from '../../assets/Group3.png'

const Section5 = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row py-3 px-8 items-center justify-center ">
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
      <div>
        <img src={Group3} className="w-[390px]  h-[200px] mb-4 mr-14 "></img>
      </div>
    </div>
  );
}

export default Section5