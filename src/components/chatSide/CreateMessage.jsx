import {
  Date,
  MyMessage,
  MessageContainer,
  MyMessageText,
  MyContainer,
} from "./style";

const CreateMessage = ({ message, date }) => {
  return (
    <MyContainer>
      <MessageContainer>
        <MyMessage>
          <MyMessageText>{message}</MyMessageText>
        </MyMessage>
        <Date className="message-date">{date}</Date>
      </MessageContainer>
    </MyContainer>
  );
};

export default CreateMessage;
