import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";

interface MultiSelectDropDown {
	value: string[];
	onChange: (e: SelectChangeEvent<string[]>) => void;
	options: {
		isDisabled: boolean;
		value: string | number;
		label: string;
	}[];
	onRemove: (val: string) => void;
	placeholder?: string;
}

export default function MultipleSelectChip({
	value,
	onChange,
	options,
	onRemove,
	placeholder,
}: MultiSelectDropDown) {
	return (
		<div>
			<FormControl sx={{ m: 1, width: 200 }}>
				<Select
					id="demo-multiple-chip"
					multiple
					value={value}
					size="small"
					onChange={onChange}
					placeholder={placeholder}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip
									size="small"
									key={value}
									label={value}
									onDelete={() => onRemove(value)}
									deleteIcon={
										<CancelIcon
											onMouseDown={(event) => event.stopPropagation()}
										/>
									}
								/>
							))}
						</Box>
					)}
				>
					{options.map((option) => (
						<MenuItem key={option.label} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
