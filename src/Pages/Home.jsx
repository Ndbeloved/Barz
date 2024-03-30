import Hero from "../Components/Hero/Hero"
import PartyItem from "../Components/PartyItem/PartyItem"
import TopPlanners from "../Components/TopPlanners/TopPlanners"
import TopVendors from "../Components/TopVendors/TopVendors"


const Home = () => {
  return (
    <section className="home-body">
      <Hero />
      <PartyItem />
      <TopVendors />
      <TopPlanners />
    </section>
  )
}

export default Home