import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen} from '../screens/main-screen'
import { observer, Provider } from "mobx-react"
import { Store } from '../logic/store'

const store = window.store = new Store()
 // define screens
 const MainScreenComponent = () =>
 <MainScreen/>

@observer
export class RootNavigator extends React.Component{

    componentDidMount(){
        store.fetchData()
    }


  render(){
  return (
    <NavigationContainer >
        <Provider store={store}>
        <MainScreenComponent/>
        </Provider>
      {/* {store.state === REQUEST_STATE_PANDDING?
        <ActivityIndicator size="large" style={styles.loader}/>
        : null
       } */}

    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute', 
    bottom: 150, 
    zIndex: 99, 
    width: '100%'
  }
});