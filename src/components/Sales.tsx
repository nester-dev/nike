import { FC } from 'react';
import Title from '~/components/Title';
import Item from '~/components/Item';
import { ISales } from '~/types/types';

interface ISalesProps {
  isPopular?: boolean;
  endpoint: ISales;
}

const Sales: FC<ISalesProps> = ({ isPopular, endpoint: { title, items } }) => {
  return (
    <div className='nike-container'>
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
          isPopular
            ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
            : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        }`}
      >
        {items?.map((item) => (
          <Item key={item.id} item={item} isPopular={isPopular} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
