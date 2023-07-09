import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { ScaledSheet } from "react-native-size-matters";
import { useTheme } from "react-native-paper";
// import { theme } from "../../theme/paperTheme";

const SingleDate = ({ item }) => {
	const theme = useTheme();
	const styles = useMemo(() => createStyles(theme), [theme]);

	return (
		<View style={styles.dateContainer}>
			<Text style={[styles.dayText, item.active && styles.dateActive]}>{item.day}</Text>
			<Text style={[styles.dateText, item.active && styles.dateActive]}>{item.date}</Text>
		</View>
	);
};

export default SingleDate;

const createStyles = (theme) =>
	ScaledSheet.create({
		dateContainer: {
			paddingHorizontal: "10@vs",
			paddingVertical: "15@vs",
			borderColor: theme.colors.R_primary,
			borderWidth: 1,
			borderRadius: 10,
			alignItems: "center",
		},
		dateActive: {
			color: theme.colors.R_primary,
			fontSize: theme.sizes.xl,
		},
		dayText: {
			// fontFamily: theme.fonts.
		},
		dateText: {
			fontSize: theme.sizes.lg,
		},
	});
