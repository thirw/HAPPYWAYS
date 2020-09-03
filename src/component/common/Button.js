import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { danger, children, onPress } = props
  const { buttonStyle, textStyle, buttonStyleDanger, textStyleDanger } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={ danger ? buttonStyleDanger : buttonStyle }>
      <Text style={ danger ? textStyleDanger : textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyleDanger: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyleDanger: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
