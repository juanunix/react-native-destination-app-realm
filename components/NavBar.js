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
        var rightIcons;
        if(this.props.enableRightIcon){
            rightIcons = <TouchableHighlight underlayColor="transparent" onPress={this.props.iconTouchRight}>
                            <Icon 
                                style={styles.icon} 
                                name={this.props.iconRight} 
                                size={20} 
                                color={this.props.colorIconRight} />
                        </TouchableHighlight>
        }
        return (
            <View style={[styles.navbar, {backgroundColor:bgColor}]}>
                <View style={styles.contentNav}>
                    <View style={styles.contentIconLeft}>
                        <TouchableHighlight underlayColor="transparent" onPress={this.props.iconTouchLeft}>
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
                    <View style={styles.contentIconRight}>
                        {rightIcons}
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
    contentIconLeft: {
        position: 'absolute',
        left: 0,
        top: 20,
        zIndex: 20
    },
    contentIconRight: {
        position: 'absolute',
        right: 0,
        top: 20,
        zIndex: 20
    },
    contentText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navBarTextTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "700"
    }
})

NavBar.propTypes = {
    iconRight: React.PropTypes.string,
    iconTouchRight: React.PropTypes.func,
    title: React.PropTypes.string.isRequired,
    colorIcon: React.PropTypes.string,
    icon: React.PropTypes.string,
    orange: React.PropTypes.bool
}