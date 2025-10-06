interface IDepartment {
  id: number;
  name: string;
  employees_count: number;
}

interface IEnterprise {
  id: number;
  name: string;
  departments: IDepartment[];

  getTotalEmployees(): number;
  addDepartment(id: number, name: string): void;
  editName(newName: string): void;
  editDepartment(id: number, newName: string): void;
  deleteDepartment(id: number): void;
  moveEmployees(fromId: number, toId: number): void;
}

interface ICompany {
  printEnterprises(): void;
  getEnterpriseName(idOrName: number | string): string | null;
  addEnterprise(name: string): void;
  addDepartment(enterpriseId: number, name: string): void;
  editEnterprise(id: number, newName: string): void;
  editDepartment(id: number, newName: string): void;
  deleteEnterprise(id: number): void;
  deleteDepartment(id: number): void;
  moveEmployees(fromId: number, toId: number): void;
}

class Department implements IDepartment {
  constructor(
    public id: number,
    public name: string,
    public employees_count: number,
  ) {}
}

class Enterprise implements IEnterprise {
  constructor(
    public id: number,
    public name: string,
    public departments: Department[] = [],
  ) {}

  getTotalEmployees(): number {
    return this.departments.reduce((sum, d) => sum + d.employees_count, 0);
  }

  addDepartment(id: number, name: string): void {
    this.departments.push(new Department(id, name, 0));
  }

  editName(newName: string): void {
    this.name = newName;
  }

  editDepartment(id: number, newName: string): void {
    const dep = this.departments.find((d) => d.id === id);
    if (dep) dep.name = newName;
  }

  deleteDepartment(id: number): void {
    this.departments = this.departments.filter((d) => !(d.id === id && d.employees_count === 0));
  }

  moveEmployees(fromId: number, toId: number): void {
    const from = this.departments.find((d) => d.id === fromId);
    const to = this.departments.find((d) => d.id === toId);
    if (from && to) {
      to.employees_count += from.employees_count;
      from.employees_count = 0;
    }
  }
}

class Company implements ICompany {
  private enterprises: Enterprise[];

  constructor(enterprises: Enterprise[] = []) {
    this.enterprises = enterprises;
  }

  private getNewId(): number {
    const ids = this.enterprises.flatMap((e) => [e.id, ...e.departments.map((d) => d.id)]);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }

  printEnterprises(): void {
    this.enterprises.forEach((ent) => {
      const total = ent.getTotalEmployees();
      console.log(`${ent.name} (${total > 0 ? total + ' сотрудников' : 'нет сотрудников'})`);
      ent.departments.forEach((d) =>
        console.log(`- ${d.name} (${d.employees_count > 0 ? d.employees_count + ' сотрудников' : 'нет сотрудников'})`),
      );
    });
  }

  getEnterpriseName(idOrName: number | string): string | null {
    for (const ent of this.enterprises) {
      if (ent.departments.some((d) => d.id === idOrName || d.name === idOrName)) {
        return ent.name;
      }
    }
    return null;
  }

  addEnterprise(name: string): void {
    this.enterprises.push(new Enterprise(this.getNewId(), name));
  }

  addDepartment(enterpriseId: number, name: string): void {
    const ent = this.enterprises.find((e) => e.id === enterpriseId);
    if (ent) ent.addDepartment(this.getNewId(), name);
  }

  editEnterprise(id: number, newName: string): void {
    const ent = this.enterprises.find((e) => e.id === id);
    if (ent) ent.editName(newName);
  }

  editDepartment(id: number, newName: string): void {
    this.enterprises.forEach((ent) => ent.editDepartment(id, newName));
  }

  deleteEnterprise(id: number): void {
    this.enterprises = this.enterprises.filter((e) => e.id !== id);
  }

  deleteDepartment(id: number): void {
    this.enterprises.forEach((ent) => ent.deleteDepartment(id));
  }

  moveEmployees(fromId: number, toId: number): void {
    this.enterprises.forEach((ent) => ent.moveEmployees(fromId, toId));
  }
}

const company = new Company([
  new Enterprise(1, 'Предприятие 1', [
    new Department(2, 'Отдел тестирования', 10),
    new Department(3, 'Отдел маркетинга', 20),
    new Department(4, 'Администрация', 15),
  ]),
  new Enterprise(5, 'Предприятие 2', [
    new Department(6, 'Отдел разработки', 50),
    new Department(7, 'Отдел маркетинга', 20),
    new Department(8, 'Отдел охраны труда', 5),
  ]),
  new Enterprise(9, 'Предприятие 3', [new Department(10, 'Отдел аналитики', 0)]),
]);

company.printEnterprises();
console.log('Найдено:', company.getEnterpriseName(4));
console.log('Найдено:', company.getEnterpriseName('Отдел маркетинга'));

company.addEnterprise('Новый бизнес');
company.addDepartment(1, 'R&D');
company.editEnterprise(1, 'Обновленное предприятие');
company.editDepartment(7, 'Маркетинг PRO');
company.deleteDepartment(10);
company.moveEmployees(2, 3);

console.log('\nПосле изменений:');
company.printEnterprises();
