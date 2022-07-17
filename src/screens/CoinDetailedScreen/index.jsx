import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { VictoryLine } from 'victory-native';
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


export default function App() {
  	const [ data, setData ] = useState()
	const [ coinAPI, setCoin ] = useState("bitcoin")
	const [ period, setPeriod ] = useState(30)
	
	const navigation = useNavigation();
	const route = useRoute();
	const {params: {coin}} = route;
	console.log(route)
	
	useEffect(
		() => {
			getData()
		},
		[ coin, period ]
	)

	async function getData() {
		try {
			const response = await axios.get(
				`https://api.coingecko.com/api/v3/coins/${coinAPI}/market_chart?vs_currency=usd&days=${period}`
			)
			const formatData = response.data.prices.map(function(i) {
				return {
					x: i[0],
					y: i[1]
				}
			})
			setData(formatData)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Gráfico Crypto</Text>
			<Text style={{color:"white"}}>Bitcoin</Text>
			<VictoryLine
				style={{
					data: {
						stroke: "white",
						strokeWidth: 2
					}
				}}
				width={400}
				height={200}
				data={data}
			/>
			<View style={styles.timeWrapper}>
				<Text style={[ styles.time, period === 1 ? styles.underline : null ]} onPress={() => setPeriod(1)}>
					1 Día
				</Text>
				<Text style={[ styles.time, period === 7 ? styles.underline : null ]} onPress={() => setPeriod(7)}>
					1 Semana
				</Text>
				<Text style={[ styles.time, period === 30 ? styles.underline : null ]} onPress={() => setPeriod(30)}>
					1 Mes
				</Text>
			</View>
			<View style={{padding: 30}}>
				<Ionicons 
				name="ios-chevron-back-sharp" 
				size={30} 
				color="white" 
				onPress={() => navigation.goBack()}
			/>
			</View>
		</View>
	)
}
