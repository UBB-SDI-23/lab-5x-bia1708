import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
// import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const AppMenu = () => {
	const location = useLocation();
	const path = location.pathname;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ marginBottom: "20px" }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ mr: 5 }}>
						Manage Movies
					</Typography>
					<Button
						variant={path.startsWith("/movies") ? "outlined" : "text"}
						to="/movies"
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}
						startIcon={<LocalLibraryIcon />}>
						Movies
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};