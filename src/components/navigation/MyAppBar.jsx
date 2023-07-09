import { Appbar, Text } from "react-native-paper";
import { getHeaderTitle, useHeaderHeight, HeaderBackButton } from "@react-navigation/elements";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../shared/Logo";
import { Ionicons } from "@expo/vector-icons";

export default function MyAppBar({ navigation, route, options, back }) {
	const title = getHeaderTitle(options, route.name);
	const theme = useTheme();
	const height = useHeaderHeight();
	const { top, bottom, left, right } = useSafeAreaInsets();
	console.log(top, bottom, left, right);
	return (
		<LinearGradient
			style={styles.appBar}
			colors={["#EEA657", "#EA674B"]}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 1 }}
			locations={[0, 1]}>
			<View
				style={[
					styles.container,
					{
						paddingTop: top,
						paddingBottom: bottom,
						paddingLeft: left + 10,
						paddingRight: right + 10,
					},
				]}>
				<View style={styles.buttonsContainer}>
					{back ? (
						<Pressable onPress={() => navigation.openDrawer()}>
							<LinearGradient
								style={styles.iconBackButton}
								colors={["#EA674B", "#EEA657"]}
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 1 }}
								locations={[0, 1]}>
								<Ionicons name="arrow-back" size={28} color={theme.colors.background} />
							</LinearGradient>
						</Pressable>
					) : null}
					<Pressable onPress={() => navigation.openDrawer()}>
						<View style={styles.iconButton}>
							<Ionicons name="menu-outline" size={32} color={theme.colors.background} />
						</View>
					</Pressable>
				</View>
				<View style={styles.logoContainer}>
					<Logo />
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = ScaledSheet.create({
	appBar: {
		height: "120@vs",
	},

	container: {
		flex: 1,
	},
	logoContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 12,
	},
	buttonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	iconButton: {
		// alignSelf: "flex-end",
	},
	iconBackButton: {
		// back,
		width: 36,
		height: 36,
		borderRadius: 20,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		elevation: 4,
	},
});
