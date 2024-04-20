import {Fragment, useState} from "react";
import {Button, Form, Input} from "reactstrap";

import axios from "axios";
import {API_URL} from "../../index";

const ModalMessage = (props) => {
    // Stateful object and function
    const [message, setMessage] = useState({})


    // On message change update message
    const onChange = (e) => {
        const newState = message
        if (e.target.name === "file") {
            newState[e.target.name] = e.target.files[0]
        } else newState[e.target.name] = e.target.value
        console.log(e.target.name)
        console.log(e.target.value)
        setMessage(newState)
    }

    const submitDataAdd = async (e) => {
        e.preventDefault();
        // Set data fields
        const data = {
            origin: "user",
            text: message['text'],
        }
        // Wait until POST request is completed, receive JSON with results
        // eslint-disable-next-line
        const result = await axios.post(API_URL, data, {headers: {'Content-Type': 'multipart/form-data'}})
            // Then update messages and hide form
            .then(() => {
                props.resetState()
            })
    }


    return (
        <Fragment>
            <Form
                style={{display:"flex", width: "100%"}} 
                onSubmit={submitDataAdd}>
                {/* Second field */}
                <div style={{flex: "0 0 90%"}}>
                    <Input 

                        type="text"
                        name="text"
                        onChange={onChange}
                        defaultValue={""}
                    />
                </div>
                <div style={{flex: "0 0 10%"}}>
                    {/* On Send call onChange*/}
                    <Button style={{width:"100%"}}>Send</Button> 
                </div>
            </Form>
        </Fragment>
    )
}
export default ModalMessage;