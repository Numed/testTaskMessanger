import {
  Date,
  MyMessage,
  MessageContainer,
  MyMessageText,
  MyContainer,
  MyMessageContainer,
} from "./style";

const CreateMessage = ({ message, dateNow }) => {
  return (
    <MyContainer>
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
