var result;

window.addEventListener("message", function (e) {
  console.log("------------------------------");

  console.log("%c 查询的key:", "background: #000000; color: #FFFF00", e.data);
  if (window.getState) {
    result = window.getState(e.data);
  } else {
    result = "当前不是react-model开发环境，请检测环境后再使用";
  }
  console.log("%c 查询结果:", "color: #32CD32", result);
});

//injected 传 最终的值给content
// content 传 需要查询的key 给 injected
