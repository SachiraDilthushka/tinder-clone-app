import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import FormIcon from '@mui/icons-material/Forum'
import "./Header.css";
import { IconButton } from '@mui/material';

export default function Header() {
	return (
		<div className ="header">	
			<IconButton>
				<PersonIcon fontSize = "large" className = "header_icon"/>	
			</IconButton>
			<img  className ="header_logo"
			src="https://cdn3.iconfinder.com/data/icons/social-network-flat-3/100/Tinder-1024.png" alt="" />
			
			<IconButton>
			<FormIcon fontSize = "large" className="header_icon"/>
			</IconButton> 
		</div>
	)
}
