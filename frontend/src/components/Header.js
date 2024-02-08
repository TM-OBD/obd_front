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

const MUIAppBar = styled(AppBar)`
	background-color: inherit;
	box-shadow: none;
	zIndex: 3;
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


function Header({sections}) {
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
				<MUIBox isMobile={isMobile}>
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
									{sections.map((sc) => (
										<MenuItem key={sc} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{sc}</Typography>
										</MenuItem>
									))}
								</Menu>
							</>
						) : (
							sections.map((sc) => (
								<Button key={sc} sx={{ my: 2, color: "#F1F1F1" }}>
									{sc}
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
