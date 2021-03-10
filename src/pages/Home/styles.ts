import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

interface FormEmail {
  hasOpened: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #b5b5b5;
  max-width: 470px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 100%;
  flex: 1;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #b5b5b5;
    background-color: #1c1c1c;
    border-radius: 5px 0 0 5px;
    border: 2px solid #1c1c1c;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &:focus {
      border: 2px solid #eead0e;
    }

    &::placeholder {
      color: #b5b5b5;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #eead0e;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #1c1c1c;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#eead0e')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
`;

export const Comics = styled.div`
  margin-top: 80px;
  max-width: 100%;

  li {
    background: #1c1c1c;
    border-radius: 5px;
    width: 100%;
    padding: 16px 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + li {
      margin-top: 16px;
    }

    &.selected-card {
      border: 1px solid #fff;
    }

    &:hover {
      transform: translateX(10px);
    }

    button {
      width: 150px;
      height: 70px;
      background: #eead0e;
      border-radius: 5px;
      border: 0;
      color: #1c1c1c;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#EEAD0E')};
      }
    }
  }
    img {
      width: 100px;
      height: 150px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #b5b5b5;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbcdd6;
    }
  }

  @media (max-width: 500px) {
      li {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        height: 370px;

        img {
          margin: 0 auto;
        }

        strong {
          margin: 10px 0;
        }

        button {
          margin: 0 auto;
          width: 100px;
          height: 50px
        }
      }
    }
  `;

export const ButtonFloat = styled.button<FormEmail>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;

  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #002034;
  border-radius: 5px;
  border: 0;
  color: #fff;

  transition: all 0.2s;

  input,
  .send-email {
    display: none;
    visibility: hidden;
  }

  ${props =>
    props.hasOpened &&
    css`
      width: 300px;
      justify-content: space-evenly;
      padding: 0 16px;
      cursor: default;

      .open-box-email {
        display: none;
        visibility: hidden;
      }

      input,
      .send-email {
        display: inline-block;
        visibility: visible;
      }

      input {
        border-radius: 5px;
        border: 0;
        height: 33px;
        padding: 0 8px;
      }

      .send-email {
        cursor: pointer;
        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }
    `}

  &:hover {
    background: ${shade(0.2, '#002034')};
  }

  svg {
    font-size: 30px;
  }
`;
