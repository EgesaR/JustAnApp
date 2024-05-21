import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph, Image, Button, Avatar, Modal } from 'react-native-paper';

const UpdateCard = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <Card style={{ margin: 20}} onPress={showModal}>
        <Card.Cover source={{ uri: '(link unavailable)' }} />
        <Card.Content>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image size={40} source={{ uri: '(link unavailable)' }} />
            <View style={{ marginLeft: 10 }}>
              <Title>Username</Title>
              <Paragraph style={{ fontSize: 12, color: '#666' }}>
                Seen by 100 people
              </Paragraph>
            </View>
          </View>
          <Title>Update Title</Title>
          <Paragraph>This is a brief description of the update.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Update installed!')}>
            Install Update
          </Button>
        </Card.Actions>
      </Card>

      <Modal visible={visible} onDismiss={hideModal} style={{ elevation: 5}}>
        <Card style={{ elevation: 5 }}>

          <Title>Story Title</Title>
          <Paragraph>Story description</Paragraph>
          <Paragraph>Comments:</Paragraph>
          <Paragraph>Comment 1</Paragraph>
          <Paragraph>Comment 2</Paragraph>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>

      Press me

    </Button>
        </Card>
      </Modal>
    </View>
  );
};

export default UpdateCard