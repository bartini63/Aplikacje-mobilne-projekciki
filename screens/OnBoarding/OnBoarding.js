import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    images,
} from "../../constants";

import { TextButton } from "../../components";

const onboarding_screens = [
    {
        id: 1,
        backgroundImage: images.background_01,
        bannerImage: images.page_01,
        title: "Wybierz ulubione jedzenie",
        description: "Przy większych zamówieniach otrzymasz specjalne kupony, promocje a nawet nagrody"
    },
    {
        id: 2,
        backgroundImage: images.background_02,
        bannerImage: images.page_02,
        title: "Dostawa do domu",
        description: "Sprawiamy, że zamawianie jedzenia jest szybkie, proste i darmowe - bez względu na to, czy zamawiasz online, czy za gotówkę."
    },
    {
        id: 3,
        backgroundImage: images.background_01,
        bannerImage: images.page_03,
        title: "Odbierz wspaniałe jedzenie",
        description: "W ciągu godziny otrzymasz swoje jedzenie. Zbieraj darmowe kredyty za każde zamówienie."
    }
]

const Onboarding = ({ navigation })  => {

    const scrollX = new Animated.Value(0)
    const flatListRef = React.useRef()


    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    {
                        onboarding_screens.map((item, index) => {
                            const dotColor = dotPosition.interpolate({
                                inputRange: [index - 1, index, index +1],
                                outputRange: ['#FFA133', COLORS.primary,
                                '#FFA133'],
                                extrapolate: "clamp"
                            })

                            const dotWidth = dotPosition.interpolate({
                                inputRange: [index - 1, index, index +1],
                                outputRange: [10, 30, 10],
                                extrapolate: "clamp"
                                })
                            return (
                                <Animated.View
                                    key={`dot-${index}`}
                                    style={{
                                        borderRadius: 5,
                                        marginHorizontal: 6,
                                        width: dotWidth,
                                        height: 10,
                                        backgroundColor: dotColor
                                    }}
                                />
                            )
                        })
                    }
                </View>
        )
    }

    function renderHeaderLogo(){
        return(
            <View
                style={{
                    position: 'absolute',
                    top: SIZES.height > 800 ? 50 :25,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                source={images.logo_02}
                resizeMode="contain"
                style={{
                    width: SIZES.width * 0.5,
                    height: 100
                }}
                />
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    height: 160
                }}
            >

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >

                {/* Kropeczki :3 */}
                    <Dots/>
                </View>

                 {/* Przyciski :O */}
                 <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginVertical: 20
                    }}
                 >
                     <TextButton
                        label="Pomiń"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.darkgray
                        }}
                        onPress={() => navigation.replace("SignIn")}
                     />
                     <TextButton
                        label="Dalej"
                        buttonContainerStyle={{
                            height: 60,
                            width: 200,
                            borderRadius: SIZES.radius
                        }}
                    onPress={() => {
                            let index = Math.ceil(Number(scrollX._value
                            / SIZES.width))

                            if(index < onboarding_screens.
                                length - 1) {
                                    // Scroll to the next item
                                    flatListRef?.current?.scrollToIndex({
                                        index: index + 1,
                                        animated: true
                                    })
                                } else {
                                    navigation.replace("SignIn")
                                }
                    }}
                     />


                 </View>
            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeaderLogo()}

            <Animated.FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment={"center"}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        {nativeEvent: {contentOffset: { x: scrollX}
                    }   }
                    ],
                    { useNativeDriver: false}
                )}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item, index}) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width
                            }}
                        >

                        <View
                            style={{
                                flex: 3
                            }}
                        >
                            <ImageBackground
                            source={item.backgroundImage}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                height: index==1 ? "94%": "100%",
                                width: "100%"
                            }}
                            >
                                <Image
                                   source={item.bannerImage}
                                   resizeMode='contain'
                                   style={{
                                       width: SIZES.width,
                                       height: SIZES.height * 0.4,
                                       marginBottom: -12
                                   }}
                                >
                                </Image>

                            </ImageBackground>

                            </View>

                            <View
                                style={{
                                    flex:1,
                                    marginTop:30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.radius
                                }}
                            >

                                <Text
                                    style={{
                                        ...FONTS.h1, fontSize: 35
                                    }}
                                    >
                                        {item.title}
                                </Text>
                                <Text
                                    style={{
                                        marginTop: 12,
                                        textAlign: 'center',
                                        color: COLORS.darkgray,
                                        paddingHorizontal: SIZES.padding,
                                        ...FONTS.body3
                                    }}
                                >
                                    {item.description}
                                </Text>
                                
                            </View>
                        </View>
                    )
                }}
                />


                {renderFooter()}
            </View>
    )
}

export default Onboarding;