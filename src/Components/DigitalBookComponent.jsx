import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../assets/noimage.jpg';

function DigitalBookComponent({ book }) {
  return (
    <div className='group relative'>
      <Link
        to={{
          pathname: `/digitalbook/${book.id}`,
        }}
      >
        <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
          <img
            src={book.coverImage ? book.coverImage : noImage}
            alt='Front of men&#039;s Basic Tee in black.'
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>
        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-gray-700 text-left font-semibold'>
              <span aria-hidden='true' className='absolute inset-0'></span>
              {book.title}
            </h3>
            <p className='mt-1 text-sm text-gray-500 text-left'>{book.edition}</p>
            <p className='mt-1 text-sm text-gray-500 text-left'>{book.genre}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DigitalBookComponent;
