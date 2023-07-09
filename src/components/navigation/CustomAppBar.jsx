import { Appbar, Searchbar } from "react-native-paper";
import { getHeaderTitle, useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";
import { useState } from "react";

export default function CustomAppBar({ navigation, route, options, back }) {
	const title = getHeaderTitle(options, route.name);
	const theme = useTheme();
	const [searchQuery, setSearchQuery] = useState("");

	const onChangeSearch = (query) => setSearchQuery(query);
	return (
		<>
			<Appbar.Header>
				<Appbar.Action
					icon={"menu"}
					onPress={() => navigation.openDrawer()}
					color={theme.colors.background}
				/>
				<Appbar.Content title={title} color={theme.colors.background} />
			</Appbar.Header>
		</>
	);
}

const styles = ScaledSheet.create({
	//   drawerContainer: {
	//     height: "250@vs",
	//   },
	logoContainer: {
		alignItems: "center",
		justifyContent: "center",
		height: "90%",
	},
	searchbar: {
		marginVertical: 10,
	},
});
