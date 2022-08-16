import { useState, useContext } from "react";
import { Avatar, AvatarName } from "../SideMenu/style";
import InfoContext from "../context/context";
import {
  ChatContainer,
  ChatContainerInner,
  ChatInner,
  Input,
  InputSection,
  InterlocutorContainer,
  InterlocutorMessage,
  MessageContainer,
  MessageText,
  MyContainer,
  MyMessage,
  MyMessageText,
  Date,
  ChatSideContainer,
} from "./style";

const ChatSide = () => {
  const { info, setInfo, selectedUser } = useContext(InfoContext);
  const [value, setValue] = useState("");
  const { name, avatar, message } = selectedUser;

  return (
    <ChatSideContainer>
      <ChatContainerInner>
        <ChatContainer>
          <AvatarName className="chat-avatar__name">{name}</AvatarName>
          <ChatInner>
            <InterlocutorContainer>
              <Avatar src={avatar} alt={name} />
              <MessageContainer>
                <InterlocutorMessage className="message-text">
                  <MessageText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, iusto facilis accusantium ipsam voluptate
                    asperiores perferendis possimus harum! Itaque est at sit
                    deserunt expedita consequatur aut culpa, autem quod libero.
                  </MessageText>
                </InterlocutorMessage>
                <Date className="message-date">08/15/22, 15:30</Date>
              </MessageContainer>
            </InterlocutorContainer>
            <MyContainer>
              <MessageContainer>
                <MyMessage>
                  <MyMessageText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, iusto facilis accusantium.
                  </MyMessageText>
                </MyMessage>
                <Date className="message-date">08/15/22, 15:38</Date>
              </MessageContainer>
            </MyContainer>
            <InterlocutorContainer>
              <Avatar src={avatar} alt={name} />
              <MessageContainer>
                <InterlocutorMessage className="message-text">
                  <MessageText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, iusto facilis accusantium ipsam voluptate
                    asperiores perferendis possimus harum!
                  </MessageText>
                </InterlocutorMessage>
                <Date className="message-date">08/15/22, 15:40</Date>
              </MessageContainer>
            </InterlocutorContainer>
            <MyContainer>
              <MessageContainer>
                <MyMessage>
                  <MyMessageText>{message}</MyMessageText>
                </MyMessage>
                <Date className="message-date">08/15/22, 15:40</Date>
              </MessageContainer>
            </MyContainer>
          </ChatInner>
        </ChatContainer>
        <InputSection>
          <Input
            className="input-message"
            type="text"
            value={value}
            onInput={(e) => setValue(e.target.value)}
            placeholder="Type your message here"
          />
        </InputSection>
      </ChatContainerInner>
    </ChatSideContainer>
  );
};

export default ChatSide;
