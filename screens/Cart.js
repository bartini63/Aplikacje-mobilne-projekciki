import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { SIZES, FONTS, icons } from "../constants";


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  title: {
    fontSize: 24,
    color: "#4099ff",
    margin: 8
  }
});

const Cart = ( {navigation} ) => {
    return(

      <View style={styles.container}>
        <View
            style={{
                marginTop: SIZES.padding * 3,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}
        >

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>


            <Text
                style={{
                    ...FONTS.h2,
                    borderRadius: SIZES.radius,
                    marginRight: '39%',
                    marginTop: '1%'
                }}
            >
            Twój koszyk
            </Text>

        </View>
      <View style={{
          marginTop: '50%',
          marginLeft: '30%'
      }}>
      
        <Image
          source={require ("../assets/images/empty-bag.png") }
          style={{ width: 150, height: 150, marginBottom: 12 }}
        />
        <Text
            style={{
              color: "#FFD57B",
              fontSize: 25,
              opacity: 0.55,
              marginLeft: '-3%'
            }}
          >
            Koszyk jest pusty.
          </Text>
        </View>
      </View>
    );
  }
    

export default Cart;