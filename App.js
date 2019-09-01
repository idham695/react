import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {/* Search bar */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
              <Image source={require('./assets/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./assets/promo.png')} />
            </View>
          </View>
          {/* gopay */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./assets/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp.50.375</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image source={require('./assets/pay.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', marginTop: 15 }}>Pay</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image source={require('./assets/nearby.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', marginTop: 15 }}>Nearby</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image source={require('./assets/topup.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', marginTop: 15 }}>Top Up</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', }}>
                <Image source={require('./assets/more.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', marginTop: 15 }}>More</Text>
              </View>
            </View>
          </View>
          {/* Main Feature */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18 }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-ride.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-RIDE</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-car.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-CAR</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-bluebird.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-BLUEBIRD</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-send.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-SEND</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-deals.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-DEALS</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-pulsa.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-PULSA</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-food-1.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-FOOD</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./assets/go-more.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-MORE</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 17, backgroundColor: '#f2f2f4', marginTop: 20 }}></View>
          {/* News Section */}
          <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View>
              <Image source={require('./assets/sepak-bola.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c' }}>GO-NEWS</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a' }}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
            </View>
          </View>
        </ScrollView>
        {/* Navbar */}
        <View style={{ height: 54, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/home-active.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4, color: '#43AB4A' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/order.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/help.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Help</Text></View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/inbox.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={{ width: 26, height: 26 }} source={require('./assets/account.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({

});
