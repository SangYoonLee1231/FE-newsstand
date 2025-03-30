import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  title?: string;
}

const PressList: FC<MyComponentProps> = ({ title }) => {
  return (
    <Container>
      <h1>Press List Page {title}</h1>
    </Container>
  );
};

export default PressList;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
`;
