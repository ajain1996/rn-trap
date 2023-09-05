import { StyleSheet } from "react-native";
import { Size } from "../../constants";
import { Colors, Styles } from "../../styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainWrapper: {
    flex: 1,
    marginHorizontal: '5%',
    width: '90%',
    justifyContent: "center",
    // alignItems: "center",
    height: "100%"
  },
  titleWrapper: {
    marginVertical: Size.vs,
    fontSize: Size.ml,
    color: Colors.gray9,
    fontWeight: '800'
  },
  subtitleWrapper: {
    marginBottom: Size.s
  },
  subtitleText: {
  },
  subtitleTextBold: {
    fontWeight: '800'
  },
  codeFieldWrapper: {
    marginVertical: Size.s,
    // alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  cell: {
    width: 70,
    height: 70,
    lineHeight: Size.vl,
    fontSize: 20,
    borderRadius: Size.s,
    textAlign: 'center',
    marginHorizontal: Size.vs,
    backgroundColor: "#dcdcda",
  },
  focusCell: {
    borderColor: Colors.gray9,
  },
  errorMsg: {
    fontSize: Size.s,
    color: Colors.danger,
  },
  resendWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  resendButton: {
    color: Colors.primary,
    textDecorationLine: 'underline'
  },
  buttonWrapper: {
    paddingVertical: Size.m,
    paddingHorizontal: Size.s,
    marginVertical: Size.l,
    borderRadius: Size.s,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: Size.m,
    color: Colors.white,
  },
  userSwitchTextWrapper: {
    ...Styles.rowView,
    justifyContent: 'center',
    marginVertical: Size.s
  },
  userSwitchText: {
    color: Colors.primary,
    fontSize: Size.m - 2,
    textTransform: 'capitalize'
  },
  submitButton: {
    width: "100%",
    marginTop: 20
  },
  submitText: {
    fontSize: 14,
  }
});
