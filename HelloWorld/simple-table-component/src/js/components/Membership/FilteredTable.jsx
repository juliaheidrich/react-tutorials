import React from 'react';

import MembershipTableRow from './Table/Row';
import Headline from '../Headline';
import SearchBar from './SearchBar';
import AddRowButton from './Table/AddRowButton';
import FilteredTable from './FilteredTable';

export default class FilteredMembershipTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            members : this.props.members
        }
    }

    render(){
        const filterText = this.props.filterText;
        const membersOnly = this.props.membersOnly;
        const memberrows = [];

        this.state.members.forEach((member, index) => {
            if(membersOnly && !member.membership){
                return;
            }
            if(member.membername.indexOf(filterText) === -1) {
                return;
            }

            memberrows.push(
                <MembershipTableRow
                    key={index}
                    membername={member.membername}
                    membership={member.membership} />
            );
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Membership</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberrows}
                    </tbody>
                </table>
            </div>

        );
    }

}
