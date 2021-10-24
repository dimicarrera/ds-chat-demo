import React, { FC } from "react";

import ChatMessage from "./ChatMessage";
import UserAvatar from "./UserAvatar";

import classes from "./ChatMessageList.module.css";

export interface IMsg {
	id: number;
	sender: string;
	senderAvatar: string;
	senderAvatarBg: string;
	msgText: string;
	date: string;
}

const CHAT_HISTORY: IMsg[] = [
	{
		id: 1,
		sender: "Adam Jensen",
		senderAvatar: "AJ",
		senderAvatarBg: "darkgreen",
		msgText: "listen, I have some energy bars I could spare, I'll come by.",
		date: "2021-10-24T09:24:00.818Z",
	},
	{
		id: 2,
		sender: "Adam Jensen",
		senderAvatar: "AJ",
		senderAvatarBg: "darkgreen",
		msgText:
			"wait a sec, there's something in the vents I need to check out first.",
		date: "2021-10-24T09:24:47.818Z",
	},
	{
		id: 3,
		sender: "Thomas Short",
		senderAvatar: "TS",
		senderAvatarBg: "plum",
		msgText:
			"are you sure it's a good idea, Adam? what if some clowns attack our facility?",
		date: "2021-10-24T09:25:57.818Z",
	},
];

const ChatMessageList: FC<{ loggedUser: string }> = (props) => {
	const handleDialogueSide = (msg: IMsg) => {
		let dialogueSide;
		if (msg.sender === props.loggedUser) {
			dialogueSide = "right";
		} else {
			dialogueSide = "left";
		}
		return dialogueSide;
	};

	let displayAvatar: boolean;
	const handleDisplayAvatar = (array: IMsg[], index: number) => {
		if (CHAT_HISTORY[index - 1]?.sender === CHAT_HISTORY[index].sender) {
			displayAvatar = false;
		} else {
			displayAvatar = true;
		}
		return displayAvatar;
	};

	return (
		<div className={classes.chatMsgList}>
			{CHAT_HISTORY.map((msg, index) => {

				handleDisplayAvatar(CHAT_HISTORY, index);

				return (
					<div key={msg.id} className={classes[handleDialogueSide(msg)]}>
						<div className={classes.chatMsgWrapper}>
							{displayAvatar && (
								<UserAvatar
									className={classes.userAvatar}
									userName={msg.sender}
									userPic={msg.senderAvatar}
									userBg={msg.senderAvatarBg}
								/>
							)}
							<ChatMessage className={classes.chatMsg} text={msg.msgText} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ChatMessageList;
