import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMembersOnly = this.handleMembersOnly.bind(this);

    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleMembersOnly(e){
        //console.log(e);
        console.log("Blaaaa" + e.target.checked);
        //console.log("Bluuuu"+this.props.membersOnly);

        this.props.onMembersOnlyChange(e.target.checked);
        //this.props.onMembersOnlyChange(true);
    }

    render(){
        const filterText = this.props.filterText;
        const membersOnly = this.props.membersOnly;
        //const membersOnlyCheckboxValue = this.props.membersOnly ? "checked" : "";
        //console.log('Returrrnnn ' + membersOnlyCheckboxValue);
        return (

            <form>
                <label htmlFor="searchbar">
                    search for people
                </label><br />
                <input
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                    type="text" placeholder="Search..." id="searchbar" />
                <p>
                    <input
                        type="checkbox"
                        onChange={this.handleMembersOnly} />
                    {' '}
                    only show members
                </p>
            </form>
        );
    }
}
