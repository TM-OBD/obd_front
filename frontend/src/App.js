import * as React from "react";
import Header from "./components/Header/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const InnerContainer = styled(Box)`
	width: 100%;
`;


// Основной компонент приложения
function App() {


	return (
			<div className="outer-container">
					<Header></Header>
			</div>
	);
}

export default App;
