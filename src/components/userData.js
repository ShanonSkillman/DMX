import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Item } from 'native-base';

const cardOne = require("../components/images/fitbit.png");
const cardTwo = require("../components/images/spotify.png");
const cardThree = require("../components/images/reddit.png");

const cards = [
  {
    text: "FitBit",
    name: "One",
    image: cardOne
  },
  {
    text: "Spotify",
    name: "Two",
    image: cardTwo
  },
  {
    text: "Reddit",
    name: "Three",
    image: cardThree
  },
];

export default class UserData extends Component {
  render() {
    return (
      <Container style={styles.container}>
          <View style={{alignItems: 'center'}}><Text style={styles.header}>My Data</Text></View>
         <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Card style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text>FitBit</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={cardOne} style={{height: 100, width: 100}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="trash" />
                </Button>
            
              
                <Button transparent>
                  <Icon active name="create" />                
                  </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={styles.card} >
            <CardItem>
              <Left>
                <Body>
                  <Text>Reddit</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={cardThree} style={{height: 100, width: 100}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="trash" />
                </Button>
            
              
                <Button transparent>
                  <Icon active name="create" />                
                  </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEDF7',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    card: {
        width: 300,
        flex: 1,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
        fontSize: 30
    }
})