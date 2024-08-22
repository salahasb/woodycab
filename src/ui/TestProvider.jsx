import { createContext, useContext, useState } from "react";

const TestContext = createContext();

function TestProvider({ children }) {
	const [current, setCurrent] = useState(null);

	return (
		<TestContext.Provider value={{ current, setCurrent }}>
			{children}
		</TestContext.Provider>
	);
}

function useTest() {
	const context = useContext(TestContext);

	if (context === undefined) {
		throw new Error(`Error in TestProvider`);
	}

	return context;
}

export { TestProvider, useTest };
