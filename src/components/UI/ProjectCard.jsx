import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectCard = ({ project, setOpenModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 1500); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [project.images.length]);

  return (
    <div
      className='w-full h-120 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-row gap-4 transition-transform transform hover:-translate-y-2 hover:shadow-2xl'
      onClick={() => setOpenModal({ state: true, project: project })}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <div className='relative w-1/2 h-100 bg-white rounded-lg shadow-md'>
        <LazyLoadImage
          src={project.images[currentImageIndex]}
          effect='blur'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div className='flex flex-col w-1/2 gap-2'>
        <div className='flex flex-wrap gap-2'>
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-teal-100 text-teal-500 text-xs rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className='text-xl font-semibold text-gray-200'>{project.title}</h3>
        <p className='text-sm text-gray-400'>{project.date}</p>
        <p className='text-sm text-gray-400 line-clamp-3'>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;