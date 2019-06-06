import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body
} from "native-base";
// import styles from "./styles";

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

class AllData extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Choose your data:</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      {/* <Text note>NativeBase</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: null,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  {/* <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.name}
                  </Text> */}
                </CardItem>
              </Card>}
          />
        </View>
      </Container>
    );
  }
}

export default AllData;

