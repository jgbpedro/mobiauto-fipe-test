import { Dimensions, Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  width: ${Dimensions.get("screen").width - 80}px;
  align-self: stretch;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: #333;
  font-size: ${props => props.title ? "18px" : "14px"};
  font-weight:  ${props => props.bold ? "bold" : "normal"};
  text-align: ${props => props.align ? props.align : "center"};
  margin: 4px 0;
`;

export const Center = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin: 24px 0;
`;

export const SectionContainer = styled.View`
  margin: 12px 0;
`;
