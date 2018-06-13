$(document).ready(function(){
   

    var queryURL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    var correctAnswers = [];

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          
        
   var div = " ";
// adding each question in a paragraph incrementing by 1
   $.each(response.results, function(i){
       var questionIndex = i;
       var allAnswers = response.results[i].incorrect_answers;
       // pushing the correct answer property with the rest of the answers.
       allAnswers.push(response.results[i].correct_answer);
       correctAnswers.push(response.results[i].correct_answer);
       div += '<p>' + response.results[i].question + '</p>'
       //The prop() method sets or returns properties and values of the selected elements.
       $('#questions').prop('outerHTML');

       $.each(allAnswers, function(i){

        div += '<input type="radio" name="'+questionIndex+'" value="'+allAnswers[i]+'">'+ allAnswers[i];
  
        

       
    
       });

        
    });
    
//     var selector = '<input type="radio" name="'+questionIndex+'">';
//     var incorrectAnswers = response.results[i].incorrect_answers;
//     var correctAnswers = response.results[i].correct_answer;
//     if(selector === correctAnswers){
//         console.log('Correct');
//     } if(selector === incorrectAnswers){
//         console.log('incorrect');
//     }

//    });
   $('#questions').prepend(div);
 console.log(response);






    
//end of ajax function {this.function}
    });

  
  
  
  
    if ($("#submit").on('click',function(){
       for(i=0; i<10; i++){
           var selectAnswer = $("input[name$='"+i+"']:checked").val();
           var thisCorrectAnswer = correctAnswers[i];

           if(selectAnswer === thisCorrectAnswer){
             
               alert( 'You got question '+ i + ' correct')
           } else(
               alert('you got question ' + i + ' incorrect')
           )
        
        

       }
      

       
       
    console.log('hello');
   }));
    
    
    





var counter = 0;
var timeLeft = 120;
function timeIt() {
counter++

$("#timer").html(timeLeft-counter);
}
setInterval(timeIt, 1000);















//end of document
});

