import react from "react";
import "./App.css";
import workspace from "../assets/Workspace.png";
import Bgrid from "./Bgrid";

function App() {
	return (
		<>
			<div>
				<a href="#" target="_blank">
					<img
						src={workspace}
						className="workspace react"
						alt="React workspace"
					/>
				</a>

				<div className="gridslide">
					<Bgrid />
					<Bgrid />
					<Bgrid />
				</div>
			</div>
		</>
	);
}

export default App;
