import styled from "styled-components"

const SpacerDiv = styled.div`

height: 4rem;
width: 100%;

`

const Spacer = ({id}) => {
    return (
        <div id={id}>
            <SpacerDiv />
        </div>
    )
}

export default Spacer
