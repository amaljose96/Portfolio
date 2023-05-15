import React from 'react';
import { BirthdayIcon } from '../../../resources/icons/birthday';
import { ExitIcon } from '../../../resources/icons/exit';
import { GraduateIcon } from '../../../resources/icons/graduate';
import { SchoolIcon } from '../../../resources/icons/school';
import { TravelIcon } from '../../../resources/icons/travel';
import { UniversityIcon } from '../../../resources/icons/university';
import { VolunteerIcon } from '../../../resources/icons/volunteer';
import { WorkIcon } from '../../../resources/icons/work';
import styled from "styled-components";
import colors from '../../../config/colors';
import { isMobile } from '../../../utils/common';


export const Highlight = styled.span`
    color:${colors.secondary};
`;
export const SecondHighlight = styled.span`
    font-weight:bold;
`;
export const timelineContent = [

    {
        Icon: BirthdayIcon,
        type: ["life"],
        time: new Date("10/27/1996"),
        showDate: true,
        title: <><Highlight>Born</Highlight><br/> at <SecondHighlight>Kochi, Kerala, India</SecondHighlight></>
    }
    ,

    {
        Icon: TravelIcon,
        time: 852105600000,
        type: ["life"],
        title: <><Highlight>Moved</Highlight> to <SecondHighlight>Abu Halifa, Kuwait</SecondHighlight></>
    }
    ,

    {
        Icon: SchoolIcon,
        time: 936169200000,
        type: ["education"],
        title: <>Started <Highlight>School</Highlight><br/> at <SecondHighlight>Gulf Indian School, Kuwait</SecondHighlight></>
    }
    ,

    {
        Icon: GraduateIcon,
        time: 1399273200000,
        type: ["education"],
        title: <>Completed <Highlight>High School</Highlight><br/> at <SecondHighlight>Gulf Indian School, Kuwait</SecondHighlight></>,
    },
    {
        Icon: TravelIcon,
        time: 1404198000000,
        type: ["life"],
        title: <><Highlight>Moved</Highlight> to <SecondHighlight>Calicut, India</SecondHighlight></>,
    },
    {
        Icon: UniversityIcon,
        time: 1407999600000,
        type: ["education"],
        title: <>Started <Highlight>Bachelors of Technology in Computer Science</Highlight><br/> at <SecondHighlight>National Institute of Technology, Calicut</SecondHighlight></>,
    },


    {
        Icon: WorkIcon,
        time: new Date("04/01/2016"),
        type: ["work"],
        title: <>Started working as <Highlight>Lab Administrator</Highlight><br/> at <SecondHighlight>Software Systems Laboratory, NIT Calicut</SecondHighlight></>,
    },
    {
        Icon: WorkIcon,
        time: new Date("05/01/2016"),
        type: ["work"],
        durationText: "May - June 2016",
        title: <><Highlight>Summer Internship</Highlight><br/> at <SecondHighlight>Kuwait National Petroleum Company</SecondHighlight></>,
    },


    {
        Icon: TravelIcon,
        time: new Date("05/01/2017"),
        type: ["life"],
        title: <><Highlight>Moved</Highlight> to <SecondHighlight>Bangalore, India</SecondHighlight> for Internship</>,
    },
    {
        Icon: WorkIcon,
        time: new Date("05/01/2017"),
        type: ["work"],
        durationText: "May - June 2017",
        title: <>Interned as <Highlight>Summer Analyst</Highlight><br/> at <SecondHighlight>Goldman Sachs</SecondHighlight></>,
    },


    {
        Icon: ExitIcon,
        time: new Date("05/01/2018"),
        type: ["work"],
        title: <><Highlight>Left</Highlight> <SecondHighlight>Software Systems Laboratory, NIT Calicut</SecondHighlight></>,
    },
    {
        Icon: GraduateIcon,
        time: new Date("05/06/2018"),
        type: ["education"],
        title: <><Highlight>Graduated</Highlight> from <SecondHighlight>National Institute of Technology, Calicut</SecondHighlight></>,
    },
    {
        Icon: TravelIcon,
        time: new Date("07/07/2018"),
        type: ["life"],
        title: <><Highlight>Moved</Highlight> to <SecondHighlight>Bangalore, India</SecondHighlight> for Work</>,
    },
    {
        Icon: WorkIcon,
        time: new Date("07/08/2018"),
        type: ["work"],
        title: <>Started working as <Highlight>Graduate Software Development Engineer</Highlight><br/> at <SecondHighlight>Tesco, Bengaluru</SecondHighlight></>,
    },

    {
        Icon: VolunteerIcon,
        time: new Date("05/01/2020"),
        type: ["work"],
        title: <>Contributed as <Highlight>React Developer</Highlight> to <SecondHighlight>Coronasafe</SecondHighlight> repository</>
    },
    {
        Icon: VolunteerIcon,
        time: new Date("05/01/2020"),
        type: ["work"],
        title: <>Contributed as <Highlight>Lead Engineer</Highlight><br/> at <SecondHighlight>MarketPearl</SecondHighlight></>
    }
    ,
    {
        Icon: VolunteerIcon,
        time: new Date("04/01/2021"),
        type: ["work"],
        title: <>Contributed as <Highlight>Frontend Developer</Highlight> to <SecondHighlight>marketsentiment.live</SecondHighlight> </>
    },
    {
        Icon: ExitIcon,
        time: new Date("07/03/2021"),
        type: ["work"],
        title: <><Highlight>Resigned</Highlight> from <SecondHighlight>Tesco, Bengaluru</SecondHighlight></>
    },
    {
        Icon: TravelIcon,
        time: new Date("08/09/2021"),
        type: ["life"],
        title: <><Highlight>Moved</Highlight> to <SecondHighlight>Los Angeles, California</SecondHighlight></>
    },
    {
        Icon: UniversityIcon,
        time: new Date("08/09/2021"),
        type: ["education"],
        title: <>Started <Highlight>Masters in Computer Science</Highlight><br/> at <SecondHighlight>University of Southern California</SecondHighlight></>
    },
    {
        Icon: WorkIcon,
        time: new Date("10/09/2021"),
        type: ["work"],
        title: <>Started working as <Highlight>UI/UX Developer</Highlight><br/> at <SecondHighlight>USC School of Pharmacy</SecondHighlight></>
    },
    {
        Icon: WorkIcon,
        time: new Date("31/05/2022"),
        type: ["work"],
        durationText: "May - August 2022",
        title: <>Interned as <Highlight>Full Stack Engineer Intern</Highlight><br/> at <SecondHighlight>Guidewire Software</SecondHighlight></>
    },
    {
        Icon: VolunteerIcon,
        time: new Date("01/01/2023"),
        type: ["work"],
        durationText: "Jan 2023 - Present",
        title: <>Contributed as <Highlight>Frontend Developer</Highlight><br/> at <SecondHighlight>One Mauve</SecondHighlight></>
    },
    {
        Icon: GraduateIcon,
        time: new Date("05/12/2023"),
        type: ["education"],
        title: <><Highlight>Graduated</Highlight> from <SecondHighlight>University of Southern California</SecondHighlight></>,
    },
]


    ;
