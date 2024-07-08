
const TeamCard = (
    props
) => {
  return (
    <div className="  p-4 items-center mb-4 shadow-lg rounded-lg border border-gray-100">
      <img src={props.image} className=" border h-28 w-28  rounded-full p-2" />
          <h1 className="text-lg font-bold">{ props.title}</h1>
          <p className="text-sm text-gray-500">{props.position}</p>
    </div>
  );
}

export default TeamCard
