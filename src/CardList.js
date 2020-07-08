import React from 'react';
import Card from './card'

function CardList(props){
	return(
<div className="container">
    <div className="row">
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
	<br></br>
	</div>
	)
	
}
export default CardList;