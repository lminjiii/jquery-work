$(document).ready(function(){
  let data = [
    {name : '장원영', age: 21},
    {name : '안유진', age: 22},
    {name : '리즈', age: 21},
    {name : '레이', age: 22},
    {name : '이서', age: 19},
    {name : '가을', age: 23},
  ]

  $("#btn_forLoop").on("click", function(){
    let result = " "
    // for 문
    for(let i = 0; i < data.length; i++){
      result =
        result +
        `
      <tr>
          <td>${i + 1}</td>
          <td>${data[i].name}</td>
          <td>${data[i].age}</td>
      </tr>
         `;
    }
    $("#forOut").html(result)
  })

  $("#btn_forEach").on("click", function(){
    let result = " "
    // for-Each, map 문
    data.map((x, index) => {
      result =
        result +
        `
      <tr>
          <td>${index + 1}</td>
          <td>${x.name}</td>
          <td>${x.age}</td>
      </tr>
         `;
    });
    $("#forEach").html(result);
  })

  $("#btn_jqueryEach").on("click", function(){
    let result = " "
    // Jquery Each 문
    $.each(data, function(index, x) {
      result += `
      <tr>
          <td>${index + 1}</td>
          <td>${x.name}</td>
          <td>${x.age}</td>
      </tr>
      `;
    });
    $("#jqueryEach").html(result);
  })

})