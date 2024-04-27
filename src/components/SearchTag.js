import '../styles/MainPage.css'
import ServerAPI from './ServerAPI';
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
                this.setState({focusOn: true});
            }

            const result = await ServerAPI.get(
                'http://localhost:8000/hello',
            );
            
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
    }

    clickSearch = () => {this.setState({ focusOn : true })}
    blurSearch = () => {this.setState({ focusOn : false })}
    getSearchLog = () => {this.state.haveLog ? this.state.searchLog : []}

    // {this.state.searchLog.map((content, idx) => (
    //     <div className="search-log">
    //         <div className="search-icon"></div>
    //         <div className="search-content">{content}</div>
    //     </div>
    // ))}
    render() {
        return (
            <div></div>
        );
    }
}

export {SearchTag};

// class SearchTag extends Component {

    

//     focusOnSearch = async () => {
        
//     };

//     render() {
//         return (
//             <fieldset
//                 className={
//                     this.state.focusOn
//                         ? 'field-container expand_field_container'
//                         : 'field-container'
//                 }
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
