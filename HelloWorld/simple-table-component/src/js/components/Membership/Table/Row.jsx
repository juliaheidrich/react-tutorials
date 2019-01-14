import React from 'react';

export default class MembershipTableRow extends React.Component {
    render() {
        const membername = this.props.membername;
        const membership = this.props.membership.toString();
        const colorStyle = {color: 'red'};
        //const membersOnly = this.props.membersOnly;

        this.props.membership ? this.color = {color: 'green'} : this.color = {color: 'red'};

        return (
            <tr style={this.color}>
                <td>{membername}</td>
                <td>{membership}</td>
            </tr>
        );
    }
}
