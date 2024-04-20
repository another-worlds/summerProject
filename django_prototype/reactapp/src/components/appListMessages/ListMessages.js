import { ScrollView } from "react";
import {Table} from "reactstrap";
import ModalMessage from "../appModalMessage/ModalMessage"

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
        <div id="chat-container">
            <Table dark id="chat-div">
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
            <ModalMessage id="chat-input"
            create={true}
            resetState={props.resetState}
            newMessage={true}/>
        </div>
    )
}

export default ListMessages