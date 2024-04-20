import {Container, Row, Col} from "reactstrap";
import ListMessages from "../appListMessages/ListMessages";
import axios from "axios";
import {useEffect, useState} from "react";
import ModalMessage from "../appModalMessage/ModalMessage";
import {API_URL} from "../../index";

const Home = () => {
    // Stateful object and setter function to update it 
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        getMessages()
    },[])

    // Object getter through API 
    const getMessages = (data)=>{
        axios.get(API_URL).then(data => setMessages(data.data))
    }

    // Call object getter
    const resetState = () => {
        getMessages();
    };

    return (
        <div id="main-content">    
            <div id="input-div">
                <input placeholder="https://www.youtube.com/watch?v=10M5BW6hwVM" id="url-input"/>
                <input placeholder="Who is Asmongold?" id="question"/>
            </div>
            {/* Call list function with object context */}
            <ListMessages 
            messages={messages} 
            resetState={resetState} 
            newMessage={false}/>

        </div>
    )
}

export default Home;