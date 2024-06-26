import {Fragment, useState} from "react";
import {Button, Modal, ModalHeader, ModalFooter} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const AppRemoveMessage = (props) => {
    // Set "visible" stateful object to be changed with setVisible function
    const [visible, setVisible] = useState(false)
    // Set toggle method
    const toggle = () => {
        setVisible(!visible)
    }
    // Call DELETE API on function call, update messages and hide form
    const deleteMessage = () => {
        axios.delete(API_URL + props.pk).then(() => {
            props.resetState()
            toggle();
        });
    }
    return (
        <Fragment>
            {/* Form button with preset color */}
            <Button color="danger" onClick={() => toggle()}>
                Удалить
            </Button>
            {/* Set hidden/shown state depending on "visible" variable */}
            <Modal isOpen={visible} toggle={toggle} style={{width: "300px"}}>
                <ModalHeader style={{justifyContent: "center"}}>Вы уверены?</ModalHeader>
                <ModalFooter style={{display: "flex", justifyContent: "space-between"}}>
                    {/* Button to send API call and reset */}
                    <Button
                        type="button"
                        onClick={() => deleteMessage()}
                        color="primary"
                    >Удалить</Button>
                    {/* Button to hide form */}
                    <Button type="button" onClick={() => toggle()}>Отмена</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}
export default AppRemoveMessage;