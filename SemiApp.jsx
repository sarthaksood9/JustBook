import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import store from './redux/WishList/store';
import { SafeAreaView } from 'react-native';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import BottomNav from './components/BottomNav';
import AdminBottomNav from './components/AdminBottomNav';
import { UserContext } from './context/UserContext';

export default function SemiApp() {
    const { user, loading } = useContext(UserContext);

    const isAdminUser = user?.profile?.role === 'admin';

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.loadingContainer}>
                    {/* Loading indicator can be added here */}
                </View>
            </SafeAreaView>
        );
    }

    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer independent={true}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <View style={styles.container}>
                        {!isAdminUser ? (
                            <>
                                <UserRoutes />
                                <BottomNav />
                            </>
                        ) : (
                            <>
                                <AdminRoutes />
                                <AdminBottomNav />
                            </>
                        )}
                    </View>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

