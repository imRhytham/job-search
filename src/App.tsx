import { Box } from "@mui/material";
import JobList from "./components/JobList";

function App() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h1> Navbar</h1>
				<JobList />
			</Box>
		</>
	);
}

export default App;
