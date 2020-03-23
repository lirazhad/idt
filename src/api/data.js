import { networkCall } from './request'
import { STATES_API, responseOK } from './constants'

export async function getStates(){
  let res = await networkCall(STATES_API)
  if(res.status === responseOK ){
    return res.data['data']
  }else{
    return 'error'
  }
}


export async function getStateDetail(detailUrl){
  let res = await networkCall(detailUrl)
  if(res.status === responseOK ){
     return res.data['data']
  }else{
    return 'error'
  }
}