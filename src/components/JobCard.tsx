import {
	// makeStyles,
	Card,
	CardContent,
	Typography,
	Button,
	Box,
} from "@mui/material";
import { JdSingle } from "../interface";

const classes = {
	root: {
		maxWidth: 345,
		backgroundColor: "#fff",
		padding: "16px",
		borderRadius: "8px",
		height: 500,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
		textTransform: "capitalize",
	},
	location: {
		fontSize: 14,
		color: "#666",
		marginBottom: "8px",
		textTransform: "capitalize",
	},
	salary: {
		fontSize: 14,
		color: "#4caf50",
		marginBottom: "8px",
	},
	descContainer: {
		maxHeight: 270,
		overflow: "hidden",
		textAlign: "justify",
		position: "relative",
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginBottom: "16px",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "clip",
	},
	gradientOverlay: {
		position: "absolute",
		bottom: 0,
		left: 0,
		height: 30,
		background: "linear-gradient(transparent, white)",
	},
	button: {
		marginRight: "8px",
		backgroundColor: "#55EFC4",
		color: "#000",
		mt: 2,
	},
};

interface JobCardProps {
	job: JdSingle;
}

const JobCard = ({ job }: JobCardProps) => {
	const estimatedSalary = (
		minSalary?: number | null,
		maxSalary?: number | null
	) => {
		if (minSalary && maxSalary) {
			return `${minSalary}k - ${maxSalary}k`;
		}
		if (minSalary) {
			return `${minSalary}k`;
		}
		if (maxSalary) {
			return `${maxSalary}k`;
		}
		return "Not disclosed";
	};

	const requiredExp = (minExp?: number | null, maxExp?: number | null) => {
		if (minExp && maxExp) {
			return `${minExp} - ${maxExp} years`;
		}
		if (minExp) {
			return `${minExp} years`;
		}
		if (maxExp) {
			return `${maxExp} years`;
		}
		return "Not disclosed";
	};

	return (
		<Card sx={classes.root} key={job.jdUid}>
			<CardContent>
				<Typography sx={classes.title}>{job.jobRole}</Typography>
				<Typography sx={classes.location}>{job.location}</Typography>
				<Typography sx={classes.salary}>
					Estimated Salary: {job.salaryCurrencyCode}{" "}
					{estimatedSalary(job.minJdSalary, job.maxJdSalary)}
				</Typography>
				<Typography sx={classes.description}>About Company:</Typography>
				<Box sx={classes.descContainer}>
					<Typography>{job.jobDetailsFromCompany}</Typography>
					<Box sx={classes.gradientOverlay}></Box>
				</Box>

				<Typography>
					Experience Required: {requiredExp(job.minExp, job.maxExp)}
				</Typography>
				<a href={job.jdLink}>
					<Button variant="contained" color="primary" sx={classes.button}>
						Easy Apply
					</Button>
				</a>
			</CardContent>
		</Card>
	);
};

export default JobCard;
