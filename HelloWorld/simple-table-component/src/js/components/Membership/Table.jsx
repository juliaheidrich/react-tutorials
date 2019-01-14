import React from 'react';

import MembershipTableRow from './Table/Row';
import Headline from '../Headline';
import SearchBar from './SearchBar';
import AddRowButton from './Table/AddRowButton';
import FilteredTable from './FilteredTable';

// ganz unten export default MembershipTable würde auch gehen
export default class MembershipTable extends React.Component {

    constructor(props){
        super(props);
        // state is usualy used for data that changes over time
        this.state = {
            filterText: '',
            members: this.props.members,
            membersOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMembersOnly = this.handleMembersOnly.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        });
    }

    handleMembersOnly(membersOnly){
        this.setState({
            membersOnly: membersOnly
        });
    }

    handleAddRow() {
        const randomName = Math.random().toString(36).substr(2, 5);
        const randomBoolean = Boolean(Math.round(Math.random()));
        const newMemberToPush = {membername: randomName, membership: randomBoolean};
        this.state.members.push(newMemberToPush);
        this.setState({
            members: this.state.members
        });
    }

    render(){
        const memberrows = this.state.memberrows;
        return(
            <div>
                <Headline />
                <SearchBar
                    filterText={this.state.filterText}
                    membersOnly={this.state.membersOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onMembersOnlyChange={this.handleMembersOnly} />
                <AddRowButton
                    onClick={() => this.handleAddRow()} />
                <FilteredTable
                    members={this.state.members}
                    filterText={this.state.filterText}
                    membersOnly={this.state.membersOnly} />
            </div>
        );
    }
}
