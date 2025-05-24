import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        어느 날 내게 찾아온 사람
        <br />
        첫눈에 반해버렸네
        <br />
        꿈에 그리던 나의 찐 사랑
        <br />
        이제서야 만났네요
        <br />
        이 세상에서 제일 어여쁜 사람
        <br />
        <br />
        - 건곤감리 이건, (찐사랑) -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
