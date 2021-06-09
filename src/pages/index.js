import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdPlayArrow, MdMailOutline, MdPhoneInTalk, MdZoomOutMap } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Artificial Intelligence
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z"} />
			<meta name={"msapplication-TileColor"} content={"#0A121F"} />
		</Helmet>
		<Section background="#0A121F">
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				lg-margin="0px 30px 0px 30px"
				max-width="1220px"
			/>
			<Box
				width="30%"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				padding="0px 0px 0px 0px"
				lg-width="50%"
				sm-width="65%"
				sm-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z" sm-width="27px" />
				<Text
					color="--primary"
					font="600 22px/30px --fontFamily-googleOpenSans"
					margin="16px 0px 16px 15px"
					md-font="600 20px/30px --fontFamily-googleOpenSans"
					sm-font="600 14px/30px --fontFamily-googleOpenSans"
				>
					Artificial Intelligence
				</Text>
			</Box>
			<Box
				width="70%"
				display="flex"
				align-items="center"
				lg-width="50%"
				justify-content="space-between"
				flex-wrap="wrap"
				lg-justify-content="flex-end"
				sm-width="35%"
			>
				<Box>
					<Components.QuarklycommunityKitMobileSidePanel breakpoint="lg" color="#ffffff">
						<Override slot="Button Icon" color="#ffffff" />
						<Override slot="Content" background="transparent" lg-background="#ffffff" />
						<Override slot="Button Text" lg-font="600 16px --fontFamily-googleOpenSans" lg-text-transform="uppercase" lg-letter-spacing="2px" />
						<Override slot="Children" lg-display="flex" lg-flex-direction="column" lg-align-items="center" />
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="600 16px/22px --fontFamily-googleOpenSans"
							margin="0px 20px 0px 20px"
							lg-color="#3A68B8"
							lg-padding="5px 5px 5px 5px"
							lg-margin="5px 20px 5px 20px"
							lg-font="600 18px/22px --fontFamily-googleOpenSans"
							hover-color="--primary"
							transition="color 0.4s ease 0s"
						>
							Home
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="600 16px/22px --fontFamily-googleOpenSans"
							margin="0px 20px 0px 20px"
							lg-color="#3A68B8"
							lg-padding="5px 5px 5px 5px"
							lg-margin="5px 20px 5px 20px"
							lg-font="600 18px/22px --fontFamily-googleOpenSans"
							hover-color="--primary"
							transition="color 0.4s ease 0s"
						>
							About
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="600 16px/22px --fontFamily-googleOpenSans"
							margin="0px 20px 0px 20px"
							lg-color="#3A68B8"
							lg-padding="5px 5px 5px 5px"
							lg-margin="5px 20px 5px 20px"
							lg-font="600 18px/22px --fontFamily-googleOpenSans"
							hover-color="--primary"
							transition="color 0.4s ease 0s"
						>
							Services
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="600 16px/22px --fontFamily-googleOpenSans"
							margin="0px 20px 0px 20px"
							lg-color="#3A68B8"
							lg-padding="5px 5px 5px 5px"
							lg-margin="5px 20px 5px 20px"
							lg-font="600 18px/22px --fontFamily-googleOpenSans"
							hover-color="--primary"
							transition="color 0.4s ease 0s"
						>
							Blog
						</Link>
						<Link
							href="#"
							text-decoration-line="initial"
							color="--light"
							font="600 16px/22px --fontFamily-googleOpenSans"
							margin="0px 20px 0px 20px"
							lg-color="#3A68B8"
							lg-padding="5px 5px 5px 5px"
							lg-margin="5px 20px 5px 20px"
							lg-font="600 18px/22px --fontFamily-googleOpenSans"
							hover-color="--primary"
							transition="color 0.4s ease 0s"
						>
							Contact
						</Link>
					</Components.QuarklycommunityKitMobileSidePanel>
				</Box>
				<Box display="flex" sm-display="none">
					<Link
						href="#"
						color="--light"
						text-decoration-line="initial"
						font="600 16px/21px --fontFamily-googleOpenSans"
						padding="15px 30px 15px 30px"
						border-radius="5px"
						lg-margin="0px 0px 0px 20px"
						background="--color-primary"
					>
						Sign In
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0">
			<Override slot="SectionContent" max-width="1220px" flex-wrap="wrap" flex-direction="row" />
			<Box width="55%" display="flex" align-items="center" lg-width="100%">
				<Box
					margin="10px 20px 10px 20px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
				>
					<Text
						font="600 18px/28px --fontFamily-googleOpenSans"
						color="--primary"
						text-transform="uppercase"
						margin="0px 0px 10px 0px"
						sm-font="600 16px/28px --fontFamily-googleOpenSans"
					>
						Next genaretion platform
					</Text>
					<Text
						font="800 55px/70px --fontFamily-googleOpenSans"
						color="--light"
						margin="0px 0px 40px 0px"
						lg-text-align="center"
						sm-font="800 35px/40px --fontFamily-googleOpenSans"
					>
						Artificial intelligence & Syber security
					</Text>
					<Text
						font="600 18px/28px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 50px 0px"
						width="80%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
					</Text>
					<Box display="flex" sm-align-items="center" sm-flex-direction="column" sm-justify-content="center">
						<Link
							href="#"
							color="--light"
							text-decoration-line="initial"
							font="600 16px/21px --fontFamily-googleOpenSans"
							padding="15px 30px 15px 30px"
							border-radius="5px"
							lg-margin="0px 0px 0px 20px"
							background="--color-primary"
							margin="0px 20px 0px 0px"
							display="flex"
							align-items="center"
							justify-content="center"
							sm-font="600 14px/21px --fontFamily-googleOpenSans"
							sm-margin="0px 0px 0px 0px"
							sm-padding="15px 23px 15px 23px"
							sm-width="125px"
							sm-height="24px"
						>
							Get Started
						</Link>
						<Link
							href="#"
							color="--light"
							text-decoration-line="initial"
							font="600 16px/21px --fontFamily-googleOpenSans"
							padding="15px 30px 15px 15px"
							border-radius="5px"
							lg-margin="0px 0px 0px 20px"
							background="--color-primary"
							margin="0px 0px 0px 0px"
							display="flex"
							align-items="center"
							sm-font="600 14px/21px --fontFamily-googleOpenSans"
							sm-margin="20px 0px 0px 0px"
							sm-width="125px"
							sm-justify-content="center"
							sm-height="24px"
						>
							<Icon category="md" icon={MdPlayArrow} margin="0px 5px 0px 0px" size="34px" />
							Watch Video
						</Link>
					</Box>
				</Box>
			</Box>
			<Box width="45%" lg-width="100%">
				<Box
					margin="10px 10px 10px 10px"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
				>
					<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/9%201.png?v=2021-06-08T11:39:30.279Z" />
				</Box>
			</Box>
			<Box width="100%" display="flex" flex-wrap="wrap" margin="80px 0px 0px 0px">
				<Box
					width="20%"
					margin="0px 3% 0px 0px"
					lg-margin="0px 0% 0px 0px"
					lg-width="50%"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Box margin="10px 20px 10px 20px">
						<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20400.svg?v=2021-06-08T11:45:39.550Z" md-width="100%" />
					</Box>
				</Box>
				<Box
					width="20%"
					margin="0px 3% 0px 0px"
					lg-margin="0px 0% 0px 0px"
					lg-width="50%"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Box margin="10px 20px 10px 20px">
						<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20401.svg?v=2021-06-08T11:45:39.543Z" md-width="100%" />
					</Box>
				</Box>
				<Box
					width="20%"
					margin="0px 3% 0px 0px"
					lg-margin="0px 0% 0px 0px"
					lg-width="50%"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Box margin="10px 20px 10px 20px">
						<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20402.svg?v=2021-06-08T11:45:39.545Z" md-width="100%" />
					</Box>
				</Box>
				<Box
					width="20%"
					margin="0px 3% 0px 0px"
					lg-margin="0px 0% 0px 0px"
					lg-width="50%"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Box margin="10px 20px 10px 20px">
						<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20403.svg?v=2021-06-08T11:45:39.545Z" md-width="100%" />
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="130px 0 140px 0" background="#020A18">
			<Override slot="SectionContent" max-width="1220px" flex-wrap="wrap" flex-direction="row" />
			<Box width="55%" lg-width="100%" display="flex">
				<Box
					margin="10px 10px 10px 10px"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
				>
					<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/about%204.png?v=2021-06-08T11:59:44.149Z" width="100%" />
				</Box>
			</Box>
			<Box width="45%" display="flex" align-items="center" lg-width="100%">
				<Box
					margin="10px 20px 10px 20px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
				>
					<Text
						font="700 40px/52px --fontFamily-googleOpenSans"
						color="--light"
						margin="0px 0px 40px 0px"
						lg-text-align="center"
						sm-font="800 35px/40px --fontFamily-googleOpenSans"
					>
						Apply AI, Deep Learning and Data Sciece to solve{"\n\n"}
					</Text>
					<Text
						font="600 18px/28px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 50px 0px"
						width="80%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
					<Box display="flex" sm-flex-direction="column" sm-align-items="center" sm-justify-content="center">
						<Link
							href="#"
							color="--light"
							text-decoration-line="initial"
							font="600 16px/21px --fontFamily-googleOpenSans"
							padding="15px 30px 15px 30px"
							border-radius="5px"
							lg-margin="0px 0px 0px 20px"
							background="--color-primary"
							margin="0px 20px 0px 0px"
							display="flex"
							align-items="center"
							justify-content="center"
							sm-font="600 14px/21px --fontFamily-googleOpenSans"
							sm-margin="0px 0px 0px 0px"
							sm-width="125px"
							sm-padding="15px 23px 15px 23px"
							sm-height="24px"
						>
							Learn More{"\n\n"}
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="#020A18" padding="80px 0 80px 0">
			<Override
				slot="SectionContent"
				max-width="none"
				flex-wrap="wrap"
				flex-direction="row"
				width="95%"
			/>
			<Box width="25%" lg-width="50%" sm-width="100%">
				<Box
					margin="10px 10px 10px 10px"
					background="#0F1624"
					padding="40px 20px 30px 20px"
					border-radius="10px"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
				>
					<Image width="64px" height="64px" margin="0px 0px 27px 0px" src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/welcome-3%201.svg?v=2021-06-09T12:24:20.441Z" />
					<Text text-align="center" color="--grey" font="700 20px/25px --fontFamily-googleOpenSans" margin="0px 0px 30px 0px">
						Naxly as the Winners in Global Agency Awards{"\n\n"}
					</Text>
					<Text text-align="center" font="600 14px/22px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" lg-width="50%" sm-width="100%">
				<Box
					margin="10px 10px 10px 10px"
					background="#0F1624"
					padding="40px 20px 30px 20px"
					border-radius="10px"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
				>
					<Image width="64px" height="64px" margin="0px 0px 27px 0px" src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/welcome5.svg?v=2021-06-09T12:25:45.300Z" />
					<Text text-align="center" font="700 20px/25px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Expert Prespective Agency Awards{"\n\n"}
					</Text>
					<Text text-align="center" font="600 14px/22px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" lg-width="50%" sm-width="100%">
				<Box
					margin="10px 10px 10px 10px"
					background="#0F1624"
					padding="40px 20px 30px 20px"
					border-radius="10px"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
				>
					<Image width="64px" height="64px" margin="0px 0px 27px 0px" src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/welcome7.svg?v=2021-06-09T12:25:45.302Z" />
					<Text text-align="center" font="700 20px/25px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Business Prespective Global Agency Awards{"\n\n"}
					</Text>
					<Text text-align="center" font="600 14px/22px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" lg-width="50%" sm-width="100%">
				<Box
					margin="10px 10px 10px 10px"
					background="#0F1624"
					padding="40px 20px 30px 20px"
					border-radius="10px"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
				>
					<Image width="64px" height="64px" margin="0px 0px 27px 0px" src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/welcome6.svg?v=2021-06-09T12:25:45.308Z" />
					<Text text-align="center" font="700 20px/25px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Value for Results in Global Agency Awards{"\n\n"}
					</Text>
					<Text text-align="center" font="600 14px/22px --fontFamily-googleOpenSans" color="--grey" margin="0px 0px 30px 0px">
						Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="130px 0 140px 0" background="#020A18">
			<Override slot="SectionContent" max-width="1220px" flex-wrap="wrap" flex-direction="row" />
			<Box width="50%" display="flex" align-items="center" lg-width="100%">
				<Box
					margin="10px 20px 10px 20px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
				>
					<Text
						font="700 40px/52px --fontFamily-googleOpenSans"
						color="--light"
						margin="0px 0px 40px 0px"
						lg-text-align="center"
						sm-font="800 35px/40px --fontFamily-googleOpenSans"
					>
						What our clients say about our awesome solutions{"\n\n"}
					</Text>
					<Text
						font="600 16px/25px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 20px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
					>
						To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.{"\n\n"}
					</Text>
					<Text
						font="600 16px/25px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 20px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .{"\n\n"}
					</Text>
					<Text
						font="600 16px/25px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 20px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder previewing layouts and visual mockups.{"\n\n"}
					</Text>
					<Text
						font="600 16px/25px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 20px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="50%" lg-width="100%" display="flex">
				<Box
					margin="10px 10px 10px 10px"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
				>
					<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/about12321.png?v=2021-06-09T12:27:34.159Z" width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="70px 0 140px 0" background="#060E1C" lg-padding="30px 0 30px 0" sm-padding="70px 0 70px 0">
			<Override slot="SectionContent" max-width="1220px" flex-wrap="wrap" flex-direction="row" />
			<Box
				width="25%"
				display="flex"
				align-items="center"
				lg-width="100%"
				lg-justify-content="center"
				lg-align-items="center"
			>
				<Box
					margin="0px 10px 0px 10px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
					lg-width="50%"
					sm-width="100%"
				>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						lg-width="50%"
						sm-width="100%"
						sm-align-items="center"
						flex-direction="column"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Image src="https://uploads.quarkly.io/60be2d03625b88001ed83546/images/Group%20396.png?v=2021-06-07T14:37:41.276Z" sm-width="47px" />
						<Text
							color="--primary"
							font="600 15px/21px --fontFamily-googleOpenSans"
							margin="5px 0px 0px 0px"
							md-font="600 20px/30px --fontFamily-googleOpenSans"
							sm-font="600 14px/30px --fontFamily-googleOpenSans"
						>
							Artificial Intelligence
						</Text>
					</Box>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 27px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						lg-margin="9px 0px 20px 0px"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 20px 0px" lg-margin="0 0 9px 0">
						<Icon
							category="md"
							icon={MdMailOutline}
							color="--light"
							margin="0px 4px 0px 0px"
							size="16px"
						/>
						<Text
							font="600 14px/17px --fontFamily-googleOpenSans"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							lg-text-align="center"
							sm-width="100%"
						>
							Company@gmail.com.com{"\n\n\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 20px 0px" lg-margin="0 0 9px 0">
						<Icon
							category="md"
							icon={MdPhoneInTalk}
							color="--light"
							margin="0px 4px 0px 0px"
							size="16px"
						/>
						<Text
							font="600 14px/17px --fontFamily-googleOpenSans"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							lg-text-align="center"
							sm-width="100%"
						>
							Phone: (064) 332-1233{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px" lg-margin="0 0 9px 0">
						<Icon
							category="md"
							icon={MdZoomOutMap}
							color="--light"
							margin="0px 4px 0px 0px"
							size="16px"
						/>
						<Text
							font="600 14px/17px --fontFamily-googleOpenSans"
							color="--light"
							margin="0px 0px 0px 0px"
							width="100%"
							lg-text-align="center"
							sm-width="100%"
						>
							450 Wall Street, USA, New York{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				width="16.6666666667%"
				display="flex"
				lg-width="33.33%"
				justify-content="center"
				lg-margin="20px 0px 20px 0px"
				sm-width="100%"
			>
				<Box
					margin="0px 10px 0px 10px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
					lg-margin="0px 10px 0px 10px"
				>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						lg-width="100%"
						sm-width="65%"
						sm-align-items="center"
						flex-direction="column"
						margin="0px 0px 25px 0px"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Text
							color="--light"
							font="600 16px/20px --fontFamily-googleOpenSans"
							margin="0px 0px 0px 0px"
							md-font="600 20px/30px --fontFamily-googleOpenSans"
							sm-font="600 14px/30px --fontFamily-googleOpenSans"
							text-transform="uppercase"
							letter-spacing="1px"
						>
							INFORMATION{"\n\n"}
						</Text>
					</Box>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 9px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						New Collection{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						About Store{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Contact Us{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Latest News{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Our Sitemap{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 0px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Orders History{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				width="16.6666666667%"
				display="flex"
				lg-width="33.33%"
				justify-content="center"
				lg-margin="20px 0px 20px 0px"
				sm-width="100%"
			>
				<Box
					margin="0px 10px 0px 10px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
				>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						lg-width="100%"
						sm-width="65%"
						sm-align-items="center"
						flex-direction="column"
						margin="0px 0px 25px 0px"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Text
							color="--light"
							font="600 16px/20px --fontFamily-googleOpenSans"
							margin="0px 0px 0px 0px"
							md-font="600 20px/30px --fontFamily-googleOpenSans"
							sm-font="600 14px/30px --fontFamily-googleOpenSans"
							text-transform="uppercase"
							letter-spacing="1px"
						>
							FOOTER MENU{"\n\n"}
						</Text>
					</Box>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 9px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Instagram profile{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						New Collection{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Contact Us{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Latest News{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Terms & Conditions{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 0px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Purchase Theme{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				width="16.6666666667%"
				display="flex"
				lg-width="33.33%"
				justify-content="center"
				lg-margin="20px 0px 20px 0px"
				sm-width="100%"
			>
				<Box
					margin="0px 10px 0px 10px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
				>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						lg-width="100%"
						sm-width="65%"
						sm-align-items="center"
						flex-direction="column"
						margin="0px 0px 25px 0px"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Text
							color="--light"
							font="600 16px/20px --fontFamily-googleOpenSans"
							margin="0px 0px 0px 0px"
							md-font="600 20px/30px --fontFamily-googleOpenSans"
							sm-font="600 14px/30px --fontFamily-googleOpenSans"
							text-transform="uppercase"
							letter-spacing="1px"
						>
							USEFUL LINKS{"\n\n"}
						</Text>
					</Box>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="0px 0px 9px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Instagram profile{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						New Collection{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Contact Us{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Latest News{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 12px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Terms & Conditions{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 0px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						hover-color="--light"
						transition="color 0.3s ease 0s"
					>
						Purchase Theme{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				width="25%"
				display="flex"
				lg-width="100%"
				lg-align-items="center"
				lg-justify-content="center"
			>
				<Box
					margin="0px 10px 0px 30px"
					display="flex"
					flex-direction="column"
					lg-display="flex"
					lg-align-items="center"
					lg-justify-content="center"
					lg-text-align="center"
					sm-margin="10px 0px 10px 0px"
					lg-margin="30px 10px 0px 30px"
				>
					<Box
						width="100%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						padding="0px 0px 0px 0px"
						lg-width="50%"
						sm-width="65%"
						sm-align-items="center"
						flex-direction="column"
						margin="0px 0px 25px 0px"
						lg-display="flex"
						lg-align-items="center"
						lg-justify-content="center"
						lg-margin="0px 0px 10px 0px"
					>
						<Text
							color="--light"
							font="600 16px/20px --fontFamily-googleOpenSans"
							margin="0px 0px 0px 0px"
							md-font="600 20px/30px --fontFamily-googleOpenSans"
							sm-font="600 14px/30px --fontFamily-googleOpenSans"
							text-transform="uppercase"
							letter-spacing="1px"
						>
							ABOUT THE STORE{"\n\n"}
						</Text>
					</Box>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--grey"
						margin="9px 0px 0px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
					>
						Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.{"\n\n"}
					</Text>
					<Text
						font="600 14px/17px --fontFamily-googleOpenSans"
						color="--light"
						margin="29px 0px 0px 0px"
						width="100%"
						lg-text-align="center"
						sm-width="100%"
						lg-margin="10px 0px 0px 0px"
					>
						www.company.com{"\n\n"}
					</Text>
				</Box>
			</Box>
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