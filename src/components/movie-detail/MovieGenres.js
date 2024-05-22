import styled from 'styled-components';


const GenreContainer = styled.div`
    display: flex;
    margin-left: 20px;
    margin-bottom: 20px;
`;

const Genre = styled.div`
    border: 1px solid white;
    border-radius: 15px;
    background: #444444;
    color: white;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
`;

const MovieGenres = ({ data }) => {
    return (
        <GenreContainer>
            {
                data['genres'].map((item, index) => (
                    <Genre key={index}>{item}</Genre>
                ))
            }
        </GenreContainer>
    );
};

export { MovieGenres };
