import React, { useEffect } from 'react'
 
function Navigation(props) {

    const { navOptions = [], currentNavOption, setNavOption } = props

    useEffect(() => {
        document.title = currentNavOption
    }, [currentNavOption])

    return (
        <nav>
            <ul className='nav-container'>
                {navOptions.map(option => (
                    <li 
                        className={`nav-title ${currentNavOption === option && 'navActive'}`}
                        key={option}
                    >
                        <span onClick={() => {
                            setNavOption(option)
                        }}
                        >
                            {option}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation