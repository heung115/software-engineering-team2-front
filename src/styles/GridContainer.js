import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-columns: 212px repeat(3, 1fr) repeat(4, 212px);

    grid-template-rows: 130px;
    gap: 20px;
    padding: 0;
`;

export default GridContainer;
