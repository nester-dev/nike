import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from '~/components';
import { heroapi, popularsales, topratesales, highlight, sneaker, story } from '~/data/data';

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroApi={heroapi} />
        <Sales endpoint={popularsales} isPopular />
        <FlexContent endpoint={highlight} isExists />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer />
    </>
  );
}

export default App;
