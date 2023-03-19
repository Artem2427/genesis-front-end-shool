import { Palette } from '@shared';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const TypeItem = styled.p`
  margin: 0 15px 0 10px;
  font-size: 16px;
`;

export const TypeText = styled.span`
  color: ${Palette.orange};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
