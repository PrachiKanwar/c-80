var studentsarray=[]
function submit(){
    var displayarray=[]
    for(j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value 
        studentsarray.push(name)
    }
    var arraylength=studentsarray.length
    for(var k=0;k<arraylength;k++){
        displayarray.push("<h4>name- "+studentsarray[k]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=displayarray
    var rc=displayarray.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=rc
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    studentsarray.sort()
    var displayarray=[]
    var arraylength=studentsarray.length
    for(var k=0;k<arraylength;k++){
        displayarray.push("<h4>name- "+studentsarray[k]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=displayarray
    var rc=displayarray.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=rc
}