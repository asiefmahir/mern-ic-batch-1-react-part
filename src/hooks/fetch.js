import { useState, useEffect } from "react";

// useState -> use State

// useEffect -> use Effect
// use FetchData -> useFetchData

export const useFetchData = (url, initState) => {
    const [data, setData] = useState(initState);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Something went wrong`);
				}

				return res.json();
			})
			.then((result) => {
				setIsLoading(false);
				setData(result);
				setErrorMessage("");
			})
			.catch((err) => {
				setErrorMessage(err.message);
				setIsLoading(false);
				setData([]);
			});
	}, []);

    return {
        data,
        isLoading,
        errorMessage
    }

}