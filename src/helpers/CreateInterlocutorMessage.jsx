import {
  InterlocutorContainer,
  InterlocutorMessage,
  MessageContainer,
  MessageText,
  Date,
} from "../components/chatSide/style";

import { Avatar } from "../components/SideMenu/style";

const CreateInretlocuterMessage = ({ avatar, name, value, dateNow }) => {
  return (
    <InterlocutorContainer className="interlocutor-container">
      <Avatar src={avatar} alt={name} />
      <MessageContainer>
        <InterlocutorMessage className="message-text">
          <MessageText>{value}</MessageText>
        </InterlocutorMessage>
        <Date className="message-date">{dateNow}</Date>
      </MessageContainer>
    </InterlocutorContainer>
  );
};

export default CreateInretlocuterMessage;
