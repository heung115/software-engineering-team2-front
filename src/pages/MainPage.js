import '../styles/MainPage.css';
const { Component } = require('react');

class MainPage extends Component {
    render() {
        return (
            <div className="main">
                <div className="login">login</div>

                <div className="container">
                    <div className="logo"></div>
                    <fieldset className="field-container">
                        <input
                            className="field"
                            type="text"
                            placeholder="Search..."
                        />
                        <div className='icon-search'></div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export { MainPage };
