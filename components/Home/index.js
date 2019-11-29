import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {withRouter} from 'react-router';

import InputComponent from '../Input';

const HomeComponent = props => {
  const [state, setState] = useState({
    owner: '',
    repository: '',
  });

  const handleChange = (newValue, name) => {
    setState(prevState => {
      return {
        ...prevState,
        [name]: newValue,
      };
    });
  };

  const handleButtonPress = async () => {
    const {owner, repository} = state;

    props.history.push({
      pathname: '/commits',
      state: {
        owner,
        repository,
      },
    });
  };

  return (
    <View>
      <InputComponent
        placeholder="Github owner"
        value={state.owner}
        name="owner"
        handleChange={handleChange}
      />
      <View style={StyleSheet.repositoryInput}>
        <InputComponent
          placeholder="Repository name"
          value={state.repository}
          name="repository"
          handleChange={handleChange}
        />
      </View>
      <Button
        title="Submit"
        onPress={handleButtonPress}
        disabled={!state.owner || !state.repository}
      />
    </View>
  );
};

export default withRouter(HomeComponent);
