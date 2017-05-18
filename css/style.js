import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundAttachment": "fixed",
        "backgroundImage": "url(\"../images/saleshop-back.JPG\")"
    },
    "main-container": {
        "backgroundColor": "#fff",
        "paddingLeft": "0px !important",
        "paddingRight": "0px !important",
        "maxWidth": 1000,
        "marginTop": 20,
        "marginBottom": 20,
        "borderRadius": "3px !important"
    },
    "content-padding": {
        "paddingLeft": 10,
        "paddingTop": 10,
        "paddingBottom": 10
    },
    "content-padding search_form search": {
        "borderRadius": "40px !important",
        "background": "url(\"../images/search.png\")",
        "backgroundSize": "7px 7px",
        "backgroundRepeat": "no-repeat",
        "paddingLeft": 30
    },
    "right-pane-list": {
        "fontSize": 10,
        "textAlign": "right",
        "paddingRight": "0px !important"
    },
    "navbar": {
        "borderRadius": "0px !important",
        "textTransform": "uppercase",
        "fontWeight": "bold",
        "fontSize": 10,
        "maxHeight": "100vh !important",
        "marginBottom": "0px !important",
        "borderBottom": "thick solid #d70004"
    },
    "navbar-brand": {
        "paddingTop": "5px !important"
    },
    "navbar ul li a": {
        "color": "#000 !important",
        "backgroundColor": "transparent !important"
    },
    "navbar ul active a": {
        "color": "#fff !important",
        "backgroundColor": "#d70004 !important"
    },
    "navbar ul li a:hover": {
        "color": "#fff !important",
        "backgroundColor": "#d70004 !important"
    },
    "item": {
        "height": 300
    },
    "item img": {
        "width": "100%"
    },
    "carousel-inner": {
        "WebkitBoxShadow": "0px 15px 14px -9px rgba(0,0,0,0.61)",
        "MozBoxShadow": "0px 15px 14px -9px rgba(0,0,0,0.61)",
        "boxShadow": "0px 15px 14px -9px rgba(0,0,0,0.61)"
    },
    "carousel-control": {
        "opacity": "1 !important",
        "color": "#fff !important",
        "backgroundImage": "none !important",
        "width": "2% !important"
    },
    "glyphicon": {
        "backgroundColor": "#000 !important",
        "fontSize": "30px !important"
    },
    "carousel-control:hover": {
        "backgroundColor": "transparent !important",
        "backgroundImage": "none !important  opacity: 0 !important"
    },
    "carousel-indicators li": {
        "backgroundColor": "#444 !important",
        "border": "thick solid #444 !important",
        "borderRadius": "50% !important"
    },
    "carousel-indicators active": {
        "backgroundColor": "transparent !important",
        "border": "thin solid #444 !important"
    },
    "jumbotron-billboard img": {
        "marginBottom": 0,
        "opacity": 0.2,
        "color": "#fff",
        "width": "100%",
        "height": "100%",
        "backgroundSize": "cover",
        "overflow": "hidden",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1
    },
    "jumbotron": {
        "position": "relative",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "height": "100vh !important"
    },
    "jumbotron container": {
        "zIndex": 2,
        "position": "relative"
    },
    "jumbotron-billboard img-1": {
        "background": "#000 url(\"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/itCjTBE/grey-light-smooth-moving-waves-background-video-animation-hd-1920x1080_vjkea4zve__S0000.jpg\") center center"
    },
    "jumbotron-billboard img-2": {
        "background": "#000 url(\"http://allswalls.com/images/grey-curves-wallpaper-1.jpg\") center center"
    },
    "jumbotron-billboard img-3": {
        "background": "#000 url(\"http://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-gray-solid-color-background.jpg\") center center"
    },
    "jumbotron-billboard img-4": {
        "background": "#000 url(\"https://s-media-cache-ak0.pinimg.com/originals/59/7e/f5/597ef5f26adfcf185ca244a61f52ef2a.jpg\") center center"
    },
    "header_text": {
        "textAlign": "center",
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "fontSize": 18,
        "lineHeight": 30,
        "borderBottom": "1px solid #fff",
        "MozBoxShadow": "inset 0 -10px 10px -10px #000000",
        "WebkitBoxShadow": "inset 0 -10px 10px -10px #000000",
        "boxShadow": "inset 0 -10px 10px -10px #000000"
    },
    "featured-carousel card": {
        "backgroundColor": "#eee",
        "marginLeft": 10,
        "height": 300,
        "width": 170,
        "border": "2px solid #eee",
        "textAlign": "center"
    },
    "craousel-featured": {
        "marginLeft": 10,
        "marginRight": 10
    },
    "craousel-featured h4 strong": {
        "color": "#d70004"
    },
    "featured-carousel card h4": {
        "color": "#d70004",
        "fontSize": 12
    },
    "featured-carousel card:hover": {
        "backgroundColor": "#d70004",
        "border": "2px solid #d70004",
        "color": "white"
    },
    "second-container": {
        "textAlign": "center"
    },
    "second-container p": {
        "color": "#444444"
    },
    "second-container second-pane": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "second-container second-pane h4": {
        "fontWeight": "normal"
    },
    "second-container second-pane icon-small": {
        "height": 85,
        "width": 85,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto",
        "borderRadius": "50%",
        "border": "solid 2px #d70004",
        "alignItems": "center",
        "alignContent": "center",
        "backgroundColor": "#d70004"
    },
    "icon-main": {
        "marginTop": "25%",
        "marginRight": "auto",
        "marginBottom": "25%",
        "marginLeft": "auto",
        "color": "#fff",
        "fontSize": "40px !important"
    },
    "out-clients": {
        "marginLeft": "10px !important",
        "marginRight": "10px !important",
        "textTransform": "uppercase"
    },
    "manufactures-section-list": {
        "marginLeft": "0px !important",
        "marginRight": "0px !important"
    },
    "footer-1": {
        "marginTop": 20,
        "paddingTop": 10,
        "backgroundColor": "#242424",
        "borderTop": "1px solid #ddd",
        "color": "#777",
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "footer-1 h4": {
        "fontSize": 16,
        "color": "#fff",
        "fontWeight": "normal",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 18,
        "marginLeft": 0
    },
    "footer-1 logo": {
        "marginTop": 10,
        "width": 120
    },
    "footer-1 nav-list": {
        "color": "#fff",
        "listStyleType": "none",
        "paddingTop": 5,
        "paddingRight": "!important",
        "paddingBottom": 5,
        "paddingLeft": "!important"
    },
    "footer-1 nav-list li": {
        "paddingTop": "10px !important"
    },
    "footer-1 nav-list ::before": {
        "content": " > "
    },
    "footer-1 posts post a": {
        "textIndent": 15,
        "color": "#fff"
    },
    "footer-1 posts post a:hover": {
        "color": "#999"
    },
    "footer-1 posts post": {
        "overflow": "hidden",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderBottom": "1px dotted #333",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "footer-1 posts post:last-child": {
        "borderBottom": "none"
    },
    "footer-1 social-icons": {
        "marginTop": 0,
        "marginRight": "20%",
        "marginBottom": 0,
        "marginLeft": "20%"
    },
    "footer-1 social-icons social-logo i": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "fontSize": 20,
        "transition": "all .2s ease-in-out"
    },
    "footer-1 social-icons social-logo i:hover": {
        "transform": "scale(1.8)"
    },
    "footer-2": {
        "backgroundColor": "#111111",
        "color": "#fff",
        "fontSize": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textTransform": "uppercase"
    }
});