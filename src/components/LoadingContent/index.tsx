import { FC } from "react";
import Image from "next/image";
import Box from '@mui/material/Box';
import Backdrop from "@mui/material/Backdrop";
import { useTheme, DefaultTheme } from "styled-components";
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress";
import { GiSoccerBall } from "react-icons/gi";

export const CircularProgressWithContent: FC<{ content?: string | JSX.Element, title?: string }> = (props): JSX.Element => {
  const theme: DefaultTheme = useTheme();
	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress sx={{ color: theme.colors.green[500] }} />
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position="absolute"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					variant="caption"
					component="div"
					color="textSecondary"
					title={props.title}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					{
						props.content && typeof (props.content) === "string"
							? <Image src={props.content} alt={props.title ? props.title : ""} width={50} height={50} />
							: props.content ? props.content : null
					}

				</Typography>
			</Box>
		</Box>
	);
};

const LoadingContent: FC<{ open: boolean }> = ({ open }): JSX.Element => {
  const theme: DefaultTheme = useTheme();
	return (
		<Backdrop
			sx={{ color: theme.colors.green[500], zIndex: (theme) => theme.zIndex.tooltip + 10 }}
			open={open}
		>
			{/* <CircularProgress color="inherit"/> */}
			<CircularProgressWithContent content={<GiSoccerBall size={30} color={theme.colors.gray[50]}/>} title="Meu Time" />
		</Backdrop>
	);
};

export default LoadingContent;
