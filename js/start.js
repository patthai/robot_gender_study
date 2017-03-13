function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var question_list = [1, 2, 3];
question_list = shuffle(question_list);
console.log(question_list);
$("#order").hide();
document.getElementById("order").value = question_list;



jQuery( document ).ready(function( $ ) {
	var i = 0;
	function hide_all()
		{
			$("#question_1").hide();
			$("#question_2").hide();
			$("#question_3").hide();
			$("#final_question").hide();
		}
	hide_all();	
	
	
    function show_next_question()
    	{
    		hide_all();	
    		
    		if (question_list[i] == 1){$("#question_1").show(); document.getElementById('part_head').src='images/robot_graphics/robot_graphics.001.jpeg';}
    		else if (question_list[i] == 2){$("#question_2").show(); document.getElementById('part_head').src='images/robot_graphics/robot_graphics.002.jpeg';}
    		else if (question_list[i] == 3){$("#question_3").show(); document.getElementById('part_head').src='images/robot_graphics/robot_graphics.003.jpeg';}
    		i ++;
    		console.log(i);
    	}
    
    show_next_question();
    
   $("#nextquestion").click(function() 
   {	
   		if (i == question_list.length)
   			{
   			hide_all();	
   			$("#nextquestion").hide();
   			$("#final_question").show();
   			document.getElementById('part_head').src='images/robot_graphics/robot_graphics.000.jpeg';
   			
   			}
   		else if (i < question_list.length)
   			{
   			show_next_question();
   			}
   		
   });
    
    
});
