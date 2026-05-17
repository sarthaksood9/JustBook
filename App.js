import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './context/UserContext';
import SemiApp from './SemiApp';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
    return (
        <ErrorBoundary>
            <SafeAreaProvider>
                <UserProvider>
                    <SemiApp />
                </UserProvider>
            </SafeAreaProvider>
        </ErrorBoundary>
    );
}


