import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyles'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/constants'

 
const Projects = ({openModal,setOpenModal}) => {
     
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc className='pb-10'>
        I've been involved in a diverse array of projects, initially focusing on mobile and software development. Here's a glimpse of some of my work
        </Desc>
        {/* <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer 
         data-aos= 'zoom-in-up'  
         data-aos-duration='1000' >
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard 
              project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
            
              project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects