import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 24px;

  footer {
    /* background-color: #ccc; */
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .teste {
    margin-bottom: 20px;
    div {
      display: flex;
      align-items: center;
    }

    h1 {
      font-size: 1.5em;
    }

    div:first-child {
      margin-right: 10px;
    }
  }

  table {
    /* background-color: #ccc; */
    width: 100%;
    margin: 15px 0 20px;

    thead,
    tbody {
      text-align: left;
    }

    tbody {
      text-align: left;

      tr:nth-child(odd) {
        background-color: #f1f1f1;
      }

      td {
        padding: 10px 0;
      }
    }
  }

  > div {
    margin: 80px auto;
    > div {
      background-color: #fff;
      border-radius: 4px;
      max-width: 500px;
      margin: auto;
      padding: 15px;

      button {
        float: right;
        background: unset;
        border: unset;
        margin: auto;
      }

      form {
        margin-top: 20px;
        span {
          display: flex;
          margin: 15px 0;

          div:first-child {
            width: 50%;
            margin-right: 20px;
          }

          div + div {
            margin: 0;
          }

          .payment_type {
            h1 {
              font-size: 1.5em;
            }
          }
        }

        button {
          background-color: ${shade(0.2, '#1ebea5')};
          float: none;
          padding: 10px 40px;
        }
      }
    }
  }
`;
