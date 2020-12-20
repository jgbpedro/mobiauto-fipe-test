import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background: rgba(255, 255, 255, 0.2);
  margin: 0 16px 16px 16px;
  z-index: 100;
`;
export const Button = styled(RectButton)`
  height: 46px;
  background: #e5556e;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 16px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 14px;
  margin: 8px 0 8px 0;
`;