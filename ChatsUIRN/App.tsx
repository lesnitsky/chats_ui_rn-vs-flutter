/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const chatListItems = new Array(1000).fill(0).map((_, index) => index);

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#1C1B1F',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppBar title="Chats" />
      <ChatsList items={chatListItems} />
    </SafeAreaView>
  );
}

type AppBarProps = {
  title: string;
};

const appBarStyle: StyleProp<ViewStyle> = {
  height: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const appBarTextStyle: StyleProp<TextStyle> = {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
};

const AppBar = ({title}: AppBarProps) => (
  <View style={appBarStyle}>
    <Text style={appBarTextStyle}>{title}</Text>
  </View>
);

type ChatsListProps = {
  items: number[];
};

const chatsListContainerStyle: StyleProp<ViewStyle> = {
  padding: 8,
};

const ChatsList = ({items}: ChatsListProps) => (
  <View style={chatsListContainerStyle}>
    <FlatList
      data={items}
      renderItem={({item}) => <ChatItem key={item} index={item} />}
    />
  </View>
);

type ChatItemProps = {
  index: number;
};

const colors = [
  '#f44336',
  '#ff9800',
  '#4caf50',
  '#2196f3',
  '#3f51b5',
  '#9c27b0',
  '#795548',
];

const containerStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
};

const avatarWrapperStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 8,
  paddingVertical: 12,
  display: 'flex',
  flexDirection: 'row',
};

const textContentContainerStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: 10,
};

const titleTextStyle: StyleProp<TextStyle> = {
  color: 'white',
  fontSize: 18,
};

const messagePreviewTextStyle: StyleProp<TextStyle> = {
  color: 'grey',
  fontSize: 14,
};

const ChatItem = ({index}: ChatItemProps) => {
  return (
    <View style={containerStyle}>
      <View style={avatarWrapperStyle}>
        <Avatar color={colors[index % colors.length]} />
      </View>
      <View style={textContentContainerStyle}>
        <Text style={titleTextStyle}>{`Chat ${index}`}</Text>
        <Text
          style={messagePreviewTextStyle}>{`Message preview ${index}`}</Text>
      </View>
    </View>
  );
};

type AvatarProps = {
  color: string;
};

const Avatar = ({color}: AvatarProps) => {
  const avatarStyle: StyleProp<ViewStyle> = {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={avatarStyle}>
      <Icon name="person" size={30} color="white" />
    </View>
  );
};

export default App;
