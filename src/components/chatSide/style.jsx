import styled from "styled-components";

export const ChatSideContainer = styled.section`
  width: 66%;
  height: 100%;
`;

export const ChatContainerInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const ChatInner = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media (max-width: 780px) {
    height: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

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

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 350px;
  height: 100%;
  align-items: flex-end;
`;

export const InterlocutorContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InterlocutorMessage = styled.div`
  display: flex;
  background: #f1f2f7;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0 0 10px;
`;

export const MyMessage = styled(InterlocutorMessage)`
  background: #2d8dfb;
`;

export const MyContainer = styled(InterlocutorContainer)`
  justify-content: flex-end;
`;

export const MessageText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9196a3;
`;

export const MyMessageText = styled(MessageText)`
  color: #ffffff;
`;

export const Date = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #222222;
  margin-top: 5px;
`;

export const InputSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 20px 0;
`;

export const Input = styled.input`
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