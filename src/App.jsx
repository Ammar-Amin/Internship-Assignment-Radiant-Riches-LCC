
import './App.css'
import './scroll.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Body from './components/body/Body'

function App() {

  // for scroll effect on top

  let [scrollPercentage, setScrollPercentage] = useState(0)


  function handleScroll() {
    // console.log(
    // document.body.scrollTop,
    // document.documentElement.scrollTop,
    // document.documentElement.scrollHeight,
    // document.documentElement.clientHeight
    // )

    let howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
  }

  // console.log(scrollPercentage)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return (() => {
      window.removeEventListener('scroll', () => { });
    })
  }, [])



  return (
    <>
      <Header />
      <div className='scroll-container absolute top-9 z-50'>
        <div className='scroll-bar '
          style={{ width: `${scrollPercentage}%` }} ></div>
      </div>
      <Body />
      <Cards />
      <Footer />
    </>
  )
}

export default App
