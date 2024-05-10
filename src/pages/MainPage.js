import { Component } from 'react';
import styled from 'styled-components';
import { HeaderTag } from '../components/navigation-bar/HeaderTag';
import { ContentTag } from '../components/ContentTag';

const Main = styled.div`
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;
class MainPage extends Component {
    render() {
        return (
            <Main>
                <HeaderTag />

                <ContentTag />
                {/* <div className="header">
                    <div className="logo-part">
                        <div className="logo-container">
                            <div className="logo-picture"></div>
                            <div className="logo-letter"></div>
                        </div>
                    </div>

                    <div className="search-part">
                        <SearchTag />
                    </div>

                    <LoginTag />
                </div>
                <div className="header-hidden"></div>
                <div className="content">
                    
                    <div className="movie-list">
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                        <div className="movie-block">
                            <div className="movie-content">
                                <div className="movie-poster"></div>
                                <div className="movie-info">
                                    <div className='movie-rate'>
                                        <div className="movie-star"></div>
                                        <p className="movie-num">9.4</p>
                                    </div>
                                    <p className="movie-title">파묘</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Main>
        );
    }
}

export { MainPage };
