import React, { useState, useEffect } from 'react'
import ImageContainer from '../display/ImageContainer'

function ContactPage() {

    const [message, setMessage] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    })

    // const hours = {
    //     "Monday": "8:30am – 5:00pm",
    //     "Tuesday": "8:30am – 5:00pm",
    //     "Wednesday": "8:30am – 5:00pm",
    //     "Thursday":	"8:30am	– 5:00pm",
    //     "Friday": "8:30am – 12:00pm",
    //     "Saturday":	"12:00pm – 4:00pm"
    // }

    const handleChange = (event) => {
        setMessage({...message, [event.target.name]: event.target.value })
        console.log(message)
    }

    useEffect(() => {
        // window.scroll(0, 0);
    },[])

    const handleSubmit = async (event) => {
        console.log(message)
        // event.preventDefault();
        // const data = {...card};
        // data["card_number"] = parseInt(card["card_number"], 10);
        // data["enthusiasm"] = message.enthusiasm? parseInt(card["enthusiasm"], 10): null
        // data["card_type"] = card_type
        // data["extra_effects"] = extra_effects
        // data["reactions"] = reactions
        // data["card_tags"] = card_tags
        // data["created_on"] = helper.createTimeObj2()
        // data["updated_on"] = helper.createTimeObj2()
        // console.log(update)
        // const cardUrl = "https://pm-deck-react-only.onrender.com/cards/";
        // const cardUrl = `http://localhost:4000/cards/${message.card_number}`
        // const fetchConfig = {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // };

        // const response = await fetch(cardUrl, fetchConfig);
        // if (response.ok) {
        //     await response.json();
        //     navigate(`/cards/${message.card_number}`)
        // } else {
        //     alert("Error in updating card");
        // }
    };


    return (
        <div className="flexColumnFull">
            {/* <ImageContainer imageSRC={"https://loremflickr.com/1956/540"}/> */}
            <div className="flexColumnFullInner">
                <div className="contactBox">
                    <br/>
                    <p className="reach">Reach out with any questions or comments about our services</p>
                    <div className="inputContainer">
                        <h5 className="label">Name </h5>
                        <input
                            className="formInput"
                            type="text"
                            onChange={handleChange}
                            name="name"
                            value={message.name}>
                        </input>
                    </div>
                    <div className="inputContainer">
                        <h5 className="label">Email Address</h5>
                        <input
                            className="formInput"
                            type="text"
                            onChange={handleChange}
                            name="email"
                            value={message.email}>
                        </input>
                    </div>
                    <div className="inputContainer">
                        <h5 className="label">Phone Number </h5>
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
                    <button className="blueSubmit">Submit</button>
                </div>
                <div className="contactBox2">
                    <br/>
                    <p className="contactText2">Phone: 682-472-1132</p>
                    <p className="contactText3">Fax: 817-977-0333</p>
                    <p className="contactText3">j5healthcenters@gmail.com</p>
                    <p className="contactHeader">Location</p>
                    <p className="contactText2">5601 Bridge St. STE 300</p>
                    <p className="contactText3">Fort Worth, TX 76112</p>
                    <p className="contactHeader">Hours</p>
                    <div className='flex'>
                        <div className='days'>
                            <p className="contactText3">Mon</p>
                            <p className="contactText3">Tue</p>
                            <p className="contactText3">Wed</p>
                            <p className="contactText3">Thu</p>
                            <p className="contactText3">Fri</p>
                            <p className="contactText3">Sat</p>
                        </div>
                        <div className='times'>
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
