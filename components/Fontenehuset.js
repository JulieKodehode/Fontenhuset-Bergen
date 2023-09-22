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
	SafeAreaView,
} from "react-native";

export default function Fontenehus() {
	return (
		<SafeAreaView>
			<View style={styles.imageDiv}>
				<Image style={styles.frontImage} source={require("../assets/samarbeid.jpg")} />
				<Text style={styles.header}>Fontenehus</Text>
			</View>

			<ScrollView bounces={false} showsVerticalScrollIndicator={false}>
				<View style={styles.ScrollContainer}>
					<View style={styles.container}>
						<Text>
							Fontenehusenes frivillige arbeidsfellesskap for mennesker som har eller har hatt psykiske
							helseproblemer, bygger på grunnleggende menneskelige behov. Alle trenger vi å bli sett, hørt,
							være til nytte, tilhøre et fellesskap og mestre oppgaver som må løses. På fontenehus er
							medlemmer og ansatte kolleger som sammen driver et kunnskapsbasert og arbeidsrettet
							rehabiliteringstilbud.
							{"\n"}
							Fontenehusene inspirerer, støtter og motiverer medlemmer til aktiv samfunnsdeltakelse,
							studier og ordinær jobb. Samtidig er fontenehusenes arbeidsfellesskap et godt tilbud for deg
							som ikke kan ha ordinær jobb av helsemessige grunner.
							{"\n"}
							Fontenehus er åpent for alle. Det trengs verken henvisning eller vedtak. Medlemmer bestemmer
							selv hvor mye, og hvordan, en vil delta. Frivillighet er nøkkelen til fontenehusenes suksess.
						</Text>
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
		marginTop: 250,
		marginLeft: 20,
		marginRight: 20,
	},
	ScrollContainer: {
		height: 600,
	},
});
