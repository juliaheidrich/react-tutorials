import React from 'react';

import MembershipTableRow from './Table/Row';
import Headline from '../Headline';
import SearchBar from './SearchBar';
import AddRowButton from './Table/AddRowButton';
import FilteredTable from './FilteredTable';

export default class FilteredMembershipTable extends React.Component {
    render(){
        const filterText = this.props.filterText;
        const membersOnly = this.props.membersOnly;
        const memberrows = [];

        console.log("FilteredMembershipTable "+filterText);

        this.props.members.forEach((member, index) => {
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
        );
    }

}
