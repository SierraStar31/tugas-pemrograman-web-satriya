export default function Cards() {
  return (
    <div className="bg-gray-300 h-screen flex text-black gap-4 items-center justify-center relative">
      <div className="bg-white  w-72 p-2 flex flex-col rounded-xl">
        <div className="bg-blue-200 p-4 gap-4 flex flex-col rounded-xl">
          <h1 className="text-4xl font-bold">Web Design</h1>
          <p> Crafts enganging, user-friendly websites.</p>
          <div className="flex flex-wrap gap-2">
            <div className="bg-blue-300 rounded-2xl p-1">
              <p>Landing Page</p>
            </div>
            <div className="bg-blue-300 rounded-2xl p-1">
              <p>Website</p>
            </div>
            <div className="bg-blue-300 rounded-2xl p-1">
              <p>One Page</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <h1 className="text-xl font-bold">Explore</h1>
          <div className="bg-gray-300 rounded">
            <img src="/arrow-narrow-right.svg" alt="Icon Arrow" />
          </div>
        </div>
      </div>

      <div className="bg-white w-80 p-2 flex flex-col rounded-xl">
        <div className="bg-orange-200 p-4 gap-4 flex flex-col rounded-xl">
          <h1 className="text-4xl font-bold">Graphic Design</h1>
          <p> Creates impactful visuals and branding.</p>
          <div className="flex flex-wrap gap-2">
            <div className="bg-orange-300 rounded-2xl p-1">
              <p>Packaging</p>
            </div>
            <div className="bg-orange-300 rounded-2xl p-1">
              <p>Brand Identity</p>
            </div>
            <div className="bg-orange-300 rounded-2xl p-1">
              <p>Illustartions</p>
            </div>
            <div className="bg-orange-300 rounded-2xl p-1">
              <p>Logo</p>
            </div>
            <div className="bg-orange-300 rounded-2xl p-1">
              <p>Signage</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <h1 className="text-xl font-bold">Explore</h1>
          <div className="bg-gray-300 rounded">
            <img src="/arrow-narrow-right.svg" alt="Icon Arrow" />
          </div>
        </div>
      </div>

      <div className="bg-white w-72 p-2 flex flex-col rounded-xl">
        <div className="bg-purple-200 h-56 p-4 gap-4 flex flex-col rounded-xl">
          <h1 className="text-4xl font-bold">Developers</h1>
          <p> Builds functional and scalable solutions.</p>
          <div className="flex flex-wrap gap-2">
            <div className="bg-purple-300 rounded-2xl p-1">
              <p>Web Applications</p>
            </div>
            <div className="bg-purple-300 rounded-2xl p-1">
              <p>Mobile Apps</p>
            </div>
            <div className="bg-purple-300 rounded-2xl p-1">
              <p>Database</p>
            </div>
            <div className="bg-purple-300 rounded-2xl p-1">
              <p>Add-ons</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <h1 className="text-xl font-bold">Explore</h1>
          <div className="bg-gray-300 rounded">
            <img src="/arrow-narrow-right.svg" alt="Icon Arrow" />
          </div>
        </div>
      </div>

      <div className="bg-white h-72 w-72 p-2 flex flex-col rounded-xl">
        <div className="bg-green-200 h-56 p-4 gap-4 flex flex-col rounded-xl">
          <h1 className="text-4xl font-bold">Copywritings</h1>
          <p> Delivers persuasive and creative content.</p>
          <div className="flex flex-wrap gap-2">
            <div className="bg-green-300 rounded-2xl p-1">
              <p>Blog Posts</p>
            </div>
            <div className="bg-green-300 rounded-2xl p-1">
              <p>Video Scripts</p>
            </div>
            <div className="bg-green-300 rounded-2xl p-1">
              <p>Sales Pages</p>
            </div>
            <div className="bg-green-300 rounded-2xl p-1">
              <p>Slogans</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <h1 className="text-xl font-bold">Explore</h1>
          <div className="bg-gray-300 rounded">
            <img src="/arrow-narrow-right.svg" alt="Icon Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
