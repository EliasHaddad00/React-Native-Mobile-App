import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Dimensions 
} from 'react-native';

export default class Template extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numColumns:3,
      data: [
        { key: 'Example 1' }, 
        { key: 'Example 2' }, 
        { key: 'Example 3' }, 
        { key: 'Example 4' }, 
        { key: 'Example 5' }, 
        { key: 'Example 6' }, 
        { key: 'Example 7' }, 
        { key: 'Example 8' }, 
        { key: 'Example 9' }, 
        { key: 'Example n-1' },
      ]
    };
  }

  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={[styles.item, {height: Dimensions.get('window').width / this.state.numColumns}]}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  }
  
  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  }

  render() {
    return (
      <FlatList
        data={this.formatRow(this.state.data, this.state.numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={this.state.numColumns}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    borderRadius:10
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize:24,
    fontWeight:'bold',
  },
}); 