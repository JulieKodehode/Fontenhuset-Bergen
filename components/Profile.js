import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { MaterialCommunityIcons, Ionicons, Entypo, Feather } from "@expo/vector-icons";

export default function Profile() {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.profileImgContainer}>
				<View>
					<Image style={styles.profileImg} source={require("../assets/dog.jpg")} />
				</View>
				<View style={styles.iconDiv}>
					<Entypo name="camera" size={24} color="black" />
				</View>
			</View>

			<View style={styles.infoDiv}>
				<Text style={styles.text}>Navn</Text>
				<View style={styles.profileMain}>
					<View style={styles.profileInfo}></View>
					<Feather style={styles.feather} name="edit-2" size={20} color="#616060" />
				</View>

				<Text style={styles.text}>Email</Text>

				<View style={styles.profileMain}>
					<View style={styles.profileInfo}></View>
					<Feather style={styles.feather} name="edit-2" size={20} color="#616060" />
				</View>

				<Text style={styles.text}>Passord</Text>

				<View style={styles.profileMain}>
					<View style={styles.profileInfo}></View>
					<Feather style={styles.feather} name="edit-2" size={20} color="#616060" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "white",
		height: 800,
	},
	profileImgContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 70,
		marginLeft: 30,
	},

	profileImg: {
		width: 130,
		height: 130,
		borderRadius: 80,
		borderColor: "#ADADAD",
		borderWidth: 1,
	},
	iconDiv: {
		marginLeft: 20,
		marginTop: 67,
	},
	profileInfo: {
		width: 220,
		height: 40,
		borderRadius: 10,
		borderColor: "#ADADAD",
		borderWidth: 1,
		marginTop: 10,
	},
	profileMain: {
		display: "flex",
		flexDirection: "row",
		marginLeft: 30,
	},
	infoDiv: {
		display: "flex",
		alignItems: "center",
		marginTop: 30,
	},
	text: {
		marginTop: 10,
	},
	feather: {
		marginTop: 15,
		marginLeft: 15,
	},
});
