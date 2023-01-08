import { ITextContent } from '~/types/types';
import { FC } from 'react';

interface FlexContentProps {
  endpoint: ITextContent;
  isExists?: boolean;
}

const FlexContent: FC<FlexContentProps> = ({
  isExists,
  endpoint: { heading, title, text, btn, url, img },
}) => {
  return (
    <div
      id={isExists ? 'highlights' : 'featured'}
      className={`flex justify-between items-center lg:flex-col lg:justify-center nike-container ${
        isExists ? 'flex flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className='grid items-center lg:justify-items-center max-w-lg lg:max-w-none w-full md:text-center'>
        <h3 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h3>
        <h3 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>
          {title}
        </h3>
        <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
        <a className='flex items-center' href={url} target='_blank' rel='noreferrer'>
          <button
            className='button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'
            type='button'
          >
            {btn}
          </button>
        </a>
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
        <img
          className={`w-auto object-fill transitions-theme ${
            isExists
              ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12'
              : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'
          }`}
          src={img}
          alt='sneakers'
        />
      </div>
    </div>
  );
};

export default FlexContent;
