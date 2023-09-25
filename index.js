var e;
var f = "";

$('.gend').click(function(){
    console.log("hii");
    e = $(this).attr('id');
})

$('.chk').click(function(){
    var y = $(this).attr('id');
    if ($(this).is(':checked')){
    f = f.concat(y+' ');
    }
    else{
       f = f.replace(y,'');
    }
})



function clearText()  
{
    e="";
    f="";
    $('.gend').prop('checked', false);
    $('.chk').prop('checked', false);
    document.getElementById('nme').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('site').value = "";
    document.getElementById('imglink').value = "";
} 

$(".btn").click(function(){
    var x = $(this).attr('id');
    if(x==='enroll')
    {
    var a = $("#nme").val();
    var b = $("#mail").val();
    var c = $("#site").val();
    var d = $("#imglink").val();
    if ((a == null || a == "") && (b == null || b == "") && (c == null || c == "") && (d == null || d == "")) {
        alert("Please Fill In All Required Fields");
        return ;
    }
    
    document.getElementById('tb').innerHTML+="<tr>"+"<td>"+a+"<br>"+b+"<br>"+"<a href="+"'"+c+"'"+">"+"website"+"</a>"+"<br>"+e+"<br>"+f+"<br>"+"</td>"+"<td>"+"<img src ="+'"'+d+'"'+">"+"</td>"+"</tr>";
    $(a).attr('target','_blank');
    clearText();
    }
    else{
        clearText();
    }
})
