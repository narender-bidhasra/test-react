import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const headerTabs = [
	{label: 'Home', href:"/"},
	{label: 'About', href:"/about"},
	{label: 'Post', href:"/post"},
	{label: 'Comment', href:"/comment"},
	{label: 'Photo', href:"/photo"},
	{label: 'User', href:"/user"}
]

function Menus() {

	const history = useHistory();

	const navigate =(href) => {
		history.push(href)
		setActiveTab(href)
	}

	const [activeTab, setActiveTab] = useState("/")

	return(
		<div className="cus-menus">
			<ul>
				{
					headerTabs.map((item, index) => {
						const activeIndex = headerTabs.findIndex(item => item.href === activeTab)
						return (
							<li>
								<a className={index == activeIndex ? "active-tab" : ""} onClick={() => navigate(item.href)}>
									{item.label}
								</a>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Menus