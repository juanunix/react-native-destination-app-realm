/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import IndexApp from './components/IndexApp'
import DestinationView from './components/DestinationView'
import InsertDestination from './components/InsertDestination'
import TakeAPhoto from './components/TakeAPhoto'

import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';



export default class awesomeTodo extends Component {
  _renderScene(route, navigator){
    var globalNavigatorProps = {navigator}

    switch(route.ident){
      case "IndexApp":
        return (
          <IndexApp 
            {...globalNavigatorProps}/>
        )
      case "destinationView":
        return (
          <DestinationView 
            {...globalNavigatorProps}
            data={route.data}
          />
        )
      case "insertDestination":
        return (
          <InsertDestination 
            {...globalNavigatorProps}
          />
        )
      case "TakeAPhoto":
        return (
          <TakeAPhoto 
            {...globalNavigatorProps}
          />
        )
    }
  }
  _configureScene(route,routeStack){
    switch(route.ident){
      case "insertDestination":
        return Navigator.SceneConfigs.FloatFromBottom
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  }
  render(){
    return (
      <Navigator 
        initialRoute={{ident: "IndexApp"}}
        ref="appNavigator"
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    )
  }
}

AppRegistry.registerComponent('awesomeTodo', () => awesomeTodo);