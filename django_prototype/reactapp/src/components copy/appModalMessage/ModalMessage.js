import {Fragment, useState} from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import MessageForm from "../appMessageForm/MessageForm";

const ModalMessage = (props) => {
    const [visible, setVisible] = useState(false)
    var button = <Button onClick={() => toggle()}>Редактировать</Button>;

    const toggle = () => {
        setVisible(!visible)
    }

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
            <Modal isOpen={visible} toggle={toggle}>
                <ModalHeader
                    style={{justifyContent: "center"}}>{props.create ? "Добавить сообщение" : "Редактировать сообщение"}</ModalHeader>
                <ModalBody>
                    <MessageForm
                        message
                        ={props.message ? props.message : []}
                        resetState={props.resetState}
                        toggle={toggle}
                        newMessage={props.newMessage}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    )
}
export default ModalMessage;