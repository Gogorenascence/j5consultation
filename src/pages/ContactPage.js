import React, { useState, useEffect } from 'react'
import ImageContainer from '../display/ImageContainer'
import MapWithAddress from '../display/Map'
import messageQueries from '../queries/MessageQueries'

function ContactPage() {

    // window.scroll(0, 0)

    const [message, setMessage] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    const handleChange = (event) => {
        setMessage({...message, [event.target.name]: event.target.value })
        console.log(message)
    }

    useEffect(() => {
        window.scroll(0, 0);
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...message};
        if (message.name && (message.email || message.phoneNumber)) {
            const createdMessage = await messageQueries.createMessage(data)
            if (createdMessage) {
                const clearedMessage = {
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                }
                setMessage(clearedMessage)
            } else {
                alert("Error in creating message");
            }
        }
    }


    return (
        <div className="flexColumnFull">
            {/* <ImageContainer imageSRC={"https://loremflickr.com/1956/540"}/> */}
            <div className="flexColumnFullInner">
                <div className="contactBox">
                    <br/>
                    <p className="reach">Reach out with any questions or comments about our services</p>
                    <div className="inputContainer">
                        <h5 className="label">Name <span style={{color: "red", fontSize: "30px"}}>*</span></h5>
                        <input
                            className="formInput"
                            type="text"
                            onChange={handleChange}
                            name="name"
                            value={message.name}>
                        </input>
                    </div>
                    <div className="inputContainer">
                        <h5 className="label">Email Address <span style={{color: "red", fontSize: "30px"}}>*</span></h5>
                        <input
                            className="formInput"
                            type="text"
                            onChange={handleChange}
                            name="email"
                            value={message.email}>
                        </input>
                    </div>
                    <div className="inputContainer">
                        <h5 className="label">Phone Number <span style={{color: "red", fontSize: "30px"}}>*</span></h5>
                        <input
                            className="formInput"
                            type="text"
                            onChange={handleChange}
                            name="phoneNumber"
                            value={message.phoneNumber}>
                        </input>
                    </div>
                    <div className="inputContainer">
                        <h5 className="label">Message </h5>
                        <textarea
                            className="formTextArea"
                            type="text"
                            onChange={handleChange}
                            name="content"
                            value={message.content}>
                        </textarea>
                    </div>
                    <button className="blueSubmit pointer" onClick={handleSubmit}>Submit</button>
                </div>

                    <div className="contactBox2">
                        <br/>
                        <p className="contactHeader">Contact Info</p>
                        <p className="contactText2">
                            Phone: <a href="tel:817-422-6959">817-422-6959</a>
                        </p>
                        <p className="contactText3">Fax: 817-977-0333</p>
                        <p className="contactText3">
                            Email: <a href="mailto:j5healthcenters@gmail.com">j5healthcenters@gmail.com</a>
                        </p>
                        <p className="contactHeader">Location</p>
                        <p className="contactText2">5601 Bridge St. STE 300</p>
                        <p className="contactText3">Fort Worth, TX 76112</p>
                        <p className="contactHeader">Hours</p>
                        <div className='flex'>
                            <div className='days marginTop-10'>
                                <p className="contactText3">Mon</p>
                                <p className="contactText3">Tue</p>
                                <p className="contactText3">Wed</p>
                                <p className="contactText3">Thu</p>
                                <p className="contactText3">Fri</p>
                                <p className="contactText3">Sat</p>
                            </div>
                            <div className='times marginTop-10'>
                                <p className="contactText3">8:30am – 5:00pm</p>
                                <p className="contactText3">8:30am – 5:00pm</p>
                                <p className="contactText3">8:30am – 5:00pm</p>
                                <p className="contactText3">8:30am – 5:00pm</p>
                                <p className="contactText3">8:30am – 12:00pm</p>
                                <p className="contactText3">12:00pm – 4:00pm</p>
                            </div>
                        </div>
                        <br/>
                    </div>
            </div>
        </div>
    );
}

export default ContactPage;
