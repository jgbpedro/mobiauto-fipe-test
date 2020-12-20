import { Container, Text } from './styles';

import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export interface Props {
  label?: string;
  loading?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {loading, label} = props;
  return (
    <Container {...props}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{label}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
