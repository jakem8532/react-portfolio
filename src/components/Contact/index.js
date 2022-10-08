import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'


function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')
    
    const { name, email, message } = formState

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)

            if (!isValid) {
                setErrorMessage("Please enter a correct email address!")
            }else {
                setErrorMessage('')
            }
        }else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} field cannot be blank`)
            }else {
                setErrorMessage('')
            }

            if (!errorMessage) {
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
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows='5'
                        defaultValue={message}
                        onBlur={handleChange}
                    />
                </div>
                </div>
            </form>
        </section>
    )
}

export default Contact