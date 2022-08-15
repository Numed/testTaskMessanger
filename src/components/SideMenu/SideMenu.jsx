import { useState } from "react";
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
} from "./style";
import ChatSide from "../chatSide/ChatSide";

const SideMenu = () => {
  const [info, seInfo] = useState([
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

  const onDarkMode = () => {
    // const moon = document.querySelector(".fa-moon");
    // if (localStorage.getItem("dark")) {
    //   if (localStorage.getItem("dark") === "dark") {
    //     document.body.classList.add("dark-mode");
    //     moon.classList.add("active");
    //   } else {
    //     document.body.classList.remove("dark-mode");
    //     moon.classList.remove("active");
    //     localStorage.setItem("dark", "light");
    //   }
    // } else {
    //   moon.classList.add("active");
    //   localStorage.setItem("dark", "dark");
    // }
  };

  return (
    <>
      <Container>
        <SideMenuContainer>
          <ChatList>
            {info.map(({ avatar, name, message, date }, i) => {
              return (
                <Chat key={i}>
                  <AvatarInner>
                    <Avatar src={avatar} alt={name} />
                    <AvatarInfo>
                      <AvatarName className="avatar-name">{name}</AvatarName>
                      <AvatarMessage>
                        {message.length > 30
                          ? message.slice(0, 30).concat("...")
                          : message}
                      </AvatarMessage>
                    </AvatarInfo>
                  </AvatarInner>
                  <ChatDate>{date}</ChatDate>
                </Chat>
              );
            })}
          </ChatList>
          <Moon className="fas fa-moon" onClick={() => onDarkMode()} />
        </SideMenuContainer>
        <ChatSide />
      </Container>
    </>
  );
};

export default SideMenu;
