import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { Font } from 'expo';

export default class ThirdScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
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
        'Orbitron' : require( './Orbitron-Bold.ttf' ),
        'BlackHanSans': require( './BlackHanSans-Regular.ttf' ),
      }).then(() => {
        this.setState({fontLoaded: true})
      });
    }


  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.state.params.id,
      fontLoaded: false,
    }
  }

  componentWillUnMount() {
    this.setState({fontLoaded: false});
  }

  render() {
    const data = [
      { id: 0,
      name: "Dell",
      manufacturer: "Dell Incorporation",
      price: 'Rs. 108999',
      ItemsInStock: 28,
      MarketPrice: 'Rs. 110000',
    },

    { id: 1,
    name: "Apple",
    manufacturer: "Apple India",
    price: 'Rs. 124000',
    ItemsInStock: 17,
    MarketPrice: 'Rs. 120000',
  },

  { id: 2,
  name: "Haier",
  manufacturer: "Haier Incorporation",
  price: 'Rs. 39000',
  ItemsInStock: 35,
  MarketPrice: 'Rs. 42000',
},

{ id: 3,
name: "Blackberry",
manufacturer: "Blackberry Incorporation",
price: 'Rs. 77000',
ItemsInStock: 4,
MarketPrice: 'Rs. 78000',
},

{ id: 4,
name: "One plus",
manufacturer: "One plus Incorporation",
price: 'Rs. 36999',
ItemsInStock: 24,
MarketPrice: 'Rs. 38000',
},

{ id: 5,
name: "HP",
manufacturer: "Hewlett Packard",
price: 'Rs. 67000',
ItemsInStock: 18,
MarketPrice: 'Rs. 70000',
},

{ id: 6,
name: "Xiaomi",
manufacturer: "Xiaomi Incorporation",
price: 'Rs. 18999',
ItemsInStock: 91,
MarketPrice: 'Rs. 21000',
},

{ id: 7,
  name: "Lenovo",
  manufacturer: "Lenovo India",
  price: 'Rs. 52000',
  ItemsInStock: 74,
  MarketPrice: 'Rs. 55000',
},

{ id: 8,
name: "Samsung",
manufacturer: "Samsung Incorporation",
price: 'Rs. 30000',
ItemsInStock: 12,
MarketPrice: 'Rs. 35000',
},

]
const stress = this.state.id;
const urlImage = data[stress].image;
  return (

     <View style= {styles.container}>

        <Text style= {styles.outerText, this.state.fontLoaded &&
          { fontFamily: 'Tangerine-Bold', fontSize: 50, color: '#273c75'}}>Product Name: </Text>
          <Text style= {styles.innerText, this.state.fontLoaded &&
            { fontFamily: 'Orbitron', fontSize: 35, color: '#ffa502'}}>{data[this.state.id].name}</Text>

        <Text style= {styles.outerText, this.state.fontLoaded &&
          { fontFamily: 'Tangerine-Bold', fontSize: 50, color: '#273c75'}}>Manufacturer: </Text>
          <Text style= {styles.innerText, this.state.fontLoaded &&
            { fontFamily: 'Orbitron', fontSize: 22, color: '#ff7979'}}>{data[this.state.id].manufacturer}</Text>

        <Text style= {styles.outerText, this.state.fontLoaded &&
          { fontFamily: 'Tangerine-Bold', fontSize: 50, color: '#273c75'}}>Price: </Text>
          <Text style= {styles.innerText, this.state.fontLoaded &&
            { fontFamily: 'Orbitron', fontSize: 35, color: '#ff7979'}}>{data[this.state.id].price}</Text>

        <Text style= {styles.outerText, this.state.fontLoaded &&
          { fontFamily: 'Tangerine-Bold', fontSize: 50, color: '#273c75'}}>Items Available: </Text>
          <Text style= {styles.innerText, this.state.fontLoaded &&
            { fontFamily: 'Orbitron', fontSize: 35, color: '#ff7979'}}>{data[this.state.id].ItemsInStock}</Text>

        <Text style= {styles.outerText, this.state.fontLoaded &&
          { fontFamily: 'Tangerine-Bold', fontSize: 50, color: '#273c75'}}>Market Price: </Text>
          <Text style= {styles.innerText, this.state.fontLoaded &&
            { fontFamily: 'Orbitron', fontSize: 35, color: '#ff7979'}}>{data[this.state.id].MarketPrice}</Text>

        <TouchableOpacity style= {styles.backbutton} onPress= {() => this.props.navigation.navigate('SecondScreen')}>
        <Text style= {styles.buttonText, this.state.fontLoaded &&
          { fontFamily: 'Orbitron', fontSize: 28, color: '#30336b'}}>Go Back</Text>
        </TouchableOpacity>

     </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    width: '90%',
    height: '40%'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerText: {

  },

  outerText: {
    textShadowColor: "gray",
    textShadowOffset: { width: 2, height: 2},
    textShadowRadius: 15,
  },

  backbutton: {
    width: '40%',
    padding: 10,
    margin: 7,
    borderRadius: 18,
    backgroundColor: '#6ab04c',
    alignItems: 'center'
  },
  buttontext: {
      borderColor: "rgba(0,0,0,0.2)",
      textShadowColor: "gray",
      textShadowOffset: { width: 2, height: 2},
      textShadowRadius: 15,
  }

});
