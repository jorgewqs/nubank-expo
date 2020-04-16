import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
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
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  cardHeard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  cardHeardConta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 13,
    color: "#666",
  },
  tituloConta: {
    fontSize: 15,
    color: "#666",
    paddingLeft: 5,
  },
  descricao: {
    fontSize: 32,
    marginTop: 3,
    color: "#333",
  },
  cardFooter: {
    padding: 30,
    backgroundColor: "#eee",
    borderRadius: 4,
  },
  annotarion: {
    fontSize: 12,
    color: "#333",
  },
  saldoOculto: {
    height: 41,
    backgroundColor: "#eee",
    // margin: 20,

  }
});