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
  Icon,
  View,
  Text,
  InputText,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import { IconButton, Title, Divider } from "react-native-paper";

const styles = StyleSheet.create({
  CardBtnContainer: {
    width: "100%",
    marginBottom: 15,
  },
  CardBtnContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    paddingLeft: 7,
  },
  iconLayout: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
  iconLayoutcolorblue: {
    backgroundColor: "dodgerblue",
  },
  iconLayoutcolorred: {
    backgroundColor: "red",
  },
  iconLayoutcoloryellow: {
    backgroundColor: "yellow",
  },
  iconLayoutcolororange: {
    backgroundColor: "darkorange",
  },
  iconLayoutcolorpurple: {
    backgroundColor: "violet",
  },
  iconLayoutcolorpink: {
    backgroundColor: "pink",
  },
  iconLayoutcolorgreen: {
    backgroundColor: "teal",
  },

  CardBtnText: {
    fontSize: 15,
  },
  iconRight: {
    marginLeft: "auto",
  },
});

const CardBtn = ({ title, icon, color, ...props }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    // did mount

    return () => {
      // will unmount
    };
  }, []);

  return (
    <TouchableOpacity>
      <View style={[styles.CardBtnContainer]} {...props}>
        <View style={[styles.CardBtnContainer1]}>
          <View style={[{ backgroundColor: color },styles.iconLayout]}>
            <IconButton icon={icon} />
          </View>
          <Title style={[styles.CardBtnText]}>{title}</Title>
          <IconButton icon="chevron-right" style={[styles.iconRight]} />
        </View>
        <Divider />
      </View>
    </TouchableOpacity>
  );
};

CardBtn.propTypes = {};

CardBtn.defaultProps = {};

export default CardBtn;
