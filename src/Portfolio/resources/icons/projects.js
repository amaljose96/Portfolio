import React from 'react';
import colors from '../../config/colors';

export function ProjectsIcon({ fillColor = colors.text, size = 25 }) {
	return <svg fill={fillColor} width={size} height={size} viewBox="0 0 14 14" >
		<path d="M11,1H7V5h4ZM1,11H5V7H1ZM1,5H5V1H1ZM6.3,7l3.85,6L14,7Z" />
	</svg>
}