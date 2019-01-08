import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ToDo: Membership Table in ein eigenes File auslagern
class MembershipTableRow extends React.Component{
    render() {
        const membername = this.props.membername;
        const membership = this.props.membership.toString();

        return (
            <tr>
                <td>{membername}</td>
                <td>{membership}</td>
            </tr>
        );
    }
}

class MembershipTable extends React.Component {

    handleClick() {
        return alert('Klick');
    }

    render() {

        const memberrows = [];

        this.props.members.forEach((member) =>{
            memberrows.push(
                <MembershipTableRow
                    membername={member.membername}
                    membership={member.membership} />
            );
        });

        return(
        <div>
            <Headline />
            <AddRowButton onClick={() => this.handleClick()} />
            <table>
                <thead>
                    <th>Name</th>
                    <th>Membership</th>
                </thead>
                <tbody>
                    {memberrows}
                </tbody>
            </table>
            </div>
        );
    }
}

function AddRowButton(props) {

    return(
        <button onClick={props.onClick}>add new row</button>
    );
}

class Headline extends React.Component{
    render(){
        const myheadline = "React Table";
        return(
            <h1>{myheadline}</h1>
        );
    }
}
const MEMBERS = [
    {membername: 'Julia', membership: true},
    {membername: 'Elke', membership: true},
    {membername: 'Christin', membership: true},
    {membername: 'Niko', membership: true},
    {membername: 'Yulia', membership: true},
    {membername: 'Markus', membership: false}
];

ReactDOM.render(
  <MembershipTable members={MEMBERS} />,
  document.getElementById('root')
);
