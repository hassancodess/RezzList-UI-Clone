import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';


export default function CustomAppBar({ navigation, route, options, back }) {
    const title = getHeaderTitle(options, route.name);
    const theme = useTheme()
    // colors={['#EEA657', '#EA674B']}
    // </LinearGradient>
    return (
        <Appbar.Header style={{ backgroundColor: theme.colors.R_accent }}>
            <Appbar.Action icon={'menu'} onPress={() => navigation.openDrawer()} color={theme.colors.background} />
            <Appbar.Content title={title} color={theme.colors.background} />
        </Appbar.Header>
    );
}