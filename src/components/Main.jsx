import React from "react";
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from "./AppBar.jsx";
import { Redirect, Route, Switch } from 'react-router-native'
import LogInPage from "../pages/LogIn";

const Main = () => {
    return(
        <View style={{ flex: 1}}>
            <AppBar />
            <Switch>
                <Route path='/' exact> 
                 <RepositoryList />   
                </Route>
                <Route path='/signin' exact>
                    <LogInPage />
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}

export default Main