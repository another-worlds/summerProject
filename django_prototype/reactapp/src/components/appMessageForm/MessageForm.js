import {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const MessageForm = (props) => {
    // Set "message" as a stateful object depending on setMessage
    const [message, setMessage] = useState({})

    // On update event
    const onChange = (e) => {
        const newState = message
        if (e.target.name === "file") {
            newState[e.target.name] = e.target.files[0]
        } else newState[e.target.name] = e.target.value
        console.log(e.target.name)
        console.log(e.target.value)
        setMessage(newState)
    }

    // 
    useEffect(() => {
        // If form isn't newMessage, use the existing data | If in edit mode, get existing data
        if (!props.newMessage) {
            setMessage(message => props.message)
        }
        // If this value is changed, call function above\
        // eslint-disable-next-line
    }, [props.message])

    // if value is empty, initialize it with empty string??? | probably mandatory   
    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    // Edit data function
    const submitDataEdit = async (e) => {
        // Make sure not default value posted
        e.preventDefault();
        // Wait until UPDATE request is completed, receive JSON with results
        // eslint-disable-next-line
        const result = await axios.put(API_URL + message.pk, message, {headers: {'Content-Type': 'multipart/form-data'}})
            // Then update messages and hide form
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    // Add data function, receive context entity argument
    const submitDataAdd = async (e) => {
        e.preventDefault();
        // Set data fields
        const data = {
            origin: message['origin'],
            text: message['text'],
        }
        // Wait until POST request is completed, receive JSON with results
        // eslint-disable-next-line
        const result = await axios.post(API_URL, data, {headers: {'Content-Type': 'multipart/form-data'}})
            // Then update messages and hide form
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    return (
        // On submit call data creation if the form is called via newMessage and edit if not
        <Form onSubmit={props.newMessage ? submitDataAdd : submitDataEdit}>
            {/* First field */}
            <FormGroup>
                <Label for="origin">Origin:</Label>
                <Input
                    type="text"
                    name="origin"
                    // If changed, set value
                    onChange={onChange}
                    // If empty, set default
                    defaultValue={defaultIfEmpty(message.origin)}
                />
            </FormGroup>
            {/* Second field */}
            <FormGroup>
                <Label for="text">Text</Label>
                <Input
                    type="text"
                    name="text"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(message.text)}
                />
            </FormGroup>
            
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {/* On Send call onChange*/}
                <Button>Send</Button> 
                {/* On Cancel hide form */}
                <Button onClick={props.toggle}>Cancel</Button>
            </div>
        </Form>
    )
}

export default MessageForm;