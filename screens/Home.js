import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    PermissionsAndroid
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import Geolocation from 'react-native-geolocation-service';


const requestgpsPermission = async () => {

    try {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Aplikacja Wacdonald potrzebuje autoryzacji dostępu do modułu GPS.",
          message:
            "Wacdonald potrzebuje dostępu do twojej lokalizacji" +
            "aby móc znaleźć restauracje w twojej okolicy.",
          buttonNegative: "Anuluj",
          buttonPositive: "Zgadzam się"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Wacdonald ma teraz dostęp do lokalizacji w telefonie");
      } else {
        console.log("Odmówiono dostępu do lokalizacji");
      }

    } catch (err) {
        console.warn(err);
      }
    };




const Home = ({ navigation }) => {


    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Kielce",
        gps: {
            latitude: 50.879536,
            longitude: 20.640954
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Burgery",
            icon: icons.hamburger,
        },
        {
            id: 2,
            name: "Wrapy",
            icon: icons.wrap,
        },
        {
            id: 3,
            name: "Kanapki",
            icon: icons.sandwich,
        },
        {
            id: 4,
            name: "Kurczak",
            icon: icons.chicken,
        },
        {
            id: 5,
            name: "Sałatka",
            icon: icons.salad,
        },
        {
            id: 6,
            name: "Zestawy",
            icon: icons.sets,
        },
        {
            id: 7,
            name: "Przekąski",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Desery",
            icon: icons.dessert,
        },
        {
            id: 9,
            name: "Napoje",
            icon: icons.drink,
        },

    ]


    const restaurantData = [
        {
            id: 1,
            name: "Burgerownia",
            rating: 4.6,
            categories: [1,7,9],
            photo: images.restaurant_1,
            location: {
                latitude: 50.876860, 
                longitude: 20.632494,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Dawid"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Cheeseburger",
                    photo: images.cheeseburger,
                    description: "Cheesburger z podwójnym serem oraz sałatką.",
                    calories: 250,
                    price: 6
                },
                {
                    menuId: 2,
                    name: "Drwal Klasyczny",
                    photo: images.drwal,
                    description: "Wyśmienity kotlet wołowy, plaster panierowanego, roztapiającego się sera i chrupiący bekon.",
                    calories: 500,
                    price: 25
                },
                {
                    menuId: 3,
                    name: "Smaczne frytunie",
                    photo: images.fries,
                    description: "Chrupiące pieczone frytki",
                    calories: 232,
                    price: 4
                },
                {
                    menuId: 4,
                    name: "Cola",
                    photo: images.cola,
                    description: "Orzeźwiająca cola.",
                    calories: 180,
                    price: 6
                }

            ]
        },
        {
            id: 2,
            name: "Wacdonald pod wyrwigroszem",
            rating: 4.2,
            categories: [1,2,3,4],
            photo: images.restaurant_2,
            location: {
                latitude: 50.876860, 
                longitude: 20.632494,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Andrzej"
            },
            menu: [
                {
                    menuId: 5,
                    name: "Drwal Klasyczny",
                    photo: images.drwal,
                    description: "Wyśmienity kotlet wołowy, plaster panierowanego, roztapiającego się sera i chrupiący bekon.",
                    calories: 500,
                    price: 25
                },
                {
                    menuId: 6,
                    name: "Wrap Bekonowy",
                    photo: images.wrap,
                    description: "Wrap z pyszną sałatką i chrupiącym bekonem.",
                    calories: 252,
                    price: 8
                },
                {
                    menuId: 7,
                    name: "Kajzerka z kurczakiem",
                    photo: images.kajzerka,
                    description: "Przepyszna kajzerka z kurczaczkiem. Mniam pycha.",
                    calories: 300,
                    price: 7 
                },
                {
                    menuId: 8,
                    name: "Nuggetsy",
                    photo: images.nuggets,
                    description: "Super mega nuggetsy.",
                    calories: 332,
                    price: 12
                },

            ]
        },
        {
            id: 3,
            name: "Wacdonald Wege",
            rating: 3.7,
            categories: [5],
            photo: images.restaurant_3,
            location: {
                latitude: 50.865319, 
                longitude: 20.634468,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Maksymilian"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sałatka grecka",
                    photo: images.greece,
                    description: "Przepyszna sałatka grecka.",
                    calories: 130,
                    price: 12
                },
                {
                    menuId: 10,
                    name: "Sałatka Cezar",
                    photo: images.cesar,
                    description: "Przepyszna sałatka cezar.",
                    calories: 180,
                    price: 16
                }
            ]
        },
        {
            id: 4,
            name: "Wacdonald Desery",
            rating: 4.3,
            categories: [8],
            photo: images.restaurant_4,
            location: {
                latitude: 50.874569, 
                longitude: 20.675443,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Paulina"
            },
            menu: [
                {
                    menuId: 11,
                    name: "Lody z polewą",
                    photo: images.ice,
                    description: "Lody z polewą do wyboru.",
                    calories: 300,
                    price: 5.50
                },
                {
                    menuId: 12,
                    name: "Ciasto budyniowe",
                    photo: images.cookie,
                    description: "Przepyszne ciasto budyniowe",
                    calories: 500,
                    price: 14.99
                }
            ]
        },
        {
            id: 5,
            name: "Wacdonald dla koneserów",
            rating: 4.9,
            categories: [1,6,7,9],
            photo: images.restaurant_5,
            location: {
                latitude: 50.874349, 
                longitude: 20.572368,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Joanna"
            },
            menu: [
                {
                    menuId: 13,
                    name: "Drwal Klasyczny",
                    photo: images.drwal,
                    description: "Wyśmienity kotlet wołowy, plaster panierowanego, roztapiającego się sera i chrupiący bekon.",
                    calories: 500,
                    price: 25
                },
                {
                    menuId: 14,
                    name: "Smaczne frytunie",
                    photo: images.fries,
                    description: "Chrupiące pieczone frytki",
                    calories: 232,
                    price: 4
                },
                {
                    menuId: 15,
                    name: "Cola",
                    photo: images.cola,
                    description: "Orzeźwiająca cola.",
                    calories: 180,
                    price: 6
                },
                {
                    menuId: 16,
                    name: "Zestaw z potrójnym burgerem",
                    photo: images.set,
                    description: "Przepyszny zestaw.",
                    calories: 750,
                    price: 30
                }

            ]
        },
        {

            id: 6,
            name: "Wacdonald",
            rating: 4.4,
            categories: [1],
            photo: images.restaurant_5,
            location: {
                latitude: 50.876860, 
                longitude: 20.632494,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Patryk"
            },
            menu: [
                {
                    menuId: 17,
                    name: "Cheeseburger",
                    photo: images.cheeseburger,
                    description: "Cheesburger z podwójnym serem oraz sałatką.",
                    calories: 250,
                    price: 6
                },
                {
                    menuId: 18,
                    name: "Drwal Klasyczny",
                    photo: images.drwal,
                    description: "Wyśmienity kotlet wołowy, plaster panierowanego, roztapiającego się sera i chrupiący bekon.",
                    calories: 500,
                    price: 25
                }
            ]

        },
        {

            id: 7,
            name: "Wacdonald z różnym",
            rating: 3.2,
            categories: [2,8],
            photo: images.restaurant_3,
            location: {
                latitude: 50.876860, 
                longitude: 20.632494,
            },
            courier: {
                avatar: images.avatar_5,
                name: "Monika"
            },
            menu: [
                {
                    menuId: 19,
                    name: "Wrap Bekonowy",
                    photo: images.wrap,
                    description: "Wrap z pyszną sałatką i chrupiącym bekonem.",
                    calories: 252,
                    price: 8
                },
                {
                    menuId: 20,
                    name: "Lody z polewą",
                    photo: images.ice,
                    description: "Lody z polewą do wyboru.",
                    calories: 300,
                    price: 5.50
                }
            ]

        },
        {

            id: 8,
            name: "Wacdonald Drugi",
            rating: 3.8,
            categories: [1,2],
            photo: images.restaurant_1,
            location: {
                latitude: 50.876860, 
                longitude: 20.632494,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Bartek"
            },
            menu: [
                {
                    menuId: 21,
                    name: "Drwal Klasyczny",
                    photo: images.drwal,
                    description: "Wyśmienity kotlet wołowy, plaster panierowanego, roztapiającego się sera i chrupiący bekon.",
                    calories: 500,
                    price: 25
                },
                {
                    menuId: 22,
                    name: "Wrap Bekonowy",
                    photo: images.wrap,
                    description: "Wrap z pyszną sałatką i chrupiącym bekonem.",
                    calories: 252,
                    price: 8
                }
            ]

        },


    ]


    const [categories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation] = React.useState(initialCurrentLocation)



    function onSelectCategory(category) {
      
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: '7%', }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, marginTop: '3%', alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '60%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}
                            onPress={requestgpsPermission}
                        >
                            
                            {currentLocation.streetName}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Cart")}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                        
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Wybierz kategorię</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
               
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

               
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                       
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home