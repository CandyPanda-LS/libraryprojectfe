import { React, useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ProgressBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { saveDigitalBook } from '../../app/actions/digitalbook.action';
import { pendingDigitalBookStatus } from '../../app/slices/digitalbook.slice';

function DigitalBookDonationComponent() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.digitalbook.status);
  //Digital books
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [description, setDescription] = useState();
  const [publisher, setPublisher] = useState();
  const [edition, setEdition] = useState();
  const [pdfLink, setPdfLink] = useState();
  const [coverImage, setCoverImage] = useState();
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    if (status === 'success') {
      setTitle('');
      setAuthor('');
      setGenre('');
      setDescription('');
      setPublisher('');
      setEdition('');
      setCoverImage('');
    }
  }, [status]);

  const uploadImage = (e) => {
    if (e.target.files[0] !== null) {
      const fileName = e.target.files[0].name + '-' + new Date();
      const uploadTask = storage.ref(`digitalbook/${fileName}`).put(e.target.files[0]);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          //progress function
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadPercentage(progress);
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref('digitalbook')
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setCoverImage(url);
            });
        },
      );
    } else {
      console.log('Something went wrong');
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(pendingDigitalBookStatus());
    const digitalBook = {
      title,
      author,
      genre,
      description,
      publisher,
      edition,
      pdfLink,
      coverImage,
    };
    dispatch(saveDigitalBook(digitalBook));
  };
  return (
    <div className='mt-10 sm:mt-0'>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Digital Book</h3>
            <p className='mt-1 text-sm text-gray-600'>
              Please provide correct information of the book that you are willing to donate
            </p>
          </div>
        </div>

        <div className='mt-5 md:col-span-2 md:mt-0'>
          <form onSubmit={onSubmitHandler}>
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
                      onChange={(e) => setTitle(e.target.value)}
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
                      onChange={(e) => setAuthor(e.target.value)}
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
                      onChange={(e) => setGenre(e.target.value)}
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
                      placeholder='Discription about the audiobook'
                      onChange={(e) => setDescription(e.target.value)}
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
                      onChange={(e) => setPublisher(e.target.value)}
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
                      onChange={(e) => setEdition(e.target.value)}
                      value={edition}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      PDF Link
                    </label>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setPdfLink(e.target.value)}
                      value={pdfLink}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label className='block text-sm font-medium text-gray-700'>
                      Book cover Image
                    </label>
                    {uploadPercentage === 100 && (
                      <img alt='Cover Avatar' src={coverImage} width={300} height={300} />
                    )}
                    {uploadPercentage > 0 && uploadPercentage < 100 && (
                      <ProgressBar
                        height='80'
                        width='80'
                        ariaLabel='progress-bar-loading'
                        wrapperStyle={{}}
                        wrapperClass='progress-bar-wrapper'
                        borderColor='#F4442E'
                        barColor='#51E5FF'
                      />
                    )}
                    <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                      <div className='space-y-1 text-center'>
                        <svg
                          className='mx-auto h-12 w-12 text-gray-400'
                          stroke='currentColor'
                          fill='none'
                          viewBox='0 0 48 48'
                          aria-hidden='true'
                        >
                          <path
                            d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <div className='flex text-sm text-gray-600'>
                          <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                          >
                            <span>Upload a file</span>
                            <input
                              id='file-upload'
                              name='file-upload'
                              type='file'
                              className='sr-only'
                              onChange={(e) => uploadImage(e)}
                            />
                          </label>
                          <p className='pl-1'>or drag and drop</p>
                        </div>
                        <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
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

export default DigitalBookDonationComponent;
