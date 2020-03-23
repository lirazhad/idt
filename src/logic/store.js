import { observable, action, reaction, computed } from 'mobx'
import { getStates, getStateDetail } from '../api/data'
import * as axios from 'axios';

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
        let data = await getStates()
        if(data !== 'error'){
            this.states.replace(data)
            this.filteredStates.replace(data)
        }
    }

     @action
     onStatePress = async (stateDetailUrl) => {

        let data = await getStateDetail(stateDetailUrl)
        if(data !== 'error'){
            this.currentStateDetail.replace(data)
        }
        

    //    let tempArry = await axios.get(stateDetailUrl)
    //    this.currentStateDetail = []
    //    this.currentStateDetail = [...tempArry.data['data']]
     }
}





