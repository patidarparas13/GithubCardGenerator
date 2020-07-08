import React,{Component} from 'react';

export default class Card extends Component {
	render() {
  	const profile = this.props;
  	return (
        <div className="col-sm-3">
  <div className="card h-100">
    <img className="card-img-top" src={profile.avatar_url} alt={profile.name}/>
    <div className="card-body">
      <h5 className="card-title">{profile.name}</h5>
      <p className="card-text"><b>Username: </b>{profile.login}</p>
      <p className="card-text"><b>Company: </b>{profile.company}</p>
      <p className="card-text"><b>Bio:</b> {profile.bio}</p>
      <p className="card-text"><b>Followers:</b> {profile.followers}</p>
      <p className="card-text"><b>Following:</b> {profile.following}</p>
      <p className="card-text"><b>Repo:</b> {profile.public_repos}</p>

    </div>
    <div className="card-footer">
        <button className="btn btn-success">
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer">Github Link</a>
        </button>

    </div>
  </div>
  </div>

    );
  }
}