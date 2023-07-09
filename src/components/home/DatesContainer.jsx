import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SingleDate from "./SingleDate";
import { ScaledSheet } from "react-native-size-matters";

const DatesContainer = ({ dates }) => {
	const renderItem = ({ item }) => {
		return <SingleDate item={item} />;
	};
	return (
		<FlatList
			scrollEnabled
			contentContainerStyle={styles.datesContainer}
			horizontal
			data={dates}
			keyExtractor={(item, index) => index.toString()}
			renderItem={renderItem}
		/>
	);
};

export default DatesContainer;

const styles = ScaledSheet.create({
	datesContainer: {
		flexDirection: "row",
		alignItems: "flex-start",
		marginVertical: "10@vs",
		gap: 10,
	},
});
