import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../component/Button';

// 스타일 컴포넌트
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly; /* 버튼 간의 간격을 동일하게 배치 */
  width: 100%; /* Div2의 너비를 설정하여 justify-content가 효과를 발휘하도록 함 */
  margin-bottom: 14px;
`;

const StyledButton = styled(Button)`
  width: 150px; 
  height: 40px; 
  margin: 5px; 
`;

// HomePage 컴포넌트
const HomePage = () => {
  const navigate = useNavigate(); 

  const handleSignup = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  const handleLogin = () => {
    navigate('/login'); // 로그인 페이지로 이동
  };

  return (
    <MainDiv>
      <h1>Home</h1>
      <div>
        <img src="/Duck.jfif" alt="WhiteDuck" />
      </div>
      <div style={{width:'300px'}}>
      <Div2>
        <StyledButton onClick={handleLogin}>
          로그인
        </StyledButton>
        <StyledButton onClick={handleSignup}>
          회원가입
        </StyledButton>
      </Div2>
      </div>
    </MainDiv>
  );
};

export default HomePage;
