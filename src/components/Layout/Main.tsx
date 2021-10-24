import React from "react";

import ChatMessageList from "../UI/Chat/ChatMessageList";
import MessageInput from "../UI/Chat/MessageInput";
import classes from "./Main.module.css";

const Main: React.FC<{ loggedUser: string }> = (props) => {
	return (
		<div className={classes.main}>
			<div className={classes.topbar}>Conversation with Adam Jensen</div>
			<div className={classes.container}>
				<div className={classes.chatArea}>
					<ChatMessageList loggedUser={props.loggedUser} />
					<MessageInput />
				</div>
			</div>
		</div>
	);
};

export default Main;
