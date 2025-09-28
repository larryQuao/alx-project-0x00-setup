import Button from "@/components/Button";
import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <Card />
      <Button title="Get Started" shape="rounded-lg" size="medium"/>
    </main>
  )
}

export default Home;