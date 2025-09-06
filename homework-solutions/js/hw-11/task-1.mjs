class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get profession() {
    return this._profession;
  }

  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    if (value !== 'string') {
      return;
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (value !== 'string') {
      return;
    }
    this._lastName = value;
  }

  set profession(value) {
    if (value !== 'string') {
      return;
    }
    this._profession = value;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Salary must be a non-negative number');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const employeeOne = new Employee('Yauhen', 'Nesterau', 'QA', 4000);
console.log(employeeOne.getFullName());
console.log(employeeOne.salary);
console.log(employeeOne);

class Company {
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Can only add instances of Employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
