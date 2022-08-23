import { useEffect, useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.jpg";
import { useHttp } from "../../hooks/https.hook";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 780px) {
    padding: 20px 0;
  }

  @media (max-width: 400px) {
    padding: 20px 10px;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  @media (max-width: 780px) {
    justify-content: space-evenly;
  }

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2f8dee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 20px;
`;

const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

const Input = styled.input`
  width: 255px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #222222;

  &:active,
  &:focus {
    border: none;
    outline: none;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }

  @media (max-width: 660px) {
    width: 130px;
    padding-right: 20px;
  }
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background: url(${avatar}) no-repeat center;
  background-size: cover;
`;

const CircleActive = styled.span`
  width: 14px;
  height: 14px;
  background: #22cb47;
  position: absolute;
  top: 65%;
  left: 65%;
  border-radius: 8px;
  z-index: 2;

  @media (max-width: 400px) {
    left: 60%;
  }
`;

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 300);

  const findUser = () => {
    const usersName = document.querySelectorAll(".avatar-name");
    let searchData = searchTerm;
    if (searchData !== "") {
      usersName.forEach(function (e) {
        if (e.textContent.toLowerCase().search(searchData) === -1) {
          e.parentElement.parentElement.parentElement.classList.add("hide");
        } else {
          e.parentElement.parentElement.parentElement.classList.remove("hide");
        }
      });
    } else {
      usersName.forEach((e) => {
        e.parentElement.parentElement.parentElement.classList.remove("hide");
      });
    }
  };

  useEffect(() => {
    findUser();
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>M</Logo>
        <InputSearch>
          <i className="fas fa-search"></i>
          <Input
            className="input-search"
            placeholder="Search.."
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
        </InputSearch>
        <Avatar>
          <CircleActive />
        </Avatar>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
