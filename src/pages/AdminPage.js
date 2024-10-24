import { NavLink } from "react-router-dom";
import React, { useEffect, useState, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import {GoogleButton} from "react-google-button"
import { AuthContext } from "../context/AuthContext";
import messageQueries from "../queries/MessageQueries";
import helper from "../queries/Helper";


function AdminPage({

}) {

    window.scroll(0, 0)
    const [messages, setMessages] = useState([])

    const getMessages = async () => {
        const messageData = await messageQueries.getMessagesData()
        setMessages(messageData)
    }

    const processedText = (text) => {
        return text?.split("//");
    };

    const processedBigLine = (line) => {
        return line?.replace("]]", "");
    };

    useEffect(() => {
        getMessages()
    }, [])

    return (
        <div className="flexColumnFull">
            <br/>
            <h1>Messages</h1>
                <div className="messageTable">
                    { messages?.map((message) => {
                        return(
                            <div className="messageRow marginBottom-30">
                                <div className="messageCellFront flex">
                                    <p className="mediaHidden">Name: &nbsp;</p>
                                    <p>{message.name}</p>
                                </div>
                                <div className="messageCellMid flex">
                                    <p className="mediaHidden">Phone: &nbsp;</p>
                                    <a href={`tel:${message.phoneNumber}`}>
                                        <p>{message.phoneNumber||"n/a"}</p>
                                    </a>
                                </div>
                                <div className="messageCellMid flex">
                                    <p className="mediaHidden">Email: &nbsp;</p>
                                    <a href={`mailto:${message.email}`}>
                                        <p>{message.email}</p>
                                    </a>
                                </div>
                                <div className="messageCellMid flex">
                                    <p className="mediaHidden">Message: &nbsp;</p>
                                    <p className="">{message.message||"n/a"}</p>
                                </div>
                                <div className="messageCellEnd flex">
                                    <p className="mediaHidden">Date: &nbsp;</p>
                                    <p>{helper.centralTimeString(message.created_on.full_time)}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            <br/>
        </div>
    );
}

export default AdminPage;
