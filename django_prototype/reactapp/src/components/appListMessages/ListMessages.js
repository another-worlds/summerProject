import {Table} from "reactstrap";
import ModalMessage from "../appModalMessage/ModalMessage";
import AppRemoveMessage from "../appRemoveMessage/RemoveMessage";

const getStyle = (origin) => {
    if (origin == "system") {
      return {
        textAlign: "left"
      };
    } else {
      return {
        textAlign: "right"
      };
    }
  };

const ListMessages = (props) => {
    const {messages} = props
    return (
        <Table dark>
            <tbody>
                
            {!messages || messages.length <= 0 ? (
                // If no messages, display empty rows
                <tr>
                    <td colSpan="2" align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
                // if messages, map the table with template:
            ) : messages.map(message => (
                    <tr style={getStyle(message.origin)} key={message.pk}>
                        <td>{message.text}</td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    )
}

export default ListMessages