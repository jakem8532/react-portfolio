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
        <div className='container'>
            <h3 className='section-title'>Portfolio</h3>
            <div className='project-group d-flex'>
                {projects.map((project, i) => (
                    <div className='card' key={i}>
                        <div className='card-top'>
                            <img
                                src={require(`../../assets/images/${i}.png`)}
                                alt={project.name}
                                className='card-img'
                            />
                        </div>
                        <div className='card-bottom'>
                            <div className='card-header'>
                                 <h4 className='card-title'>{project.name}</h4>
                                <p className='card-languages'>{project.languages}</p>
                            </div>
                            <p className='card-body'>{project.description}</p>
                            <div className='card-links'>
                                <a href={project.repo} target='_blank' rel='noreferrer' className='card-link'>Github Repo</a>
                                <br></br>
                                <a href={project.live} tatget='_blank' rel='noreferrer' className='card-link'>Live Page</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio