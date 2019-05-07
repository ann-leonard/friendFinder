function buildQues(index, name){
    $('#begin').remove()
    $('#display').empty()

    $('#display').prepend(questions[index])
    var values = [1,2,3,4,5];

    for (i=0; i<values.length; i++){
        $('#display').append($(`<button class="btn btn-sm btn-secondary m-2 rtg" data-state = 'false' data-value='${values[i]}'>${values[i]}</button>`))
    }

    $('.rtg').on('click', function(){

       $(this).attr('data-state','true')
        
        if ($(this).attr('data-state') === 'true'){
          ratings.push(parseInt($(this).attr('data-value')))
        }else{
            ratings.pop()
        }
        console.log(ratings)
        console.log($(this).attr("data-state"))
        index ++
        buildQues(index, name)
        if (index >= questions.length){
             end(name)
        }
    })
}

function getInfo(){
    var index = 0

    var input = $('<div class="form-row align-items-center"><div class="col-auto"><label class="sr-only" for="inlineFormInput">Name</label><input type="text" class="form-control mb-2" id="name" placeholder="Jane Doe"></div>')
    var button = $('<div class="col-auto"><button id="submit" class="btn btn-primary mb-2">Go to questions</button></div>')
    $('#display').append(input)
    $('#display').append(button)
    $('#submit').on('click', function(){
        name = $('#name').val().trim()
        buildQues(index,name)
    })
}
//
//
var ratings = [];


$('#begin').on('click', function(){
    getInfo()
})

var questions = [
    "How much do you care about Astrology?", 
    "How much do you hate country music?", 
    "How cool are the Kardashians?",
    "How much do you like going outside?",
    "Rate your tolerace for nerd stuff"
]



function end(name){
    var userData = {
        name,
        scores: ratings
    }
    $('#display').empty()

    $.post('/api/data/friends', userData, function(data){
        console.log(data)
    })
   $('#display').append($('<h1>All Done!</h1><h4>Your friend application has been submitted'))
   $('#display').append($('<button class="btn btn-md btn-info text-light"><a href="/results">get results</a></button>'))
}