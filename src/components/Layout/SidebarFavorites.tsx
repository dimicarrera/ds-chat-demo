import React from "react";

import classes from "./SidebarFavorites.module.css";

const SidebarFavorites = () => {
	return (
		<div className={classes.container}>
			<h4>Favorites</h4>
			<p>Adam Jensen</p>
			<p>Megan Reed</p>
		</div>
	);
};

export default SidebarFavorites;
