import React from 'react'
import Header from "../Components/Layout/Header/Header";
import Auth from '../components/Auth/Auth'
import Footer from "../Components/Layout/Footer/Footer";

const AuthPage = () => {
  return (
    <React.Fragment>
        <Header/>
        <Auth/>
        <Footer/>
    </React.Fragment>
  )
}

export default AuthPage