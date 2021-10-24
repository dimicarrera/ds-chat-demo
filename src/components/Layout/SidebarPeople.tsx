import React from "react";

import classes from './SidebarPeople.module.css'

const SidebarPeople = () => {
	return (
		<>
			<h4 className={classes.heading}>People</h4>
			<div className={classes.active}>
				<p className={classes.contact}>Adam Jensen</p>
			</div>
		</>
	);
};

export default SidebarPeople;
