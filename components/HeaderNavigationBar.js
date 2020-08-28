import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';

function MyComponent(props) {
 const {colors} = props.theme;
 const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

//   return (
//     <Appbar.Header >
//       <Appbar.Content title="VoA" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header>
//   );
 return (
 <Appbar style={styles.top}>
   <Appbar.Action
     icon="archive"
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
)
};

export default  withTheme(MyComponent)

const styles = StyleSheet.create({
  top: {
    //backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 20,
  },
});