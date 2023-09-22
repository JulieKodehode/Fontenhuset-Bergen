import { CarouselMeeting } from "./Carousel";
import { StyleSheet, Text, Image, View, ScrollView, SafeAreaView } from "react-native";
import { sectionData } from "../Data";
import { Footer } from "./Footer";

export default function Meeting(props) {
	return (
		<SafeAreaView>
			<View style={styles.imageDiv}>
				<Image style={styles.frontImage} source={props.headerImg} />
				<Text style={styles.header}>{props.mainHeader}</Text>
			</View>
			<ScrollView bounces={false} showsVerticalScrollIndicator={false}>
				<View style={styles.ScrollContainer}>
					<View style={styles.container}>
						<CarouselMeeting carouselData={props.carouselData} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
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
	container: {
		display: "flex",
		flexDirection: "row",
		maxWidth: 412,
	},
	ScrollContainer: {
		height: 600,
	},
});
