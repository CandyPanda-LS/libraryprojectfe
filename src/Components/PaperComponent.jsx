import React from 'react';
import { Link } from 'react-router-dom';
import paperImage from '../assets/paper.webp';

function PaperComponent({ paper }) {
  return (
    <div className='group relative'>
      <Link to={paper.paperUrl} target='_blank'>
        <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
          <img
            src={paperImage}
            alt='Front of men&#039;s Basic Tee in black.'
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700 text-left font-semibold'>
              <span aria-hidden='true' className='absolute inset-0'></span>
              {paper.subject}
            </h3>
            <p className='mt-1 text-sm text-gray-500 text-left'>
              Grade : {paper.grade} Term : {paper.term}
            </p>
            <p className='mt-1 text-sm text-gray-500 text-left'>{paper.paperType}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PaperComponent;
