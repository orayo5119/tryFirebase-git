import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
                style={styles.input}
				value={value}
				autoCorrect={false}
				onChangeText={onChangeText}
				placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize='none'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		width: '100%',
        borderColor: '#eee',
        borderBottomWidth: 2,
	},
	label: {
		paddingBottom: 5,
		color: '#333',
		fontSize: 22,
		fontWeight: '700',
		width: '100%'
	},
	input: {
		//paddingHorizontal: 5,
		paddingBottom: 5,
		color: '#333',
		fontSize: 20,
		fontWeight: '700',
		width: '100%'
	}
});

export { Input };
