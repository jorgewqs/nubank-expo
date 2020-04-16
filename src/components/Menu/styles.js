import { StyleSheet } from 'react-native';

const hairLine = StyleSheet.hairlineWidth;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 8,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  qrcode: {
    width: 80,
    height: 80,
  },
  code: {
    backgroundColor: "#FFF",
    padding: 5,
    alignSelf: "center",
  },
  nav :{
    width: "100%",
    marginTop: 18,
    borderTopWidth: hairLine,
    borderTopColor: "rgba(255, 2555, 255, 0.8)",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: hairLine,
    borderBottomColor: "rgba(255, 2555, 255, 0.8)",
  },
  navText: {
    fontSize: 15,
    color: "#FFF",
    marginLeft: 20,
  },
  btnSair: {
    borderWidth: hairLine,
    borderColor: "rgba(255, 2555, 255, 0.8)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 15,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12, 
  },
  containerConta: {
    marginTop: 5,
    alignSelf: "center",
  },
  contentConta: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContaText: {
    fontSize: 12,
    color: "#FFF",
  },
  contentContaTextValue: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold",   
  }
});