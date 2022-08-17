import { useState, useContext, useEffect } from "react";
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
  BtnSubmit,
  Date,
  ChatSideContainer,
  InputInner,
} from "./style";
import CreateMessage from "./CreateMessage";

const ChatSide = () => {
  const { info, setInfo, selectedUser, messages, setMessages } =
    useContext(InfoContext);
  const [value, setValue] = useState("");
  const { name, avatar, message } = selectedUser;

  const handlerSubmit = () => {
    if (value !== "") {
      const date = new window.Date().toLocaleString();
      const day = date.slice(0, 2);
      const month = date.slice(3, 5);
      const year = date.slice(8, 10);
      const time = date.slice(12, 17);
      const dateNow = `${month}/${day}/${year}, ${time}`;
      setMessages([
        ...messages,
        { name: name, message: value.trim(), date: dateNow },
      ]);
      setTimeout(() => {
        setValue("");
      }, 100);
    }
  };

  const Layout = () => {
    return (
      <>
        <InterlocutorContainer>
          <Avatar src={avatar} alt={name} />
          <MessageContainer>
            <InterlocutorMessage className="message-text">
              <MessageText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, iusto facilis accusantium ipsam voluptate asperiores
                perferendis possimus harum! Itaque est at sit deserunt expedita
                consequatur aut culpa, autem quod libero.
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
                Numquam, iusto facilis accusantium ipsam voluptate asperiores
                perferendis possimus harum!
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
      </>
    );
  };

  const layoutMessage = <Layout />;

  return (
    <ChatSideContainer>
      <ChatContainerInner>
        <ChatContainer>
          <AvatarName className="chat-avatar__name">{name}</AvatarName>
          <ChatInner className="chat-inner">
            {layoutMessage}
            {messages
              .filter((user) => user.name === name)
              .map(({ message, date }, id) => (
                <CreateMessage key={id} message={message} date={date} />
              ))}
          </ChatInner>
        </ChatContainer>
        <InputSection>
          <InputInner>
            <Input
              className="input-message"
              type="text"
              value={value}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handlerSubmit(e);
                }
              }}
              onInput={(e) => setValue(e.target.value)}
              placeholder="Type your message here"
            />
            <BtnSubmit onClick={(e) => handlerSubmit(e)} className="btn-submit">
              <i className="far fa-paper-plane"></i>
            </BtnSubmit>
          </InputInner>
        </InputSection>
      </ChatContainerInner>
    </ChatSideContainer>
  );
};

export default ChatSide;
