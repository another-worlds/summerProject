import {Fragment, useState} from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import MessageForm from "../appMessageForm/MessageForm";

const ModalMessage = (props) => {
    // Object and setter function
    const [visible, setVisible] = useState(false)

    // Create button object and attach function (set call to toggle function)
    var button = <Button onClick={() => toggle()}>Редактировать</Button>;

    // Switch visibility of a form
    const toggle = () => {
        setVisible(!visible)
    }

    // If message doesn't exist, create "add message"
    if (props.create) {
        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={() => toggle()}
                style={{minWidth: "200px"}}>
                Добавить сообщение
            </Button>
        )
    }
    return (
        <Fragment>
            {button}
            {/* Set visibility of a modal (open form) */}
            <Modal isOpen={visible} toggle={toggle}>
                <ModalHeader
                    // Set header of a form depending on the action
                    style={{justifyContent: "center"}}>{props.create ? "Добавить сообщение" : "Редактировать сообщение"}</ModalHeader>
                <ModalBody>
                    <MessageForm
                        // If message exists, fill it 
                        message={props.message ? props.message : []}
                        // On action list messages again
                        resetState={props.resetState}
                        // On button press, hide form
                        toggle={toggle}
                        // On sumbit create message(How? Generics?)
                        newMessage={props.newMessage}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    )
}
export default ModalMessage;