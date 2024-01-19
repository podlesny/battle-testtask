import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import blue from "@mui/material/colors/blue"
import CssBaseline from "@mui/material/CssBaseline"

const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage:
                        "url(https://img.freepik.com/free-vector/seamless-pattern-crown_1284-45949.jpg?w=1800&t=st=1705664253~exp=1705664853~hmac=9e2ddd793ce45295ce916630bec391d5934ffbaf5ca625fc1bebe61845d3088e)",
                    backgroundPosition: "center",
                    backgroundSize: "50%",
                },
            },
        },
    },
})

function withRoot(Component: React.FC) {
    function WithRoot(props: any) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </ThemeProvider>
        )
    }

    return WithRoot
}

export default withRoot
