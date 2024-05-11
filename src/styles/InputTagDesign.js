import styled from "styled-components";

const InputGroup = styled.div`
    position: relative;
    width: 90%;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

const InputTag = styled.input`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    outline: none;
    font-size: 1.4em;
    padding: 0 30px;
    line-height: 40px;
    border-radius: 5px;
    border: 2px solid black;
    background: transparent;
    transition: all 0.2s ease;
    z-index: 1111;
    &:focus,
    &:valid {
        border: 4px solid #0056b3;;
    }
`;

const InputLabel = styled.label`
    position: absolute;
    font-size: 1.6em;
    color: #6a6a6a;
    padding: 0 25px;
    margin: 0 20px;
    background-color: white;
    transition: all 0.3s ease;
    ${InputTag}:valid + &,
    ${InputTag}:focus + & {
        color: #007bff;
        height: 30px;
        line-height: 30px;
        transform: translate(-15px, -15px) scale(0.88);
        z-index: 1111;
    }
`;

const InputError = styled.p``;

export { InputGroup, InputLabel, InputTag, InputError };