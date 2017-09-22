//apiKey: Replace this with your own Project Oxford Emotion API key, please do not use my key. I include it here so you can get up and running quickly but you can get your own key for free at https://www.projectoxford.ai/emotion
var apiKey = "7c8d216263ec4083a58639bc58992ffa";

//apiUrl: The base URL for the API. Find out what this is for other APIs via the API documentationpost
var apiUrl = "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize";

$('#btn').click(function () {
//file: The file that will be sent to the api
var file = document.getElementById('filename').files[0];

 CallAPI(file, apiUrl, apiKey);
 });

function CallAPI(file, apiUrl, apiKey)
{
$.ajax({
  url: apiUrl,
  beforeSend: function (xhrObj) {
    xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
  },
  type: "POST",
  data: file,
  processData: false
   })
   .done(function (response) {
     var result = ProcessResult(response);
     console.log('ini emosi:' + result)
     if (result === 'happiness') {
         $('#hasil').empty().append('<img src="https://imgur.com/ReRgu1N.jpg" height="72px" width="72px">')
     } else {
        $('#hasil').empty().append('<img src="https://imgur.com/DdHuPH5.jpg" height="72px" width="72px">')
     }
   })
   .fail(function (error) {
     $("#response").text(error.getAllResponseHeaders());
   });
}

 function ProcessResult(response)
 {
   var data = JSON.stringify(response);
   emotion = ['anger','contempt','disgust','fear','happiness','neutral','sadness','surprise']

   anger = parseFloat(response[0].scores.anger.toString().slice(0,7))
   contempt = parseFloat(response[0].scores.contempt.toString().slice(0,7))
   disgust = parseFloat(response[0].scores.disgust.toString().slice(0,7))
   fear = parseFloat(response[0].scores.fear.toString().slice(0,7))
   happiness= parseFloat(response[0].scores.happiness.toString().slice(0,7))
   neutral =parseFloat(response[0].scores.neutral.toString().slice(0,7))
   sadness = parseFloat(response[0].scores.sadness.toString().slice(0,7))
   surprise = parseFloat(response[0].scores.surprise.toString().slice(0,7))

   emotionValue = [anger,contempt,disgust,fear,happiness,neutral,sadness,surprise]
   console.log(emotionValue.forEach(data=>{
     console.log(data)
   }));
   return emotion[closest(emotionValue,1)];
 }
 function closest(list, x) {
    var min,
        chosen = list[0];
    for (var i in list) {
        min = Math.abs(chosen - x);
        if (Math.abs(list[i] - x) < min) {
            chosen = list[i];
        }
    }

    return list.indexOf(chosen);
}