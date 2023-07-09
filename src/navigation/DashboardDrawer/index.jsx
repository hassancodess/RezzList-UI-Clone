import React from "react";
// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
const { Navigator, Screen } = createDrawerNavigator();
// Screens
import {
	Home,
	GetInTouch,
	MyEarnings,
	Notifications,
	PaymentDetails,
	Profile,
	Settings,
	WhoWeAre,
	Logout,
} from "../../screens/Dashboard";
import CustomDrawer from "../../components/navigation/CustomDrawer";
// Icons
import Ionicons from "@expo/vector-icons/Ionicons";
// Theme
import { useTheme } from "react-native-paper";
import CustomAppBar from "../../components/navigation/CustomAppBar";
import MyAppBar from "../../components/navigation/MyAppBar";

const icons = {
	Home: { icon: "home-outline", color: "#0C80D4" },
	Profile: { icon: "person-outline", color: "#E36700" },
	Settings: { icon: "settings-outline", color: "#AC57EE" },
	GetInTouch: { icon: "logo-whatsapp", color: "#0A7900" },
	PaymentDetails: { icon: "card-outline", color: "#714F86" },
	MyEarnings: { icon: "cash-outline", color: "#00A3FF" },
	WhoWeAre: { icon: "people-outline", color: "#FF9900" },
	Notifications: { icon: "notifications-outline", color: "#353535" },
	Logout: { icon: "log-out-outline", color: "#C20C0C" },
};

const DashboardNavigator = () => {
	const theme = useTheme();
	return (
		<Navigator
			initialRouteName="Home"
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={({ route }) => ({
				// header: (props) => <CustomAppBar {...props} />,
				header: (props) => <MyAppBar {...props} />,
				drawerActiveBackgroundColor: theme.colors.R_secondary,
				drawerActiveTintColor: theme.colors.R_dark,
				drawerIcon: ({ focused, size }) => (
					<Ionicons name={icons[route.name].icon} size={size} color={icons[route.name].color} />
				),
			})}>
			<Screen name="Home" component={Home} />
			<Screen name="Profile" component={Profile} />
			<Screen name="Settings" component={Settings} />
			<Screen name="GetInTouch" component={GetInTouch} />
			<Screen name="PaymentDetails" component={PaymentDetails} />
			<Screen name="MyEarnings" component={MyEarnings} />
			<Screen name="WhoWeAre" component={WhoWeAre} />
			<Screen name="Notifications" component={Notifications} />
			<Screen name="Logout" component={Logout} />
		</Navigator>
	);
};

export default DashboardNavigator;
