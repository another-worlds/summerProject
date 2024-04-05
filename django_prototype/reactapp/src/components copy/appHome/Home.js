import {Container, Row, Col} from "reactstrap";
import ListMessages from "../appListMessages/ListMessages";
import axios from "axios";
import {useEffect, useState} from "react";
import ModalMessage from "../appModalMessage/ModalMessage";
import {API_URL} from "../../index";

const Home = () => {
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        getMessages()
    },[])

    const getMessages = (data)=>{
        axios.get(API_URL).then(data => setMessages(data.data))
    }

    const resetState = () => {
        getMessages();
    };

    return (
        <Container style={{marginTop: "20px"}}>
            <Row>
                <Col>
                    <ListMessages messages={messages} resetState={resetState} newMessage={false}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalMessage
                    create={true}
                    resetState={resetState}
                    newMessage={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;