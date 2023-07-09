import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ReservationCard from "./ReservationCard";
import { FlatList } from "react-native-gesture-handler";

const ReservationsList = ({ data }) => {
	const renderItem = ({ item }) => {
		return <ReservationCard reservation={item} />;
	};
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={data}
			keyExtractor={(item, index) => index.toString()}
			renderItem={renderItem}
		/>
	);
};

export default ReservationsList;

const styles = StyleSheet.create({
	container: {
		gap: 10,
		// flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// marginBottom: 100,
	},
});
