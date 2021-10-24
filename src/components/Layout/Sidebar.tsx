import React from "react";

import SidebarFavorites from "./SidebarFavorites";
import SidebarPeople from "./SidebarPeople";
import classes from "./Sidebar.module.css";

const Sidebar: React.FC<{ loggedUser: string }> = (props) => {
	return (
		<div className={classes.sidebar}>
			<div className={classes.container}>
				<div className={classes.loggedUser}>
					<span className={classes.loggedUserUsername}>{props.loggedUser}</span>
					<div className={classes.loggedUserAvatar}>
						<span>TS</span>
					</div>
				</div>
				<SidebarFavorites />
				<SidebarPeople />
			</div>
		</div>
	);
};

export default Sidebar;
