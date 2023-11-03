import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height:250px;
    background-color: white;
    box-shadow: 0px 1px 2px #00000073;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5px;
`

export const Button = styled.button`
 background-color: ${props => props.background ? props.background : ''};
 height: 30px;
 width: 80px;
 margin: 2px;
 border-radius:3px;
 border: none;
 transition: .4s ease;
 &:hover {
    background-color: #3022b6;
 }
`