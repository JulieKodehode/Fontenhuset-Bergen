import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	Modal,
	Pressable,
	Button,
	AppRegistry,
} from "react-native";
import { CarouselHome } from "./Carousel";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Footer } from "./Footer";
import { useNavigation } from "@react-navigation/native";
import { nunito } from "react-native-typography";
import { homeData, MemeData } from "../Data";
import { ModalData } from "../Data";

export default function Home(props) {
	const [modalVisible, setModalVisible] = useState(false);
	const [newModal, setNewModal] = useState(ModalData[0]);

	const [funVisible, setFunVisible] = useState(false);
	const [Meme, setMeme] = useState(MemeData[0]);

	const navigation = useNavigation();

	function NyMeme() {
		let NyMeme = MemeData[Math.floor(Math.random() * MemeData.length)];

		setMeme(NyMeme);
	}

	function NyOppmuntring() {
		let Ny = ModalData[Math.floor(Math.random() * ModalData.length)];

		setNewModal(Ny);
	}

	return (
		<View style={styles.container}>
			<Modal
				style={styles.modal}
				animationType="slide"
				transparent={true}
				visible={funVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setFunVisible(!funVisible);
				}}>
				<View style={styles.oppmuntringsBox}>
					<AntDesign
						name="close"
						size={24}
						color="black"
						onPress={() => setFunVisible(false)}
						style={styles.oppmuntringClose}
					/>

					<Image resizeMode="contain" style={styles.oppmuntringImg} source={Meme.image} />

					<View style={styles.oppmuntringBtn}>
						<Button title="Få en ny" color="#F4B09A" onPress={NyMeme} />
					</View>
				</View>
			</Modal>

			<Modal
				style={styles.modal}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}>
				<View style={styles.oppmuntringsBox}>
					<AntDesign
						name="close"
						size={24}
						color="black"
						onPress={() => setModalVisible(false)}
						style={styles.oppmuntringClose}
					/>

					<Text style={styles.oppmuntringsTekst}>{newModal.text}</Text>
					<Image resizeMode="contain" style={styles.oppmuntringImg} source={newModal.image} />

					<View style={styles.oppmuntringBtn}>
						<Button title="Få en ny" color="#F4B09A" onPress={NyOppmuntring} />
					</View>
				</View>
			</Modal>

			<View style={styles.topText}>
				<Text style={styles.dagenIdag} onPress={() => setFunVisible(!modalVisible)}>
					Noe morsomt
				</Text>

				<Text style={styles.dagenIdag} onPress={() => setModalVisible(!modalVisible)}>
					Oppmuntring
				</Text>
				<Text style={styles.dagenIdag} onPress={() => navigation.push("Info")}>
					Hva skjer?
				</Text>
			</View>

			<View style={styles.headerDiv}>
				<Text style={styles.header}>Fontenehuset</Text>
				<Text style={styles.headerTwo}>Bergen</Text>
			</View>

			<Text style={styles.BodyHeader}>Om Huset</Text>

			<CarouselHome carouselData={props.carouselData} />
		</View>
	);
}

console.log(ModalData);

const styles = StyleSheet.create({
	container: {
		maxWidth: 412,
		height: "100%",
		backgroundColor: "white",
	},
	tinyLogo: {
		width: 50,
		height: 50,
		color: "black",
	},
	TextBox: {
		width: 100,
		height: 45,
		borderStyle: "solid",
		textAlign: "center",
		paddingTop: 5,
		color: "black",
		position: "absolute",
		top: 150,
		left: 135,
		fontWeight: "bold",
		borderWidth: 1,
		borderColor: "black",
	},

	headerDiv: {
		marginTop: 50,
	},

	header: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
		marginLeft: 90,
	},
	headerTwo: {
		fontSize: 30,
		color: "black",
		marginLeft: 145,
	},
	frontImage: {
		width: 412,
		height: 210,
	},
	dagenIdag: {
		borderColor: "black",
		borderRadius: 18,
		borderStyle: "solid",
		fontSize: 10,
		textAlign: "center",
		borderWidth: 1,
		borderColor: "#F4B09A",
		paddingTop: 10,
		paddingBottom: 22,
		paddingLeft: 2,
		paddingRight: 2,
		marginLeft: "5%",
	},

	BodyHeader: {
		fontSize: 18,
		textAlign: "center",
		fontStyle: "italic",
		marginTop: 40,
		marginBottom: 10,
		color: "#A8A8A8",
		textDecorationLine: "underline",
	},
	bestillText: {
		fontSize: 18,
		textAlign: "center",
	},

	bestillBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 100,
		width: 200,
		height: 200,
		backgroundColor: "white",
		marginLeft: 80,
		borderRadius: 10,
	},

	oppmuntringsBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 270,
		width: 400,
		height: 330,
		backgroundColor: "white",
		marginLeft: 0,
		borderRadius: 10,
	},

	closeButton: {
		display: "flex",
		height: 50,
		width: 100,
		backgroundColor: "#FDE1E1",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 30,
	},

	modal: {
		display: "flex",
		justifyContent: "center",
		height: 400,
		width: 300,
	},

	closeIcon: {
		marginLeft: 135,
		marginBottom: 10,
	},

	oppmuntringImg: {
		width: "100%",
		height: "80%",
		aspectRatio: 1,
		marginBottom: 100,
		marginTop: 50,
	},

	oppmuntringClose: {
		left: 340,
		bottom: 310,
		position: "absolute",
		zIndex: 1,
	},

	oppmuntringBtn: {
		width: 150,
		height: 39,
		borderColor: "#F4B09A",
		borderWidth: 1,
		borderRadius: 10,
		position: "absolute",
		top: 280,
	},

	oppmuntringsTekst: {
		fontStyle: "italic",
		fontWeight: "bold",
		fontSize: 22,
		position: "absolute",
		zIndex: 1,
		width: 140,
		color: "white",
		top: 170,
		backgroundColor: "linear-gradient(rgba(0,0,0,0.3), transparent)",
		padding: 10,
	},

	topText: {
		display: "flex",
		flexDirection: "row",
		width: 300,
		marginLeft: "6%",
		marginTop: 70,
	},
});

//backgroundColor: 'rgba(0, 41, 70, 0.5)' <CarouselHome  carouselData={props.carouselData}  />  <Text style={styles.BodyHeader}>Om Huset</Text>
