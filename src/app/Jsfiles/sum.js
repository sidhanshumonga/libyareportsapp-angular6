var cellSumFunction = (function() {

    return {

        //sum function starts here
        sumReports: function() {
          var limit = $(".headt").index();
        $(".custom-table-div table tr").each(function (index) {
            var sum = 0;
            var flag = false;
            $(this).find("td").each(function (cellindex) {
             
              var value = 0;
              if ($(this)[0].innerText == "") {
                value = 0;
              }
              else {
                if($(this)[0].innerText.match(/^\d+$/)){
                  value = parseInt($(this)[0].innerText);
                }
                
              }
              if(!isNaN(value)){
                sum = sum + value;
                flag = true;
              }
             
            });
  
  
            if (flag && sum != 0) { 
              var cell = "<td>" + sum + "</td>";
              $(this).prepend(cell);
           }
          else if ($(this).hasClass("headt")) {
           var cell =  "<td><b>Total</b></td>";
            $(this).prepend(cell);
          }
          else if (!flag && index < limit) {
            var col = $(this).find("td:first").prop("colSpan");
            $(this).find("td:first").attr('colspan',col+1);
           }
          else {
            var cell = "<td></td>";
            $(this).prepend(cell);
          }
  
  
          });

          //sum function ends here
      },
      sumReportsAll: function() {
        var limit = $(".headt").index();
        $(".custom-all-tables-div table tr").each(function (index) {
            var sum = 0;
            var flag = false;
            $(this).find("td").each(function (cellindex) {
             
              var value = 0;
              if ($(this)[0].innerText == "") {
                value = 0;
              }
              else {
                if($(this)[0].innerText.match(/^\d+$/)){
                  value = parseInt($(this)[0].innerText);
                }
              }
              if(!isNaN(value)){
                sum = sum + value;
                flag = true;
              }
             
            });
  
  
            if (flag && sum != 0) { 
              var cell = "<td>" + sum + "</td>";
              $(this).prepend(cell);
           }
          else if ($(this).hasClass("headt")) {
           var cell =  "<td><b>Total</b></td>";
            $(this).prepend(cell);
          }
          else if (!flag && index < limit) {
            var col = $(this).find("td:first").prop("colSpan");
            $(this).find("td:first").attr('colspan',col+1);
           }
          else {
            var cell = "<td></td>";
            $(this).prepend(cell);
          }
  
  
          });
          //sum function ends here
      }
    }
  
  })(cellSumFunction||{})