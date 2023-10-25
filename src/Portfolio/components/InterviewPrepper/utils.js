export function getExistingSessions(){
    let storage = localStorage.getItem('sessions') || "[]";
    let data = JSON.parse(storage)
    return data;
}

export function saveSessionQuestions(session,questions){

}

const pageIndices={
    landing:0,
    newTopic:1,
    oldTopics:1,
    loading:2,
    questions:3

}
export function calculateTranslateY(component,currentPage){
    return (pageIndices[component] - pageIndices[currentPage])*100

}