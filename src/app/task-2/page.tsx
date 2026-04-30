export default function task2() {
  return (
    <div className="bg-white h-screen flex flex-col text-blue-950 gap-4 items-center justify-center relative">
      <div className="absolute top-8 left-8">
        <img src={"brand-vercel.svg"} alt="Vercel Logo" />
      </div>

      <div>
        <p className="absolute bottom-8 right-8  text-gray-500 text-2xl font-bold"> Day 020/365 </p>
      </div>

      <div className="flex gap-4 w-295">
        <div className="bg-cyan-100 h-72 w-1/2 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center gap-4">
            <img src={"palette.svg"} alt=" Icon Palette" />
            <p> Design </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4"> Adobe Photoshop </h1>
            <div className="flex items-center justify-between">
              <p> in 3 days </p>
              <div className="flex justify-end -space-x-3">
                <img
                  src={"user1.PNG"}
                  alt="User 1"
                  className="w-8 h-8 rounded-full border-2 border-cyan-100 object-cover relative z-10"
                />
                <img
                  src={"user2.PNG"}
                  alt="User 2"
                  className="w-8 h-8 rounded-full border-2 border-cyan-100 object-cover relative z-20"
                />
                <img
                  src={"user3.PNG"}
                  alt="User 3"
                  className="w-8 h-8 rounded-full border-2 border-cyan-100 object-cover relative z-30"
                />
                <div className="w-8 h-8 rounded-full border-2 border-cyan-100 bg-cyan-300 flex items-center justify-center text-sm font-bold text-gray-700 relative z-40">
                  <p>9+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-300 h-72 w-1/2 p-8 flex flex-col justify-between rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={"terminal-2.svg"} alt=" Icon Terminal" />
              <p> AI </p>
            </div>
            <img src={"star.svg"} alt=" Icon Star" />
          </div>
          <div>
            <h1 className="text-4xl font-bold"> DALL. E 2, Midjourney, Stable Diffusion </h1>
            <div className="flex items-center justify-between">
              <p> in 5 days </p>
              <div className="flex justify-end -space-x-3">
                <img
                  src={"user1.PNG"}
                  alt="User 1"
                  className="w-8 h-8 rounded-full border-2 border-green-300 object-cover relative z-10"
                />
                <img
                  src={"user2.PNG"}
                  alt="User 2"
                  className="w-8 h-8 rounded-full border-2 border-green-300 object-cover relative z-20"
                />
                <img
                  src={"user3.PNG"}
                  alt="User 3"
                  className="w-8 h-8 rounded-full border-2 border-green-300 object-cover relative z-30"
                />
                <div className="w-8 h-8 rounded-full border-2 border-green-300 bg-green-500 flex items-center justify-center text-sm font-bold text-gray-700 relative z-40">
                  <p>3+</p>
                </div>
              </div>
            </div>
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
