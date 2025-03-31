import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import MainHeaderListTab from "./MainHeaderListTab";
import MainHeaderPressTab from "./MainHeaderPressTab";

const MainHeader: FC = () => {
  return (
    <Container>
      <MainHeaderListTab />
      <MainHeaderPressTab />
    </Container>
  );
};

export default MainHeader;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  margin-bottom: 1.563rem;
`;
