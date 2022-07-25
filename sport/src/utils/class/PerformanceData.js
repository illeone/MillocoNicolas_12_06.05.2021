/**
* User Performance Data
* @param {number} userId 
* @param {object} kind 
* @param {array} data 
*/
class PerformanceData {   
    constructor(userId, kind, data) {
        this.userId = userId
        this.kind = kind
        this.data = data
    }
}
export default PerformanceData