
$(document).ready(function(){
var count = 0,
   totalCorrect = 0,
   questions=0,
   answer = new Array(10),
   next = document.getElementById('next'),
   jsonData="",
   totalMissed = 0
   notification = document.getElementById('notification'),
   reset = document.getElementById('reset'),
   back = document.getElementById('back'),
   question = document.getElementById('question'),
   answera = document.getElementById('answer');

function loadJSON() {
   var data_file = "http://localhost/Quiz/sample.json";
   var http_request = new XMLHttpRequest();
   try {
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   } catch (e) {
      // Internet Explorer Browsers
      try {
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
         try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (e) {
            // Something went wrong
            alert("Your browser broke!");
            str= false;
         }
      }
   }
   http_request.onreadystatechange = function() {
      //localStorage.clear();
      if (http_request.readyState == 4) {
         // Javascript function JSON.parse to parse JSON data
         var jsonObj = JSON.parse(http_request.responseText);
         window.localStorage.setItem('Doc', http_request.responseText);
         //var html5docs =JSON.parse(localStorage.getItem('Doc'));
         //question_dis();
      }
   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

function question_dis() {
   jsonData = JSON.parse(localStorage.getItem('Doc'));
   questions = jsonData.data.length;
   //alert(count);
   if (count != 6) {
      var generated_q = document.getElementById('qid');
      var generated_ques = document.getElementById('ques');
      remove_all_childnodes(generated_q);
      remove_all_childnodes(generated_ques);
      var text_q = document.createTextNode(count+1);
      var text_ques = document.createTextNode(jsonData.data[count].question);
      generated_q.appendChild(text_q);
      generated_ques.appendChild(text_ques);
      //alert(generated_q.textContent);
     
      var generated_label = document.getElementById('choice1');
      var question_choices = document.createTextNode(jsonData.data[count].choice1);
      remove_all_childnodes(generated_label);
      generated_label.appendChild(question_choices);
     
      var generated_label = document.getElementById('choice2');
      var question_choices = document.createTextNode(jsonData.data[count].choice2);
      remove_all_childnodes(generated_label);
      generated_label.appendChild(question_choices);

      var generated_label = document.getElementById('choice3');
      var question_choices = document.createTextNode(jsonData.data[count].choice3);
      remove_all_childnodes(generated_label);
      generated_label.appendChild(question_choices);

      var generated_label = document.getElementById('choice4');
      var question_choices = document.createTextNode(jsonData.data[count].choice4);
      remove_all_childnodes(generated_label);
      generated_label.appendChild(question_choices);

      if(count===0){
         back.style.display='none';
      }else{
         back.style.display='initial';  
      }

      if(count===questions){
         next.style.display='none';
      }
   }else {
    for(var i=0;i<6;i++){
        count=i;
        question_dis();
      }
      remove_all_childnodes(question);
      next.style.display='none';
      back.style.display='none';
      //reset.style.display = 'block';
      //remove_all_childnodes(notification);
      //remove_all_childnodes(counter);
      
      var final_score_tag = document.getElementById('final');
      var final_score = document.createTextNode('Final score: ' + totalCorrect + ' / '+ jsonData.data.length);
      final_score_tag.appendChild(final_score);
      //question.appendChild(final_score_tag);
      
    }
}
  
function remove_all_childnodes(selected_id){
    var myNode = selected_id;
    //alert(myNode.lastElementChild.innerHTML);
    myNode.textContent="";
    //myNode.parentNode.removeChild(item);
}



    

function answer_and_score(choice){
    storeAnswer(choice);
    if (answer[count] === undefined){
      var notification_tag = document.createElement('p');
      var notification_text = document.createTextNode('Choose one');
      notification_tag.appendChild(notification_text);
      notification.appendChild(notification_tag);
      $('#notification').children().fadeOut(1500);
    } // When the answer is correct
    else if (jsonChoice(answer[count])===jsonData.data[count].answer) {
      count++;
      totalCorrect++;
      //alert('y');
      question_dis();

    } //When missed the answer
    else {
      count++;
      totalMissed++;
      question_dis();
    }//answer wrong
  };

function evaluate_Answer(){
  var cho;
   $("label.btn").on('click',function () {
      cho = $(this).find('input:radio').val();
      $(this).find('input:radio').removeAttr('checked');
    });

   $("#next").on('click',function(){
    //alert(cho);
      answer_and_score(cho);
   });
   $("#back").on('click',function(){
    //alert(cho);
       count--;
        answera.appendChild(question_dis());
   });
}
function storeAnswer(choice){
         
          answer.splice(count, 0, choice);
    //alert(document.getElementsByName('choice')[0].parentNode.childNodes);
    //(answer[count]);
}
function jsonChoice(choice){
   var str;
   switch(choice) {
    case "0":
        str=jsonData.data[count].choice1;
        ///alert(str);
        break;
    case "1":
        str=jsonData.data[count].choice2;
        break;
    case "2":
        str=jsonData.data[count].choice3;
        break;
    case "3":
         str=jsonData.data[count].choice4;
         break;
   }
   return str;
}

function previous_question(){
     
     if(count>=0){
       alert('h');
          count--;
        question_dis();
     }
  }

loadJSON();
question_dis();
evaluate_Answer();
//previous_question();
});