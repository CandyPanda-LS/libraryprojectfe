import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaper } from '../../app/actions/paper.action';
import { pendingPaperStatus } from '../../app/slices/paper.slice';

function PaperDonationComponent() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.paper.status);

  const [subject, setSubject] = useState();
  const [grade, setGrade] = useState();
  const [school, setSchool] = useState();
  const [term, setTerm] = useState();
  const [paperUrl, setPaperUrl] = useState();
  const [paperType, setPaperType] = useState();

  useEffect(() => {
    if (status === 'success') {
      setSubject('');
      setGrade('');
      setSchool('');
      setTerm('');
      setPaperUrl('');
      setPaperType('');
    }
  }, [status]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(pendingPaperStatus());
    const paper = {
      subject,
      grade,
      school,
      term,
      paperUrl,
      paperType,
      deleted: false,
    };

    dispatch(savePaper(paper));
  };

  return (
    <div>
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='md:col-span-1'>
          <div className='px-4 sm:px-0'>
            <h3 className='text-lg font-medium leading-6 text-gray-900 mt-5'>Past Papers</h3>
            <p className='mt-1 text-sm text-gray-600'>
              This may help you to publish past papers to the digital library. Make sure you have
              the necessary copyrights to publish it{' '}
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
                      Subject
                    </label>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Grade
                    </label>
                    <input
                      type='number'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setGrade(e.target.value)}
                      value={grade}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Term
                    </label>
                    <input
                      type='number'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setTerm(e.target.value)}
                      value={term}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Type
                    </label>
                    <select
                      id='country'
                      name='country'
                      autoComplete='country-name'
                      className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setPaperType(e.target.value)}
                      value={paperType}
                      required
                    >
                      <option value={'ADVANCED_LEVEL'}>ADVANCED LEVEL</option>
                      <option value={'ORDINARY_LEVEL'}>ORDINARY LEVEL</option>
                    </select>
                  </div>

                  <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      School
                    </label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setSchool(e.target.value)}
                      value={school}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-left text-gray-700'
                    >
                      Paper Link
                    </label>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      onChange={(e) => setPaperUrl(e.target.value)}
                      value={paperUrl}
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

export default PaperDonationComponent;
