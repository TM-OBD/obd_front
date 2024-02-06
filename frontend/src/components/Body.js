import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

// Компонент боди приложения
function Body() {


	return (
		<>
			<Box sx={{ background: `url('../images/Main/Background.jpg')`, backgroundSize: 'cover', marginLeft: "95px", marginTop: "20px" }}>
				<Grid container
					flexDirection={"column"}>
					<Grid item>
						<Typography
							fontFamily={'Inter, sans-serif'}
							fontWeight={'400'}
							fontSize={"220px"}
							color={"#F1F1F1"}>iSyb Auto</Typography>
					</Grid>
					<Grid item>
						<Typography
							fontFamily={'Unbounded, sans-serif'}
							fontWeight={'400'}
							fontSize={"30px"}
							color={"#F1F1F1"}
							display={"inline"}
						>
							сучасний сервіс
							<span style={{ color: "#54afec", marginLeft: "5px" }}>для авто</span>
						</Typography>
					</Grid>
					<Grid item marginTop={"70px"}>
						<Typography
							fontFamily={'Inter, sans-serif'}
							fontWeight={'400'}
							fontSize={"20px"}
							lineHeight={'120%'}
							color={"#F1F1F1"}
							display={"inline"}>
							Встановивши спеціальне обладнання в <br />
							OBD роз'єм, ви підключаєтеся до <br />
							сервера, який починає моніторити ваш <br />
							автомобіль у режимі
							<span style={{ color: "#54afec", marginLeft: "5px" }}>24/7.</span>
						</Typography>
					</Grid>
					<Grid item
						style={{
							marginTop: '70px'
						}}
					>
						<Button variant='contained'
							style={{
								"borderRadius": '15px', "padding": "24px 50px",
								"width": '335px', 'height': '63px', "background": '#54afec',
								"fontFamily": "Inter, sans-serif", "fontWeight": "700",
								"fontSize": "20px", "color": "#f1f1f1"
							}}>Придбати тариф</Button>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
export default Body;
