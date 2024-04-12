import About from 'src/components/About';
import Articles from 'src/components/Articles';
import Experience from 'src/components/Experience';
import Header from 'src/components/Header';
import Projects from 'src/components/Projects';

export default function Home() {
  return (
    <main className='px-4 md:px-8 lg:px-0'>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Articles />
    </main>
  );
}
