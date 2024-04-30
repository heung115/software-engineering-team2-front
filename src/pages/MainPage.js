import '../styles/MainPage.css';
import { Component } from 'react';
import { SearchTag } from '../components/SearchTag';

class MainPage extends Component {

    render() {
        return (
            <div className="main">
                <div className="header">
                    <div className="logo-part">
                        <div className="logo-container">
                            <div className="logo-picture"></div>
                            <div className="logo-letter"></div>
                        </div>
                    </div>

                    <div className="search-part">
                        <SearchTag />
                    </div>

                    <div className="login-part">
                        <div className="profile-container">
                            <div className="profile"></div>
                            <div className="login-container"></div>
                        </div>
                    </div>
                </div>
                <div className="header-hidden"></div>
                <div className="content">
                    {/* <div className='select-tag'></div> */}
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
                </div>
            </div>
        );
    }
}

export { MainPage };
