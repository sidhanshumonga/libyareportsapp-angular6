var cellSumFunction = (function() {

    return {

        //sum function starts here
      ewarnReport: function() {
        $(".custom-table-div table tr").each(function (index) {
            var sum = 0;
            var flag = false;
            $(this).find(".et16").each(function (cellindex) {
             
              var value = 0;
              if ($(this)[0].innerText == "") {
                value = 0;
              }
              else {
                value = parseInt($(this)[0].innerText);
              }
              if(!isNaN(value)){
                sum = sum + value;
                flag = true;
              }
             
            });
  
  
            if (flag) { 
                var cell = "<td>" + sum + "</td>";
                $(this).prepend(cell);
            }
            else if (!flag && index == 0) {
             var cell =  "<td><b>Sum</b>   </td>";
              $(this).prepend(cell);
            }
            else {
              var cell = "<td></td>";
              $(this).prepend(cell);
            }
  
  
          });

          //sum function ends here
      },
      func2: function() {
        alert('function 2 called');
      }
    }
  
  })(cellSumFunction||{})