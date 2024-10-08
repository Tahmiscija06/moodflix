import Footer from "../components/Footer/Footer";
import Hero from "../components/Navbar/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  const moods = [
    {
      emoji: "😅",
      name: "Happy",
    },
    {
      emoji: "😓",
      name: "Sad",
    },
    {
      emoji: "😡",
      name: "Angry",
    },
    {
      emoji: "😮‍💨",
      name: "Relaxed",
    },
    {
      emoji: "🤓",
      name: "Excited",
    },
    {
      emoji: "🤫",
      name: "Thoughtfull",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-black ">
      <Navbar/>
      <main className="flex-1">
        <Hero moods={moods}/>
      </main>
      <Footer/>
    </div>
  )
    };

export default HomePage