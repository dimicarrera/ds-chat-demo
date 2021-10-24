import React, { FC } from "react";

interface IUserAvatarProps {
	className: string;
	userName: string;
	userPic: string;
	userBg: string;
}

const UserAvatar: FC<IUserAvatarProps> = (props) => {
	return (
		<div className={props.className} style={{ backgroundColor: props.userBg }}>
			<span>{props.userPic}</span>
		</div>
	);
};

export default UserAvatar;
