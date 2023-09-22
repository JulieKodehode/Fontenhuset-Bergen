import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { CafeData } from "../Data";

export function Cafe() {
	return (
		<View style={styles.container}>
			<View style={styles.imageDiv}>
				<Image style={styles.frontImage} source={require("../assets/cafe.jpg")} />
				<Text style={styles.header}>Cafe Koppen</Text>
			</View>

			<ScrollView>
				<View style={styles.menyDiv}>
					{CafeData.map((data) => {
						return (
							<View key={`CafeOne-${data.id}`}>
								<View style={styles.textDiv}>
									<Text style={styles.menyH1}>Meny</Text>
									<Text style={styles.menyHeader}>{data.meny[0].tittel}</Text>
									<Text style={styles.menyHeader}>{data.meny[1].tittel}</Text>
									<Text style={styles.menyText}>{data.meny[1].beskrivelse}</Text>
									<Text style={styles.menyHeader}>{data.meny[2].tittel}</Text>
									<Text style={styles.menyHeader}>{data.meny[3].tittel}</Text>
									<Text style={styles.menyText}>{data.meny[3].beskrivelse}</Text>
									<Text style={styles.menyHeader}>{data.meny[4].tittel}</Text>
									<Text style={styles.menyText}>{data.meny[4].beskrivelse}</Text>
									<Text style={styles.menyHeader}>{data.meny[5].tittel}</Text>
									<Text style={styles.menyText}>{data.meny[5].beskrivelse}</Text>
								</View>
								<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
									<View style={styles.carouselImgDiv}>
										<Image style={styles.carouselImg} source={data.img[0].image} />
										<Image style={styles.carouselImg} source={data.img[1].image} />
										<Image style={styles.carouselImg} source={data.img[2].image} />
										<Image style={styles.carouselImg} source={data.img[3].image} />
										<Image style={styles.carouselImg} source={data.img[4].image} />
									</View>
								</ScrollView>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "white",
	},

	imageDiv: {
		position: "absolute",
		zIndex: 1,
	},
	frontImage: {
		width: 412,
		height: 200,
		opacity: 1,
		zIndex: 5,
	},
	header: {
		fontSize: 35,
		position: "absolute",
		fontWeight: "bold",
		color: "white",
		width: 400,
		textAlign: "center",
		zIndex: 6,
		position: "absolute",
		top: 60,
	},

	menyHeader: {
		fontSize: 20,
		marginTop: 30,
		marginLeft: 70,
	},

	menyText: {
		fontSize: 14,
		fontStyle: "italic",
		marginTop: 5,
		marginLeft: 70,
	},

	menyDiv: {
		height: 870,
		width: "100%",
		marginTop: 200,
	},

	carouselImg: {
		width: 180,
		height: 180,
		borderRadius: 5,
		marginRight: 15,
		marginLeft: 15,
	},

	carouselImgDiv: {
		marginTop: 100,
		display: "flex",
		flexDirection: "row",
	},

	textDiv: {
		marginTop: 50,
	},

	menyH1: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#F4B09A",
		marginLeft: 70,
	},
});
