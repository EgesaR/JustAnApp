import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  Button,
  Icon,
  IconButton,
} from "react-native-paper";

const UpdateCard = ({
  image,
  like,
  favourited,
  avatar,
  username,
  numberOfPeopleSeen,
  title,
  message,
  numberOfLikes,
  numberOfComments,
  numberOfShares,
}) => {
  const [liked, setLiked] = useState(like);
  const [favorite, setFavorite] = useState(favourited);

  const _handleLikeClick = () => (!liked ? setLiked(true) : setLiked(false));
  const _handleFavoriteClick = () =>
    !favorite ? setFavorite(true) : setFavorite(false);

  const paths =
    "file:///data/user/0/com.actualwave.reactnativeplayground/cache/ImagePicker/";

  return (
    <Card
      style={{
        marginBottom: 25,
        marginHorizontal: 5,
        borderRadius: 20,
        minHeight: 495,
      }}
    >
      <Card.Cover
        source={{
          uri: paths + image,
        }}
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      />
      <Card.Content>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Avatar.Image size={50} source={{ uri: avatar }} />
          <View
            style={{
              position: "absolute",
              bottom: 90,
              width: "100%",
              right: 0,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              icon={!liked ? "thumb-up-outline" : "thumb-up"}
              size={25}
              onPress={_handleLikeClick}
            />
            <IconButton
              icon={!favorite ? "heart-outline" : "heart"}
              size={25}
              onPress={_handleFavoriteClick}
            />
            <IconButton icon="share" size={25} onPress={() => {}} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Title style={{ fontSize: 14 }}>{username}</Title>
            <Paragraph style={{ fontSize: 12, color: "#666" }}>
              Seen by {numberOfPeopleSeen} people
            </Paragraph>
          </View>
        </View>
        <Title style={{ marginTop: 15 }}>{title}</Title>
        <Paragraph style={{ fontSize: 14 }} numberOfLines={1}>
          {message}
        </Paragraph>
      </Card.Content>
      <Card
        style={{ position: "absolute", bottom: 25, left: 15, width: "90%" }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",

            paddingHorizontal: 20,
            elevation: 4,
            justifyContent: "space-between",
            height: 50,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>{numberOfLikes}</Text>
            <Text>Likes</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>{numberOfComments}</Text>
            <Text>Comments</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>{numberOfShares}</Text>
            <Text>Shares</Text>
          </View>
        </View>
      </Card>
    </Card>
  );
};

export default UpdateCard;
