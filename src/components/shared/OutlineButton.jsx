import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import { Button } from "react-native-paper";

const OutlineButton = ({ children }) => {
	const theme = useTheme();
	const styles = createStyles(theme);
	return (
		<Button mode="outlined" textColor={theme.colors.R_accent} style={styles.outlineButton}>
			{children}
		</Button>
	);
};

export default OutlineButton;

const createStyles = (theme) =>
	StyleSheet.create({
		outlineButton: {
			borderColor: theme.colors.R_accent,
			borderWidth: 1,
			borderRadius: theme.sizes.md,
		},
	});
