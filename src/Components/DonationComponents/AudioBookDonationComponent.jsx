import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveAudioBook } from '../../app/actions/audiobook.action';
import { pendingAudioBookStatus } from '../../app/slices/audiobook.slice';

function AudioBookDonationComponent() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.audiobook.status);
  //Audio books
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [genre, setgenre] = useState();
  const [description, setdescription] = useState();
  const [publisher, setpublisher] = useState();
  const [edition, setedition] = useState();
  const [audioLink, setaudioLink] = useState();

  useEffect(() => {
    if (status === 'success') {
      settitle('');
      setauthor('');
      setgenre('');
      setdescription('');
      setpublisher('');
      setedition('');
      setaudioLink('');
    }
  }, [status]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(pendingAudioBookStatus());
    const audioBook = {
      title,
      author,
      genre,
      description,
      publisher,
      edition,
      audioLink,
    };

    dispatch(saveAudioBook(audioBook));
  };
  return (
    <div>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900 mt-5'>Audio Books</h3>
            <p className='mt-1 text-sm text-gray-600'>
              This may help you to publish audiobooks to the digital library. Make sure you have the
              necessary copyrights to publish it{' '}
            </p>
          </div>
        </div>
        <div className='mt-5 md:col-span-2 md:mt-0'>
          <form onSubmit={onHandleSubmit}>
            <div className='overflow-hidden shadow sm:rounded-md'>
              <div className='bg-white px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Book Title
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => settitle(e.target.value)}
                      value={title}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Author name
                    </label>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setauthor(e.target.value)}
                      value={author}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Genre
                    </label>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setgenre(e.target.value)}
                      value={genre}
                      required
                    >
                      <option value={'Education'}>Education</option>
                      <option value={'Fiction'}>Fiction</option>
                      <option value={'Science Fiction'}>Science Fiction</option>
                      <option value={'History'}>History</option>
                      <option value={'Poetry'}>Poetry</option>
                      <option value={'Short Story'}>Short Story</option>
                      <option value={'Fairy Tale'}>Fairy Tale</option>
                      <option value={'Autobiography'}>Autobiography</option>
                      <option value={'Thriller'}>Thriller</option>
                    </select>
                  </div>

                  <div className='col-span-6'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm text-left font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <textarea
                      id='about'
                      name='about'
                      rows='3'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      placeholder='Discription about the audio book'
                      onChange={(e) => setdescription(e.target.value)}
                      value={description}
                      required
                    ></textarea>
                  </div>

                  <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Publisher
                    </label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setpublisher(e.target.value)}
                      value={publisher}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Edition
                    </label>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setedition(e.target.value)}
                      value={edition}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      audio link
                    </label>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setaudioLink(e.target.value)}
                      value={audioLink}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                {status === 'pending' ? (
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-amber-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    disabled
                  >
                    Saving....
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AudioBookDonationComponent;
