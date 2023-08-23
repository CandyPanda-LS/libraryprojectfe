import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { storage } from '../firebase';
import { register } from '../app/actions/user.actions';
import regBannerImg from '../assets/regBannerImg.png';
import { ProgressBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';

function RegistrationPageComponent() {
  const dispatch = useDispatch();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [fullName, setfullName] = useState();
  const [address, setaddress] = useState();
  const [contactNumber, setcontactNumber] = useState();
  const [companyOrUniversity, setcompanyOrUniversity] = useState();
  const [isPrivacyEnable, setisPrivacyEnable] = useState();
  const [isStudent, setisStudent] = useState();
  const [profileImageLink, setProfileImageLink] = useState();
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const uploadImage = (e) => {
    if (e.target.files[0] !== null) {
      const fileName = e.target.files[0].name + '-' + new Date();
      const uploadTask = storage.ref(`users/${fileName}`).put(e.target.files[0]);
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
            .ref('users')
            .child(fileName)
            .getDownloadURL()
            .then((url) => {
              setProfileImageLink(url);
            });
        },
      );
    } else {
      console.log('Something went wrong');
    }
  };

  const registrationHandler = () => {
    if (password !== confirmPassword) {
      toast.error('Password mismatch!');
    } else {
      const userDetails = {
        email,
        password,
        role: ['user'],
        fullName,
        address,
        contactNumber,
        isStudent: isStudent === 'on' ? true : false,
        companyOrUniversity,
        isPrivacyEnable: isPrivacyEnable === 'on' ? true : false,
        profileImageLink,
      };
      dispatch(register(userDetails));
    }
  };

  return (
    <div>
      <section id='hero'>
        <div className='m-5'>
          <div className='container flex bg-bannerBlue rounded-xl	 flex-col-reverse  px-10 py-10 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
            <div className='my-5 md:mx-10 md:w-3/4'>
              <h1 className='text-white text-2xl md:text-4xl mb-4 md:text-left'>REGISTER HERE</h1>
              <p className='text-white text-[10px] md:text-xs mb-4 text-justify hidden md:block'>
                Bookhub is an online platform that enables to donate and share books. We provide a
                platform for people to donate, share, and explore books of all genres. Through our
                platform, you can donate books to people in need, share books with other readers,
                and explore a wide range of books from all around the world. At Bookhub, we believe
                that books are a powerful tool for knowledge and understanding. We are committed to
                providing access to books to everyone, regardless of their financial or physical
                limitations. With our platform, we strive to promote learning and literacy for all.
                Thank you for visiting Bookhub and we hope you will find something you love!
              </p>
              <p className='text-white text-[10px] md:text-xs mb-4 text-justify'>
                Bookhub is an online platform that enables to donate and share books. We provide a
                platform for people to donate, share, and explore books of all genres. Through our
                platform, you can donate books to people in need, share books with other readers,
                and explore a wide range of books from all around the world. At Bookhub, we believe
                that books are a powerful tool for knowledge and understanding. We are committed to
                providing access to books to everyone, regardless of their financial or physical
                limitations. With our platform, we strive to promote learning and literacy for all.
                Thank you for visiting Bookhub and we hope you will find something you love!
              </p>
            </div>
            {/* <!-- Image --> */}
            <div className='md:w-1/4'>
              <img className='rounded-xl mx-auto' src={regBannerImg} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section id='regstrationForm' className='p-5'>
        <div className='container shadow rounded-xl border-2 borer-grey'>
          <div className='hidden sm:block' aria-hidden='true'>
            <div className='py-5'>
              <div className='border-t border-gray-200'></div>
            </div>
          </div>

          <div className='mt-10 sm:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Personal Information
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div className='mt-5 md:col-span-2 md:mt-0'>
                <form action='#' method='POST'>
                  <div className='overflow-hidden shadow sm:rounded-md'>
                    <div className='bg-white px-4 py-5 sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='first-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Full name
                          </label>
                          <input
                            type='text'
                            name='full-name'
                            id='full-name'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setfullName(e.target.value)}
                            required
                          />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='last-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Contact Number
                          </label>
                          <input
                            type='text'
                            name='last-name'
                            id='last-name'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setcontactNumber(e.target.value)}
                            required
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='email-address'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Email address
                          </label>
                          <input
                            type='text'
                            name='email-address'
                            id='email-address'
                            autoComplete='email'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setemail(e.target.value)}
                            required
                          />
                        </div>

                        <div className='col-span-6'>
                          <label
                            htmlFor='street-address'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Address
                          </label>
                          <input
                            type='text'
                            name='street-address'
                            id='street-address'
                            autoComplete='street-address'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setaddress(e.target.value)}
                            required
                          />
                        </div>
                        <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                          <label
                            htmlFor='postal-code'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Company or University
                          </label>
                          <input
                            type='text'
                            name='postal-code'
                            id='postal-code'
                            autoComplete='postal-code'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setcompanyOrUniversity(e.target.value)}
                            required
                          />
                        </div>
                        <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                          <label htmlFor='city' className='block text-sm font-medium text-gray-700'>
                            Password
                          </label>
                          <input
                            type='password'
                            name='city'
                            id='city'
                            autoComplete='address-level2'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setpassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                          <label
                            htmlFor='region'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Confirm Password
                          </label>
                          <input
                            type='password'
                            name='region'
                            id='region'
                            autoComplete='address-level1'
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            required
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3 space-x-5'>
                          <div className='flex'>
                            <div className='flex h-5 items-center '>
                              <input
                                id='comments'
                                name='comments'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                onChange={(e) => setisStudent(e.target.value)}
                              />
                            </div>
                            <div className='ml-3 text-sm text-left'>
                              <label htmlFor='comments' className='font-medium text-gray-700'>
                                Are you a student?
                              </label>
                              <p className='text-gray-500'>
                                I am a student of a recognized institute in Srilanka. Thus I am
                                eligible for the rewards that are associated.(uncheck the box if you
                                are not)
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6 sm:col-span-3 space-x-5'>
                          <div className='flex'>
                            <div className='flex h-5 items-center '>
                              <input
                                id='comments'
                                name='comments'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                onChange={(e) => setisPrivacyEnable(e.target.value)}
                              />
                            </div>
                            <div className='ml-3 text-sm text-left'>
                              <label htmlFor='comments' className='font-medium text-gray-700'>
                                Are you willing to share your information with the other users ?
                              </label>
                              <p className='text-gray-500'>
                                I am willing to give concent to share information publicly (Uncheck
                                the box if you are not willing)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='hidden sm:block' aria-hidden='true'>
            <div className='py-5'>
              <div className='border-t border-gray-200'></div>
            </div>
          </div>

          <div>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900 mt-5'>
                    Profile Picture
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    This information will be displayed publicly
                  </p>
                </div>
              </div>
              <div className='mt-5 md:col-span-2 md:mt-0'>
                <div>
                  <div className='shadow sm:overflow-hidden sm:rounded-md'>
                    {uploadPercentage === 100 && (
                      <img alt='Profile Avatar' src={profileImageLink} width={300} height={300} />
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
                    <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700'>
                          Cover photo
                        </label>
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
                    <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                      <button
                        type='submit'
                        onClick={registrationHandler}
                        className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      >
                        Save
                      </button>
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

export default RegistrationPageComponent;
