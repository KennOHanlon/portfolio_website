import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    
    `;
  
export const NavLink = styled(Link)`
    color: #808080;
    display: inline-flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color: #000000;
    }
    `;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    text-align: center;
    height: 100%;
    margin-left: 10px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    }
    `;

export const NavMenu = styled.div`
    display: inline-flex;
    align-items: center;
    text-align: center;
    height: 100%;
    margin: auto;
    // margin-right: -24px;
    // background-color: yellow;
    // /* Second Nav */
    // /* margin-right: 24px; */
    // /* Third Nav */
    // /* width: 100vw;
    // white-space: nowrap; */
    @media screen and (max-width: 768px) {
    display: none;
    }
    `;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 12px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media screen and (max-width: 768px) {
    display: none;
    }
    `;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    // background: #C09E86;
    background: rgba(250, 244, 211, 1);
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 12px;
    &:hover {
    transition: all 0.2s ease-in-out;
    // background: #fff;
    // background: rgba(192,158,134,0.4);
    background: rgba(250, 216, 89, 0.5);
    // color: #808080;
    }
    `;  
  