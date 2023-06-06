import { theme } from '@/atoms/utils/color';
import styled from 'styled-components';

export const DropdownButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
  color: #6f6f6f;
  font-weight: normal;
  font-size: 0.95rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: auto;
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean; leftOpen: boolean }>`
  position: absolute;
  top: 25px;
  right: ${({ leftOpen }) => (leftOpen ? 'auto' : 0)};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #f8f8f8;
  list-style: none;
  font-size: 0.9rem;
  min-width: 170px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.isOpen ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const DropdownMenuItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

export const DropdownIcon = styled.span`
  margin-right: 12px;
  margin-left: 5px;
`;

export const DropdownMenuLink = styled.a<{ colorHover?: string }>`
  text-decoration: none;
  color: #6f6f6f;
  font-size: 0.9rem;
  :hover {
    color: ${({ colorHover }) => colorHover ?? theme.colors.purple[500]};
  }
`;
