import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    resetError = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <View style={styles.container}>
                    <View style={styles.errorBox}>
                        <Text style={styles.errorTitle}>Something went wrong</Text>
                        <Text style={styles.errorMessage}>
                            {this.state.error?.toString() || 'An unexpected error occurred'}
                        </Text>

                        {__DEV__ && (
                            <Text style={styles.errorDetails}>
                                {this.state.errorInfo?.componentStack}
                            </Text>
                        )}

                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.resetError}
                        >
                            <Text style={styles.buttonText}>Try Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    errorBox: {
        backgroundColor: '#ffebee',
        borderRadius: 12,
        padding: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#d32f2f',
        width: '100%',
    },
    errorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d32f2f',
        marginBottom: 10,
    },
    errorMessage: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        lineHeight: 20,
    },
    errorDetails: {
        fontSize: 12,
        color: '#666',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 4,
        marginBottom: 15,
        fontFamily: 'monospace',
    },
    button: {
        backgroundColor: '#1976d2',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ErrorBoundary;
