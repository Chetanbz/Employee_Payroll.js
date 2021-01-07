let empPayrollList ;
window.addEventListener('DOMContentLoaded',(event)=>{
  empPayrollList = getEmployeePayrollDataFromStorages();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorages = () =>{
  return localStorage.getItem('EmployeePayrollList')?
                           JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

const createInnerHtml= () => {
  if (empPayrollList.length == 0) return;
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>Start Date</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`
    for(const empPayrollData of empPayrollList){
    innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDepHtml(empPayrollData._department)}</div>
                <td>${empPayrollData._salary}</td>
                <td>${stringify(empPayrollData._startDate)}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete"
                        src="../assests/icons/delete-black-18dp.svg">
                    <img id="${empPayrollData._id}"  onclick="update(this)" alt="edit"
                        src="../assests/icons/create-black-18dp.svg">
                </td>
            </tr>
            `;
    }
            document.querySelector('#table-display').innerHTML = innerHtml
}

const getDepHtml = (deptList) => {
  let deptHtml = "";
  for (const dept of deptList){
    deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
  }
  return deptHtml;
}

const remove=(node) =>{
  let employeePayrollData = empPayrollList.find(empData => empData._id == node.id);
  if (!employeeData) return;
  const index = empPayrollList
                .map(empData => empData._id)
                .indexOf(employeePayrollData._id);
  empPayrollList.splice(index,1);
  localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
}

createEmployeePayrollJASON= () => {
  let empPayrollListLocal =[
  {
    _name:"Narayan Madhavan",
    _gender:"male",
    _department:["Engineering","Finance"],
    _salary:"50000",
    _startDate :"29 Oct 2019",
    _note:"",
    _id: new Date().getTime(),
    _profilePic: "../assests/Ellipse -3.png"
  },
  {
    _name:"Lisha Chaudhary",
    _gender:"female",
    _department:["Engineering","Sale"],
    _salary:"45000",
    _startDate :"9 Oct 2017",
    _note:"",
    _id: new Date().getTime(),
    _profilePic: "../assests/Ellipse -1.png"
  }
  ]
  return empPayrollListLocal;
}