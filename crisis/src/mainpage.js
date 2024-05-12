import React from 'react'
import Nav from './components/nav/nav'
import Img from './components/image/img'
import Mis from './components/mission/mis'
import './App.css'
import Tail from './components/tail/tail'
export default function mainpage() {
  return (
    <div className='App'>
        <Nav/>
        <Img/>
        <Mis/>
        <Tail/>
    </div>
  )
}

