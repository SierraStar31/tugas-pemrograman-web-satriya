export default function Learn() {
  // Function dari JS
  return (
    <div className="bg-white h-screen flex text-blue-950 flex gap-4 items-center justify-center">
      <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
        <div className=" flex items-center gap-4">
          <img src={"/palette.svg"} alt=" Icon Palette" />
          <p> Design </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold"> Figma </h1>
          <p> 8 hours ago </p>
        </div>
      </div>

      <div className="bg-orange-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
        <div className=" flex items-center gap-4">
          <img src={"/palette.svg"} alt=" Icon Palette" />
          <p> Python </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold"> Python </h1>
          <p> 8 hours ago </p>
        </div>
      </div>

      <div className="bg-red-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
        <div className=" flex items-center gap-4">
          <img src={"/palette.svg"} alt=" Icon Palette" />
          <p> Sketch </p>
        </div>
        <div>
          <h1 className="text-4xl font-bold"> Sketch </h1>
          <p> 8 hours ago </p>
        </div>
      </div>
    </div>
  );
}
