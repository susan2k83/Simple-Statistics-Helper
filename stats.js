$(document).ready(function () {

// var numbers =[];

$("#sortBtn").on("click", function(){
    var input =[];
    
    input.push($("#numberInputBox").val());
       
   var newArr = input.toString().split(" ").map(Number);
  
   var numSorted = newArr.sort(function(a, b){
       return a - b;
    })
     $.each(numSorted, function(index, value){
        $('#numberSortedBox').append( value + "," + " ");
    });
    var meanStat = math.mean(numSorted);
    meanStat = meanStat.toFixed(4);
    console.log(meanStat);
    $('#meanBox').html(meanStat);

    var modeStat = math.mode(numSorted);
    console.log(modeStat);
    $('#modeBox').html(modeStat);

    var medianStat = math.median(numSorted);
    console.log(medianStat);
    $('#medianBox').html(medianStat);


  });

});




// var numbers=[];
// numbers.sort(function(a, b){return a-b});

//    var numberSort = numbers.sort((a, b) => a-b); / ES6 version