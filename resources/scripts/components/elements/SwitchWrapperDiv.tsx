import styled from 'styled-components';
import tw from 'twin.macro';

const SwitchWrapperDiv = styled.div`
    ${tw`flex flex-col w-full h-full overflow-auto items-center pr-4`};

    & > div {
        ${tw`w-full`};
    }
`;

export default SwitchWrapperDiv;
