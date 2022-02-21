import styled from "styled-components";

export const TimelineTogglerContainer = styled.div`
    position:sticky;
    top:0px;
    left:0px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 30px 80px;
    margin-bottom:50px;
    background-color:#0001;
    backdrop-filter:blur(5px);
`;

export const TimelineTitle = styled.div`
    text-align:center;
    font-size:24px;
    font-weight:bold;
`;

export const TimelineToggleOptions = styled.div`
    display:flex;
    align-items:center;
`;
export const TimelineToggleOption = styled.div`
    background-color:${props=>props.active?"#fff9":"#fff3"};
    color:#000;
    transition:all 0.3s;
    user-select:none;
    padding:5px 15px;
    text-transform:capitalize;
    border-radius: 10px;
    margin:0px 5px;
    :hover{
        cursor:pointer;
        color:#fff;
    }
`;