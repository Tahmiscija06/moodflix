
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types"
import { useState } from "react"
import { Link } from "react-router-dom";


const Hero = ({ moods }) => {
    const [selectedMood, setSelectedMood] = useState(null);
  
  return (
<section className=" md:py-24 lg:py-32 xl:py-48 relative w-full py-12 bg-center bg-cover bg-[url('./background.png')]">
    <div className="absolute inset-0 bg-black bg-opacity-80"></div>
<div className="relative px-4 md:px-6">
    <div className="flex-col items-center space-y-4 text-center flef">
   <div className="space-y2">
   <h1 className="text-3xl font-bold text-white md:text-5xl sm:text-4xl lg:text-6xl/none tracking-tigher">
    How was you feeling today?
</h1>
<p className="mx-auto text-gray-300 max-w-[700px] md:text-xl">Select your mood and let Moodflix recomend the perfect movie for you.</p>
   </div>
    <div className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-3">
        {moods.map((mood) => (
            <button   key={mood.name} onClick = { () => setSelectedMood(mood)} className={`p-6 text-2xl rounded-lg ${selectedMood?.name === mood.name ? "bg-red-600" : "bg-white"}  hover:text-white hover:bg-red-600 transition duration-500 ease-in`}>
                {mood.emoji} {mood.name}
            </button>
        )
    )}
    
    </div>
    <div className="flex items-center justify-center h-16 mt-6">
        <Link to ={`/movies/${selectedMood?.name}`}>
        <button className="flex items-center px-4 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700">
            Find Movies for {selectedMood?.name} Mood 
            <ArrowRight className="w-4 h-4 ml-2"/>
        </button>
        </Link>
    </div>
    </div>

</div>
</section>
  )
}

export default Hero

Hero.propTypes = {
    moods: PropTypes.arrayOf(
        PropTypes.shape({
            emoji: PropTypes.string,
            name: PropTypes.string,
        })
    
        )
    
}