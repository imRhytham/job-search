import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { fetchJobs } from "../redux/slices/jobSlice";
import { Box, Grid } from "@mui/material";
import JobCard from "./JobCard";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const JobList = () => {
	const dispatch = useAppDispatch();
	const { items, offset } = useAppSelector((state) => state.jobs);
	console.log(items);

	useEffect(() => {
		dispatch(fetchJobs({ limit: 10, offset: offset }));
	}, []);

	useInfiniteScroll(() => {
		dispatch(fetchJobs({ limit: 10, offset: offset }));
	});

	return (
		<Box
			sx={{
				display: "flex",
				p: 2,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid container spacing={{ xs: 2, md: 3 }}>
				{items.map((item) => (
					<Grid item xs={12} sm={6} md={3} key={item.jdUid}>
						<JobCard job={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default JobList;
