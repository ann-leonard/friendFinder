
$.ajax({
    url: 'api/data/friends',
    method: "GET"
  }).then(function(response){
    //console.log(response)
    var userWithMatch = response.pop()
    console.log(userWithMatch)
   
    var match = $(`<h1>You matched with ${userWithMatch.matchName}</h1>`)
    var picture = $(`<img href= '${userWithMatch.matchPic}'>`)
    $("#display").append(match)
    $('#display').append(picture)
  })