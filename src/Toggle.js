import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.label`
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  top: -999px;
  left: -999px;

  &:checked + span {
    background-color: #9370db;

    &:before {
      left: 35px;
    }
  }
`;

const Span = styled.span`
  position: relative;
  display: flex;
  width: 60px;
  height: 30px;
  border-radius: 70px;
  background-color: #ccc;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    transition: 0.2s;
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

function Toggle({ onChange }) {
  return (
    <ToggleWrapper>
      <Input type="checkbox" onChange={onChange} />
      <Span />
    </ToggleWrapper>
  );
}

export default Toggle;
