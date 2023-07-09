import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ScaledSheet } from "react-native-size-matters";
import { Text, Searchbar, useTheme, IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import DatesContainer from "../../components/home/DatesContainer";
import { DATES } from "../../data/dates";
import OutlineButton from "../../components/shared/OutlineButton";
import Container from "../../components/shared/Container";

const Home = () => {
	const theme = useTheme();
	const styles = useMemo(() => createStyles(theme), [theme]);

	const [searchQuery, setSearchQuery] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState();
	// theme.colors.surface
	const onChangeSearch = (query) => setSearchQuery(query);
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.homeContainer}
				colors={["#EEA657", "#EA674B"]}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
				locations={[0, 1]}>
				{/* SearchBar */}
				<View style={styles.searchBarFlexContainer}>
					<Searchbar
						style={styles.searchBar}
						placeholder="Search"
						onChangeText={onChangeSearch}
						value={searchQuery}
						right={() => <Ionicons name="arrow-back" size={22} />}
					/>
					{/* Filter Icon */}
					<IconButton
						style={styles.searchFilterIcon}
						icon="filter-variant"
						iconColor={theme.colors.onBackground}
						size={22}
						onPress={() => console.log("modal open")}
					/>
				</View>
				{/* Dropdown & Available Reservations */}
				<View style={styles.flexContainer}>
					<View style={styles.dropdownContainer}>
						<Picker
							style={styles.dropdown}
							itemStyle={styles.pickerItem}
							mode="dropdown"
							dropdownIconColor={theme.colors.background}
							selectedValue={selectedLanguage}
							onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
							<Picker.Item label="Java" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
					</View>
					<Text style={styles.text}>Available Resrvations</Text>
				</View>
			</LinearGradient>
			{/* Dates */}
			<Container>
				<View>
					<DatesContainer dates={DATES} />
				</View>
				{/* Button */}
				<View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
					<OutlineButton>Create Reservation </OutlineButton>
				</View>
				{/* Cards */}
			</Container>
		</View>
	);
};

export default Home;

const createStyles = (theme) =>
	ScaledSheet.create({
		container: {
			flex: 1,
		},
		homeContainer: {
			height: "120@vs",
			paddingHorizontal: "20@vs",
			justifyContent: "space-around",
		},
		flexContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
		searchBarFlexContainer: {
			flexDirection: "row",
			alignItems: "center",
		},
		searchBar: {
			borderRadius: 200,
			alignSelf: "stretch",
			width: "100%",
		},
		searchFilterIcon: {
			position: "absolute",
			right: 10,
		},
		dropdownContainer: {
			borderColor: theme.colors.surface,
			borderWidth: 2,
			borderRadius: 5,
			height: "35@vs",
			width: "130@vs",
			alignItems: "center",
			justifyContent: "center",
		},
		dropdown: {
			height: "100%",
			width: "100%",
			color: theme.colors.surface,
			overflow: "hidden",
		},
		pickerItem: {
			color: theme.colors.R_primary,
		},
		text: {
			fontSize: 16,
			color: theme.colors.surface,
		},
	});
