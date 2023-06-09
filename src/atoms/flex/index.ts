import styled from 'styled-components';

interface FlexBoxProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
  gap?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-grow: ${(props) => props.flexGrow || '0'};
  flex-shrink: ${(props) => props.flexShrink || '1'};
  flex-basis: ${(props) => props.flexBasis || 'auto'};
  align-self: ${(props) => props.alignSelf || 'auto'};
  gap: ${(props) => props.gap || '0px'};
`;

export default FlexBox;
