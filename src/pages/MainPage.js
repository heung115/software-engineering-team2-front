import ServerAPI from '../components/ServerAPI';
import '../styles/MainPage.css';
import { Component } from 'react';

class MainPage extends Component {
    state = {
        haveLog: false,
        focusOn: false,
        searchLog: [],
    };

    focusOnSearch = async () => {
        try {
            if (!this.state.haveLog) {
                const result = await ServerAPI.get(
                    'http://localhost:8000/hello',
                );

                console.log(result.data['search']);
                this.setState({
                    haveLog: true,
                    focusOn: true,
                    searchLog: result.data['search'],
                });
            } else {
                this.setState({ focusOn: true });
            }
        } catch (error) {
            console.log(error);
            this.setState({ focusOn: false, searchLog: [] });
        }
    };

    render() {
        return (
            <div className="main">
                <div className="login">login</div>

                <div className="container">
                    <div className="logo"></div>
                    <fieldset
                        className={
                            this.state.focusOn
                                ? 'field-container expand_field_container'
                                : 'field-container'
                        }
                    >
                        <div className="field-area">
                            <input
                                className="field"
                                type="text"
                                placeholder="Search..."
                                onFocus={this.focusOnSearch}
                                onBlur={() => this.setState({ focusOn: false })}
                            />
                            <div className="icon-search"></div>
                        </div>

                        {this.state.searchLog.map((content, idx) => (
                            <div className='search-log'>
                                <div className='search-icon'></div>
                                <div className="search-content">{content}</div>
                            </div>
                        ))}
                    </fieldset>
                </div>
            </div>
        );
    }
}

export { MainPage };
