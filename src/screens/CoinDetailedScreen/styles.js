import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    currentPrice: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "600", 
        letterSpacing: 1,
    },
    name: {
        color: "white", 
        fontSize: 15,
    },
    priceContainer:{
        padding: 15, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
    },
    priceChange:{
        color:"white", 
        fontSize: 17, 
        fontWeight: "500",
    },
    // grafico-test
    container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#121212"
	},
	title: {
        color: "white",
		fontSize: 20,
		fontWeight: "bold",
		margin: 10
	},
	timeWrapper: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},

	coins: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},
	time: {
        color: "white",
		margin: 10
	},
	header: {
        color: "white",
		position: "absolute",
		top: 50,
		fontSize: 30,
		fontWeight: "bold",
		textDecorationLine: "underline",
		letterSpacing: 1,
	},
	underline: { 
        textDecorationLine: "underline" 
    },

});

export default styles;