import React from 'react';

class JsonTable extends React.Component {
    render() {
        return(
            <div>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.jsonData.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default JsonTable;
