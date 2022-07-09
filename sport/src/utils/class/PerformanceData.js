
class PerformanceData {
    /**
     * User Performance Data
     * @param {*} userId 
     * @param {*} kind 
     * @param {*} data 
     */
    constructor(userId, kind, data) {
        this.id = userId
        this.kind = kind
        this.data = data
    }
}
export default PerformanceData