import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    AlertIOS,
    StyleSheet,
    ImagePickerIOS,
    Image
} from 'react-native'

import destinationList from '../models/todoListModel'

import NavBar from './NavBar'     

export default class InsertDestination extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: null,
            place: null,
            day: null,
            image: null
        }
    }
    _backButton(){
        this.props.navigator.pop();
    }
    onPickImage(){
        ImagePickerIOS.openSelectDialog({}, imageUri => {
            this.setState({ image: imageUri });
        }, error => AlertIOS.alert('Choose an Image'));
    }
    onSubmitForm(){
    var title = this.state.title;
    var place = this.state.place;
    var day = this.state.day;
    var image = this.state.image;
        if(title && place && day && image){
            destinationList.write(() => {
                destinationList.create('DestinationList', 
                    {
                        title: String(title), 
                        place: String(place),
                        day: String(day),
                        image: String(image),
                        creationDate: new Date()
                    }
                );
            })
            this.props.navigator.pop();
        } else {
            AlertIOS.alert('Error, some fields are empty');
        }
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <NavBar 
                    iconTouchLeft={() => this._backButton()} 
                    colorIcon="#fff" 
                    icon="times" 
                    orange 
                    title="Add New"/>
                <View style={styles.container}>
                    <View style={styles.inputs}>
                        <TextInput 
                            keyboardType="default"
                            style={styles.inputText}
                            placeholder="Title"
                            value={this.state.title}
                            onChangeText={(title) => this.setState({title})}
                        /><TextInput 
                            style={styles.inputText}
                            placeholder="Place"
                            value={this.state.place}
                            onChangeText={(place) => this.setState({place})}
                        /><TextInput 
                            style={styles.inputText}
                            placeholder="Day"
                            value={this.state.day}
                            onChangeText={(day) => this.setState({day})}
                        /> 
                        {this.state.image?
                                <Image 
                                    style={{ marginTop:20, height: 50, width: 50 }} 
                                    source={{ uri: this.state.image }} 
                                /> : null
                        }
                        <TouchableHighlight 
                            style={styles.pickImage}
                            onPress={() => this.onPickImage()}>
                            <Text>Pick an Image</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={()=> this.onSubmitForm()}>
                        <Text style={styles.textButton}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    inputText: {
        width: window.width,
        height: 40,
        paddingLeft: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 20
    },
    button: {
        backgroundColor: 'lightgreen',
        padding: 10
    },
    textButton: {
        color: '#fff',
        textAlign: 'center'
    },
    pickImage: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        padding: 10
    }
})