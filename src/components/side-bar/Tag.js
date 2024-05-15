import styled from 'styled-components';

const textSize = '20px';
const paddingSize = '10px';

const Background = styled.div`
    background-color: transparent;
    opacity: 0.8;
    padding: ${paddingSize};

    margin: 0;
    border-radius: 5px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.2);
        box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2); // 아래쪽에만 그림자 추가
    }
    &.tag-div {
        // 여기에 기본 스타일을 추가하세요.
    }

    &.select-tag {
        background-color: rgba(128, 128, 128, 0.2);
        box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2); // 아래쪽에만 그림자 추가
    }
`;
const Icon = styled.i`
    /* 아이콘 스타일을 여기에 추가하세요 */
`;

const Text = styled.span`
    color: white;
    font-size: ${textSize};
`;

const Tag = ({ item, nowTag, changeTag }) => {
    return (
        <Background
            className={item === nowTag ? 'tag-div select-tag' : 'tag-div'}
            onClick={() => changeTag(item)}
        >
            {/* <Icon className="icon-class" /> */}
            <Text>{item}</Text>
        </Background>
    );
};

export default Tag;
