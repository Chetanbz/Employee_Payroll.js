const stringify = (date) =>{
    const options = {year : 'numeric' , month: 'short', day: 'numeric'};
    const empdate = !date ? "undefined": new Date(date).toLocaleDateString("en-US",options);
    return empdate;
}