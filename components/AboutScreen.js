import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

class InfoScreen extends Component {
  state = {
    visible: true
  };
    render() {
      return (
        <SafeAreaView>
          <Banner
            visible={this.state.visible}
            actions={[
              {
                label: 'Watch Along',
                onPress: () => this.setState({ visible: true}),
              },
            ]}
            icon={({size}) => (
              <Image
                source={
                  //uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                  require("../assets/voa1.png")
                }
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}>
            VOA Radio Is Established To Promote And Propagate Authentic Afro-Centric 
            Culture And Connect People Of Black Heritage World-Wide.
          </Banner>
        </SafeAreaView>);
    }
}

export default withTheme(InfoScreen);