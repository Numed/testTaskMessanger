import {
  InterlocutorContainer,
  InterlocutorMessage,
  MessageContainer,
  MessageText,
  Date,
} from "./style";

import { Avatar } from "../SideMenu/style";

const CreateInretlocuterMessage = ({ avatar, name, value, dateNow }) => {
  return (
    <InterlocutorContainer>
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
