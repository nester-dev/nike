import logo from '../assets/logo.png';
import github from '../assets/github.svg';

const Footer = () => {
  return (
    <div className='bg-theme'>
      <div className='nike-container text-slate-200'>
        <div className='flex justify-center w-full py-7 gap-5 flex-wrap'>
          <div className='flex flex-col gap-0.5 w-[300px]'>
            <div className='w-40 h-20'>
              <img className='object-contain' src={logo} alt='logo' />
            </div>
            <p className='text-xs'>
              The Nike Store is a project developed using React, Redux toolkit and Typescript.
              Implemented the functionality of adding items to cart, as well as all the logic
              associated with the cart.
            </p>
          </div>
          <div>
            <h2 className='text-lg lg:text-base md:text-sm uppercase font-semibold mb-3'>
              SITE MAP
            </h2>
            <ul className='text-sm [&>li:not(:last-child)]:mb-1'>
              <li>
                <a href='#hero'>Main</a>
              </li>
              <li>
                <a href='#popular'>Popular</a>
              </li>
              <li>
                <a href='#highlights'>Highlights</a>
              </li>
              <li>
                <a href='#rated'>Top Rated</a>
              </li>
              <li>
                <a href='#featured'>Featured</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-lg lg:text-base md:text-sm uppercase font-semibold mb-3'>
              Contact me
            </h3>
            <a
              href='https://github.com/nester-dev'
              target='_blank'
              rel='noreferrer'
              className='flex gap-2 text-sm'
            >
              <img src={github} alt='github' />
              nester-dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
