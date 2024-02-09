import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/Logo.svg";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {sectionsData} from "../shared/Sections";

const MUIAppBar = styled(AppBar)`
	background-color: inherit;
	box-shadow: none;
	z-index: 3;
`;

const MUIBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	border-bottom: none;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 50;
`;


function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<MUIAppBar position="absolute">
			<Container>
				<MUIBox>
					<img alt="iSyb" src={Logo} />
					<Box sx={{ display: "flex" }}>
						{isMobile ? (
							<>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									sx={{ color: "white" }}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "left",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
								>
									{sectionsData.map(sc => (
										<MenuItem key={sc.id} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{sc.title}</Typography>
										</MenuItem>
									))}
								</Menu>
							</>
						) : (
							sectionsData.map(sc => (
								<Button key={sc.id} sx={{ my: 2, color: "#F1F1F1" }}>
									{sc.title}
								</Button>
							))
						)}
					</Box>
				</MUIBox>
			</Container>
		</MUIAppBar>
	);
}

export default Header;
