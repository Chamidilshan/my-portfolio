import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center justify-center py-12 px-4'>
      <div className='text-center mb-8'>
        <h2 className='text-4xl font-bold text-white mb-4'>Education</h2>
        <p className='text-lg text-gray-400'>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>
      </div>
      <div className='w-full max-w-4xl'>
        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineContent className='py-3 px-2'>
                <EducationCard education={edu} />
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant='outlined' className='bg-blue-500' />
                {index !== experiences.length - 1 && <TimelineConnector className='bg-blue-500' />}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;