import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

export const MuiStyles = makeStyles({
	paper: {
		backgroundColor: `${theme.colors.gray[800]} !important`,
		color: `${theme.colors.gray[50]} !important`,
		borderBottomLeftRadius: theme.border.radius,
		borderBottomRightRadius: theme.border.radius,
		maxHeight: "60rem",
		boxShadow: "0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .5rem rgba(51,51,51,0.76) inset",
		"& .MuiAutocomplete-noOptions": {
			color: `${theme.colors.gray[50]}`,
		},
		"&::-webkit-scrollbar": {
			width: "8px",
		},
		"&::-webkit-scrollbar-track": {
			background: theme.colors.gray[800],
		},
		"&::-webkit-scrollbar-thumb": {
			background: theme.colors.green[500],
			borderRadius: "8px",
		},
	},
	root: {
		width: "100%",
		height: "6rem",
		backgroundColor: `${theme.colors.gray[800]} !important`,
		color: `${theme.colors.gray[50]} !important`,
		fontWeight: "bold",
		borderRadius: theme.border.radius,
		margin: 0,
		padding: 0,
		display: "flex",
		alignItems: "center",
		"& .MuiFormLabel-root": {
			color: `${theme.colors.gray[300]} !important`,
		},
		"& .MuiOutlinedInput-root": {
      "& fieldset": {
				borderRadius: `${theme.border.radius} !important`,
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.colors.green[500],
      },
    },
		"& .MuiSvgIcon-root": {
			fill: `${theme.colors.gray[50]}`,
			backgroundColor: "transparent !important",
		},
		"& .Mui-disabled": {
			color: `${theme.colors.gray[50]} !important`,
			"-webkit-text-fill-color": "rgba(255, 255, 255, 0.486);"
		},
		"& .MuiInput-input:-webkit-autofill, & .MuiInput-input:-webkit-autofill:hover, & .MuiInput-input:-webkit-autofill:focus": {
			transition: "background-color 5000s ease-in-out 0s",
			border: "none",
			"-webkit-text-fill-color": theme.colors.gray[900],
		},
	},
	textFieldRoot: {
		width: "100%",
		height: "100%",
		backgroundColor: `${theme.colors.gray[800]} !important`,
		color: `${theme.colors.gray[50]} !important`,
		borderRadius: `${theme.border.radius}`,
		margin: 0,
		padding: 0,
		"& .MuiSvgIcon-root": {
			fill: `${theme.colors.gray[50]}`
		},
	},
	listItem: {
		"&:hover": {
			backgroundColor: `${theme.colors.gray[900]} !important`,
			borderRadius: `${theme.border.radius} !important`,
		},
	},
	selected: {
		backgroundColor: `${theme.colors.gray[900]} !important`,
		borderRadius: `${theme.border.radius} !important`,
		fontWeight: "bold",
		color: `${theme.colors.gray[50]} !important`,
		// color: `${theme.colors.green[500]} !important`,
	},
	renderOptionCheckBox: {
		color: `${theme.colors.green[500]}`,
		fill: `${theme.colors.green[500]}`,
		"&.Mui-checked": {
			color: `${theme.colors.green[500]}`,
		},
	}
});