import { FaBars } from "react-fa-icon";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLogo = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: 1.2em "Fira Sans", sans-serif;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font: 1.2em "Fira Sans", sans-serif;
  font-weight: bold;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SignInBtnLink = styled(Link)`
  display: flex;
  border-radius: none;
  background: #ffffff;
  padding: 25% 50px;
  color: #000000;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  .push-right {
    margin-left: auto;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #ffffff;
  }
`;
export const JoinBtnLink = styled(Link)`
  display: flex;
  border-radius: none;
  background: #000000;
  padding: 25% 50px;
  color: #ffffff;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  .push-right {
    margin-left: auto;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000;
  }
`;
