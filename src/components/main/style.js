import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    caret-color: black;
    cursor: pointer;
  }

  nav {
    width: 5%;
    min-width: 85px;
    min-height: 900px;
    background-color: rgb(36, 126, 198);
  }

  nav > a {
    border-bottom-color: black;
    border-bottom: solid;
    border-width: 1px;

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
    padding-top: 20px;
    border-color: rgb(224, 239, 241);
    background: rgb(251, 252, 252);
    width: 16%;
    min-width: 280px;
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
        height: 1.5rem;
        background-color: rgb(243, 252, 255);
        border-radius: 5px;
      }
    }

    .contact {
      margin-top: 20px;
      text-align: left;
    }

    .person {
      border-bottom: solid;
      border-top: solid;
      border-width: 1px;
      border-color: rgba(138, 158, 227, 0.73);
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
    border-color: rgb(224, 239, 241);
    background: rgba(230, 237, 239, 0.59);
    width: 79%;
    padding: 20px;

    > img {
      display: block;
      margin: 0 auto;
    }

    > div {
      width: 45%;
      min-width: 400px;
      max-width: 630px;
      margin: 0 auto;
    }

    > div > img {
      width: 250px;
      margin-right: 50px;
    }

    form {
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