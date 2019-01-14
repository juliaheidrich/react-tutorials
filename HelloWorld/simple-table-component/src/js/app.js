import React from 'react';
// define alias, when filename changes we must not change all usings
import MembershipTable from './components/Membership/Table.jsx';

const MEMBERS = [
    {membername: 'Christin', membership: true},
    {membername: 'Julia', membership: true},
    {membername: 'Elke', membership: true},
    {membername: 'Niko', membership: true},
    {membername: 'Yulia', membership: true},
    {membername: 'Markus', membership: false}
];

// google: node export, export default, import, import as
export default class App extends React.Component {
    render() {
        return(
            <div>
                <MembershipTable members={MEMBERS} />
            </div>
        );
    }
}
