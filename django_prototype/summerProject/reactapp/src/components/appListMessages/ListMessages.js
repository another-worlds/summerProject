import {Table} from "reactstrap";
import ModalMessage from "../appModalMessage/ModalMessage";
import AppRemoveMessage from "../appRemoveMessage/RemoveMessage";

const ListMessages = (props) => {
    const {messages} = props
    return (
        <Table dark>
            <thead>
            <tr>
                <th>origin</th>
                <th>text</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {!messages || messages.length <= 0 ? (
                <tr>
                    <td colSpan="2" align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
            ) : messages.map(message => (
                    <tr key={message.pk}>
                        <td>{message.origin}</td>
                        <td>{message.text}</td>
                        <td>
                            <ModalMessage
                                create={false}
                                message={message}
                                resetState={props.resetState}
                                newMessage={props.newMessage}
                            />
                            &nbsp;&nbsp;
                            <AppRemoveMessage
                                pk={message.pk}
                                resetState={props.resetState}
                            />
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    )
}

export default ListMessages