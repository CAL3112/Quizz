import * as React from 'react';
import {Button, View, SafeAreaView, TextInput, Text} from 'react-native';
import {styles} from '../core/styles';

class Resultats extends React.Component {
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
    render(){
      const {navigate} = this.props.navigation;

      return(
        <SafeAreaView style={styles.container}>
            <View>
            <View>
                <Text style={styles.titre}>Résultats du Quizz</Text>
                <Text>C'est terminé votre score est de : {this.state.score} / 3</Text>
            </View>
            
            <View style={styles.bouton}>
              <Button
                title="Rejouer"
                color= "royalblue"
                onPress={() => navigate('Quizz')}
              />
              </View>
             </View>
          </SafeAreaView>
      )
    }
  
  }
  
  export default Resultats;