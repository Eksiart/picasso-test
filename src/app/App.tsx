import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {


	return (
		<div className="app" id="app">
			<Suspense fallback="Loading...">
				<Outlet />
			</Suspense>
		</div>
	)
}

export default App
