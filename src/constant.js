import { Dimensions } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('window').width

export const STATE_INFO = {
    POPULATION: 'Population: ',
    STATE_COUNTIES: 'State counties: ',
    SUM_OF_POPULATION: 'Sum of populations: ',
    COUNIES_EQUAL_POPULATION: 'counties populations is equals to state populations',
    COUNIES_NOT_EQUAL_POPULATION: 'counties populations is not equals to state populations'
}
export const DETAIL_OBJECT = {
   POPULATION: 'population',
   COUNTY: 'county'
}
export const SEARCH_HEADER = {
  HEADER_HEIGHT: 50, 
  BORDER_WIDTH: 1, 
  BORDER_RADIUS: 30, 
  STANDART_MARGIN: 8, 
  FONT_SIZE: 14, 
  STANDART_PADDING: 5,
  ICON_SIZE: 20
}

