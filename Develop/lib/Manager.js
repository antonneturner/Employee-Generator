// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name, id, email, officeNumber)
    super(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = this.officeNumber
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Manager';
    }