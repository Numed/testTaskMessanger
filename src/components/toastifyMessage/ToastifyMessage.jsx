import {
  InterlocutorContainer,
  MessageContainer,
  InterlocutorMessage,
  MessageText,
} from "../chatSide/style";
import { Avatar } from "../SideMenu/style";

const ToastifyMessage = ({ avatar, name, message }) => {
  return (
    <InterlocutorContainer>
      <Avatar src={avatar} alt={name} />
      <MessageContainer>
        <InterlocutorMessage className="message-text">
          <MessageText>{message}</MessageText>
        </InterlocutorMessage>
      </MessageContainer>
    </InterlocutorContainer>
  );
};

export default ToastifyMessage;
