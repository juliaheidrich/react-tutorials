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
        //const filterText =this.props.filterText;
        // state is usualy used for data that changes over time
        this.state = {
            filterText: '',
            memberrows: [],
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

        this.state.memberrows.push(
            <MembershipTableRow
                membername={randomName}
                membership={randomBoolean} />
        );

        this.setState({
            memberrows: this.state.memberrows // ist das richtig so?
        });
    }

    render(){
        const memberrows = this.state.memberrows;
        console.log("Blubb"+this.state.filterText);
        console.log(this.state.membersOnly);
        return(
            <div>
                <Headline />
                <SearchBar
                    filterText={this.state.filterText}
                    membersOnly={this.state.membersOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onMembersOnlyChange={this.handleMembersOnly} />
                <AddRowButton onClick={() => this.handleAddRow()} />
                <FilteredTable
                    members={this.props.members}
                    filterText={this.state.filterText}
                    membersOnly={this.state.membersOnly} />
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
