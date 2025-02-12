$(document).ready(function(){

  $(".outer").mouseover(function(){
    console.log("Outer Mouse Over")
  })

  $(".outer").mouseenter(function(){
    console.log("Outer Mouse Enter")
  })

  $(".inner").mouseover(function(){
    console.log("Outer Mouse Over")
  })

  $(".inner").mouseenter(function(){
    console.log("Outer Mouse Enter")
  })

  // input 상자에 선택되면 핑크색
  // 선택이 해제되면 노랑색
  $("input[type=password]").focus(function(){
    $(this).css("background-color", "pink")
  })

  $("input[type=password]").blur(function(){
    $(this).css("background-color", "yellow")
  })
})