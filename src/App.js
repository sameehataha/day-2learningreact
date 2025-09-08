import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./Data"

function App() {
  const cards = data.map(item => {
     return (
      <Card 
        key ={item.id}
        {...item}
      />
     )
    
})
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
  
    </div>
  )
} 
export default App;
