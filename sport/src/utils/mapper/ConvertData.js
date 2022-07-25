import ActivityData from "../class/ActivityData"
import AverageData from "../class/AverageData";
import PerformanceData from "../class/PerformanceData";
import UsersData from "../class/UsersData";

function ConvertData (result, url) {
    // console.log(result, url);

    if (url.includes("average-sessions")) {
        return new AverageData(
            result.data.userId,
            result.data.sessions,          
        )
    }
    if (url.includes("performance")) {
        return new PerformanceData(
            result.data.userId,
            result.data.kind,
            result.data.data,
        )
    }
    if (url.includes("activity")) {
        return new ActivityData(
            result.data.id,
            result.data.sessions,      
        )
    }
    return new UsersData(
        result.data.id,
        result.data.userInfos,
        result.data.todayScore,
        result.data.score,
        result.data.keyData,        
    )
}

export default ConvertData