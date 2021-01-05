class EmployeePayrollData {

    //getter and setters
    get id(){return this._id;}
    set id(id){
        this._id = id;
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{,}$');
        if (nameRegex.test(name))
              this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic(){ return this._profilePic; }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){ return this._gender;}
    set gender(gender){this._gender - gender;}

    get department(){ return this._department;}
    set department(department){
        this._department = department;
    }

    get salary(){ return this._salary;}
    set salary(salary){
        this._salary = salary;
    }

    get note(){ return this._note; }
    set note(note){
        this._note = note;
    }

    get startDate(){ return this._startDate;}
    set startDate(startDate){
        this._startDate = startDate;
    }


    toString(){
        const options = {year : 'numeric' , month: 'long', day: 'numeric'};
        const empdate = !this.startDate ? "undefined": this.startDate.toLocaleDateString("en-US",options);
        return "id= "+ this.id + "; Name " +  this._name + "; Gender " + this._gender+ 
        "; ProfilePic " + this._profilePic + "; Department" + this._department+
        "; salary " + this.salary +
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