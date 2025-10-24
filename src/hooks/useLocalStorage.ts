import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
	const [value, setValue] = useState(() => {
		if (typeof window === "undefined") {
			return initialValue;
		}
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			try {
				window.localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.log(error);
			}
		}
	}, [key, value]);

	return [value, setValue] as const;
};
