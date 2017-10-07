
const react_native = require('react-native-dimension')
const {width} = react_native;
const React = require('react-native')
const {StyleSheet} = React
const constants = {
    actionColor: '#24CE84'
};

var styles = StyleSheet.create({


    // ListItem{
    //
    // }
    ListItem_all: {

        height:50,
        backgroundColor:'#ffffff',
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6'
    },
    mainContainer:{flex: 1,
        backgroundColor:'#cccccc',
              //Step 1
    },


    text_all:{
        marginLeft:5,
        fontSize:15
    },
    top_container: {
        marginLeft:10,
        marginRight:10,
        borderTopWidth: 8,
        borderTopColor: '#e6e6e6',

        borderBottomWidth: 15,
        borderBottomColor: '#e6e6e6'
    },

    middle_container: {
        marginLeft:10,
        marginRight:10,
        borderBottomWidth: 15,
        borderBottomColor: '#e6e6e6'
    },
    bottom_container: {

        marginLeft:10,
        marginRight:10,
        borderBottomWidth: 15,
        borderBottomColor: '#e6e6e6',

    },

    button_container: {
        marginLeft:10,
        marginRight:10,
        backgroundColor: 'white',
        height:400,
        alignItems:'center'
    },


    button:{
        marginTop:25,
        backgroundColor: '#7194da',
        borderRadius: 5,
        width:180,
        height:60,

    },
    text_button:{
        color:'white',
        textAlign: 'center',
        fontSize:25,
        marginTop:10

    },
    textinput_all:{
        flex: 1,
        marginLeft:17,
        marginRight:10,
        position: 'absolute',
        height: 50,
        textAlign:"right",

        fontSize: 22,
        color:'blue',
        width: width(95),
        flexDirection:'row'
    },


    center: {
        textAlign: 'center',
    },

})

module.exports = styles
module.exports.constants = constants;/**
 * Created by samsung on 11-Aug-17.
 */
