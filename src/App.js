import React, {useState} from 'react'
import './App.css';

import Navigation from './components/Navigation';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [navOptions] = useState(['About Me', 'Projects', 'Contact', 'Resume'])

  const [currentNavOption, setNavOption] = useState(navOptions[0])

  function navDisplay() {
    switch (currentNavOption) {
      case 'Projects':
        return <Projects></Projects>
      case 'Contact':
        return <Contact></Contact>
      case 'Resume':
        return <Resume></Resume>
      default:
        return <AboutMe></AboutMe>
    }
  }

  return (
    <div className='body'>
      <header>
        <h2 className='site-title'>Jake Mendez</h2>
        <Navigation
          navOptions={navOptions}
          currentNavOption={currentNavOption}
          setNavOption={setNavOption}
        ></Navigation>
      </header>
      <main className='main'>{navDisplay}</main>
      <footer>
        <a href='https://github.com/jakem8532' target='_blank' rel='noreferrer'>
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
