import { FC, HTMLAttributes, ReactNode } from "react";
import { ListItem } from "@mui/material";
import { ClassNameMap } from "@mui/styles";
import { MuiStyles } from "./styles";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { AutocompleteRenderOptionState } from "@mui/material/Autocomplete";
import { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

interface AutocompleteProps extends MuiAutocompleteProps<any, any, any, any> {
	options: Array<{ [key: string]: any }>
};

const Autocomplete: FC<AutocompleteProps> = ({ options, ...props }): JSX.Element => {
	const styles: ClassNameMap<"paper" | "root" | "textFieldRoot" | "listItem" | "selected" | "renderOptionCheckBox"> = MuiStyles();

	const renderOption = (propsLI: HTMLAttributes<HTMLLIElement>, option: any, state: AutocompleteRenderOptionState): ReactNode => {
		if (props.renderOption) {
			console.log(props.renderOption(propsLI, option, state));
			return props.renderOption(propsLI, option, state);
		} else {
			return (
				<ListItem  {...propsLI} classes={{ selected: styles.selected, root: state.selected ? styles.selected : styles.listItem }}>
					{option?.label}
				</ListItem>
			);
		};
	};

	return (
		<MuiAutocomplete
			data-testid="autocomplete"
			classes={{ root: styles.root, paper: styles.paper, input: styles.textFieldRoot }}
			options={options}
			renderOption={renderOption}
			{...props}
		/>
	);
};

export default Autocomplete;