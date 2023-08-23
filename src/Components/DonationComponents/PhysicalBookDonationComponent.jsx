import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { donatePhysicalBook } from '../../app/actions/physicalbook.action';
import { pendingPhysicalBookStatus } from '../../app/slices/physicalbook.slice';

function PhysicalBookDonationComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.physicalbook.status);
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [genre, setgenre] = useState();
  const [description, setdescription] = useState();
  const [publisher, setpublisher] = useState();
  const [edition, setedition] = useState();

  useEffect(() => {
    if (status === 'success') {
      settitle('');
      setauthor('');
      setgenre('');
      setdescription('');
      setpublisher('');
      setedition('');
    }
  }, [status]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(pendingPhysicalBookStatus());
    const donatedBook = {
      title,
      author,
      genre,
      description,
      publisher,
      edition,
      donatedBy: user.fullName,
    };
    dispatch(donatePhysicalBook(donatedBook));
  };
  return (
    <div className='mt-10 sm:mt-0'>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Book Donation Information
            </h3>
            <p className='mt-1 text-sm text-gray-600'>
              Please provide correct information of the book that you are willing to donate
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
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
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
                      value={author}
                      onChange={(e) => setauthor(e.target.value)}
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
                      value={genre}
                      onChange={(e) => setgenre(e.target.value)}
                      required
                    >
                      <option>Education</option>
                      <option>Fiction</option>
                      <option>Science Fiction</option>
                      <option>History</option>
                      <option>Poetry</option>
                      <option>Short Story</option>
                      <option>Fairy Tale</option>
                      <option>Autobiography</option>
                      <option>Thriller</option>
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
                      placeholder='Discription about the donation book'
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
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
                      value={publisher}
                      onChange={(e) => setpublisher(e.target.value)}
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
                      value={edition}
                      onChange={(e) => setedition(e.target.value)}
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

export default PhysicalBookDonationComponent;
