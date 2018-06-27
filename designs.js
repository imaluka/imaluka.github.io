var height;
var width;
var color;

$("#sizePicker").submit(function(pickSIze)
{
 event.preventDefault();
 height = $("#inputHeight").val();
 width = $("#inputWidth").val();
 makeGrid(height, width);
 // console.log(height, width); now my sizepicker is working!
});


// The function that creates the grid
function makeGrid(n, m)
{
 // remove current grid to make provision for new one
 $("tr").remove();
 // $("td").remove();


//build new grid
for(var r=1; r<=n; r++)
 {
  $("#pixelCanvas").append("<tr id=grid" + r + "></tr>");
    for (var c = 1; c <= m; c++)
    {
      $("#grid" + r).append("<td></td>");
    }
 };


// The code that creates the coloring
$("td").click(function colouring()
  {
    shade = $("#colorPicker").val();
    if($(this).attr("style"))
      {
        $(this).removeAttr("style");
      }else
        {
          $(this).attr("style", "background-color:" + shade);
        };
  });
};