import { fluidType } from "../../hooks/FluidResponsive";

export const fonts = {
    heading: 'DM Sans, Tahoma, sans-serif',
    body: 'DM Sans, Verdana, sans-serif'
}

export const fontWeights = {
    normal: 400,
    medium: 500,
    bold: 700
};

export const textStyles = {
    name: {
        fontSize: fluidType(80, 128),
        fontFamily: "Ubuntu",
        fontWeight: "bold",
        lineHeight: "95%",
    },
    body: {
        fontSize: fluidType(24, 32),
        fontWeight: "normal",
        lineHeight: "125%"
    },
    title: {
        fontSize: fluidType(24, 32),
        fontWeight: "normal",
        lineHeight: "140%"
    },
    fLabel: {
        fontSize: {base: '16px', md: '18px', lg: '20px'},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    navBarLabel: {
        fontSize: {base: '22px', md: fluidType(18, 22)},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    wip: {
        fontSize: fluidType(24, 48),
        fontWeight: "medium",
        lineHeight: "125%"
    }
}
