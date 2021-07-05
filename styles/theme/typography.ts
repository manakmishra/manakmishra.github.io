import { fluidType } from "../../hooks/FluidResponsive";

export const fonts = {
    heading: 'Poppins, Tahoma, sans-serif',
    body: 'Poppins, Verdana, sans-serif'
}

export const fontWeights = {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
};

export const textStyles = {
    name: {
        fontSize: fluidType(80, 128),
        fontFamily: "Ubuntu",
        fontWeight: "bold",
        lineHeight: "95%",
        letterSpacing: "0.01em",
    },
    body: {
        fontSize: fluidType(24, 32),
        fontWeight: "medium",
        lineHeight: "125%"
    },
    title: {
        fontSize: fluidType(24, 32),
        fontWeight: "bold",
        lineHeight: "140%"
    },
    fLabel: {
        fontSize: {base: '16px', md: '18px', lg: '20px'},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    navBarLabel: {
        fontSize: {base: '20px', md: fluidType(18, 21)},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    wip: {
        fontSize: fluidType(24, 56),
        fontWeight: "medium",
        lineHeight: "125%"
    }
}
