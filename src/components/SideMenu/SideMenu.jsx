import { useEffect, useState } from "react";
import {
  Container,
  Chat,
  ChatDate,
  ChatList,
  Moon,
  Avatar,
  AvatarInfo,
  AvatarInner,
  AvatarMessage,
  AvatarName,
  SideMenuContainer,
  WaitSection,
  WaitMessage,
  MessageCount,
} from "./style";
import ChatSide from "../chatSide/ChatSide";
import InfoContext from "../context/context";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import contacts from "../data/contacts";

const SideMenu = () => {
  const [info, setInfo] = useState(
    localStorage.getItem("history-chat-list")
      ? JSON.parse(localStorage.getItem("history-chat-list"))
      : contacts
  );
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(
    localStorage.getItem("history-messages")
      ? JSON.parse(localStorage.getItem("history-messages"))
      : []
  );
  const [countMessage, setCountMessage] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));

  useEffect(() => {
    onDarkMode();
    // eslint-disable-next-line
  }, [darkMode]);

  useEffect(() => {
    sortChats();
    // eslint-disable-next-line
  }, [messages]);

  const sortChats = () => {
    if (messages[messages.length - 1]) {
      const currentChat = info;
      const activeChat = currentChat.filter(
        (item) => item.name === messages[messages.length - 1]?.name
      );
      const index = info.indexOf(activeChat[0]);
      currentChat.splice(index, 1);
      currentChat.unshift(activeChat[0]);
      localStorage.setItem("history-chat-list", JSON.stringify(currentChat));
      setInfo([...info, currentChat].slice(0, 5));
    }
  };

  const onDarkMode = () => {
    const moon = document.querySelector(".fa-moon");
    if (!localStorage.getItem("dark-mode")) {
      moon.classList.add("active");
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "dark");
    } else {
      if (darkMode === "dark") {
        moon.classList.add("active");
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "dark");
      } else {
        moon.classList.remove("active");
        localStorage.setItem("dark-mode", "light");
        document.body.classList.remove("dark-mode");
      }
    }
  };

  const switchMenu = () => {
    const sideMenu = document.querySelector(".side-container"),
      chatSide = document.querySelector(".switch");
    if (chatSide) {
      chatSide.classList.remove("switch");
    }
    sideMenu.classList.add("clicked");
  };

  const displayCounter = (e, action) => {
    const chats = document.querySelectorAll(".chat"),
      avatarNames = document.querySelectorAll(".avatar-name"),
      counterMessages = document.querySelectorAll(".message-counter");
    for (const avatarName of avatarNames) {
      if (avatarName.textContent === e) {
        for (const chat of chats) {
          if (chat.contains(avatarName)) {
            for (const counterMessage of counterMessages) {
              if (chat.contains(avatarName) && chat.contains(counterMessage)) {
                if (action === "add") {
                  counterMessage.classList.add("display");
                } else {
                  counterMessage.classList.remove("display");
                }
              }
            }
          }
        }
      }
    }
  };

  const content =
    selectedUser !== null ? (
      <ErrorBoundary key={selectedUser.name}>
        <InfoContext.Provider
          value={{
            selectedUser,
            messages,
            setMessages,
            countMessage,
            setCountMessage,
          }}
        >
          <ChatSide />
        </InfoContext.Provider>
      </ErrorBoundary>
    ) : (
      <WaitSection>
        <WaitMessage className="wait-message">Select some chat</WaitMessage>
      </WaitSection>
    );

  return (
    <>
      <Container>
        <SideMenuContainer className="side-container">
          <ChatList>
            {info.map(({ avatar, name, message, date }, i) => {
              const filterMessage = messages.filter(
                  (user) => user.name === name
                ),
                lastFilteredElementMessage =
                  filterMessage[filterMessage.length - 1],
                countsMessage = countMessage.filter(
                  (user) => user.name === name
                ),
                lastCountsMessage = countsMessage[countsMessage.length - 1];
              return (
                <Chat
                  key={i}
                  className="chat"
                  onClick={(e) =>
                    setSelectedUser({ avatar, name, message }, switchMenu())
                  }
                >
                  <AvatarInner>
                    <Avatar src={avatar} alt={name} />
                    <MessageCount
                      className="message-counter"
                      style={
                        countsMessage.length !== 0
                          ? countsMessage.length !== 0 &&
                            lastCountsMessage.count !== 0
                            ? displayCounter(lastCountsMessage.name, "add")
                            : null
                          : null
                      }
                    >
                      {countsMessage.length !== 0
                        ? lastCountsMessage.name === selectedUser.name &&
                          document
                            .querySelector(".side-container")
                            .classList.contains("clicked")
                          ? lastCountsMessage.count !== 0
                            ? [
                                (lastCountsMessage.count = 0),
                                displayCounter(lastCountsMessage.name, "none"),
                              ]
                            : null
                          : lastCountsMessage.count
                        : displayCounter(countMessage.name, "none")}
                    </MessageCount>
                    <AvatarInfo>
                      <AvatarName className="avatar-name">{name}</AvatarName>
                      <AvatarMessage>
                        {filterMessage.length === 0
                          ? message
                          : lastFilteredElementMessage.message.length > 30
                          ? lastFilteredElementMessage.message
                              .slice(0, 30)
                              .concat("..")
                          : lastFilteredElementMessage.message}
                      </AvatarMessage>
                    </AvatarInfo>
                  </AvatarInner>
                  <ChatDate className="message-date">
                    {filterMessage.length === 0
                      ? date
                      : lastFilteredElementMessage.date}
                  </ChatDate>
                </Chat>
              );
            })}
          </ChatList>
          <Moon
            className="fas fa-moon"
            onClick={() =>
              darkMode === "light" ? setDarkMode("dark") : setDarkMode("light")
            }
          />
        </SideMenuContainer>
        {content}
      </Container>
    </>
  );
};

export default SideMenu;
