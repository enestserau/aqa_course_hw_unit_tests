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
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) {
      throw new Error('First name must be a string of 2-50 Latin letters');
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) {
      throw new Error('Last name must be a string of 2-50 Latin letters');
    }
    this._lastName = value;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.length === 0 || value.trim().length === 0 || !/^[a-zA-Z\s]+$/.test(value)) {
      throw new Error('Profession must be a non-empty string of Latin letters and spaces');
    }
    this._profession = value;
  }

  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a number greater than 0 and less than 10000');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
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

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with name ${firstName} not found`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Employee with name ${firstName} not found`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((total, emp) => total + emp.salary, 0);
  }
}

export { Employee, Company };
