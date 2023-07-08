import {
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
    MD2LightTheme,
} from 'react-native-paper';

export const theme = {
    ...MD2LightTheme,
    ...NavigationDefaultTheme,
    colors: {
        ...MD2LightTheme.colors,
        ...NavigationDefaultTheme.colors,
        R_primary: "rgba(255, 153, 0, 1)",
        R_accent: "#EA674B",
        R_secondary: "rgba(217, 217, 217, 0.09)",
        R_dark: "rgba(43, 43, 43, 1)"
    },
};