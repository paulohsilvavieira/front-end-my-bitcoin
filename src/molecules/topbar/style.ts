import { theme } from '@/atoms/utils/color';
import styled from 'styled-components';

export const TopMenu = styled.nav`
  display: flex;
  background-color: #fff;
  padding: 0.5rem;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #e5e3e3;
  justify-content: space-evenly;
  gap: 250px;
`;

export const Logo = styled.div`
  width: 120px;
  height: auto;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-right: 1rem;
  font-size: 0.975rem;

  &:last-child {
    margin-right: 0;
  }
`;
export const MenuLink = styled.a<{ isActive?: boolean }>`
  display: inline-block;
  font-size: 0.895rem;
  color: ${(props) => (props.isActive ? theme.colors.blue[500] : '#6f6f6f')};
  text-decoration: none;

  transition: color 0.3s;

  &:hover {
    color: ${() => theme.colors.blue[500]};
  }
`;
