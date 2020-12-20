import { ActivityIndicator, View } from 'react-native';
import { Button, Container, Text } from './styles';

import { Dropdown as DropdownModule } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import React from 'react';

export interface Props {
  label?: string;
  items?: Array<any>;
  onChangeItem?: Function;
}

const Dropdown: React.FC<Props> = (props) => {
  const {
    label,
    items,
    onChangeItem,
  } = props || {};

  return (
    <View>
      <DropdownModule
        label={label}
        data={items}
        onChangeText={(text) => onChangeItem(text)}
      />
    </View>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChangeItem: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  items: [],
  onChangeItem: () => {},
};

export default Dropdown;
