import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import Carousel from "pinar";
import { Image } from "expo-image";
import { ScaledSheet } from "react-native-size-matters";
import { useTheme } from "react-native-paper";
import { Avatar } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ReservationCard = ({ reservation }) => {
	const theme = useTheme();
	const styles = useMemo(() => createStyles(theme), [theme]);
	return (
		<View>
			<View style={styles.carouselContainer}>
				<Carousel
					showsControls={false}

					// dotsContainerStyle={{ backgroundColor: "green" }}
					// activeDotStyle={{ backgroundColor: "red" }}
				>
					<Image
						style={{ height: "100%", width: "100%", backgroundColor: "red" }}
						source={reservation.images[0]}
						placeholder={blurhash}
						contentFit="cover"
						transition={1000}
					/>

					<Image
						style={{ height: "100%", width: "100%", backgroundColor: "red" }}
						source={reservation.images[1]}
						placeholder={blurhash}
						contentFit="cover"
						transition={1000}
					/>
					<Image
						style={{ height: "100%", width: "100%", backgroundColor: "red" }}
						source={reservation.images[2]}
						placeholder={blurhash}
						contentFit="cover"
						transition={1000}
					/>
				</Carousel>
			</View>
			{/* <Image /> */}
			<View style={styles.avatarContainer}>
				<View style={styles.avatarImage}>
					<Avatar.Image size={28} source={reservation.avatar} />
				</View>
				<Text style={styles.avatarText}>{reservation.avatarLabel}</Text>
			</View>
			<View style={styles.locationContainer}>
				<View style={styles.locationIcon}>
					<Ionicons name="location-outline" size={18} color={theme.colors.surface} />
					{/* <Avatar.Image size={28} source={reservation.} /> */}
				</View>
				<Text style={styles.locationText}>{reservation.location}</Text>
			</View>
		</View>
	);
};

export default ReservationCard;

const createStyles = (theme) =>
	ScaledSheet.create({
		container: {},
		carouselContainer: {
			height: "150@vs",
			width: "100%",
			borderRadius: 20,
			overflow: "hidden",
		},
		avatarContainer: {
			position: "absolute",
			left: 10,
			top: 10,
			flexDirection: "row",
			// justifyContent: "center",
			alignItems: "center",
			gap: 5,
		},
		avatarImage: {
			borderColor: theme.colors.surface,
			borderWidth: 2,
			borderRadius: 100,
		},
		avatarText: {
			fontSize: theme.sizes.lg,
			color: theme.colors.surface,
		},
		locationContainer: {
			// backgroundColor: "red",
			position: "absolute",
			// left: 0,
			bottom: 5,
			// right: 0,
			// top: 0,
			flexDirection: "row",
			// ÷justifyContent: "cen",
			// width: "100%",
			// alignItems: "flex-end",
			alignSelf: "center",
			// justifyContent: "center",
			gap: 5,
		},
		locationButton: {},
		locationText: {
			fontSize: theme.sizes.md,
			color: theme.colors.surface,
		},
		overlay: {
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			backgroundColor: theme.colors.R_dark,
			opacity: 0.2,
		},
	});
