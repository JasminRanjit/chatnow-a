// Function to start the Dialogflow chatbot widget
    function startDialogChat() {
    	var myWindow =  window.open("","Chatnow-a","status=0,width=400,height=500");
    	var botstring = "\<iframe allow=\"microphone;\"width=\"380\" height=\"480\" src=\"https://console.dialogflow.com/api-client/demo/embedded/31a55a15-f92f-4e86-b712-b92070d8028b\"></iframe>";
    	myWindow.document.write(botstring);
    }

function dialogapi(question) {
    var http = new XMLHttpRequest();
    var url = '/Dialogflow/query';
    //var params = 'question=hello';
    var atr = 'question=';

    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          console.log(http.responseText);
        }
      }

      //http.send(params);
      http.send(atr + question);
    }
