import { useEffect } from "react";

type FetchFunction = () => void;

function useInfiniteScroll(fetchFunction: FetchFunction) {
	useEffect(() => {
		function handleScroll() {
			if (
				Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
				Math.floor(document.documentElement.offsetHeight)
			) {
				fetchFunction();
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [fetchFunction]);
}

export default useInfiniteScroll;
