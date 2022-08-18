import styled from "styled-components";
import gif from "./error.gif";

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorMessage = () => {
  return (
    <ErrorContainer className="error-container">
      <img src={gif} alt="Error" />
    </ErrorContainer>
  );
};

export default ErrorMessage;
