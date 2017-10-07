import React, {Component} from 'react';

import {  TextInput,TouchableHighlight,View} from 'react-native';
import {connect, Provider } from 'react-redux';
import { createStore, } from 'redux';


import Firebase from './firebase';

import  field from './reducers/field';
import { Firstname,Lastname,Company,Department,Positions, Email} from './actions/formactions'
const styles = require('./styles.js');



import { Container, Header, List, ListItem, Text, Separator,Button } from 'native-base';
class Main extends Component {

    constructor(props) {
        super(props);
        exist=false;
        this.itemsRef = this.getRef().child('items');
        this.items=[];


        //behind part is reducers
        this.store=createStore((field),this.state)

    }


    //set the firebase reference
    getRef() {
        return Firebase.database().ref();
    }

    listenForTasks(getRef) {

        getRef.on('value', (dataSnapshot) => {

            var counter=0;

            var key="";
            var inner_key=[];


            if(dataSnapshot.exists()) {

                dataSnapshot.forEach((child) => {

                    key = child.key;

                });
                getRef.child(key).on('value', (dataSnapshot) => {

                    dataSnapshot.forEach((child) => {


                        inner_key[counter] = child.val();
                        counter++;

                    });

                });
                // key='s';

                //dispatch the action to the store
                this.store.dispatch(Firstname(inner_key[3]));
                this.store.dispatch(Lastname(inner_key[4]));
                this.store.dispatch(Company(inner_key[0]));
                this.store.dispatch(Department(inner_key[1]));
                this.store.dispatch(Positions(inner_key[5]));
                this.store.dispatch(Email(inner_key[2]));
            }

        });
    }

    componentDidMount() {
        // start listening for firebase updates

        this.listenForTasks(this.getRef().child('items'))


    }


//add to the firebase
    addTodo(){
        this.itemsRef.push({
            first_name: this.store.getState().new_first_name,
            last_name: this.store.getState().new_last_name,
            company: this.store.getState().new_company,
            department:this.store.getState().new_department,
            position: this.store.getState().new_position,
            email: this.store.getState().new_email

        });



    }

//componant
    render() {
        console.log(JSON.stringify(this.store.getState()));
        return (

            <Provider store={this.store}>

                <View style={styles.mainContainer}>

                    <View style = {styles.top_container}>
                    <ListItem last   style = {styles.ListItem_all}>
                        <Text style = {styles.text_all}>First Name</Text>
                        <FirstNameTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                        <ListItem last   style = {styles.ListItem_all}>
                        <Text style = {styles.text_all}>last Name</Text>
                        <LastNameTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                    </View>

                    <View style = {styles.middle_container}>
                        <ListItem last  style = {styles.ListItem_all}>
                            <Text style = {styles.text_all}>Company</Text>
                        <CompanyTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                        <ListItem last  style = {styles.ListItem_all}>
                            <Text style = {styles.text_all}>Department</Text>
                        <DepartmentTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                        <ListItem last style = {styles.ListItem_all}>
                            <Text style = {styles.text_all}>Position</Text>
                        <PositionsTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                    </View>


                    <View style = {styles.bottom_container}>
                        <ListItem last  style = {styles.ListItem_all}>
                            <Text style = {styles.text_all}>Email</Text>
                        <EmailTextInput underlineColorAndroid={'transparent'}
                            style={styles.textinput_all}
                        />
                    </ListItem>
                    </View>

                <View style = {styles.button_container}>
                    <TouchableHighlight  style={styles.button}  onPress={()=>this.addTodo()}>
                        <Text style = {styles.text_button}>Save</Text>
                    </TouchableHighlight>
            </View>
                </View>

            </Provider>
        );
    }

}


//redux part
var FirstNameTextInput=connect((state)=>({
    value:state.new_first_name
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Firstname(text));
    }
}))(TextInput);

var LastNameTextInput=connect((state)=>({
    value:state.new_last_name
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Lastname(text));
    }
}))(TextInput);

var CompanyTextInput=connect((state)=>({
    value:state.new_company
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Company(text));
    }
}))(TextInput);

var DepartmentTextInput=connect((state)=>({
    value:state.new_department
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Department(text));
    }
}))(TextInput);

var PositionsTextInput=connect((state)=>({
    value:state.new_position
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Positions(text));
    }
}))(TextInput);

var EmailTextInput=connect((state)=>({
    value:state.new_email
}),(dispatch)=>({
    onChangeText:(text) =>{
        dispatch(Email(text));
    }
}))(TextInput);


export default Main;