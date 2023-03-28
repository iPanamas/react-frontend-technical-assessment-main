import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--bgmain);
`;
export const Nav = styled.nav`
  display: flex;

  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;
export const NavLinkLogo = styled(Link)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: inline-block;
  font-family: 'Inter';
  font-weight: 800;
  font-size: 24px;
  line-height: 1.2;

  color: var(--mainText);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
export const ListItem = styled.li`
  margin-right: 47px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: inline-block;
  color: var(--headerLink);
  font-size: 16px;
  line-height: 1.18;
  transition: back-ground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: var(--mainText);
    font-weight: 600;
  }
`;
export const UserList = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-left: 60px;
`;
export const HeaderSvg = styled.svg`
  fill: var(--headerLink);
  overflow: hidden;
  transition: back-ground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-radius: 50%;
    background-color: var(--svgfill);
    stroke: var(--white);
  }
`;
