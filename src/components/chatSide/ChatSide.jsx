import { useState, useContext } from "react";
import { AvatarName } from "../SideMenu/style";
import InfoContext from "../context/context";
import {
  ChatContainer,
  ChatContainerInner,
  ChatInner,
  Input,
  InputSection,
  BtnSubmit,
  ChatSideContainer,
  BtnBack,
  InputInner,
} from "./style";
import CreateMyMessage from "./CreateMyMessage";
import CreateInterlocutorMessage from "./CreateInterlocutorMessage";
import { useHttp } from "../../hooks/https.hook";
import Layout from "../layoutChat/LayoutChat";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ChatSide = () => {
  const {
    selectedUser,
    messages,
    setMessages,
    jokes,
    setJokes,
    toMain,
    setToMain,
  } = useContext(InfoContext);
  const [value, setValue] = useState("");
  const { name, avatar } = selectedUser;
  const { request } = useHttp();
  const [error, setError] = useState(false);
  let dateNow;
  let dateSide;

  const handlerSubmit = () => {
    if (value !== "") {
      const date = new window.Date().toLocaleString();
      const day = date.slice(0, 2);
      const month = date.slice(3, 5);
      const year = date.slice(8, 10);
      const fullYear = date.slice(6, 10);
      const time = date.slice(12, 17);
      const nameMonth = getMonth();
      dateSide = `${nameMonth} ${day}, ${fullYear}`;
      dateNow = `${month}/${day}/${year}, ${time}`;
      setMessages([
        ...messages,
        { name: name, message: value.trim(), date: dateSide, dateNow: dateNow },
      ]);
      setTimeout(() => {
        setValue("");
        onRequest();
        return dateNow;
      }, 100);
    }
  };

  const getMonth = () => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const nameMonth = month[date.getMonth()];
    return nameMonth;
  };

  const onRequest = () => {
    request("https://api.chucknorris.io/jokes/random")
      .then(onGetJoke)
      .catch(onError);
  };

  const onGetJoke = (info) => {
    setTimeout(() => {
      setJokes([
        ...jokes,
        { avatar, name, date: dateSide, message: info.value, dateNow: dateNow },
      ]);
    }, 10000);
  };

  const onError = (e) => {
    setError(true);
  };

  const displayMyMessage = messages
    .filter((user) => user.name === name)
    .map(({ message, dateNow }, id) => (
      <CreateMyMessage key={id} message={message} dateNow={dateNow} />
    ));

  const displayAnotherMessage = jokes
    .filter((user) => user.name === name)
    .map(({ avatar, name, message, dateNow }, id) => (
      <CreateInterlocutorMessage
        key={id}
        avatar={avatar}
        name={name}
        dateNow={dateNow}
        value={message}
      />
    ));

  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !error
    ? messages.length === jokes.length
      ? [displayMyMessage, displayAnotherMessage]
      : messages.length !== jokes.length
      ? [displayAnotherMessage, displayMyMessage]
      : [displayMyMessage, displayAnotherMessage]
    : null;

  const switchSection = () => {
    const chatSide = document.querySelector(".chat-side__container");
    chatSide.classList.add("switch");
    const sideMenu = document.querySelector(".clicked");
    sideMenu.classList.remove("clicked");
  };

  return (
    <ChatSideContainer className="chat-side__container">
      {errorMessage}
      <ChatContainerInner>
        <ChatContainer>
          <BtnBack
            className="fas fa-long-arrow-alt-left"
            onClick={switchSection}
          />
          <AvatarName className="chat-avatar__name">{name}</AvatarName>
          <ChatInner className="chat-inner">
            <Layout />
            {content}
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
