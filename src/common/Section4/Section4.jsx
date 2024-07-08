import Group2 from '../../assets/Group 2.png'

const Section4 = () => {
  return (
    <div className="flex    items-center justify-center" >
      <div>
        <img src={Group2} className="w-[480px]  h-[200px] mb-4 mr-10"></img>
      </div>
      <div className="flex flex-col mb-4">
    
        <p className="text-xl font-bold">Lorem ipsum dolor sit t</p>
        <p className="text-xl font-bold"> amet consectetur </p>
        <p className="text-sm mb-3">
          WELCOME Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit
          amet <br />
          consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor
          aperiam nobis cum est eos error ipsum, <br />
          voluptate culpa nesciunt delectus iste.
        </p>
        <button className="bg-black text-white w-fit px-4 py-2 rounded-md font-semibold ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Section4