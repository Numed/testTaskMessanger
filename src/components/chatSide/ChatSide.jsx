import { useState } from "react";
import styled from "styled-components";
import { Avatar, AvatarName } from "../SideMenu/style";
import alex from "../../img/ChatAvatar/Alex.png";

const ChatSideContainer = styled.section`
  width: 66%;
  height: 100%;
`;

const ChatContainerInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const ChatInner = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #27292d;
    border-radius: 8px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 350px;
  height: 100%;
  align-items: flex-end;
`;

const InterlocutorContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InterlocutorMessage = styled.div`
  display: flex;
  background: #f1f2f7;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0 0 10px;
`;

const MyMessage = styled(InterlocutorMessage)`
  background: #2d8dfb;
`;

const MyContainer = styled(InterlocutorContainer)`
  justify-content: flex-end;
`;

const MessageText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9196a3;
`;

const MyMessageText = styled(MessageText)`
  color: #ffffff;
`;

const Date = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #222222;
  margin-top: 5px;
`;

const InputSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 20px 0;
`;

const Input = styled.input`
  width: 430px;
  background: #faf8fc;
  padding: 9px 20px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #888888;
  border: none;
`;

const ChatSide = () => {
  const [value, setValue] = useState("");
  return (
    <ChatSideContainer>
      <ChatContainerInner>
        <ChatContainer>
          <AvatarName>Alex Adams</AvatarName>
          <ChatInner>
            <InterlocutorContainer>
              <Avatar src={alex} alt="Alex Adams" />
              <MessageContainer>
                <InterlocutorMessage>
                  <MessageText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, iusto facilis accusantium ipsam voluptate
                    asperiores perferendis possimus harum! Itaque est at sit
                    deserunt expedita consequatur aut culpa, autem quod libero.
                  </MessageText>
                </InterlocutorMessage>
                <Date>08/15/22, 15:30</Date>
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
                <Date>08/15/22, 15:38</Date>
              </MessageContainer>
            </MyContainer>
            <InterlocutorContainer>
              <Avatar src={alex} alt="Alex Adams" />
              <MessageContainer>
                <InterlocutorMessage>
                  <MessageText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, iusto facilis accusantium ipsam voluptate
                    asperiores perferendis possimus harum!
                  </MessageText>
                </InterlocutorMessage>
                <Date>08/15/22, 15:40</Date>
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
                <Date>08/15/22, 15:40</Date>
              </MessageContainer>
            </MyContainer>
          </ChatInner>
        </ChatContainer>
        <InputSection>
          <Input
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
