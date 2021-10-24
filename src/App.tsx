import React from "react";

import Layout from "./components/Layout";

function App() {
	const loggedUser = "Thomas Short";

	return (
		<div className="App">
			<Layout loggedUser={loggedUser} />
		</div>
	);
}

export default App;
