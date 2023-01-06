import { Hero, Sales } from '~/components';
import { heroapi, popularsales, topratesales } from '~/data/data';

function App() {
  return (
    <main className='flex flex-col gap-16 relative'>
      <Hero heroApi={heroapi} />
      <Sales endpoint={popularsales} isPopular />
      <Sales endpoint={topratesales} />
    </main>
  );
}

export default App;
