import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [error, setError] = useState('')
    
    const { name, email, message } = formState

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)

            if (!isValid) {
                setError("Please enter a correct email address!")
            }else {
                setError('')
            }
        }else {
            if (!e.target.value.length) {
                setError(`${e.target.name} field cannot be blank`)
            }else {
                setError('')
            }

            if (!error) {
                setFormState({ ...formState, [e.target.name]: e.target.value})
            }
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className="contact-wrapper container">
            <h3 className="section-title">Contact Me</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type='name' 
                        name="name" 
                        defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type='email'
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows='5'
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                {error && (
                    <div>
                        <p className="error-text">{error}</p>
                    </div>
                )}
                <button type="submit">submit</button>
            </form>
        </section>
    )
}

export default Contact