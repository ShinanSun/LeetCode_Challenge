/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = {};
    for (let employee of employees) {
        map[employee.id] = employee;
    }
    
    return dfs(id, map);
};

const dfs = function (id, map) {
    let currEmployee = map[id];
    let total = currEmployee.importance;
    
    for (let subId of currEmployee.subordinates) {
        total += dfs(subId, map)
    }
    
    return total;
}