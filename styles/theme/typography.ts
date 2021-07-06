import { fluidType } from "../../hooks/FluidResponsive";

export const fonts = {
    heading: 'DM Sans, Tahoma, sans-serif',
    body: 'DM Sans, Verdana, sans-serif'
}

export const fontWeights = {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
};

export const textStyles = {
    name: {
        fontSize: fluidType(80, 128),
        fontFamily: "Chillax",
        fontWeight: "semibold",
        lineHeight: "110%",
        letterSpacing: "-0.0525em"
    },
    body: {
        fontSize: fluidType(16, 20),
        fontWeight: "normal",
        lineHeight: "125%"
    },
    largeBody: {
        fontSize: fluidType(24, 32),
        fontWeight: "normal",
        lineHeight: "125%"
    },
    footer: {
        fontSize: fluidType(18, 20),
        fontWeight: "normal",
        lineHeight: "125%"
    },
    navBarLabel: {
        fontSize: {base: '22px', md: fluidType(18, 22)},
        fontWeight: "normal"
    },
    wip: {
        fontSize: fluidType(24, 48),
        fontWeight: "medium",
        lineHeight: "125%"
    },
    sectionTitle: {
        fontSize: fluidType(36, 48),
        fontWeight: "medium",
        lineHeight: "125%"
    },
}
