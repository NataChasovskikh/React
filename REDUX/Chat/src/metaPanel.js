import React, {Component} from 'react';


class MetaPanel extends Component {

    state = {
        openAboutCh: this.props.openAboutCh,
        openDetails: this.props.openDetails,
        openMembers: this.props.openMembers,
        openCreatedBy: this.props.openCreatedBy,
    };

    handleToggleAboutCh= () => {
        this.setState(prevState =>({
            openAboutCh: !prevState.openAboutCh,
        }))
    };

    handleToggleDetails= () => {
        this.setState(prevState =>({
            openDetails: !prevState.openDetails,
        }))
    };

    handleToggleMembers= () => {
        this.setState(prevState =>({
            openMembers: !prevState.openMembers,
        }))
    };

    handleToggleCreatedBy= () => {
        this.setState(prevState =>({
            openCreatedBy: !prevState.openCreatedBy,
        }))
    };


    get aboutChannel () {
        const buttonText = "About Channel";
        return <div onClick={this.handleToggleAboutCh} >{buttonText}</div>
    }

    get details () {
        const buttonText = "Details";
        return <div onClick={this.handleToggleDetails} >{buttonText}</div>
    }

    get members () {
        const buttonText = "Members";
        return <div onClick={this.handleToggleMembers} >{buttonText}</div>
    }

    get createdBy() {
        const buttonText = "Created By";
        return <div onClick={this.handleToggleCreatedBy} >{buttonText}</div>
    }

            render() {
                const {openAboutCh,openDetails, openMembers, openCreatedBy} = this.state;
        return (
            <div>
                <div>
                    {this.aboutChannel}
                    {openAboutCh && (
                        <div onClick={this.handleToggleAboutCh} >
                            <ul>
                                Channel info coming soon...
                            </ul>
                        </div>
                    )}
                </div>

                <div>
                    {this.details}
                    {openDetails && (
                        <div onClick={this.handleToggleDetails} >
                            <ul>
                                More details about this channel...
                            </ul>
                        </div>
                    )}
                </div>

                <div>
                    {this.members}
                    {openMembers && (
                        <div onClick={this.handleToggleMembers} >
                            <ul>
                                Channel members...
                            </ul>
                        </div>
                    )}
                </div>
                <div>
                    {this.createdBy}
                    {openCreatedBy && (
                        <div onClick={this.handleToggleCreatedBy} >
                            <ul>
                                Beautiful channel members...
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default MetaPanel;