import React, { Component } from 'react';

class Dich extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ketqua: ''
        }
    }
    componentDidMount() {
        const api = `https://api.mymemory.translated.net/get?q=${this.props.x}&langpair=en|vi`;
        fetch(api)
            .then(response => { response.json() })
            .then(result => {
                this.setState({
                    ketqua: result.translatedText
                })
            });
    }
    render() {
        return (
            <div>
                <div className="quote-tran">{this.state.ketqua}</div>
            </div>
        )
    }
}
export default Dich;