import {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const MessageForm = (props) => {
    const [message, setMessage] = useState({})

    const onChange = (e) => {
        const newState = message
        if (e.target.name === "file") {
            newState[e.target.name] = e.target.files[0]
        } else newState[e.target.name] = e.target.value
        setMessage(newState)
    }

    useEffect(() => {
        if (!props.newMessage) {
            setMessage(message => props.message)
        }
        // eslint-disable-next-line
    }, [props.message])

    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    const submitDataEdit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        const result = await axios.put(API_URL + message.pk, message, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    const submitDataAdd = async (e) => {
        e.preventDefault();
        const data = {
            origin: message['origin'],
            text: message['text'],
        }
        // eslint-disable-next-line
        const result = await axios.post(API_URL, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    return (
        <Form onSubmit={props.newMessage ? submitDataAdd : submitDataEdit}>
            <FormGroup>
                <Label for="origin">Origin:</Label>
                <Input
                    type="text"
                    name="origin"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(message.origin)}
                />
            </FormGroup>
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
                <Button>Send</Button> <Button onClick={props.toggle}>Cancel</Button>
            </div>
        </Form>
    )
}

export default MessageForm;