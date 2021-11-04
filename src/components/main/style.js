import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    caret-color: black;
    cursor: pointer;
  }

  nav {
    //minWidth: "6%";
    min-height: 900px;
    background-color: rgb(36, 126, 198);
  }

  nav > a {
    display: block;
    line-height: 50px;
    width: 90px;
    text-align: center;
  }

  nav > a > img {
    margin-top: 20px;
    height: 45px;
  }

  a.checked {
    background-color: rgb(30, 171, 241)
  }

  section.groupList, article.groupList {
    button {
      background: none;
      padding: 0 20px;
      border: none;
      margin: 0;
      color: black;
      cursor: pointer;
    }
  }

  section {
    width: 18%;
    min-height: 900px;
    border-right: 1px solid gray;

    > div:first-of-type {
      padding: 0 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    .add {
      margin-right: 10px;
    }

    .delete, .add {
      padding: 0 10px;
    }

    .search {
      text-align: center;

      input {
        width: 90%;
      }
    }

    .contact {
      padding: 0 10px;
      margin-top: 20px;
      text-align: left;
    }

    .person {
      line-height: 80px;

      img {
        width: 40px;
        margin: 0 20px;
        vertical-align: middle;
      }
    }

    .person.checked {
      background-color: rgba(29, 172, 241, .2);
    }

    .group {
      position: relative;
    }

    .group.checked {
      background-color: rgb(199, 234, 251);
    }

    .group:hover {
      background-color: rgb(199, 234, 251);
    }

    img {
      vertical-align: auto;
    }

    .float {
      display: none;
      position: absolute;
      width: 90%;
      padding: 20px 40px;
      top: -20px;
      background-color: rgb(245, 245, 245);
      border-radius: 10px;
      left: 101%;

      button {
        margin-top: 50px;
        padding: 10px 20px;
        background-color: rgb(94, 179, 223);
        color: white;
        border-radius: 10px;
      }
    }

    .remain {
      position: absolute;
      padding: 20px 40px;
      width: 100%;
      left: 100%;
      border-radius: 10px;
      top: -100px;
      background-color: rgb(245, 245, 245);
      display: none;

      img {
        width: 40px;
      }
    }

    .group:hover .float {
      display: block;
    }

    .show .remain {
      display: block;
    }
  }

  article {
    width: 76%;
    padding: 20px;

    > img {
      display: block;
      margin: 0 auto;
    }

    > div {
      width: 80%;
      margin: 0 auto;
    }

    > div > img {
      width: 250px;
      margin-right: 50px;
    }

    form {
      > div {
        margin-bottom: 20px;
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