export default function task2() {
  // Function dari JS
  return (
    <div className="bg-white h-screen flex flex-col text-blue-950 gap-4 items-center justify-center">
      <div className="flex gap-4 w-295">
        <div className="bg-cyan-100 h-72 w-1/2 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center gap-4">
            <img src={"palette.svg"} alt=" Icon Palette" />
            <p> Design </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold"> Adobe Photoshop </h1>
            <p> in 3 days </p>
          </div>
        </div>

        <div className="bg-green-300 h-72 w-1/2 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center gap-4">
            <img src={"terminal-2.svg"} alt=" Icon Terminal" />
            <p> AI </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold"> DALL. E 2, Midjourney, Stable Diffusion </h1>
            <p> in 5 days </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center gap-4">
            <img src={"/palette.svg"} alt=" Icon Palette" />
            <p> Design </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold"> Figma </h1>
            <p> 8 hours ago </p>
          </div>
        </div>

        <div className="bg-orange-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center gap-4">
            <img src={"/code.svg"} alt=" Icon Code" />
            <p> Coding </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold"> Python </h1>
            <p> 2 days ago </p>
          </div>
        </div>

        <div className="bg-red-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl">
          <div className=" flex items-center gap-4">
            <img src={"/palette.svg"} alt=" Icon Palette" />
            <p> Design </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold"> Sketch </h1>
            <p> 4 days ago </p>
          </div>
        </div>
      </div>
    </div>
  );
}
