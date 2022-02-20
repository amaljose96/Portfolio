import moment from "moment";
export function enhanceTimelineContent(timelineContent){
    let enhancedTimeline={};
    let previousElementTime=timelineContent[Object.keys(timelineContent)[0]][0].time;
    Object.keys(timelineContent).forEach(year=>{
        enhancedTimeline[year]=timelineContent[year].map((event,index)=>{
            let enhancedEvent= {
                durationText:event.showDate? moment(event.time).format('Do MMMM YYYY') : moment(event.time).format('MMMM YYYY'),
                ...event
            };
            previousElementTime=event.time;
            return enhancedEvent;
        });
    });
    return enhancedTimeline;
}