import ActivityData from "../class/ActivityData"
import AverageData from "../class/AverageData";
import PerformanceData from "../class/PerformanceData";
import usersData from "../class/UsersData";

function ConvertData (result) {
    const url1 = ("http://localhost:3000/user/${userId}");
    const url2 = ("http://localhost:3000/user/${userId}/average-sessions");
    const url3 = ("http://localhost:3000/user/${userId}/performance");
    const url4 = ("http://localhost:3000/user/${userId}/activity");
    const users = url1.includes("{userId}")
    const average = url2.includes("average-sessions")
    const performance = url3.includes("performance")
    const activity = url4.includes("activity")

    if (users === true){
        return new usersData(
            result.data.userInfos,
            result.data.todayScore,
            result.data.keyData,
        )
    }
    if (average === true) {
        return new AverageData(
            result.data.userId,
            result.data.sessions,          
        )
    }
    if (performance === true) {
        return new PerformanceData(
            result.data.userId,
            result.data.kind,
            result.data.data,
        )
    }
    if (activity === true) {
        return new ActivityData(
            result.data.id,
            result.data.sessions,      
        )
    }
}

export default ConvertData







// function ConvertData (result, url) {
//     if url.get("http://localhost:3000/user/${userId}/activity") {

//     return new ActivityData(
//         result.data.userId,
//         result.data.sessions,

//     )
//     }
// };

// export default ConvertData





// const chaîne = "Hello World !" ;

// const index1 = chaîne.indexOf("World");
// const index2 = chaîne.includes("World"); //ES6
// const index3 = chaîne.search("World"); //ES6

// index1
// index2
// index3
