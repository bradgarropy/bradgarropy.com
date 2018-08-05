import Typography from "typography"
import grandView from "typography-theme-grand-view"


const overrideStyles = () => {

    const style = {
        li: {
            marginBottom: 0,
        },
        a: {
            color: "#47A8BD",
            textDecoration: "none",
        },
        "a:hover": {
            color: "#FF9770",
        },
    }

    return style

}


// overrides
grandView.bodyFontFamily = [
    "Open Sans",
    "sans-serif",
]

grandView.googleFonts = [
    {
        name: "Montserrat",
        styles: [
            "400",
            "500",
            "600",
            "700",
        ],
    },
    {
        name: "Open Sans",
        styles: [
            "400",
            "400i",
            "700",
            "700i",
        ],
    },
]

grandView.overrideStyles = overrideStyles


const typography = new Typography(grandView)


// exports
export default typography
