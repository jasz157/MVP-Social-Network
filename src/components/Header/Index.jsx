import React from "react";
//import "./Header.css"
import logoImg from '../../Assets/img/LinkedIn_Logo.svg-inn.png'
import InputArea from "../StyledInput";
import {StyledBox} from "../StyledBox";
import styled from "styled-components";

const HeaderWrapper = styled(StyledBox)`
    padding: 0;
    height: 32px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    position: fixed;

    & ul {
       display: flex;
       flex-direction: row;
       list-style-type: none;
    }

    & img {
        height: 32px;
        width: 25px;
        margin-left: 20px;
        
        :active {
           opacity: 0.3;
        }
    }

    .logoHeader {
        margin-left: 0px;
        width: 100px;
        height: 31px;
    }

    .search {
        display: flex;
        flex-direction: row;
        margin-left: 0px;
        
        & input {
            margin-top: 0px;
            height: 21px;
            width: 200px
        }
    }


  
`;


export default function Header() {
    return (
        <HeaderWrapper>
            <div>
                <img className="logoHeader" src={logoImg}></img>
            </div>

            <ul className="nav-icons">
                <li className="search">
                    <img className="search-icon" src="https://www.svgrepo.com/show/513607/search.svg" alt="search icon" />
                    <InputArea />
                </li>
                <li >
                    <a href="/vacancie" className="icon">
                        <img className="rpg-game-vacancies-img" src="https://www.svgrepo.com/show/203/writing-cheque.svg" alt="vacancy-icon"/>
                    </a>
                </li>
                <li>
                    <a href="/" className="icon">
                        <img className="login-icon-img" src="https://www.svgrepo.com/show/9778/login.svg" alt="login" />
                    </a>
                </li>
                <li>
                    <a href="/signup" className="icon">
                        <img className="register-icon-img" src="https://www.svgrepo.com/show/451234/register.svg" alt="Register" />
                    </a>
                </li>
            </ul>
        </HeaderWrapper>
    )
}