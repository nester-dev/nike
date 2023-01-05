import Hero from '~/components/Hero';
import { heroapi } from '~/data/data';

function App() {
  console.log(heroapi);
  return (
    <main>
      <Hero heroApi={heroapi} />
    </main>
  );
}

export default App;
