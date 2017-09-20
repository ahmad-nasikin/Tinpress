//apiKey: Replace this with your own Project Oxford Emotion API key, please do not use my key. I include it here so you can get up and running quickly but you can get your own key for free at https://www.projectoxford.ai/emotion
var apiKey = "02a9fc92006d40c9b41959193ca3d90a";

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
    //  alert('fungis ini jalan');
     search(result)
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

function search(result) {
  // alert('hai')
  axios.post('http://localhost:3000/spotify/search', {
    search: result
  })
    .then(function (data) {
      $('#timeline').empty();
      // console.log('hasil SPOTIFY HTML search',data);

      var playlist = data.data.playlists.items
      for (var i = 0; i < 5; i++) {
        $('#timeline').append(`
          <div class="panel panel-default" align='left'>
                  <div class="panel-heading">${playlist[i].name}</div>
                  <div class="panel-body">
                  <input type="button" class="btn btn-warning" value="Go to Playlist" onclick="changePlaylist('${playlist[i].uri}')">
                  </div>
                  <br>
          </div>
              `
            )
      }

    })
    .catch(function (error) {
      console.log(error);
    });
    console.log('hai');
}
