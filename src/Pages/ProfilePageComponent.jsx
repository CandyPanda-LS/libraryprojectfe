import React from 'react';
import { useSelector } from 'react-redux';
import UserIcon from '../assets/user-icon.png';

function ProfilePageComponent() {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <section className=' bg-blueGray-200'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col min-w-0 break-words bg-slate-50 w-full mb-6 shadow-xl rounded-lg mt-2'>
            <div className='px-2 mt-10'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                  <div className=''>
                    <img
                      className='w-44 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
                      src={user.profileImageLink ? user.profileImageLink : UserIcon}
                      alt='Bordered avatar'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center'>
                  <div className='py-6 px-3 mt-32 sm:mt-0'>
                    <button
                      className='bg-brightRed uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'
                      type='button'
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className='w-full lg:w-4/12 px-4 lg:order-1'>
                  <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        22
                      </span>
                      <span className='text-sm text-blueGray-400'>Books Donated</span>
                    </div>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        10
                      </span>
                      <span className='text-sm text-blueGray-400'>Books Burrowd</span>
                    </div>
                    <div className='lg:mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        89
                      </span>
                      <span className='text-sm text-blueGray-400'>Audio Books</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center mt-12'>
                <h3 className='text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
                  {user.fullName}
                </h3>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                  {user.email}
                </div>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                  {user.contactNumber}
                </div>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                  {user.address}
                </div>
                <div className='mb-2 text-blueGray-600 mt-10'>
                  <i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
                  {user.student ? <span>Student</span> : <span>Proffesional</span>}
                </div>
                <div className='mb-2 text-blueGray-600'>
                  <i className='fas fa-university mr-2 text-lg text-blueGray-400'></i>
                  {user.companyOrUniversity}
                </div>
              </div>
              <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-9/12 px-4'>
                    <p> My donations</p>

                    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                          <tr>
                            <th scope='col' className='px-6 py-3'>
                              Title
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Edition
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Publisher
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Genre
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Author
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Status
                            </th>
                            <th scope='col' className='px-6 py-3'>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {user.donatedBookList.length &&
                            user.donatedBookList.map((book) => {
                              return (
                                <tr
                                  key={book.id}
                                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                                >
                                  <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                  >
                                    {book.title}
                                  </th>
                                  <td className='px-6 py-4'> {book.edition}</td>
                                  <td className='px-6 py-4'> {book.publisher}</td>
                                  <td className='px-6 py-4'> {book.genre}</td>
                                  <td className='px-6 py-4'> {book.author}</td>
                                  <td className='px-6 py-4'> {book.status}</td>
                                  <td className='flex items-center px-6 py-4 space-x-3'>
                                    <a
                                      href='/'
                                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      href='/'
                                      className='font-medium text-red-600 dark:text-red-500 hover:underline'
                                    >
                                      Remove
                                    </a>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePageComponent;
