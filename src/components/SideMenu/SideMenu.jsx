import { useEffect, useState } from "react";
import alex from "../../img/ChatAvatar/Alex.png";
import emma from "../../img/ChatAvatar/Emma.png";
import eveline from "../../img/ChatAvatar/Eveline.png";
import sophia from "../../img/ChatAvatar/Sophia.png";
import peter from "../../img/ChatAvatar/Peter.png";
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
} from "./style";
import ChatSide from "../chatSide/ChatSide";
import InfoContext from "../context/context";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const SideMenu = () => {
  const [info, setInfo] = useState([
    {
      avatar: alex,
      name: "Alex Adam",
      message: "Hello there! How are you?",
      date: "Aug 15, 2022",
    },
    {
      avatar: emma,
      name: "Emma",
      message: "I need to talk with you. NOW!",
      date: "Aug 16, 2022",
    },
    {
      avatar: eveline,
      name: "Eveline",
      message: "Glad for Ukraine!",
      date: "Aug 16, 2022",
    },
    {
      avatar: sophia,
      name: "Sophia Noir",
      message: "I’m glad to see you here :)",
      date: "Aug 16, 2022",
    },
    {
      avatar: peter,
      name: "Peter Border",
      message: "Sup, bro? Wanna go to party?",
      date: "Aug 16, 2022",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));

  useEffect(() => {
    onDarkMode();
    // eslint-disable-next-line
  }, [darkMode]);

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

  const content =
    selectedUser !== null ? (
      <ErrorBoundary key={selectedUser.name}>
        <InfoContext.Provider
          value={{
            selectedUser,
            messages,
            setMessages,
            jokes,
            setJokes,
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

  const switchMenu = () => {
    const sideMenu = document.querySelector(".side-container");
    const chatSide = document.querySelector(".switch");
    if (chatSide) {
      chatSide.classList.remove("switch");
    }
    sideMenu.classList.add("clicked");
  };

  return (
    <>
      <Container>
        <SideMenuContainer className="side-container">
          <ChatList>
            {info.map(({ avatar, name, message, date }, i) => {
              const filterMessage = messages.filter(
                (user) => user.name === name
              );
              const lastFilteredElementMessage =
                filterMessage[filterMessage.length - 1];

              const filterJokes = jokes.filter((user) => user.name === name);
              const lastFilteredElementJoke =
                filterJokes[filterJokes.length - 1];
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
                    <AvatarInfo>
                      <AvatarName className="avatar-name">{name}</AvatarName>
                      <AvatarMessage>
                        {filterMessage.length === 0 && filterJokes.length === 0
                          ? message
                          : filterJokes.length === filterMessage.length
                          ? lastFilteredElementJoke.message.length > 30
                            ? lastFilteredElementJoke.message
                                .slice(0, 30)
                                .concat("..")
                            : lastFilteredElementJoke.message
                          : lastFilteredElementMessage.message.length > 30
                          ? lastFilteredElementMessage.message
                              .slice(0, 30)
                              .concat("..")
                          : lastFilteredElementMessage.message}
                      </AvatarMessage>
                    </AvatarInfo>
                  </AvatarInner>
                  <ChatDate className="message-date">
                    {filterMessage.length === 0 && filterJokes.length === 0
                      ? date
                      : filterJokes.length === filterMessage.length
                      ? lastFilteredElementJoke.date
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
