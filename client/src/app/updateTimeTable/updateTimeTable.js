import React from 'react';
import './updateTimeTable.css';

class UpdateTimeTable extends React.Component {

    handleResponse = (response) => {
        if (response.status === 200) {
            console.log("Time table updated")
            window.location.replace(`/${this.props.ttRoute}`);
        }
        else {
            console.error("Error updating time table")
            this.props.setEditCodeError(true);
        }
    };

    handleClick = () => {
        fetch('/api/updateTimeTable', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ttName: this.props.ttName,
                classes: this.props.classes,
                ttRoute: this.props.ttRoute,
                editCode: this.props.editCode
            })
        })
            .then(this.handleResponse)
            .catch(error => console.error('Error:', error));
    };

    render() {
        return (
            <button onClick={this.handleClick} className='updateTimeTable-btn' disabled={this.props.disabled}>
                Update
            </button>
        );
    }
}

export default UpdateTimeTable;
