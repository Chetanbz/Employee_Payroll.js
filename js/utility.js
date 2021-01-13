const stringify = (date) =>{
    const options = {year : 'numeric' , month: 'short', day: 'numeric'};
    const empdate = !date ? "undefined": new Date(date).toLocaleDateString("en-US",options);
    return empdate;
}

const checkName =(name)=>{
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (!nameRegex.test(name)) throw 'Name is Incorrect!';
}


const print =(emp) =>{
    const options = {year : 'numeric' , month: 'long', day: 'numeric'};
    const empdate = !emp._startDate ? "undefined": emp._startDate.toLocaleDateString("en-US",options);
    return  "Name " +  emp._name + "; Gender " + emp._gender+ 
    "; ProfilePic " + emp._profilePic + "; emp" + this._department+
    "; salary " + emp._salary +
     "; Gender " + emp._gender + "; start date " + empdate ;
}
