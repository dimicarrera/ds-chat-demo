import React from "react";

import Sidebar from "./Sidebar";
import Main from "./Main";
import classes from "./Layout.module.css";

const Layout: React.FC<{ loggedUser: string }> = (props) => {
	return (
		<div className={classes.layout}>
			<Sidebar loggedUser={props.loggedUser} />
			<Main loggedUser={props.loggedUser} />
		</div>
	);
};

export default Layout;
