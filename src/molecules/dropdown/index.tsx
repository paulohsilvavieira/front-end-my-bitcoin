import { useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownIcon
} from './style';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  itens: {
    label: string;
    url: string;
    icon?: string;
    colorHover?: string;
  }[];
  title?: string;
  icon: any;
  leftOpen: boolean;
}
export const Dropdown: React.FC<Props> = ({
  itens,
  title,
  icon,
  leftOpen
}: Props) => {
  const menuItems = itens;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function handleDropdownToggle(open: boolean) {
    setDropdownOpen(open);
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => handleDropdownToggle(true)}>
        <DropdownIcon>{icon}</DropdownIcon>
        {title}

        <DropdownIcon>
          <FontAwesomeIcon icon={faCaretDown} width={12} />
        </DropdownIcon>
      </DropdownButton>
      <DropdownMenu
        isOpen={isDropdownOpen}
        leftOpen={leftOpen}
        onMouseLeave={() => handleDropdownToggle(false)}
      >
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <DropdownMenuLink href={item.url} colorHover={item.colorHover}>
              <DropdownIcon>{item.icon}</DropdownIcon> {item.label}
            </DropdownMenuLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
