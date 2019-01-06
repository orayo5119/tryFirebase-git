import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				value={value}
				autoCorrect={false}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
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
		//padding: 5,
		paddingBottom: 0,
		color: '#333',
		fontSize: 17,
		fontWeight: '700',
		width: '100%'
	},
	input: {
		paddingHorizontal: 5,
		paddingBottom: 5,
		color: '#333',
		fontSize: 18,
		fontWeight: '700',
		width: '100%'
	}
});

export { Input };
