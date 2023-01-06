import { FC } from 'react';

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className='grid items-center'>
      <h2 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h2>
    </div>
  );
};

export default Title;
