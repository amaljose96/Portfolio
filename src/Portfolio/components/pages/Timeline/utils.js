import { elementWidth, rowHeight, sideWidth } from "./constants";

function createGetPercent(percentStart, scrollPerElement){
    let percentEnd = percentStart + scrollPerElement;
    return (scroll)=>{
        if(scroll<percentStart){
            return 0;
        }
        else if(scroll>percentEnd){
            return 1
        }
        else{
            let t= (scroll-percentStart)/(percentEnd-percentStart);
            return t
        }
    }
}
export function generateInteractiveTimeline(timelineItems) {
    timelineItems=timelineItems.sort((a,b)=>a.time-b.time)
    let screenWidth = window.innerWidth - 5;
    let numItemsInRow = parseInt((screenWidth - sideWidth) / (elementWidth + sideWidth));
    let rows=[]
    while (timelineItems.length > 0) {
        rows.push(timelineItems.splice(0, numItemsInRow))
    }
    //Calculating number of elements
    let numberOfElements=rows.reduce((sum,row,index)=>{
        if(index===0){
            return row.length*2
        }
        else{
            return sum+row.length*2+1
        }
    },0)
    let scrollTrackLength = rows.length*rowHeight;

    let scrollPerElement = scrollTrackLength/numberOfElements;
    let currentScroll=0;
    let enhancedRows=rows.map((row,rowIndex)=>{
        let enhancedRow=[];
        let starter={};
        let ender={}
        if(rowIndex===0){
            starter={
                type:"side",
                shape:"space",
            }
        }
        else if(rowIndex%2===0){
            starter={
                type:"side",
                shape:"bottomLeft",
            }
        }
        else{
            starter={
                type:"side",
                shape:"topLeft",
            }
        }
        row.forEach((element,elementIndex)=>{
            if(elementIndex!==0){
                enhancedRow.push({
                    type:"side",
                    shape:"line",
                })
            }
            enhancedRow.push({
                ...element,
                type:"event",
            })
        })
        if(rowIndex%2===0){
            ender={
                type:"side",
                shape:"topRight",
            }
        }
        else{
            ender={
                type:"side",
                shape:"bottomRight",
            }
        }
        if(rowIndex%2===0){
            return [starter,...enhancedRow,ender]
        }
        else{
            return [ender,...enhancedRow,starter]
        }
    })
    enhancedRows=enhancedRows.map((row,index)=>{
        let scrolledRow = row.map((element)=>{
            let scrolledElement= {
                ...element,
                getPercent:createGetPercent(currentScroll,scrollPerElement)
            }
            if(element.shape!="space"){
                currentScroll=currentScroll+scrollPerElement;
            }
            return scrolledElement;
        })
        if(index%2===0){
            return scrolledRow
        }
        else{
            return scrolledRow.reverse();
        }
    })
    return enhancedRows;
}

