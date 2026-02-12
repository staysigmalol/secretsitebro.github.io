var params = new URLSearchParams(location.search);
function go(path){
  var url = new URL(location.href);
  url.pathname = path;
  url.search = params.toString();
  location.href = url.toString();
}
document.addEventListener('DOMContentLoaded', function(){
  var btnDocs = document.getElementById('btnDocs');
  if(btnDocs){ btnDocs.addEventListener('click', function(){ go('/home'); }); }
  document.querySelectorAll('.bottom_element_grid').forEach(function(el){
    el.addEventListener('click', function(){
      var target = el.getAttribute('data-target');
      if(target==='home'){ go('/home'); }
      if(target==='documents'){ go('/home'); }
      if(target==='services'){ go('/home'); }
      if(target==='qr'){ go('/home'); }
      if(target==='more'){ go('/home'); }
    });
  });
  var welcome = "Dzień dobry!";
  var date = new Date();
  if (date.getHours() >= 18){ welcome = "Dobry wieczór!"; }
});
