import { Dropdown } from '../dropdown';
import { TopMenu, MenuList, MenuItem, MenuLink, Logo } from './style';
import Image from 'next/image';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { theme } from '@/atoms/utils/color';
interface Props {
  itens: {
    label: string;
    url: string;
    icon?: any;
  }[];
}

export const TopMenuBar: React.FC<Props> = ({ itens }: Props) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const dropdownItens = [
    {
      label: 'Settings',
      url: '/user-settings'
    },
    {
      label: 'Security',
      url: '/user-settings'
    },
    {
      label: 'Sign Out',
      url: '/signout',
      colorHover: theme.colors.red[400]
    }
  ];
  return (
    <TopMenu>
      <Logo>
        <Image alt="Logo" src={'/logo.svg'} width={120} height={40} />
      </Logo>
      <MenuList>
        {itens.map((item, index) => (
          <MenuItem key={index}>
            <MenuLink
              isActive={activeLink === item.url}
              href="#"
              onClick={() => handleLinkClick(item.url)}
            >
              {item.label}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
      <Dropdown
        icon={<FontAwesomeIcon icon={faUser} width={12} />}
        itens={dropdownItens}
        title="Username"
        leftOpen={false}
      />
    </TopMenu>
  );
};
