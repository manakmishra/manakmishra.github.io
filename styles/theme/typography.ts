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

export const textStyles = {
    name: {
        fontSize: {base: '96px', md: '100px'},
        fontWeight: "extrabold",
        lineHeight: "95%",
        letterSpacing: "0.01em",
    },
    body: {
        fontSize: {base: '24px', md: '28px'},
        fontWeight: "medium",
        lineHeight: "125%"
    },
    title: {
        fontSize: {base: '24px', md: '28px'},
        fontWeight: "bold",
        lineHeight: "140%"
    },
    fLabel: {
        fontSize: {base: '18px', md: '20px'},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    navBarLabel: {
        fontSize: {base: '18px', md: '20px'},
        fontWeight: "normal",
        lineHeight: "125%"
    },
    wip: {
        fontSize: {base: '24px', md: '36px', lg: '56px'},
        fontWeight: "medium",
        lineHeight: "125%"
    }
}
