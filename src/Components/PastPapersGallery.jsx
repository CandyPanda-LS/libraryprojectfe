import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPapers } from '../app/actions/paper.action';
import PaperComponent from './PaperComponent';

const paperType = {
  ADVANCED_LEVEL: 'ADVANCED_LEVEL',
  ORDINARY_LEVEL: 'ORDINARY_LEVEL',
  OTHER: 'OTHER',
};

export default function PastPapersGallery() {
  const dispatch = useDispatch();
  const papers = useSelector((state) => state.paper.filterPapers);

  useEffect(() => {
    dispatch(fetchAllPapers());
  }, [dispatch]);

  const filterPapers = (papers, paperType) => {
    return papers.filter(function (el) {
      return el.paperType === paperType;
    });
  };

  return (
    <section id='gallery'>
      <div className='mx-10 my-5'>
        <div className='container flex justify-start'>
          <p className='ml-10 md:ml-6 text-slate-500 text-lg '>Advanced Level</p>
        </div>
        <div className='container grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
          {papers &&
            filterPapers(papers, paperType.ADVANCED_LEVEL).map((paper) => {
              return <PaperComponent key={paper.id} paper={paper} />;
            })}
        </div>
      </div>
      <div className='mx-10 my-5'>
        <div className='container flex justify-start'>
          <p className='ml-10 md:ml-6 text-slate-500 text-lg '>Ordinary Level</p>
        </div>
        <div className='container grid grid-cols-1 gap-y-4 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
          {papers &&
            filterPapers(papers, paperType.ORDINARY_LEVEL).map((paper) => {
              return <PaperComponent key={paper.id} paper={paper} />;
            })}
        </div>
      </div>
    </section>
  );
}
