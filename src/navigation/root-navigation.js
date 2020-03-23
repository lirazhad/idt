import * as React from 'react';
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
    </NavigationContainer>
  );
}
}

