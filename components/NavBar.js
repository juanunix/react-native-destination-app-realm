import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class NavBar extends Component {
    render(){
        var bgColor;
        if(this.props.orange){
            bgColor = '#ff8f5e';
        } else {
            bgColor = 'transparent';
        }
        return (
            <View style={[styles.navbar, {backgroundColor:bgColor}]}>
                <View style={styles.contentNav}>
                    <View style={styles.contentIcon}>
                        <TouchableHighlight onPress={this.props.iconTouch}>
                            <Icon 
                                style={styles.icon} 
                                name={this.props.icon} 
                                size={20} 
                                color={this.props.colorIcon} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contentText}>
                        <Text style={styles.navBarTextTitle}>
                            {this.props.title}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#ff8f5e',
        justifyContent: 'flex-end',
        padding: 15,
        alignSelf: 'stretch',
    },
    contentNav: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 2,
        justifyContent: 'space-between'
    },
    contentIcon: {
        flex: 2,
        flexDirection: 'row',
    },
    contentText: {
        flex: 3,
        flexDirection: 'row',
    },
    navBarTextTitle: {
        color: 'white',
        fontSize: 15
    }
})