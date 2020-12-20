import { Container } from './styles';
import React from 'react';

export interface Props {}

const SafeCenterContainer: React.FC<Props> = (props) => {
  const {children} = props;
  return (
    <Container>
      {children ? children : null}
    </Container>
  );
}

export default SafeCenterContainer;
