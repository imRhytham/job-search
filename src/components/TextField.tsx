import { TextField as Input } from "@mui/material";

interface TextFieldProps {
	placeholder?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
}

const TextField = ({ placeholder, value, onChange, type }: TextFieldProps) => {
	return (
		<Input
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			type={type}
			size="small"
		/>
	);
};

export default TextField;
