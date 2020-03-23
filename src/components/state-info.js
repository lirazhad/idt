import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { observer, inject } from "mobx-react"
import { STATE_INFO, DETAIL_OBJECT, COLOR } from '../constant'

@inject('store')
@observer
export class StateInfo extends React.Component {

    createCountiesView = (county, i) => <View 
    key={i}
    style={styles.countyContainerItem}>
        <Text style={styles.itemTextStyle}>{county[DETAIL_OBJECT.COUNTY]}</Text>
    </View>

    checkSumOfCountyPopulationAgainstState = (county, state) => {
        if(county === state){
            return STATE_INFO.COUNIES_EQUAL_POPULATION
        }else{
            return STATE_INFO.COUNIES_NOT_EQUAL_POPULATION
        }
    }
    render(){
        const { store } = this.props
        let sumOfPopulations = 0

                return(
                    <View style={styles.container}>
                       <ScrollView>
                        <View style={styles.headline}>
                            <Text style={styles.textHeadlineStyle}>{store.stateName && store.stateName}</Text>
                        </View>

                        <View style={styles.sectionStyle}>
                            <Text style={styles.textStyle}>{store.statePopulation && STATE_INFO.POPULATION +store.statePopulation}</Text>
                        </View>

                        <View style={styles.sectionStyle}>  
                            <Text style={styles.textStyle}>{store.stateCounties && STATE_INFO.STATE_COUNTIES+store.stateCounties}</Text>
                        </View>

                        <View style={styles.countyList}>
                            {    
                                store.currentStateDetail.map((county, i) => {   
                                    sumOfPopulations += county[DETAIL_OBJECT.POPULATION]                           
                                    return  this.createCountiesView(county, i)
                                })
                            }
                        </View>

                        <View style={styles.sectionStyle}>  
                            <Text style={styles.textStyle}>{sumOfPopulations > 0 && STATE_INFO.SUM_OF_POPULATION + sumOfPopulations}</Text>
                        </View>

                        <View style={styles.sectionStyle}>    
                            <Text style={styles.textStyle}>{sumOfPopulations > 0 && this.checkSumOfCountyPopulationAgainstState(sumOfPopulations, store.statePopulation) }</Text>
                        </View>  
                        </ScrollView> 
                    </View>
                )
    }
       
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headline:{
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 6,
    },
    textHeadlineStyle: {
        fontSize: 18,
        color: COLOR.DARK_RED 
     },
    textStyle: {
       fontSize: 14, 
       color: COLOR.DARK_RED
    },
    itemTextStyle: {
        fontSize: 12, 
        color: COLOR.OFF_WHITE
     },
    countyList: {
        flexDirection: 'column', 
        flex: 1 
    },
    countyContainerItem: {
        height: 40, 
        margin: 6, 
        borderRadius: 4,
        backgroundColor: COLOR.DARK_RED,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    sectionStyle: {
        margin: 8
    }
  })

  