/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import InputComponent from '../Input';

const HomeComponent = () => {
    const [state, setState] = useState({
        owner: '',
        repository: ''
    });

    const handleChange = (newValue, name) => {
        setState(prevState => {
            return {
                ...prevState,
                [name]: newValue
            }
        })
    };

    return (
        <View>
            <InputComponent
                placeholder='Github owner'
                value={state.owner}
                name='owner'
                handleChange={handleChange} />
            <View style={StyleSheet.repositoryInput}>
                <InputComponent
                    placeholder='Repository name'
                    value={state.repository}
                    name='repository'
                    handleChange={handleChange} />
            </View>
            <Button title='Submit' disabled={!state.owner || state.repository} />
        </View>
    )
}

export default HomeComponent;