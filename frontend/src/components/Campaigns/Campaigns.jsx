import CampainItem from './CampainItem'
import './campaigns.css'
const Campaigns = () => {
  return (
    <section className="campaigns">
    <div className="container">
      <div className="campaigns-wrapper">
       <CampainItem/>
       <CampainItem/>
      </div>
      <div className="campaigns-wrapper">
      <CampainItem/>
      <CampainItem/>
      </div>
    </div>
  </section>
  )
}

export default Campaigns