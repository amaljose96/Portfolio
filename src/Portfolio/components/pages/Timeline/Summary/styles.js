import styled from "styled-components";
import { isMobile } from "../../../../utils/common";
import colors from "../../../../config/colors";

export const SummaryContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    ${isMobile() && `
        flex-direction:column;
        justify-content:center;
    `}
`;
export const SummaryElement = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
`;
export const SummaryLabel = styled.div`
    margin-bottom:10px;
    color:${colors.primary};
`;
export const SummaryValue = styled.div`
    font-size:48px;
    display:flex;
    align-items:baseline;
`;
export const SummarySub = styled.div`
    font-size:14px;
    margin-right:5px;
`;