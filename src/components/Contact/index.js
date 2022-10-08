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
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type='name' 
                        name="name"
                        placeholder="Enter your name"
                        defaultValue={name}
                        onBlur={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type='email'
                        name="email"
                        placeholder="Enter your email"
                        defaultValue={email}
                        onBlur={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows='5'
                        placeholder="What is on your mind?"
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                {error && (
                    <div>
                        <p className="error-text">{error}</p>
                    </div>
                )}
                <button type="submit" className="btn">submit</button>
            </form>
        </section>
    )
}

export default Contact