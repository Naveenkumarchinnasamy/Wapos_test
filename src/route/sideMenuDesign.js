import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { height } from 'react-native-dimension';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import * as firebase from "firebase";

export default class sideMenuDesign extends Component {

  constructor(props) {
    super(props);
  }

  logout = () => {

    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('login')
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
          <Image style={{ width: 20, height: 20, marginTop: 50, marginBottom: 0, alignSelf: 'flex-end', marginRight: 20, marginBottom: 30 }} source={require('./../image/icon/crossmenu.png')} />
        </TouchableOpacity>

        <View style={{ backgroundColor: '#ffffff', padding: 10, flexDirection: 'row', marginTop: wp('-5%'), marginLeft: wp('5%') }}>

          <Image style={{ width: 80, height: 80, marginTop: -10, marginBottom: 20 }} source={require('./../image/icon/usersample.png')} />
          <View style={{ marginTop: 0, }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, color: '#44c7f3', fontWeight: 'bold', marginLeft: 10 }}>Bilbo begins</Text>
            <TouchableOpacity>
              <Text style={{ alignSelf: 'center', fontSize: 18, color: '#44c7f3', marginLeft: -15, marginTop: 2 }}>Edit profile</Text>
            </TouchableOpacity>
          </View>

        </View>

        <ScrollView style={{ marginTop: 0 }}>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('mychat') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s1.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Active chats</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('notification') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s2.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Notifications</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('opendeals') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s3.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Open deals</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomColor: '#e1e1e1', borderBottomWidth: 1, }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('dealshistory2') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/s4.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Deals history</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('flightdetail') }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row' }}>
                <Image style={{ width: 25, height: 25, marginRight: 10, marginTop: 5 }} source={require('../image/icon/s5.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Flight details</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => { this.logout() }} style={{ padding: 5, marginLeft: 5, marginVertical: height(2), }}>
              <View style={{ marginLeft: 15, marginTop: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image resizeMode='contain' style={{ width: 25, height: 25, marginRight: 10 }} source={require('../image/icon/logout.png')} />
                <Text style={{ color: '#44c7f3', fontSize: 18 }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingLeft: 55 }}>
              <Image style={{ width: 23, height: 23, marginRight: 10, marginTop: 2 }} source={require('../image/icon/gear.png')} />
              <Text style={{ color: '#44c7f3', fontSize: 18, textAlign: 'center', marginBottom: 20 }}>Account settings</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


