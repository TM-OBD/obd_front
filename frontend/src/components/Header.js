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
`;

const MUIBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 35px;
	margin-left: ${({ isMobile }) => (isMobile ? "20px" : "75px")}; 
	border-bottom: none;
`;

const section = ["Як це працює", "Тарифи", "Про нас", "Відгуки", "Контакти", "FAQ"];

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
		<MUIAppBar position="static">
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
									{section.map((sc) => (
										<MenuItem key={sc} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{sc}</Typography>
										</MenuItem>
									))}
								</Menu>
							</>
						) : (
							section.map((sc) => (
								<Button key={sc} sx={{ my: 2, color: "white" }}>
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
