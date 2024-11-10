import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'
import Category from '../components/category/Category'
import Ctc from '../components/CTC/Ctc'
import TopInstructor from '../components/Top_instructors/TopInstructor'
import TrustedCompaniesComponent from '../components/Trusted_companies/TrustedCompaniesComponent'
import Footer from '../components/Footer/Footer'
import TopCourses from '../components/Top_courses/TopCourses'

function HomePage() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Category/>
      <TopCourses/>
      <Ctc/>
      <TopInstructor/>
      <TrustedCompaniesComponent/>
      <Footer/>
    </div>
  )
}

export default HomePage
