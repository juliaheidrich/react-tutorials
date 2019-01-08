import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SimpleTable extends React.Component {

    render(){
        let status;
        status = "Hello World";
        return (
            <div className="simpleTable">
                <div>{status}</div>
            </div>
        );
    }

}

ReactDOM.render(
  <SimpleTable />,
  document.getElementById('root')
);
