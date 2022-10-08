import React from 'react'

function Portfolio() {

    const projects = [
        {
            name: 'code quiz',
            description: 'Test quiz that tests your knowledge on basic HTML/CSS/JS',
            languages: 'HTML, JS, CSS',
            repo: 'https://github.com/jakem8532/code-quiz',
            live: 'https://jakem8532.github.io/code-quiz/'
        },
        {
            name: 'Password Generator',
            description: 'Having trouble thinking of a unique password to use? Password generator has your back',
            languages: 'HTML, CSS, JS',
            repo: 'https://github.com/jakem8532/password-generator',
            live: ' https://jakem8532.github.io/password-generator/'
        },
        {
            name: 'Deep Thoughts',
            description: 'A place where thoughts can be exchanged freely',
            languages: 'Express, MongoDB, CSS, React',
            repo: 'https://github.com/jakem8532/deep-thoughts',
            live: 'https://glacial-crag-91199.herokuapp.com/'
        },
    ]     

    return (
        <div>
            <h3 className='section-title'>Portfolio</h3>
            <div className='project-group'>
                {projects.map((project, i) => (
                    <div className='card' key={i}>
                        <div className='card-top'>
                            <img
                                src={require(`../../assets/images/${i}.png`)}
                                alt={project.name}
                                className='project-img'
                            />
                        </div>
                        <div className='card-bottom'>
                            <h4 className='project-title'>{project.name}</h4>
                            <p className='project-languages'>{project.languages}</p>
                            <p className='project-description'>{project.description}</p>
                            <div className='project-links'>
                                <a href={project.repo} target='_blank' rel='noreferrer'>Github Repo</a>
                                <a href={project.live} tatget='_blank' rel='noreferrer'>Live Page</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio