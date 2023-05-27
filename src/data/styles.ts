import { Font, StyleSheet } from "@react-pdf/renderer";
import myFont from "../assets/fonts/Catamaran-Regular.ttf";
import myFontBold from "../assets/fonts/Catamaran-Bold.ttf";
import myFontExtra from "../assets/fonts/Catamaran-ExtraBold.ttf";

Font.register({
  family: "Catamaran",
  src: myFont,
});

Font.register({
  family: "Catamaran-Bold",
  src: myFontBold,
});

Font.register({
  family: "Catamaran-ExtraBold",
  src: myFontExtra,
});

export const styles = StyleSheet.create({
  page: {
    marginLeft: "30px",
    marginRight: "15px",
    position: "relative",
    fontFamily: "Catamaran",
    fontSize: "12px",
    paddingTop: "36px",
    paddingBottom: "32px",
  },
  name: {
    fontSize: "28px",
    fontFamily: "Catamaran-ExtraBold",
    width: "100%",
  },
  image: {
    position: "absolute",
    right: "60px",
    top: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "55%",
    height: "2px",
    backgroundColor: "#BCA97E",
    marginBottom: "4px",
  },
  lineHeader: {
    width: "92%",
    height: "32px",
    backgroundColor: "#BCA97E",
    marginBottom: "4px",
    position: "absolute",
  },
  title: {
    fontSize: "14px",
    fontFamily: "Catamaran-Bold",
  },
  description: {
    fontSize: "12px",
    width: "65%",
    fontFamily: "Catamaran",
    marginBottom: "12px",
  },
  content: {
    fontSize: "12px",
    width: "85%",
    fontFamily: "Catamaran",
    marginBottom: "12px",
  },
  subTitle: {
    fontSize: "14px",
    fontFamily: "Catamaran",
  },
});
