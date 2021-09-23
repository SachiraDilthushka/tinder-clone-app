import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@mui/material';


function TinderCards() {

	const [people, setPeople] = useState([{
		name: 'Elon Mask',
		url: "https://c7.alamy.com/comp/2DENTY5/berlin-germany-01st-dec-2020-elon-musk-head-of-the-space-company-spacex-and-tesla-ceo-comes-to-the-axel-springer-award-ceremony-musk-will-accept-this-years-axel-springer-award-credit-britta-pedersendpa-zentralbilddpa-pooldpaalamy-live-news-2DENTY5.jpg"
	},
	{
		name: 'Sachira Dilthushka',
		url: "https://c7.alamy.com/comp/2DENTY5/berlin-germany-01st-dec-2020-elon-musk-head-of-the-space-company-spacex-and-tesla-ceo-comes-to-the-axel-springer-award-ceremony-musk-will-accept-this-years-axel-springer-award-credit-britta-pedersendpa-zentralbilddpa-pooldpaalamy-live-news-2DENTY5.jpg"
	},
	{
		name: 'Sachira Dilthushka',
		url: "https://c7.alamy.com/comp/2DENTY5/berlin-germany-01st-dec-2020-elon-musk-head-of-the-space-company-spacex-and-tesla-ceo-comes-to-the-axel-springer-award-ceremony-musk-will-accept-this-years-axel-springer-award-credit-britta-pedersendpa-zentralbilddpa-pooldpaalamy-live-news-2DENTY5.jpg"
	}
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing : " + nameToDelete);
		//setLastDirection(direction);

	}

	const outOfFrame = (name) => {
		console.log(name + "left the screen")
	}


	return (
		<div className="tinderClass">
			<div className="tinderCards_cardContainer">
				{people.map((person) => (
					<TinderCard className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>

						<div style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>


				))}
			</div>


		</div>
	);

}

export default TinderCards;