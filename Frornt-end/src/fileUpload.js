import React from 'react';
import JsonTable from './jsonTable';


class FileUpload extends React.Component {
    render() {
        return(
            <div>
                {this.props.jsonData.length === 0 && <input type="file" onChange={this.props.onChangeFile} accept="application/JSON" />}
                <button onClick={this.props.onLogout}>Logout</button>
                {this.props.jsonData.length > 0 && <JsonTable jsonData={this.props.jsonData} />}
                
            </div>
        )
    }
}

export default FileUpload
