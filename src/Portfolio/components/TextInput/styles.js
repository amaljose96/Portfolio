import styled from "styled-components";
import colors from "../../config/colors";


export const TextInputContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width: 100%;
`;
export const WordCount = styled.div`
    font-size:10px;
    margin-top:-15px;
    margin-right:15px;
    color:${props => props.isAboveLimit ? "red" : colors.text};
`;
export const Input = styled.input`
    appearance: none;
    padding:10px;
    background-color: ${colors.shade};
    font-size: 14px;
    border-radius:10px;
    border:solid 1px ${props => (props.isValid === null || props.value.length === 0) ? colors.shade : props.isValid ? "green" : "red"};
    width: 100%;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    outline: ${colors.background};
    ${props => props.disabled && 'opacity: 0.5;'}
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
    ::placeholder 
        color: ${colors.text}22;
    }
    :focus{
        border:solid 1px ${props => (props.isValid === null || props.value.length === 0) ? colors.text+"22": props.isValid ? "green" : "red"};
    }
`;
export const TextArea = styled.textarea`
    appearance: none;
    min-height: 100px;
    font-family: 'Lato',sans-serif;
    appearance: none;
    padding:10px;
    background-color: ${colors.shade};
    font-size: 14px;
    border-radius:10px;
    border:solid 1px ${props => (props.isValid === null || props.value.length === 0) ? colors.shade : props.isValid ? "green" : "red"};
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    outline: ${colors.background};
    ${props => props.disabled && 'opacity: 0.5;'}
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
    resize: vertical;
    ::placeholder 
        color: ${colors.text}22;
    }
    :focus{
        border:solid 1px ${props => (props.isValid === null || props.value.length === 0) ? colors.text+"22": props.isValid ? "green" : "red"};
    }
`;