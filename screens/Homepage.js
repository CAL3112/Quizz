import * as React from 'react';
import {Button, View, SafeAreaView, TextInput, Text} from 'react-native';
import {styles} from '../core/styles';

class Homepage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        pseudo:""
      }
      
    }
    render(){
      const {navigate} = this.props.navigation;

      return(
        <SafeAreaView style={styles.container}>
            <View>
            <View>
                <Text style={styles.titre}>Entrez votre pseudo pour commencer le Quizz</Text>
            </View>
            <TextInput
                    label="Pseudo"
                    returnKeyType="done"
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, borderRadius: 5}}
                    value={this.state.pseudo}
                    onChangeText={text => this.setState({pseudo: text})}
                    autoCapitalize="none"
                    placeholder="Pseudo"
                    />
            <View style={styles.bouton}>
              <Button
                title="Jouer"
                color= "royalblue"
                onPress={() => navigate('Quizz')}
              />
              </View>
             </View>
          </SafeAreaView>
      )
    }
  
  }
  
  export default Homepage;