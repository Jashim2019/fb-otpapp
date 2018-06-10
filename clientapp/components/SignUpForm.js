import React from 'react';
import {View, Text} from 'react-native';
import {FormInput, FormLabel, Button} from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-reactnative-otpapp.cloudfunctions.net';
const CREATE_USER_REQ_URL = `${ROOT_URL}/createUser`;
const REQUEST_OTP_URL = `${ROOT_URL}/requestOTP`;

export default class SignUpForm extends React.Component {
	state = {phone: ''};

	handleSubmit = async () => {
		try {
			await axios.post(CREATE_USER_REQ_URL, {phone: this.state.phone});
			
			await axios.post(REQUEST_OTP_URL, {phone: this.state.phone});
		} catch (err) {
			console.log(err);
		}
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