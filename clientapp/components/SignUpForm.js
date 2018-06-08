import React from 'react';
import {View, Text} from 'react-native';
import {FormInput, FormLabel, Button} from 'react-native-elements';

export default class SignUpForm extends React.Component {
	state = {phoen: ''};

	handleSubmit = () => {

	}

	render() {
		return (
			<View>
				<View style={{ marginBottom: 10}}>
					<FormLabel>Enter Phone Number</FormLabel>
					<FormInput 
						value={this.state.phone}
						onChangeText={phone => this.setState({phone})}
					/>
				</View>
				<Button title="Submit" 
					onPress={this.handleSubmit}
				/>
			</View>
		);
	}
}