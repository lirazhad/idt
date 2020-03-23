import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { StateList } from '../components/state-list'
import { StateInfo } from '../components/state-info'
import { SearchHeader } from '../components/search-header'
import { inject } from "mobx-react"

@inject('store')
export class MainScreen extends React.Component {

    render(){
        const { store } = this.props; 
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.searchHeader}>
                    <SearchHeader 
                    onChangeText={store.onChangeText} 
                    searchHeaderTextInput={store.searchHeaderTextInput}/>
                </View>
                <View style={styles.baseContainer}>
                    <View style={styles.listContainer}>
                       <StateList 
                        data={store.states}
                        onStatePress={store.onStatePress}
                        setStateName={store.setStateName}
                        />
                    </View>

                    <View  style={styles.listContainer}>
                    <StateList 
                        data={store.filteredStates}
                        onStatePress={store.onStatePress}
                        setStateName={store.setStateName}
                        />
                    </View>

                    <View  style={styles.infoContainer}>
                    <StateInfo/>
                    </View>
                </View>
             </SafeAreaView> 
          )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column', 
        flex: 1,
        marginBottom: 96
    },
    searchHeader: {
        width: '100%', 
        height: 90
    },
    baseContainer: {
        flexDirection: 'row', 
        width: '100%'
    },
    listContainer:{
        flex: 1
    },
    infoContainer: {
        flex: 2
    },
    textStyle: {
       fontSize: 16,
    }
  })