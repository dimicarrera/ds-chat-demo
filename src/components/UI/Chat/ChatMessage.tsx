import React, { FC } from "react";

interface IChatMsgProps {
	className: string;
	text: string;
}

const ChatMessage: FC<IChatMsgProps> = ({ text, className }) => {
	return (
		<div className={className}>
			<span>{text}</span>
		</div>
	);
};

export default ChatMessage;
