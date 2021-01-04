class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
              this._name = name;
        else throw 'Name is Incorrect!';
    }

    toString(){
        const options = {year : 'numeric' , month: 'long', day: 'numeric'};
        const empdate = !this.startDate ? "undefined": this.startDate.toLocaleDateString("en-US",options);
        return "id= "+ this.id + "; Name " +  this._name + "; salary " + this.salary +
         "; Gender " + this.gender + "; start date " + empdate ;
    }
}

// let employeePayrollData = new EmployeePayrollData(1,"Mark",60000);
// console.log(employeePayrollData.toString());

// let employeePayrollData2 = new EmployeePayrollData(2,"Terissa",60000,"F", new Date());
// console.log(employeePayrollData2.toString());

let count =0;
function save(){
    count++;
    this.id = count
    this.name = document.querySelector('#name');
    this.salary = document.querySelector('#name');
    this.gender = document.querySelector('#gender');
    this.startDate=document.querySelector('#startDate');
    toString();
}