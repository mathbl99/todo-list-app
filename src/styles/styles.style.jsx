import { styled } from "styled-components";

export const AppWrapper = styled.div`
  min-width: 265px;
  width: 70vw;
  max-width: 950px;

  display: flex;
  flex-direction: column;

  margin-top: 56px;
  padding: 16px;

  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  .top {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #55adad;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Input = styled.input`
  width: 300px;
  max-width: 80%;
  padding: 12px;
  margin: 8px 8px 8px 0;

  border: 2px solid #ccc;
  border-radius: 4px;

  outline: none;

  &::placeholder {
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  min-width: 265px;
  max-width: 950px;

  display: flex;
  flex-direction: column;

  margin-top: 15px;
  gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  height: 30px;
  list-style-type: none;
  padding: 10px;
  position: relative;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  align-items: center;

  input[type="text"] {
    height: 14px;
    width: 80%;
    padding: 8px;
    border: 1px solid black;
    outline: none;
    font-size: 18px;
  }

  span {
    height: 28px;
    width: 80%;
    padding-left: 8px;
    background-color: transparent;
    border: none;
    font-size: 18px;
    outline: none;
    word-wrap: break-word;

    del {
      text-decoration: line-through;
      opacity: 0.6;
    }
  }

  > div {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 4px;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  height: 25px;
  width: 25px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const IconButtonWrapper = styled.button`
  border: none;
  padding: 4px;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;

    &:hover {
      opacity: 0.6;
    }
  }
`;
