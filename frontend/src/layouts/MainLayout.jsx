
import Footer from "../Components/Layout/Footer/Footer"
import Header from "../components/Layout/Header/Header"
import PropTypes from "prop-types"
import Search from "../components/Modals/Search/Search"
import { useState } from "react"

const MainLayout = ({children}) => {
  const [isSearchShow, setIsSearchShow] = useState(false);

  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow = {setIsSearchShow}/>
      <Header setIsSearchShow = {setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout

MainLayout.propTypes = {
    children : PropTypes.node
}