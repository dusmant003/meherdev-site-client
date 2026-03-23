import React from 'react'
import Hero from '../../components/LayOut/Hero'
import SkillsScroll from '../../components/LayOut/SkillScroll'
import Services from '../../components/LayOut/sERVICES.JSX'
import About from '../../components/LayOut/About'
import Tools from '../../components/LayOut/Tools'

const Home = () => {
    return (
        <>
            <Hero />
            <SkillsScroll />
            <Services />
            <About />
            <Tools/>
        </>
    )
}

export default Home