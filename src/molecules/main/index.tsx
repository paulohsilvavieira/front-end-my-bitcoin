import { PropsWithChildren } from 'react';
import { Content } from './style';

export const MainContent: React.FC<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return <Content>{children}</Content>;
};
