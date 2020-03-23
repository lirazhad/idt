import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SEARCH_HEADER, COLOR } from '../constant'
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer } from "mobx-react"

@observer
export class  SearchHeader extends React.Component{

  render(){
    const {onChangeText, searchHeaderTextInput} = this.props
    return(
  <View style={styles.container}>
     <View style={styles.icon}>
     <Icon name="search" size={SEARCH_HEADER.ICON_SIZE} color={COLOR.DARK_BLUE}/>
     </View>
    <TextInput
        placeholder={'Search'}
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={onChangeText} 
        value={searchHeaderTextInput}
        autoCapitalize = 'none'
        />
  </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    height: SEARCH_HEADER.HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: COLOR.DARK_BLUE,
    borderWidth: SEARCH_HEADER.BORDER_WIDTH,
    borderRadius: SEARCH_HEADER.BORDER_RADIUS,
    margin: SEARCH_HEADER.STANDART_MARGIN
  },
  inputStyle: {
    flex: 5,
    paddingHorizontal: SEARCH_HEADER.STANDART_PADDING,
    fontSize: SEARCH_HEADER.FONT_SIZE,
    lineHeight: 17,
    },
    icon:{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }
})

