import NavBar from '@/components/NavBar/NavBar'
import RankingPage from './sections/Ranking/Ranking'
import About from './sections/About/About'

const Home = () => {
    return (
      <>
        <NavBar/>
        <About/>
        <RankingPage/>
      </>
    )
  }
  
  export default Home