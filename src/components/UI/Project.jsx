import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id='projects' className='text-white py-12 px-4'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold mb-4'>Projects</h2>
        <p className='text-lg text-gray-400'>
          I've been involved in a diverse array of projects, initially focusing on mobile and software development. Here's a glimpse of some of my work.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        {toggle === 'all' &&
          projects.map((project) => (
            <div className='w-full' key={project.id}>
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </div>
          ))}
        {projects
          .filter((item) => item.category === toggle)
          .map((project) => (
            <div className='w-full' key={project.id}>
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;