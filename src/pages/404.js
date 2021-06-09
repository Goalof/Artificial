import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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