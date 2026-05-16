import Cards from "./_components/cards";

export default function SubCards() {
  return (
    <div className="bg-gray-300 h-screen flex text-black gap-4 items-center justify-center relative">
      <Cards title="Test" description="test" type="test" color="green" />
      <Cards title="Test" description="test 2" type="test 2" color="green" />
      <Cards title="Test" description="test 4" type="test 4" color="green" />
    </div>
  );
}
