import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className='fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center overflow-y-auto'>
        <div className='bg-white rounded-lg max-w-2xl w-full m-6 p-6 relative'>
          <CloseRounded
            className='absolute top-2 right-2 cursor-pointer bg-white'
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img src={project?.image} alt={project?.title} className='w-full h-64 object-cover rounded-lg shadow-md' />
          <h2 className='text-2xl font-bold text-gray-800 mt-4'>{project?.title}</h2>
          <p className='text-sm text-gray-500'>{project?.date}</p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {project?.tags.map((tag, index) => (
              <span key={index} className='px-3 py-1 bg-teal-100 text-teal-500 text-xs rounded-full'>
                {tag}
              </span>
            ))}
          </div>
          <p className='text-gray-700 mt-4'>{project?.description}</p>
          {project?.member && (
            <div className='mt-6'>
              <h3 className='text-lg font-semibold text-gray-800'>Members</h3>
              <div className='flex flex-wrap gap-4 mt-2'>
                {project.member.map((member, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <img src={member.image} alt={member.name} className='w-10 h-10 rounded-full' />
                    <span className='text-gray-800'>{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className='flex justify-end gap-4 mt-6'>
            <a href={project?.github} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-gray-200 text-gray-800 rounded-lg'>
              View Code
            </a>
            <a href={project?.webapp} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;