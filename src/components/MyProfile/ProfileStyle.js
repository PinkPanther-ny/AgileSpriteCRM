import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    caret-color: black;
    cursor: pointer;
  }

  nav {
    width: 4vw;
    min-width: 78px;
    min-height: 90px;
    height: 1080px;
    background-color: rgb(36, 126, 198);
  }

  nav > a {
    //border-bottom-color: black;
    //border-bottom: solid;
    //border-width: 1px;

    display: block;
    line-height: 50px;
    width: 100%;
    text-align: center;
  }

  nav > a > img {
    margin-top: 20px;
    height: 45px;
  }

  a.checked {
    width: 100%;
    background-color: rgb(30, 171, 241)
  }

  a.logout:hover, a.not_checked:hover {
    width: 100%;
    background-color: rgba(30, 146, 241, 0.6)
  }

  article {

    border-color: rgb(224, 239, 241);
    background: rgba(230, 237, 239, 0.59);
    width: 96vw;
    padding: 20px;


    > h1 {

      text-align: center;
    }

    > img {
      margin-top: 3vh;
    }

    .detail-txt {
      position: absolute;
      left: 16vw;
      top: 29vh;
      letter-spacing: 0;
      line-height: 35px;
      margin-top: 32px;
      min-height: 44px;
      min-width: 109px;
      white-space: nowrap;
    }

    .security-txt {
      position: absolute;
      left: 15.2vw;
      top: 46.4vh;
      letter-spacing: 0;
      line-height: 35px;
      margin-top: 32px;
      min-height: 44px;
      min-width: 109px;
      white-space: nowrap;
    }

    .profile-loading {
      position: absolute;
      left: 50vw;
    }


    .name {
      position: absolute;
      left: 16vw;
      top: 34vh;
      letter-spacing: 0;
      line-height: 35px;
      margin-top: 32px;
      min-height: 44px;
      min-width: 109px;
      white-space: nowrap;
    }

    .dob {
      position: absolute;
      left: 60vw;
      top: 34vh;
      letter-spacing: 0;
      line-height: 35px;
      margin-top: 32px;
      min-height: 44px;
    }

    .name-input {
      border-color: rgba(0, 0, 0, 0);
    }

    .name-fn {
      position: absolute;
      left: 0;
      top: 5vh;
    }

    .password {
      top: 64vh;
    }

    .new-password {
      top: 64vh;
      left: 60vw
    }

    .birthday-input {
      border-color: rgba(0, 0, 0, 0);
    }

    .overlap-group2-2-name {
      align-items: center;
      background-color: var(--white);
      border-radius: 4px;
      display: flex;
      height: 50px;
      justify-content: flex-end;
      margin-top: 2px;
      min-width: 200px;
      padding: 12.5px 7.5px;
    }

    .line {
      min-width: 80%;
      max-width: 80%;
      border: solid rgba(0, 0, 0, 0);
      border-bottom-color: #73859e;
      display: block;
      margin: 2vh auto;
    }

    .first-name, .last-name {
      align-self: flex-end;
      background-color: transparent;
      border: 0;
      height: 22px;
      letter-spacing: 0.05px;
      line-height: 24px;
      margin-left: 10px;
      padding: 0;
      white-space: nowrap;
      width: 342px;
    }

    .btn-save {
      position: absolute;
      left: 32vw;
      top: 50vh;
    }

    .btn-cancel {
      position: absolute;
      left: 36vw;
      top: 50vh;
    }

    .btn-reset {
      position: absolute;
      left: 16vw;
      top: 50vh;
    }


    > img {
      max-width: 90px;
      min-width: 90px;
      max-height: 90px;
      min-height: 90px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 10%;
      border-radius: 1000px;

    }

    > form > img {
      z-index: -10;
      position: absolute;
      //width: 100%;
      width: 250px;
      margin-right: 50px;

    }

    > div {
      width: 45%;
      min-width: 400px;
      max-width: 630px;
      margin: 0 auto;
    }

    .reset-form {
      opacity: 0;
      filter: blur(10px);
    }


    .border-10px-alto {
      background: transparent;
      width: 28vw;
      min-height: 500px;
      height: 15vh;
      min-width: 650px;
      alignment: center;
      margin: 5vh 36vw 0 32vw;
      padding: 0;
      border: 10px solid var(--alto);
    }

    .reset-form.animate-enter2 {
      animation: animate-enter2-frames 1.6s ease-out 0.00s 1 normal forwards;
      opacity: 0;
      filter: blur(10px);
    }

    .example img {
      width: 100%;
      position: relative;
    }

    .example .overlay {
      position: absolute;
      top: 80px;
      right: 15px;
      font-weight: bold;
      text-align: right;
      font-size: 30px;
    }

    form {
      padding-top: 5vh;
      text-align: center;


      button {
        transition: all 0.15s ease-in-out;
      }

      button:hover {
        background-color: rgb(36, 126, 198);

        transform: scale(0.9);
      }

      > div {
        margin-bottom: 16px;
      }
    }

    .personal {
      label {
        font-weight: bold;
      }

      h6 {
        display: flex;
        justify-content: space-around;
        background-color: rgb(200, 200, 200);
        padding: 10px 0;
        margin-bottom: 10px;

        a {
          text-decoration: none;
          color: gray;
        }

        a.check {
          color: white;
        }
      }

      h5 {
        font-size: 18px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
      }

      .buttons {
        text-align: right;
      }

      button:first-of-type {
        margin-right: 50px;
        padding: 10px 40px;
        background-color: gray;
        color: white;
        border: none;
      }

      button:last-of-type {
        padding: 10px 40px;
        background-color: rgb(200, 200, 200);
        color: gray;
        border: none;
      }

      .story {
        margin-top: 20px;
        min-height: 600px;

        .title {
          background-color: rgb(189, 189, 189);
          color: white;
          line-height: 80px;
          display: flex;
          justify-content: space-between;

          div {
            font-size: 20px;
            font-weight: 500;
            margin: 0 50px;
          }
        }

        .stories {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;

          > div {
            box-sizing: border-box;
            padding: 20px 30px;
            background-color: white;
          }

          > div:first-of-type {
            width: 60%;

            img {
              display: block;
              margin: 40px auto;
              width: 600px;
            }
          }

          > div:last-of-type {
            width: 38%;
          }

          div.article {
            padding: 10px;
            border: 1px solid gray;
            line-height: 30px;
          }

          div.last-article {
            min-height: 680px;
          }
        }
      }
    }

    .add {
      width: 40%;
      margin: 0 auto;

      span {
        margin-left: 20px;
      }

      .submit input {
        width: 30%;
        padding: 10px 30px;
        background: rgb(30, 171, 241);
        color: white;
        border: none;
        display: block;
        margin: 0 auto;
      }
    }

    .remain {
      position: absolute;
      padding: 20px 40px;
      width: 15%;
      left: 50%;
      border-radius: 10px;
      top: 400px;
      background-color: rgb(245, 245, 245);
      display: none;

      button {
        padding: 10px 30px;
        background: rgb(30, 171, 241);
        color: white;
        border: none;
      }
    }

    button {
      margin-top: 50px;
      padding: 10px 20px;
      background-color: rgb(94, 179, 223);
      color: white;
      border-radius: 10px;
    }

  }

  article.show {
    .remain {
      display: block;
    }
  }
`