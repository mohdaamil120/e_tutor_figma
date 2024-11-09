import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'
import Category from '../components/category/Category'
import Ctc from '../components/CTC/Ctc'
import TopInstructor from '../components/Top_instructors/TopInstructor'
import TrustedCompaniesComponent from '../components/Trusted_companies/TrustedCompaniesComponent'

function HomePage() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Category/>
      <Ctc/>
      <TopInstructor/>
      <TrustedCompaniesComponent/>
    </div>
  )
}

export default HomePage
