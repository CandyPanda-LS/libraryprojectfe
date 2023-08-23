import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBookById } from '../app/slices/audiobook.slice';

function DigitalLibrarySingleAudioBookPage() {
  const { bookid } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.audiobook.book);

  useEffect(() => {
    dispatch(getBookById(bookid));
  }, [dispatch, bookid]);

  return (
    <div>
      {' '}
      <div class='container mx-auto p-10'>
        <div class='flex items-center justify-between'>
          <div>
            <button class='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-150 ease-in-out'>
              Buy Now
            </button>
          </div>
        </div>
        {book && (
          <div class='flex mt-2'>
            <div class='w-full m-5 p-10 container bg-slate-100 rounded-md'>
              <h1 class='text-2xl font-bold text-gray-900 '>{book.title}</h1>
              <div className='flex flex-col m-3 justify-center items-center'>
                <iframe
                  title='PDF Viewer'
                  src={book.audioLink}
                  className='w-full h-full rounded-lg'
                ></iframe>
              </div>
              <h2 class='text-md font-bold mb-2 text-gray-600 '>{book.author}</h2>
              <p class='text-gray-700 mb-2'>{book.description}</p>
              <h3 class='text-lg font-bold mb-2 text-gray-900 text-left'>Features</h3>
              <ul class='list-disc pl-5'>
                <li class='text-gray-700 mb-2 text-left'>book genre:{book.genre}</li>
                <li class='text-gray-700 mb-2 text-left'>book publisher: {book.publisher}</li>
                <li class='text-gray-700 mb-2 text-left'>book edition: {book.edition}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DigitalLibrarySingleAudioBookPage;
