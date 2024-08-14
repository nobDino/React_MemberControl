import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../component/TextInput';
import Button from '../component/Button';
import styled from 'styled-components';

// 스타일 컴포넌트
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Label = styled.label`
  width: 300px;
  font-weight: bold;
`;

const SButton = styled(Button)`
  width: 10px;

  
`;

const Button1 =styled.div`
    display: flex;
  flex-direction: row; 
  justify-content: center; 
  gap: 30px; 
  width: 100%; 
`

const LoginPage = () => {
  const [userid, setUserid] = useState('');
  const [passwd, setPasswd] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 상태를 관리하는 state
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userid && passwd) {
      setLoggedIn(true); // 로그인 상태 업데이트
      navigate('/'); // 로그인 후 홈페이지로 이동
    }
  };

  const handleLogout = () => {
    setLoggedIn(false); // 로그아웃 상태 업데이트
    setUserid('');
    setPasswd('');
  };

  return (
    <MainDiv>
      <h1>Login Page</h1>
      <TextInput
        type="text"
        placeholder="User ID"
        value={userid}
        onChange={(e) => setUserid(e.target.value)}
      /><br/>
      <TextInput
        type="password"
        placeholder="Password"
        value={passwd}
        onChange={(e) => setPasswd(e.target.value)}
      /><br/>
      <Button1>
      {!loggedIn ? (
            <>
              <SButton
                onClick={handleLogin}
                disabled={!userid || !passwd}
              >
                Login
              </SButton>
              <SButton onClick={() => navigate('/signup')}>
                Sign Up
              </SButton>
            </>
          ) : (
            <SButton onClick={handleLogout}>
              Logout
            </SButton>
          )}
      </Button1>
    </MainDiv>
  );
};

export default LoginPage;
