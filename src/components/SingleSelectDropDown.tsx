import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IconButton, InputAdornment } from "@mui/material";
// import { DeleteOutline } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";

interface SingleSelectDropDownProps {
	value: string;
	onChange: (e: SelectChangeEvent) => void;
	options: {
		isDisabled: boolean;
		value: string | number;
		label: string;
	}[];
	onRemove?: (e: React.MouseEvent) => void;
	placeholder?: string;
}

const SingleSelectDropDown = ({
	value,
	onChange,
	options,
	onRemove,
	placeholder,
}: SingleSelectDropDownProps) => {
	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<Select
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				displayEmpty
				inputProps={{ "aria-label": "Without label" }}
				endAdornment={
					value && (
						<InputAdornment position="start">
							<IconButton size="small" onClick={onRemove}>
								<ClearIcon fontSize="small" />
							</IconButton>{" "}
						</InputAdornment>
					)
				}
			>
				{options.map((option) => (
					<MenuItem disabled={option.isDisabled} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SingleSelectDropDown;
