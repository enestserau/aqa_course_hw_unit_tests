/* 
Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов 
у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат всех переданных объектов
*/

function getAvgSalary<T extends { salary: number }>(...employees: T[]): number {
    if (employees.length === 0) {
        return 0;
    }
    
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}

const emp1 = { salary: 5000 };
const emp2 = { salary: 7000 };
const emp3 = { salary: 6000, id: 56700004532 };

console.log('Average salary:', getAvgSalary(emp1, emp2, emp3));