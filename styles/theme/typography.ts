const fluidType = (minFont: number, maxFont: number) => {
    let XX = 768 / 100
    let YY = (100 * (maxFont - minFont)) / (1920 - 360)
    let ZZ = minFont / 16
    return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`
  }

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
  
export const fontSizes = {
    display: fluidType(80, 128),
    display2: fluidType(24, 36),
    display3: fluidType(20, 24),
    display4: fluidType(16, 24)
};

export const textStyles = {
    name: {
        fontSize: "display",
        fontWeight: "extrabold",
        lineHeight: "95%",
        letterSpacing: "0.01em",
    },
    body: {
        fontSize: "display2",
        fontWeight: "medium",
        lineHeight: "125%"
    },
    title: {
        fontSize: "display2",
        fontWeight: "bold",
        lineHeight: "140%"
    },
    fLabel: {
        fontSize: "display4",
        fontWeight: "normal",
        lineHeight: "125%"
    },
    navBarLabel: {
        fontSize: "display3",
        fontWeight: "normal",
        lineHeight: "125%"
    },
}
