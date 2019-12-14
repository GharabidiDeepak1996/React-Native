import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, Button,Divider  } from 'react-native';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Agent Profile</Text>
     <Image
     style={styles.Image}
     source={require('./assets/baseline_keyboard_backspace_black_18dp.png')}/>
<ImageBackground
  style={styles.ImageBackground}>
<Image
 style={styles.ProfileImage}
 source={require('./assets/baseline_account_circle_black_18dp.png')}/>
 <Text style={styles.ProfileName} >Julian Millan</Text>
 <Text style={styles.empl} >Senior partner</Text>
<Text style={styles.follower} >845 Followers</Text>
<View style={{ width: 100, marginStart:220,bottom:280}}>
                <Button title="Edit" color="black" />
            </View>
  </ImageBackground>
  <Text style={styles.baseText}>RT Edgar - Toorak</Text>
  <Text style={styles.baseText1} >10 Wallace Avenue</Text>
  <Text style={styles.baseText2}>Toorak Vic 3142</Text>

  <Image style={styles.message}
                 source={require('./assets/baseline_message_black_18dp.png')}/>
  <Text style={styles.textmessage}>Message</Text>
  
  <Image style={styles.call}
  source={require('./assets/baseline_call_black_18dp.png')}
  />
  <Text style={styles.textcall}>Call</Text>
  <View style={styles.hairline} />

  <Text style={{color: '#83867D',marginStart:18,marginEnd:18,fontSize:16}}>Julian is widely as one of Australia leading estate agents and specialises in sell- ing prestige homes and luxury developments.
    Her intellect, market knowledge and dedication combined with the support of her team,ensure her client are provided with a world-class
    real estate experience.
  </Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
 
  hairline: {
    backgroundColor: '#ECEFF1',
    bottom:30,
    height: 1,
    width: 500
  },
  textcall:{
    position: 'absolute', // child
    bottom: 218, // position where you want
     end:40,
  },
  textmessage:{
    position: 'absolute', // child
    bottom: 218, // position where you want
  end:98,
  },
  message:{
    position: 'relative', // because it's parent
marginLeft:130,
alignItems:'center',
bottom:50
  },
  call:{
    marginLeft:280,
    bottom:87

      },
  baseText1:{
    marginRight:236
  },
  baseText2:{
    marginRight:250

  },
  baseText:{
marginRight:200,
fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:130,
  },
  Image: {
    width: 40,
    height: 40,
    bottom:28,
    right:150,
    resizeMode: 'stretch'
  },
  ImageBackground: {
    width: 500,
    height: 230,
    bottom:10,
    backgroundColor: '#ECEFF1',
    resizeMode: 'stretch'
  },
  ProfileImage: {
    width: 120,
    height:120,
    marginTop:50,
    marginStart:80,
    resizeMode: 'stretch'
  },
  ProfileName:{
    fontStyle:'normal',
    fontSize : 25,
    bottom:120,
    marginStart:222
  },
  empl:{
    bottom:118,
    fontSize : 18,
    marginStart:222
  },
  follower:{
    fontWeight: 'bold',
    color: 'black',
    fontSize : 18,
    marginBottom:180,
    bottom:110,
    marginStart:222
  },

});
