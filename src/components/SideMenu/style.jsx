import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SideMenuContainer = styled.section`
  width: 33%;
  height: 100%;
`;

export const ChatList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Chat = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease-in-out;
  }
`;

export const AvatarInner = styled.div`
  display: flex;
  justyfi-content: center;
  align-items: center;
`;

export const AvatarInfo = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;

export const AvatarName = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #222222;
  margin-bottom: 3px;
`;

export const AvatarMessage = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #c9c9cf;
`;

export const ChatDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  color: #222222;
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 35px;
`;

export const Moon = styled.i`
  position: absolute;
  bottom: 40px;
  left: 40px;
  transform: scale(1.5);
  cursor: pointer;
  &.active {
    color: #fede00;
    transition: all 0.2s ease-in-out;
  }
`;
