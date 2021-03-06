import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#FFD57B", 
    secondary: "#FE4141",  

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    green: "#27AE60",
    red: "#FF1717",
    blue: '#0064C0',
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    transparentPrimary: 'rgba(255, 213, 123, 0.3)',
};

export const SIZES = {
  
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;