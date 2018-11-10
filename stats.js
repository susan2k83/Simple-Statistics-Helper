$(document).ready(function () {


$("#sortBtn").on("click", function(){
    var input =[];
    input.push($("#numberInputBox").val());
       //--code below: original user input returns as one object. The object needs to be converted to a string, then split, then converted to a number. THEN the .sort() method is used to arrange the numbers in numerical order.
   var newArr = input.toString().split(" ").map(Number);
  
   var numSorted = newArr.sort(function(a, b){
       return a - b;
    })
     $.each(numSorted, function(index, value){
        $('#numberSortedBox').append( value + "," + " ");
    });
    //--math.js is used to find the MEAN
    var meanStat = math.mean(numSorted);
    meanStat = meanStat.toFixed(4);
    $('#meanBox').html(meanStat);

    // did not use math.js for MODE because it would not isolate the mode, rather it would return all unique numbers
    var duplicates = numSorted.filter(i => numSorted.filter(ii => ii === i).length > 1);
    $.each(duplicates, function(index,value){
        $('#modeBox').append(value + " " + " ");
    });
    //--math.js is used to find the MEDIAN---
    var medianStat = math.median(numSorted);
    $('#medianBox').html(medianStat);
    
  });
  
  $('#reloadBtn_1').on("click", function(){
      location.reload();
  })

  $('#reloadBtn_2').on("click", function(){
    location.reload();
  })

});




// var numbers=[];
// numbers.sort(function(a, b){return a-b});

//    var numberSort = numbers.sort((a, b) => a-b); / ES6 version