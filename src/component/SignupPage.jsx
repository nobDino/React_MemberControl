import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../component/TextInput';
import Button from '../component/Button';

// 스타일 컴포넌트
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const Label = styled.label`
  width: 300px;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 10px;
  hight:20px;
  
`;

const SignupPage = () => {
  const [usrid, setUserid] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirmPasswd, setConfirmPasswd] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail]=useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (passwd === confirmPasswd) {
      // 회원가입 로직 추가
      navigate('/'); // 회원가입 후 홈페이지로 이동
    } else {
      alert("입력란을 확인하세요.");
    }
  };

  const handleReset = () => {
    setUserid('');
    setPasswd('');
    setConfirmPasswd('');
    setName('');
    setBirthdate('');
    setEmail('');
  };

  return (
    <MainDiv>
      <h1>Signup Page</h1>
      <FormDiv>
        <Div2>
          <Label>아이디:</Label>
          <TextInput
            type="text"
            placeholder="User ID"
            value={usrid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </Div2>
        <Div2>
          <Label>비밀번호:</Label>
          <TextInput
            type="password"
            placeholder="Password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
        </Div2>
        <Div2>
          <Label>비밀번호 확인:</Label>
          <TextInput
            type="password"
            placeholder="Password2"
            value={confirmPasswd}
            onChange={(e) => setConfirmPasswd(e.target.value)}
          />
        </Div2>
        <Div2>
          <Label>E-Mail:</Label>
          <TextInput
            type="E-Mail"
            placeholder="E-Mail@"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Div2>
        <Div2>
          <Label>이름:</Label>
          <TextInput
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Div2>
        <Div2 >
          <Label>생년월일:</Label>
          <TextInput
            type="date"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            style={{ width: '200px' }}
          />
        </Div2>
        <Div2 style={{ justifyContent: 'space-evenly ' }}>
          <StyledButton onClick={handleSignup}>
            회원가입
          </StyledButton>
          <StyledButton onClick={handleReset}>
            비우기
          </StyledButton>
        </Div2>
      </FormDiv>
    </MainDiv>
  );
};

export default SignupPage;
