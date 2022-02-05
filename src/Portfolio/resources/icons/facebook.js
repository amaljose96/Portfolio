import React from 'react';
import colors from '../../config/colors';


export function FacebookIcon({fillColor = colors.text}) {
    return <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
        <g>
            <path d="M33.0677 0H1.93229C0.864792 0 0 0.864792 0 1.93229V33.0692C0 34.1352 0.864792 35 1.93229 35H18.6958V21.4463H14.1342V16.1642H18.6958V12.269C18.6958 7.74813 21.4565 5.28646 25.4902 5.28646C27.4225 5.28646 29.0821 5.43083 29.5663 5.495V10.22L26.7692 10.2215C24.5758 10.2215 24.1515 11.2642 24.1515 12.7925V16.1656H29.3825L28.7015 21.4477H24.1515V35H33.0706C34.1352 35 35 34.1352 35 33.0677V1.93229C35 0.864792 34.1352 0 33.0677 0V0Z" fill={fillColor} />
        </g>
    </svg>
}