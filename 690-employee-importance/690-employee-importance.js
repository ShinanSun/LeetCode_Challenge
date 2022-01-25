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

const DFS = function (id, map) {
    let currEmployee = map[id];
    //console.log(currEmployee)
    let result = currEmployee.importance;
    for (let suborId of currEmployee.subordinates) {
        result += DFS(suborId, map);
    }
              
    return result;
}

var GetImportance = function(employees, id) {
    let map = {};
    for (let employee of employees) {
        console.log(employee)
        map[employee.id] = employee;
    }
        
    return DFS(id, map);
};

