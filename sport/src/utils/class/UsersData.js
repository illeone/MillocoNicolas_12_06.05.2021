    /**
     * User Data
     * @param {*} id 
     * @param {*} userInfos 
     * @param {*} todayScore 
     * @param {*} KeyData 
     */
class usersData{
    constructor(id, userInfos, todayScore, keyData ) {
        this.id = id
        this.userInfos = userInfos
        this.todayScore = todayScore
        this.KeyData = keyData
    }
}
export default usersData;