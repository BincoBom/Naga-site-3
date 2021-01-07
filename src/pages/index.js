import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/5ff77a9f7dc2c5001e035c11/images/background.jpg?v=2021-01-07T22:34:08.410Z) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Box font="300 132px/100px --fontFamily-googleLora" letter-spacing="50px" text-transform="uppercase" text-align="center">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="132px/1.2 --fontFamily-googleCutiveMono"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					ALINA
					<br />
					NAGIMOVA{"\n\n"}
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="normal 300 20px/1.5 --fontFamily-googleLora"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						About me
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" font="300 16px/24px --fontFamily-googleLora">
					<Text margin="0px">
						My name is Alina Nagimova, born and raised in Russia.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px" font="300 18px/1.2 --fontFamily-googleLora">
						I've been working as a professional photographer for more than 4 years and few months.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#f5f4f2"
			display="flex"
			flex-direction="column"
			transition="all 2s --transitionTimingFunction-easeOut 1s"
			width="80%"
		>
			<Text
				font="--text1"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--darkL1"
				margin="0px"
			>
				welcome
			</Text>
			<Text
				as="h1"
				margin="8px 0px 16px 0px"
				font="--title1"
				md-font="--headline2"
				color="--red"
				max-width="850px"
			>
				Portfolio
			</Text>
			<Stack margin-top="auto" color="--dark" font="--text1">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});