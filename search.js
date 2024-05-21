import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Icon,
  Modal,
  Dimensions,
} from "react-native";
import {
  Avatar,
  Chip,
  IconButton,
  Card,
  Button,
  FAB,
} from "react-native-paper";
import ListItems from "./Y.js";
import Courses from "./Courses.js";
import Groups from "./Groups.js";

const screen = Dimensions.get("screen");

const listItems = [];
const styles = StyleSheet.create({
  wide: {
    width: "100%",
  },
  w70: {
    width: "70%"
  },
  hfull: {
    height: screen.height * 0.8,
  },
  row: {
    flexDirection: "row",
  },
  flex1: {
    flex: 1,
  },
  bw1: {
    borderWidth: 1,
  },
  searchInput: {
    marginLeft: 5,
    width: screen.width * 0.7,
  },
  avatarIcon: {
    marginLeft: -15,
  },
  middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  hmiddle: {
    justifyContent: "center",
  },
  vmiddle: {
    alignItems: "center",
  },
  px10: {
    paddingLeft: 75,
    paddingRight: 52.5,
  },
  selected: {
    backgroundColor: "rgba(86, 22, 212, 0.53)",
  },
  notselected: {
    backgroundColor: "white",
  },
});

const ItemCard = ({ title, icon, image, text }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 5, marginTop: 10 }}>
      <Card>
        <Card.Content
          style={[styles.row, styles.vmiddle, { height: 65, width: "100%" }]}
        >
          {icon ? <Avatar.Icon icon={icon} size={40} /> : null}
          {image ? <Avatar.Image source={{ uri: image }} size={40} /> : null}
          {text ? <Avatar.Text label={text} size={40} /> : null}
          <Text style={{ marginLeft: 10 }}>{title}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const TextIconChip = ({
  mode = "outlined",
  icon,
  text,
  onPress,
  selected = false,
  setSelected,
}) => {
  return (
    <Button
      mode={mode}
      icon={icon}
      style={[
        {
          marginHorizontal: 4,
          alignItems: "center",
          justifyContent: "center",
          textTransform: "capitalize",
        },
        selected ? styles.selected : styles.notselected,
      ]}
      onPress={() => {
        {
          selected ? setSelected(false) : setSelected(true);
        }
      }}
    >
      <Text>{text}</Text>
    </Button>
  );
};

const Search = ({ visible, setVisible }) => {
  const [value, setValue] = useState("");
  const [userSearchSelected, setUserSearchSelected] = useState(false);
  const [courseSearchSelected, setCourseSearchSelected] = useState(false);
  const [groupSearchSelected, setGroupSearchSelected] = useState(false);

  useEffect(() => {
    // did mount

    return () => {
      // will unmount
    };
  }, []);

  return (
      <Modal
        visible={visible}
      >
        <View style={[styles.wide, styles.hfull]}>
          <View style={[styles.row, styles.middle, styles.px10, styles.bw1]}>
            <View style={[styles.row, { width: "auto" }]}>
              
              {userSearchSelected ? (
                <Avatar.Icon
                  icon="account"
                  size={35}
                  style={[styles.avatarIcon]}
                />
              ) : null}
              {courseSearchSelected ? (
                <Avatar.Icon
                  icon="book"
                  size={35}
                  style={[styles.avatarIcon]}
                />
              ) : null}
              {groupSearchSelected ? (
                <Avatar.Icon
                  icon="group"
                  size={35}
                  style={[styles.avatarIcon]}
                />
              ) : null}
            </View>
            <TextInput
              mode="outlined"
              placeholder="Search user, course, group"
              style={[styles.searchInput, { fontSize: 13 }]}
              value={value}
              onChangeText={setValue}
            />
          </View>
          <View style={{ marginVertical: 7 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              style={{ flexDirection: "row", width: "100%", height: 35 }}
            >
              <TextIconChip
                icon="account"
                text="User"
                selected={userSearchSelected}
                setSelected={setUserSearchSelected}
              />
              <TextIconChip
                icon="book"
                text="Courses"
                selected={courseSearchSelected}
                setSelected={setCourseSearchSelected}
              />
              <TextIconChip
                icon="account-group"
                text="Groups"
                selected={groupSearchSelected}
                setSelected={setGroupSearchSelected}
              />
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <ScrollView>
              <View>
                {userSearchSelected &&
                !courseSearchSelected &&
                !groupSearchSelected ? (
                  ListItems.map((user, id) => {
                    if (value.length === 0) {
                      return (
                        <ItemCard
                          title={user.username}
                          text="TM"
                          icon="account"
                        />
                      );
                    } else {
                      if (
                        user.username
                          .toLowerCase()
                          .includes(value.toLowerCase())
                      ) {
                        return (
                          <ItemCard
                            title={user.username}
                            text="TM"
                            icon="account"
                          />
                        );
                      }
                    }
                  })
                ) : courseSearchSelected &&
                  !userSearchSelected &&
                  !groupSearchSelected ? (
                  Courses.map((course, id) => {
                    if (value.length === 0) {
                      return (
                        <ItemCard
                          title={course.name}
                          text="TM"
                          icon="account"
                        />
                      );
                    } else {
                      if (
                        course.name.toLowerCase().includes(value.toLowerCase())
                      ) {
                        return (
                          <ItemCard
                            title={course.name}
                            text="TM"
                            icon="account"
                          />
                        );
                      }
                    }
                  })
                ) : groupSearchSelected &&
                  !courseSearchSelected &&
                  !userSearchSelected ? (
                  Groups.map((group, id) => {
                    if (value.length === 0) {
                      return (
                        <ItemCard title={group.name} text="TM" icon="account" />
                      );
                    } else {
                      if (
                        group.name.toLowerCase().includes(value.toLowerCase())
                      ) {
                        return (
                          <ItemCard
                            title={group.name}
                            text="TM"
                            icon="account"
                          />
                        );
                      }
                    }
                  })
                ) : userSearchSelected &&
                  courseSearchSelected &&
                  !groupSearchSelected ? (
                  <Text>It is userSearchSelectedand y</Text>
                ) : !courseSearchSelected &&
                  userSearchSelected &&
                  groupSearchSelected ? (
                  <Text>It is userSearchSelectedandgroupSearchSelected</Text>
                ) : !userSearchSelected &&
                  courseSearchSelected &&
                  groupSearchSelected ? (
                  <Text>It is courseSearchSelectedandgroupSearchSelected</Text>
                ) : (
                  <Text>Search of any user, course, groups</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </View>
        <FAB style={{
   position: 'absolute',
    margin: 16,
    right: 0,
    bottom: -12,
  }} medium icon="close" onPress={() => setVisible(false)} />
      </Modal>

  );
};

Search.propTypes = {};

Search.defaultProps = {};

export default Search;

g;
