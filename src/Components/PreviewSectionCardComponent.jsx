import React from 'react';

function PreviewSectionCardComponent(props) {
  return (
    <div
      className=' container bg-gradient-to-r from-brightRed to-brightRedLight hover:from-red-600 hover:to-brightRedLight justify-center shadow-lg flex-row rounded-xl px-10 py-10 hover:cursor-pointer'
      onClick={props.onClick}
    >
      <h1 className='text-white font-black text-3xl'>{props.cardName}</h1>
      <p className='text-xs text-center font-lg'>
        Lorem ipsum dolor sit amet consectetur. Cras faucibus egestas tortor porttitor. Pellentesque
        id ornare eget porttitor mauris.
      </p>
    </div>
  );
}

export default PreviewSectionCardComponent;
