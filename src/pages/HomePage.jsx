import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'
import Category from '../components/category/Category'
import Ctc from '../components/CTC/Ctc'

function HomePage() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Category/>
      <Ctc/>
    </div>
  )
}

export default HomePage
