export default function Card({date, price}: {date: string, price: string}) {
    return (
      <button
        type="button"
        className="flex flex-col bg-white w-fit border border-gray-400
         text-12 p-4 items-center justify-center focus:bg-blue-200 focus:border-b-4 focus:border-b-blue-500 focus:outline-none transition-all"
      >
        <p className="text-gray-500">{date}</p>
        <p className="text-black font-bold text-xl">{price}</p>
      </button>
    );
};
