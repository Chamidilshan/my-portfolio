import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../data/constants';

const Experience = () => {
  return (
    <section id='experience' className='flex flex-col items-center justify-center py-12 px-4'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-white mb-4'>Experience</h2>
        <p className='text-lg text-gray-400'>
          My work experience in the software industry, working on different projects.
        </p>
      </div>
      <div className='w-full max-w-4xl'>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant='outlined' className='bg-blue-500' />
                {index !== experiences.length - 1 && <TimelineConnector className='bg-blue-500' />}
              </TimelineSeparator>
              <TimelineContent className='py-3 px-2'>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;