import React from 'react';
import { BirthdayIcon } from '../../../resources/icons/birthday';
import { Highlight, SecondHighlight } from './CalendarEvent/styles';


export const timelineContent ={
    1996: [
        {
            Icon: BirthdayIcon,
            time: new Date("10/27/1996"),
            showDate:true,
            title: <><Highlight>Born</Highlight> at <SecondHighlight>Kochi, Kerala, India</SecondHighlight></>
        }
    ],
    1997: [
        {
            time: 852105600000,
            title: <><Highlight>Moved</Highlight> to <SecondHighlight>Abu Halifa, Kuwait</SecondHighlight></>
        }
    ],
    1999: [
        {
            time: 936169200000,
            title: <>Started <Highlight>School</Highlight> at <SecondHighlight>Gulf Indian School, Kuwait</SecondHighlight></>
        }
    ],
    2014: [
        {
            time: 1399273200000,
            title: <>Completed <Highlight>High School</Highlight> at <SecondHighlight>Gulf Indian School, Kuwait</SecondHighlight></>,
        },
        {
            time: 1404198000000,
            title: <><Highlight>Moved</Highlight> to <SecondHighlight>Calicut, India</SecondHighlight></>,
        },
        {
            time: 1407999600000,
            title: <>Started <Highlight>Bachelors of Technology</Highlight> at <SecondHighlight>National Institute of Technology, Calicut</SecondHighlight></>,
            description:<>Computer Science and Engineering</>
        },
    ],
    2016:[
        {
            time: new Date("04/01/2016"),
            title: <>Started working as <Highlight>Lab Administrator</Highlight> at <SecondHighlight>Software Systems Laboratory, NIT Calicut</SecondHighlight></>,
        },
        {
            time: new Date("05/01/2016"),
            durationText:"May - June 2016",
            title: <><Highlight>Summer Internship</Highlight> at <SecondHighlight>Kuwait National Petroleum Company</SecondHighlight></>,
        },
    ],
    2017:[
        {
            time: new Date("05/01/2017"),
            durationText:"May - June 2017",
            title: <>Interned as <Highlight>Summer Analyst</Highlight> at <SecondHighlight>Goldman Sachs</SecondHighlight></>,
        },
    ],
    2018:[
        {
            time: new Date("05/01/2018"),
            title: <><Highlight>Left</Highlight> <SecondHighlight>Software Systems Laboratory, NIT Calicut</SecondHighlight></>,
        },
        {
            time: new Date("05/06/2018"),
            title: <><Highlight>Graduated</Highlight> from <SecondHighlight>National Institute of Technology, Calicut</SecondHighlight></>,
        },
        {
            time: new Date("07/08/2018"),
            title: <>Started working as <Highlight>Graduate Software Development Engineer</Highlight> at <SecondHighlight>Tesco, Bengaluru</SecondHighlight></>,
        },
    ],
    2020:[
        {
            time: new Date("05/01/2020"),
            title:<>Contributed as <Highlight>Lead Engineer</Highlight> at <SecondHighlight>MarketPearl</SecondHighlight> remotely</>
        }
    ]




};

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