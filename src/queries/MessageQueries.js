import { db } from "../Firebase"
import {
    getDocs,
    collection,
    query,
    orderBy,
    where,
    limit,
    addDoc,
    or,
    startAfter
} from "firebase/firestore"
import helper from "./Helper"

const messageQueries = {
    getmessagesData: async function getmessagesData() {
        const messagesCollectionRef = collection(db, "messages")
        const response = await getDocs(messagesCollectionRef);
        const data = response.docs.map((doc) => ({
            ...doc.data(),
        }))
        helper.createAllTimesAgos(data)
        return data
    },
    getMessageDataById: async function getMessageDataById(id) {
        const messagesCollectionRef = collection(db, "messages");
        const messageQuery = query(
            messagesCollectionRef,
            where("id", "==", id)
        )
        const snapshot = await getDocs(messageQuery);
        if (snapshot.empty) {
            // console.log("No matching documents.");
            return null;
        } else {
            const messageData = snapshot.docs[0].data();
            helper.createTimesAgos(messageData)
            return messageData;
        }
    },
    getRangedQueriedMessagesData: async function getRangedQueriedMessagesData(end, queryList) {
        let messagesCollectionRef = collection(db, "messages");
        // console.log(query(messagesCollectionRef))

        for (const [key, value] of Object.entries(queryList)) {
            messagesCollectionRef = query(messagesCollectionRef, where(key, "==", value));
        }
        messagesCollectionRef = query(
            messagesCollectionRef,
            orderBy("updated_on.full_time", "desc"),
            limit(end)
        )
        const snapshot = await getDocs(messagesCollectionRef)
        // console.log(snapshot)
        if (snapshot.empty) {
            console.log("No matching documents.");
            return null;
        } else {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
            helper.createAllTimesAgos(data)
            return data;
        }
    },
    getQueriedMessagesData: async function getQueriedMessagesData(queryList) {
        let messagesCollectionRef = collection(db, "messages");
        // console.log(query(messagesCollectionRef))

        for (const [key, value] of Object.entries(queryList)) {
            messagesCollectionRef = query(messagesCollectionRef, where(key, "==", value));
        }
        messagesCollectionRef = query(
            messagesCollectionRef,
            orderBy("updated_on.full_time", "desc")
        )
        const snapshot = await getDocs(messagesCollectionRef)
        // console.log(snapshot)
        if (snapshot.empty) {
            // console.log("No matching documents.");
            return null;
        } else {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
            helper.createAllTimesAgos(data)
            return data;
        }
    },
    getMessageDataById2: async function getMessageDataById2(id) {
        // const response = await fetch(`https://pm-message-react-only.onrender.com/messages/${id`)
        const response = await fetch(`http://localhost:4000/messages/${id}`)
        const messageData = await response.json()
        if (!messageData) {
            return null;
        } else {
            helper.createTimesAgos(messageData)
            return messageData;
        }
    },
    createMessage: async function createMessage(messageData) {
        const messagesCollectionRef = collection(db, "messages")
        const randomString = await helper.generateRandomString(24);
        const created_on = await helper.createTimeObj()

        messageData["id"] = randomString
        messageData["created_on"] = created_on
        messageData["updated_on"] = created_on

        console.log(messageData)
        addDoc(messagesCollectionRef, messageData)
        return messageData
    },
    editMessage: async function editMessage(id, messageData) {
        const updated_on = await helper.createTimeObj()
        messageData["updated_on"] = updated_on
        console.log(messageData)
        // const messageUrl = `https://pm-message-react-only.onrender.com/messages/${id}`;
        const messageUrl = `http://localhost:4000/messages/${id}`;
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(messageData),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(messageUrl, fetchConfig);
        const editedMessage = response.json()
        if (response.ok) {
            return true
        } else {
            return false
        }
    },
    // deleteMessage: async function deleteMessage(id) {
    //     const messagesCollectionRef = collection(db, "messages");
    //     const messageQuery = query(
    //         messagesCollectionRef,
    //         where("id", "==", id)
    //     );

    //     const snapshot = await getDocs(messageQuery);
    //     if (!snapshot.empty) {
    //         // Document exists, delete it
    //         const messageDoc = snapshot.docs[0];
    //         await deleteDoc(messageDoc.ref);
    //         return true; // Deletion successful
    //     } else {
    //         console.log("Message not found");
    //         return false; // Message not found
    //     }
    // },
    getmessagesDataNoDate: async function getmessagesDataNoDate() {
        const messagesCollectionRef = collection(db, "messages")
        const response = await getDocs(messagesCollectionRef);
        const data = response.docs.map((doc) => ({
            ...doc.data(),
        }))
        return data
    },
    getMessagesListData: async function getMessagesListData(
        queryList,
        sortMethod,

    ) {
        let messagesCollectionRef = collection(db, "messages");
        // for (const [key, value] of Object.entries(queryList)) {
        //     if (value[2]){
        //         messagesCollectionRef = query(messagesCollectionRef, where(key, value[1], value[0]));
        //     }
        // }
        let needsContains = ""
        for (const [key, value] of Object.entries(queryList)) {
            if (value[2]) {
                if (key === "card_series_names" && value[0]) {
                    needsContains = value[0]
                } else {
                    messagesCollectionRef = query(messagesCollectionRef, where(key, value[1], value[0]));
                }
            }
        }
        if (needsContains) {
            messagesCollectionRef = query(messagesCollectionRef,
                or(
                    where("card_names", "array-contains", needsContains),
                    where("series_names", "array-contains", needsContains)
            ));
        }
        messagesCollectionRef = query(
            messagesCollectionRef,
            orderBy(sortMethod[0], sortMethod[1]),
            limit(20)
        )
        const snapshot = await getDocs(messagesCollectionRef)
        console.log(snapshot)
        if (snapshot.empty) {
            console.log("No matching documents.");
            return null;
        } else {
            const lastDoc = snapshot.docs[snapshot.docs.length-1]
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
            helper.createAllTimesAgos(data)
            return [data, lastDoc];
        }
    },
    getMoreMessagesListData: async function getMoreMessagesListData(
        queryList,
        sortMethod,
        lastDoc,
        end
    ) {
        let messagesCollectionRef = collection(db, "messages");
        let needsContains = ""
        for (const [key, value] of Object.entries(queryList)) {
            if (value[2]) {
                if (key === "card_series_names" && value[0]) {
                    needsContains = value[0]
                } else {
                    messagesCollectionRef = query(messagesCollectionRef, where(key, value[1], value[0]));
                }
            }
        }
        if (needsContains) {
            messagesCollectionRef = query(messagesCollectionRef,
                or(
                    where("card_names", "array-contains", needsContains),
                    where("series_names", "array-contains", needsContains)
            ));
        }
        messagesCollectionRef = query(
            messagesCollectionRef,
            orderBy(sortMethod[0], sortMethod[1]),
        )
        if (lastDoc) {
            messagesCollectionRef = query(
                messagesCollectionRef,
                startAfter(lastDoc)
            );
        }
        messagesCollectionRef = query(
            messagesCollectionRef,
            limit(end)
        );
        const snapshot = await getDocs(messagesCollectionRef)
        console.log(snapshot)
        if (snapshot.empty) {
            console.log("No matching documents.");
            return null;
        } else {
            const lastDoc = snapshot.docs[snapshot.docs.length-1]
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }))
            helper.createAllTimesAgos(data)
            return [data, lastDoc];
        }
    },
    getAllMessagesData: async function getmessagesData() {
        const messagesCollectionRef = collection(db, "messages")
        const response = await getDocs(messagesCollectionRef);
        const data = response.docs.map((doc) => ({
            ...doc.data(),
        }))
        return data
    },
}

export default messageQueries
