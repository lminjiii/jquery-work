$(document).ready(function(){
  
  $("#intro").click(function(){
    $("body").css("background-color", "pink")
    $(this).css("background-color", "skyblue")
    $("p .intro").css("background-color", "yellow")
  })

  $(".btn_1").click(function(){
    $("li:last").css("color", "yellow")
  })

  $("#btn_2").click(function(){
    $("[href]").css("background-color", "gold")
  })

  $("#btn_3").click(function(){
    $("[href!='www.daum.net']").css("color", "black")
  })

  $("#btn_4").click(function(){
    $("tr:odd").css("background-color", "gold")
  })
})