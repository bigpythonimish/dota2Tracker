import React, {Component} from 'react';
import * as appConstants from '../../store/constants/appConstant';

class HeroDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        console.log(this.props);
        return (
            <div className="popHero__wrapper">
                <div className="popHero__imgContainer">
                    <img src={appConstants.apiBase + this.props.location.state.heroData.img}
                         alt={this.props.location.state.heroData.localized_name}/>
                </div>

                <div className="popHero__type">
                    Type:- {this.props.location.state.heroData.attack_type}
                </div>

                <div className="popHero__roles">
                    Roles :- {this.props.location.state.heroData.roles.map((roles, index) => {

                    if (this.props.location.state.heroData.roles.length === index + 1) {
                        return roles;
                    } else {
                        return roles + ",";
                    }

                })}
                </div>

            </div>

        )

    }


}

export default HeroDetails;
