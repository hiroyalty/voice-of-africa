import * as React from 'react';

import Colors from './Colors';

export default function TabBarIcon(props) {
  const { Icon, name, style, focused } = props
  return (
    <Icon
      name={name}
      size={30}
      style={style}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
