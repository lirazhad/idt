import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StateItem } from './state-item'
import { observer } from "mobx-react"

@observer
export class StateList extends React.Component {
   
    render(){
        const { onStatePress, data, setStateName, filter } = this.props

        return(
        <FlatList
            data={data.toJS()}
            renderItem={(stateObj) => {

                return(
                    <View style={styles.container}> 
                     <StateItem 
                        stateItem={stateObj.item} 
                        onStatePress={onStatePress}
                        setStateName={setStateName}/>   
                    </View>
                )
                }
            }
            keyExtractor={(item, index) => index.toString()}
            />)
    }
       
}

const styles = StyleSheet.create({
    container: {
    },
    fieldStyle: {
    }
  })