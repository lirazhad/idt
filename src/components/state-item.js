import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import DoubleClick  from 'react-native-double-tap'
import { SCREEN_WIDTH } from '../constant'
import { observer } from "mobx-react"

@observer
export class StateItem extends React.Component {

    constructor(props){
        super(props)

        this.state={
            selected: false
        }
    }

    render(){

        const { stateItem, onStatePress, setStateName } = this.props
                return(
                    <View style={styles.container}>
                       <View style={[styles.item, {backgroundColor: this.state.selected? 'red': 'transparent'}]}>
                        <ScrollView horizontal >
                            <DoubleClick 
                            singleTap={()=>{
                                setStateName(stateItem)
                                onStatePress(stateItem.detail)}}
                            doubleTap={()=>{this.setState({selected: !this.state.selected})}}> 
                                    <View style={styles.itemText}>
                                        <Text style={styles.textStyle}>{stateItem.state}</Text>
                                    </View>
                            </DoubleClick>
                         </ScrollView>
                       </View> 
                    </View>
                )
    }
       
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH/4 , 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 3,
        padding: 8
    },
    item: {
        borderWidth: 1,
        borderRadius: 4,
        width: '100%',
        padding: 4
    },
    itemText:{
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%'
    },
    textStyle: {
       fontSize: 16,
    }
  })