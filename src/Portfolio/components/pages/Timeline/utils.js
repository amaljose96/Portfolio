import moment from "moment";
function normaliseGap(gap){
    //Gap is input in number of milliseconds. We need to translate this to 100px => 1 year;
    return 100*gap/(1000*60*60*24*365)
}
export function enhanceTimelineContent(timelineContent){
    let enhancedTimeline={};
    let previousElementTime=timelineContent[Object.keys(timelineContent)[0]][0].time;
    Object.keys(timelineContent).forEach(year=>{
        enhancedTimeline[year]=timelineContent[year].map((event,index)=>{
            let isFirstEvent=index===0;
            let isLastEvent= index===timelineContent[year].length-1;
            let gapBefore = isFirstEvent ? event.time-moment(event.time).startOf("year").toDate().getTime() : event.time-previousElementTime;
            let gapAfter = isLastEvent ? moment(event.time).endOf("year").toDate().getTime()-event.time :0;

            let enhancedEvent= {
                durationText:event.showDate? moment(event.time).format('Do MMMM YYYY') : moment(event.time).format('MMMM YYYY'),
                ...event,
                gapBefore:normaliseGap(gapBefore),
                gapAfter:normaliseGap(gapAfter)
            };
            previousElementTime=event.time;
            return enhancedEvent;
        });
    });
    return enhancedTimeline;
}