if(isMobile()){

}

export let elementWidth=300;
export let sideWidth=20;
export let numItemsInRow = parseInt(((window.innerWidth - 5) - sideWidth) / (elementWidth + sideWidth));
export let rowHeight=300;
export let lineWidth=2;
export const trackColor = colors.getTransitionColor(colors.text,colors.secondary,0.5);
export const trainColor = colors.secondary;



if(isMobile()){
    elementWidth= window.innerWidth -100;
    if(elementWidth<100){
        elementWidth=100
    }
    sideWidth=25;
    numItemsInRow=1;
}
   



/*

UI/UX Developer
Company NameUSC School of Pharmacy Part-time
Dates EmployedOct 2021 – Present
Employment Duration3 mos
Designing and Developing eCases used by students at the School of Pharmacy using Twine, HTML and CSS.

Tesco Bengaluru
Graduate Software Development Engineer
Company NameTesco Bengaluru Full-time
Dates EmployedJul 2018 – Jul 2021
Employment Duration3 yrs 1 mo
LocationBengaluru, Karnataka, India
I've worked on myProduct Promotions through which Tesco colleagues set up promotions for products in stores. I have also worked on other colleague-facing applications for reporting and HR.

MarketPearl
Lead Engineer
Company NameMarketPearl Freelance
Dates EmployedMay 2020 – Oct 2020
Employment Duration6 mos
LocationUnited States
As the lead engineer at MarketPearl, I worked on the user facing website for MarketPearl.

Software Systems Laboratory, NITC
Lab Administrator
Company NameSoftware Systems Laboratory, NITC Part-time
Dates EmployedApr 2016 – May 2018
Employment Duration2 yrs 2 mos
Manage and update systems at the lab.
Maintain CSE,NITC servers.

Goldman Sachs
Summer Analyst
Company NameGoldman Sachs Internship
Dates EmployedMay 2017 – Jun 2017
Employment Duration2 mos
LocationBengaluru Area, India


*/