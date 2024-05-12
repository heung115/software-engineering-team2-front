import ServerAPI from '../../services/ServerAPI';
import { Component } from 'react';

class SearchTag extends Component {
    state = {
        haveLog: false,
        focusOn: false,
        searchLog: [],
    };

    focusOnSearch = async () => {
        try {
            if (this.state.haveLog) {
                this.setState({ focusOn: true });
            }

            const result = await ServerAPI.get('http://localhost:8000/hello');

            if (result.data['search'].length >= 1) {
                this.setState({
                    haveLog: true,
                    focusOn: true,
                    searchLog: result.data['search'],
                });
            } else {
                this.setState({ focusOn: false, searchLog: [] });
            }
        } catch (error) {
            console.log(error);
            this.setState({ focusOn: false, searchLog: [] });
        }
    };

    clickSearch = () => {
        this.setState({ focusOn: true });
    };
    blurSearch = () => {
        this.setState({ focusOn: false });
    };

    render() {
        return (
            <div className="search-part">
                <div
                    className={
                        this.state.focusOn
                            ? 'search-area search-area-expand'
                            : 'search-area'
                    }
                >
                    <div className="search-window">
                        <div className="search-icon"></div>
                        <input
                            className="search-field"
                            type="text"
                            placeholder="Search..."
                            // onFocus={() => this.focusOnSearch()}
                            onFocus={() => this.setState({ focusOn: true })}
                            onBlur={() => this.setState({ focusOn: false })}
                        />
                    </div>

                    <div className="search-log">
                        <div className="search-line">
                            <div className="search-log-icon"></div>
                            <div className="search-log-content">bbb</div>
                        </div>
                    </div>
                </div>

                {/* {this.state.searchLog.map((content, idx) => (
                    
                ))} */}
            </div>
        );
    }
}

export { SearchTag };

//             >
//                 <div className="field-area">
//                     <input
//                         className="field"
//                         type="text"
//                         placeholder="Search..."
//                         onFocus={this.focusOnSearch}
//                         onBlur={() => this.setState({ focusOn: false })}
//                     />
//                     <div className="icon-search"></div>
//                 </div>

//             </fieldset>
//         );
//     }
// }

// export { SearchTag };
