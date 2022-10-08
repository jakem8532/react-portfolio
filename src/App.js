import React, {useState} from 'react'
import './App.css';

import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [navOptions] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])

  const [currentNavOption, setNavOption] = useState(navOptions[0])

  function navDisplay() {
    switch (currentNavOption) {
      case 'Portfolio':
        return <Portfolio></Portfolio>
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
        <div className='page-max-width'>
          <h1 className='site-title'>Jake Mendez</h1>
          <Navigation
            navOptions={navOptions}
            currentNavOption={currentNavOption}
            setNavOption={setNavOption}
          ></Navigation>
        </div>
      </header>
      <main className='main'>{navDisplay()}</main>
      <footer>
        <a href='https://github.com/jakem8532' target='_blank' rel='noreferrer'>
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
