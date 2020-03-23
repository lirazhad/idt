import { observable, action } from 'mobx'
import { getStates, getStateDetail } from '../api/data'

export class Store {
// states
states = observable([])
filteredStates = observable([])
// state detail
@observable currentStateDetail = []
@observable stateName = ''
@observable statePopulation = ''
@observable stateCounties = ''
// search header
@observable  searchHeaderTextInput
//activity indecator
@observable  activityIndecator = false
// actions
    @action onChangeFilterTerm = (text) => {     
       let filter = (this.states).filter((stateObj) =>{
           return stateObj.state.toLowerCase().includes(text.toLowerCase())
        })     
        this.filteredStates.replace(filter)
    }
    
    @action
    onChangeText = (text) =>{ 
        this.searchHeaderTextInput = text;
       this.onChangeFilterTerm(text)
    }

    @action
    setStateName = (stateItem) =>{
        this.stateName = stateItem.state
        this.statePopulation = stateItem.population
        this.stateCounties =  stateItem.counties
    }

    @action
    async fetchData() {
        this.activityIndecator = true
        let data = await getStates()
        if(data !== 'error'){
            this.states.replace(data)
            this.filteredStates.replace(data)
        }
        this.activityIndecator = false
    }

     @action
     onStatePress = async (stateDetailUrl) => {
        this.activityIndecator = true
        let data = await getStateDetail(stateDetailUrl)
        if(data !== 'error'){
            this.currentStateDetail.replace(data)
        }
        this.activityIndecator = false
     }
}





