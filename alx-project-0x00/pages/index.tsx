import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <Card />
      <button className=" boder px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">
        Get Started
      </button>
    </main>
  )
}

export default Home;