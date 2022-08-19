import alex from "../../img/ChatAvatar/Alex.png";
import emma from "../../img/ChatAvatar/Emma.png";
import eveline from "../../img/ChatAvatar/Eveline.png";
import sophia from "../../img/ChatAvatar/Sophia.png";
import peter from "../../img/ChatAvatar/Peter.png";

const contacts = () => {
  return [
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
  ];
};

export default contacts;
