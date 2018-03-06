import React, { Component } from 'react'; import { AppRegistry, StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default class HitungVolumeBalokextends Component { constructor(props){ super(props) this.state = { lebar:0, tinggi:0, panjang:0 }; }

render() { return (
<View style = {{flex:1,backgroundColor:'#bbdefb'}}>

    <View style={{backgroundColor:'#2196f3'}}>
       <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
        Menghitung volume balok
      </Text>
     </View>

    <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
        <TextInput style = {{height: 40}}
          placeholder="Masukkan panjang"
          onChangeText={(panjang)=>this.setState({panjang})}
          keyboardType = 'numeric'
        />
        <TextInput style = {{height: 40}}
          placeholder="Masukkan  Tinggi"
          onChangeText={(tinggi)=>this.setState({tinggi})}
          keyboardType = 'numeric'
        />
          <TextInput style = {{height: 40}}
          placeholder="Masukkan lebar"
          onChangeText={(lebar)=>this.setState({lebar})}
          keyboardType = 'numeric'
        />

        <Button
          onPress={()=>this.setState({
            volume: (this.state.panjang*this.state.tinggi*this.state.lebar)
          })}
          title="Hitung"
          accessibilityLabel="Klik untuk menghitung"
        />
   </View>

    <View style={{margin:20, backgroundColor:'#90caf9'}}>
      <Text style = {{padding: 10, fontSize: 20}} >
          Panjang =  {this.state.panjang} {"\n"}
          Tinggi =  {this.state.tinggi} {"\n"}
          Lebar = {this.state.lebar}
      </Text>
     </View>

); } } AppRegistry.registerComponent('AppForm2', () => HitungVolumeBa
