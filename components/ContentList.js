import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ContentList extends Component {
    render(){
        return (
            <View style={styles.containerContentList}>
                <Image source={{uri: this.props.urlImage}} style={styles.image} />
                <View style={styles.contentText}>
                    <View style={styles.contentTextTile}>
                        <Text style={styles.textTitle}>{this.props.titlePlace}</Text>
                    </View>
                    <View style={styles.contentSubtitle}>
                        <View style={styles.buttonPlace}>
                            <Icon style={styles.buttonMarker} name="map-marker" size={15} color="#f45e1c" />
                            <Text style={[styles.subTitleText]}>{this.props.place}</Text>
                        </View>
                        <Text style={[styles.subTitleText]}>
                            <Text style={styles.subtitleDays}>{this.props.days}</Text> days later
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonPlace: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    buttonMarker: {
       paddingRight: 5
    },
    image: {
        backgroundColor: 'skyblue',
        width: window.width,
        height: 100,
    },
    containerContentList: {
        paddingBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1 
    },
    contentTextTile: {
        paddingTop: 5,
        paddingBottom: 2
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '500'
    },
    subTitleText: {
        fontSize: 13,
        color: '#c9c9c9'
    },
    contentSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    subtitleDays: {
        fontSize: 19,
        color: '#000'
    }
})