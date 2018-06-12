import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { Font } from 'expo';

export default class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
    headerStyle: {
      backgroundColor: '#eb4d4b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'monospace'
    },
  };

  componentDidMount() {
    Font.loadAsync({
      'BerkshireSwash-Regular': require('./BerkshireSwash-Regular.ttf'),
      'Tangerine-Bold' : require('./Tangerine-Bold.ttf'),
      'Cinzel-Bold': require('./Cinzel-Bold.ttf'),
    }).then(() => {
      this.setState({fontLoaded: true})
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      value: this.props.navigation.state.params.name
    };
  }

  componentWillUnMount () {
    this.setState({fontLoaded: false})
  }

  render() {
    return (
      <ImageBackground source= {require('./poker.jpg')} style= {styles.container}>
        <Text style= {styles.textField, this.state.fontLoaded && { fontFamily: 'Cinzel-Bold', fontSize: 20, color: '#ff6348', alignSelf: 'center'}} >Select product</Text>
        <ScrollView>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 0 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Dell</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 1 })}>
            <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 2 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Haier</Text>
            </TouchableOpacity>


            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 3 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Blackberry</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 4 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>One Plus</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 5 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Hewlett Packard</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 6 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Xiaomi</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 7 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Lenovo</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.infiniteScroll} onPress= {() => this.props.navigation.navigate('ThirdScreen',{ id: 8 })}>
              <Text style= {styles.innerText, this.state.fontLoaded && { fontFamily: 'Tangerine-Bold', fontSize: 30, color: '#273c75'}}>Samsung</Text>
            </TouchableOpacity>


        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  infiniteScroll: {
    margin: 7,
    padding: 5,
    alignSelf: 'center',
    marginTop: 5,
    width: '90%',
    backgroundColor: '#7bed9f',
    borderLeftColor: '#5f27cd',
    borderLeftWidth: 10,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  innerText: {
      alignSelf: 'center',
      justifyContent: 'center',
  },

  textField: {

  },

});
