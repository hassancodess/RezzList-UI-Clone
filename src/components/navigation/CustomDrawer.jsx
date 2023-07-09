import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Logo from "../shared/Logo";
import { LinearGradient } from "expo-linear-gradient";
import { ScaledSheet } from "react-native-size-matters";

const CustomDrawer = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				style={styles.drawerContainer}
				colors={["#EEA657", "#EA674B"]}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 1 }}
				locations={[0, 1]}>
				<DrawerContentScrollView {...props} contentContainerStyle={styles.logoContainer}>
					<Logo />
				</DrawerContentScrollView>
			</LinearGradient>
			<DrawerContentScrollView>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
		</View>
	);
};

export default CustomDrawer;

const styles = ScaledSheet.create({
	drawerContainer: {
		height: "250@vs",
	},
	logoContainer: {
		alignItems: "center",
		justifyContent: "center",
		height: "90%",
	},
});

// import { ScaledSheet } from 'react-native-size-matters';
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Drawer } from 'react-native-paper';
// import { LinearGradient } from 'expo-linear-gradient';
// import {
//     DrawerContentScrollView,
//     DrawerItemList,
// } from '@react-navigation/drawer';
// import Logo from '../shared/Logo';

// const CustomDrawer = (props) => {

//     const [active, setActive] = React.useState('');

//     return (
//         <>
//             <LinearGradient
//                 style={styles.drawerContainer}
//                 colors={['#EEA657', '#EA674B']}
//                 start={{ x: 0, y: 1 }}
//                 end={{ x: 1, y: 1 }}
//                 locations={[0, 1]}>
//                 <DrawerContentScrollView
//                     {...props}
//                     contentContainerStyle={styles.logoContainer}
//                 >
//                     <Logo />
//                 </DrawerContentScrollView>
//             </LinearGradient>

//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Home"
//                 active={active === 'first'}
//                 icon="star"
//                 onPress={() => setActive('first')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Profile"
//                 active={active === 'second'}
//                 icon="account"
//                 onPress={() => setActive('second')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Get In Touch"
//                 icon="whatsapp"

//                 active={active === 'third'}
//                 onPress={() => setActive('third')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Payment Details"
//                 icon="cash-register"
//                 active={active === 'fourth'}
//                 onPress={() => setActive('fourth')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="My Earnings"
//                 icon="cash-multiple"
//                 active={active === 'fifth'}
//                 onPress={() => setActive('fifth')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Who We Are"
//                 icon="account-group"
//                 active={active === 'sixth'}
//                 onPress={() => setActive('sixth')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Notification"
//                 icon="bell"
//                 active={active === 'seventh'}
//                 onPress={() => setActive('seventh')}
//             />
//             <Drawer.Item
//                 style={styles.drawerItem}
//                 label="Logout"
//                 icon="logout"
//                 active={active === 'eight'}
//                 onPress={() => setActive('eight')}
//             />
//         </>
//     )
// }

// export default CustomDrawer

// const styles = ScaledSheet.create({
//     drawerContainer: {
//         height: '250@vs',
//     },
//     drawerItem: {
//         borderRadius: 4
//     },
//     logoContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: "90%"
//     }
// })
