import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Source Sans Pro', sans-serif",
        "fontSize": 18
    },
    "header": {
        "borderBottom": "1px solid #999",
        "marginBottom": 2,
        "disply": "flex"
    },
    "header h1 a": {
        "color": "red",
        "textDecoration": "none"
    },
    "nav-left": {
        "marginRight": "auto"
    },
    "nav-right": {
        "display": "flex",
        "paddingTop": 2
    },
    "post-entry": {
        "marginBottom": 2
    },
    "post-entry h2": {
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 0.5,
        "marginLeft": 0
    },
    "post-entry h2 a": {
        "color": "blue",
        "textDecoration": "none"
    },
    "post-entry h2 a: visited": {
        "color": "blue",
        "textDecoration": "none"
    },
    "post-entry p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "400"
    },
    "post-entry h2 a:hover": {
        "color": "red"
    }
});