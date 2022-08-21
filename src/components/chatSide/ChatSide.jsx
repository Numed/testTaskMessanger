import { useState, useContext, useEffect } from "react";
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
  TotalDivMessage,
  BtnBack,
  InputInner,
} from "./style";
import CreateMyMessage from "../../helpers/CreateMyMessage";
import CreateInterlocutorMessage from "../../helpers/CreateInterlocutorMessage";
import { useHttp } from "../../hooks/https.hook";
import Layout from "../layoutChat/LayoutChat";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { getMonth } from "../../helpers/getData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastifyMessage from "../toastifyMessage/ToastifyMessage";

const ChatSide = () => {
  const { selectedUser, messages, setMessages, countMessage, setCountMessage } =
    useContext(InfoContext);
  const [value, setValue] = useState("");
  const { name, avatar } = selectedUser;
  const { request } = useHttp();
  const [error, setError] = useState(false);
  let count = 0;
  let dateNow;
  let dateSide;

  useEffect(() => {
    localStorage.setItem("history-messages", JSON.stringify(messages));
  }, [messages]);

  const notify = (message, avatar, name) => {
    const sideMenu = document.querySelector(".clicked");
    if (sideMenu && selectedUser.name === name) {
      return toast(
        <ToastifyMessage message={message} avatar={avatar} name={name} />,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: localStorage.getItem("dark-mode"),
        }
      );
    }
  };

  const handlerSubmit = async () => {
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
        {
          name: name,
          message: value.trim(),
          date: dateSide,
          dateNow: dateNow,
          isBot: false,
        },
      ]);
      setValue("");
      onRequest();
    }
  };

  const onRequest = () => {
    request("https://api.chucknorris.io/jokes/random")
      .then(onGetJoke)
      .catch(onError);
  };

  const onGetJoke = async (info) => {
    setTimeout(() => {
      count += 1;
      setCountMessage((old) => [...old, { name, count: count }]);
      setMessages((old) => [
        ...old,
        {
          avatar,
          name,
          date: dateSide,
          message: info.value,
          dateNow: dateNow,
          isBot: true,
        },
      ]);
      notify(info.value, avatar, name);
    }, 10000);
    return count;
  };
  console.log("COUTNS IN CHAT", count);

  const onError = (e) => {
    setError(true);
  };

  const switchSection = () => {
    const chatSide = document.querySelector(".chat-side__container");
    const sideMenu = document.querySelector(".clicked");
    sideMenu.classList.remove("clicked");
    chatSide.classList.add("switch");
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    !error &&
    messages
      .filter((user) => user.name === name)
      .map(({ avatar, name, message, dateNow, isBot }, id) => (
        <TotalDivMessage key={id}>
          {isBot ? (
            <CreateInterlocutorMessage
              key={id}
              avatar={avatar}
              name={name}
              dateNow={dateNow}
              value={message}
            />
          ) : (
            <CreateMyMessage key={id} message={message} dateNow={dateNow} />
          )}
        </TotalDivMessage>
      ));

  return (
    <>
      <ChatSideContainer className="chat-side__container">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
              <BtnSubmit
                className="btn-submit"
                onClick={(e) => handlerSubmit(e)}
              >
                <i className="far fa-paper-plane"></i>
              </BtnSubmit>
            </InputInner>
          </InputSection>
        </ChatContainerInner>
      </ChatSideContainer>
    </>
  );
};

export default ChatSide;
