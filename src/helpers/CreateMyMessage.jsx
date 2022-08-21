import {
  Date,
  MyMessage,
  MyMessageText,
  MyContainer,
  MyMessageContainer,
} from "../components/chatSide/style";

const CreateMessage = ({ message, dateNow }) => {
  return (
    <MyContainer className="my-container">
      <MyMessageContainer>
        <MyMessage className="my-message">
          <MyMessageText>{message}</MyMessageText>
        </MyMessage>
        <Date className="message-date">{dateNow}</Date>
      </MyMessageContainer>
    </MyContainer>
  );
};

export default CreateMessage;
