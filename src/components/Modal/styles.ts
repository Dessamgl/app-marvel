import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .modal {
    max-width: 900px;
    background: #1c1c1c;
    border: none;
    padding: 16px;
    border-radius: 5px;
    transition: 1.1s ease-out;
    opacity: 1;
    visibility: visible;

    position: relative;
  }

  @media (prefers-reduced-motion) {
    .modal {
      offset-path: none;
    }
  }

  .modal-overlay {
    width: 100%;
    height: 100%;
    max-width: 960px;
    background-color: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;

    z-index: 999;
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  #centered-toggle-button {
    position: absolute;
  }

  .container {
    max-width: 900px;
    max-height: 600px;

    padding: 16px;

    h1 {
      font-size: 28px;
      color: #b5b5b5;

      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;

  img {
    width: 250px;
  }

  .comic-details {
    div {
      display: flex;
      margin-left: 20px;
      flex: 1;
    }

    div + div {
      margin-top: 16px;
    }

    strong {
      margin-right: 8px;
      color: #eead0e;
    }

    span {
      float: left;
      overflow-y: auto;
      max-height: 350px;
      color: #fff;

      ::-webkit-scrollbar-track {
        background-color: #000;
      }

      ::-webkit-scrollbar {
        width: 6px;
        background: #000;
      }

      ::-webkit-scrollbar-thumb {
        background: #575757;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  padding: 8px 16px;

  button {
    width: 180px;
    height: 50px;
    background: #eead0e;
    border-radius: 5px;
    border: 0;
    color: #1c1c1c;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#eead0e')};
    }
  }
`;
