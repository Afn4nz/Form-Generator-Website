$(document).ready(function(){




 $('#head1').on('click', 
 function(){
      var head1= window.prompt('Please enter a heading 1');
      var h1='<h1 class="h1">'+head1+'</h1>';   
      $('#myform').append(h1);
      $('.h1').css('display','inline');
      $('.h1').css('margin','5px');
});


 $('#head4').on('click', function(){
    var head4= prompt('Please enter a heaading 4');
    var h4='<h4 class="h4">'+head4+'</h4>';   
    $('#myform').append(h4);
    $('.h4').css('display','inline');
    $('.h4').css('margin','5px');
 });


 $('#label').on('click', function(){
    var label= prompt('Please enter a label');
    var lb='<label class="lb"> '+label+'</label>';   
    $('#myform').append(lb);
   $('.lb').css('margin','5px');
});  
 

 $('#text').on('click', function(){
    var text='<input class="text" type="text">';  
    $('#myform').append(text);
    $('.text').css('margin','5px');
});  


$('#email').on('click', function(){
    var email='<input class="email" type="email">';  
    $('#myform').append(email);
    $('.email').css('margin','5px');
});  


$('#pass').on('click', function(){
    var pass='<input class="pass" type="password">';  
    $('#myform').append(pass);
    $('.pass').css('margin','5px');
});  


$('#tArea').on('click', function(){
    var tArea='<textarea class="tArea" cols="19" rows="5">';  
    $('#myform').append(tArea);
    $('.tArea').css('margin','5px');
});  


$('#rBtn').on('click', function(){
    var rBtn='<input class="rBtn" type="radio">';  
    $('#myform').append(rBtn);
    $('.rBtn').css('margin','5px');
});  

$('#checkbox').on('click', function(){
    var checkbox='<input class="checkbox" type="checkbox">';  
    $('#myform').append(checkbox);
    $('.checkbox').css('margin','5px');
});  


$('#date').on('click', function(){
    var date='<input class="date" type="date">';  
    $('#myform').append(date);
    $('.date').css('margin','5px');
});  

$('#time').on('click', function(){
    var time='<input class="time" type="time">';  
    $('#myform').append(time);
   $('.time').css('margin','5px');
});  

$('#submit').on('click', function(){
    var submit='<input class="submit" type="submit">';  
    $('#myform').append(submit);
    $('.submit').css('margin','5px');
   
});  

$('#reset').on('click', function(){
    var reset='<input class="reset" type="reset">';  
    $('#myform').append(reset);
   $('.reset').css('margin','5px');
});  

$('#br').on('click', function(){
    var br='<br>';  
    $('#myform').append(br);
});  


$('#hr').on('click', function(){
    var hr='<hr class="hr">';  
    $('#myform').append(hr);
});  





/*themes*/


$('#blue').on('click', function(){
   $('#myform').css('background-color','#b8dce6');
   $('#myform').css('border','5px inset #0792b3');
   $('#myform').css('color','#0792b3');
   $('#myform').css('padding','10px');

$('#result').css('margin-bottom','50%');

   $(".submit").css('background','#0792b3');
   $(".submit").css('color','white');
   $(".submit").css('border','white');
   $(".submit").css('border-radius','8px');

   $(".reset").css('background','#0792b3');
   $(".reset").css('color','white');
   $(".reset").css('border','white');
   $(".reset").css('border-radius','8px');

   $(".hr").css('border-top', '1px solid #0792b3');
}); 


$('#yell').on('click', function(){
    $('#myform').css('background-color','#f5d493');
    $('#myform').css('border','5px inset #fbaf19');
    $('#myform').css('color','#fbaf19');
    $('#myform').css('padding','10px');

    $(".submit").css('background','#fbaf19');
    $(".submit").css('color','white');
    $(".submit").css('border','white');
    $(".submit").css('border-radius','8px');
    $(".submit").css('text-align','center');

    $(".reset").css('background','#fbaf19');
    $(".reset").css('color','white');
    $(".reset").css('border','white');
    $(".reset").css('border-radius','8px');

    $(".hr").css('border-top', '1px solid #fbaf19');
}); 

});