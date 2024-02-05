import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Logo from "../images/Logo.svg";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';


// const MUIBarContainer = styled(AppBar)`
//   position: sticky;
//   display: flex;
//   top: 0;
//   left: 0;
//   z-index: 4;
//   background: inherit;
// `;

const section = ["Як це працює", "Тарифи", "Про нас", "Відгуки", "Контакти", "FAQ"];


// Компонент хедера приложения
function Header() {


	return (
		<Container maxWidth="xl">
			<header style={{
				"marginTop": "35px",
				"marginLeft": "75px",
				"display": "flex",
				"flexDirection": "row"
			}}>
				<img alt="iSyb" src={Logo} />
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: "536px" }}>
					{section.map((sc) => (
						<Button
							key={sc}
							sx={{ my: 2, color: '#F1F1F1', display: 'block' }}
						>
							{sc}
						</Button>
					))}
				</Box>
			</header>
		</Container>
	);
}
export default Header;