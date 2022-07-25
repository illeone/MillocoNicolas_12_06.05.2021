/**
* User Data
* @param {number} id 
* @param {object} userInfos 
* @param {number} todayScore 
* @param {object} KeyData 
*/
class UsersData{
    constructor(id, userInfos, todayScore, score, keyData ) {
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.score = score;
        this.keyData = keyData;
        // console.log(id, userInfos,todayScore, keyData)
    }
}
export default UsersData;