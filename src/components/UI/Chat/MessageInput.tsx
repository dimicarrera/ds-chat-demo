import React from "react";

import classes from "./MessageInput.module.css";

const MessageInput: React.FC = () => {
	return (
		<div className={classes.container}>
			<input className={classes.msgInput} type="text" />
			<button className={classes.sendBtn}>^</button>
		</div>
	);
};

export default MessageInput;
