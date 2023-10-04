import React, { useState } from 'react'

const LetTalk = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    // const options ["e" ]
  return (
    <div>
        <div>
            <div>
                <h2>Let's Talk</h2>
                <p>We'd love to hear from you. Leave us a message using the contact form or drop us a line</p>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <h2>Send a message</h2>
                <form>
                    <div>
                        <label>Full Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input type='text' />
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LetTalk