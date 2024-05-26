import { Component } from 'react';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';

const Main = styled.div`
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;
class SearchPage extends Component {
    render() {
        return (
            <div>
                <SearchBox />
            </div>
        );
    }
}

export { SearchPage };
