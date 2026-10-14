(function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
  var lb=document.getElementById("lb");
  if(lb){
    var lbImg=document.getElementById("lbImg");
    document.querySelectorAll(".card").forEach(function(c){
      c.addEventListener("click",function(){
        var im=c.querySelector("img");
        lbImg.src=im.src;lbImg.alt=im.alt;
        lb.classList.add("open");
      });
    });
    document.getElementById("lbClose").addEventListener("click",function(){lb.classList.remove("open")});
    lb.addEventListener("click",function(e){if(e.target===lb)lb.classList.remove("open")});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")lb.classList.remove("open")});
  }
  var form=document.getElementById("waForm");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var n=document.getElementById("waName").value.trim();
      var s=document.getElementById("waSize").value;
      var t=document.getElementById("waText").value.trim();
      var msg="Здравствуйте! "+(n?("Меня зовут "+n+". "):"")+(s?("Мой размер: "+s+". "):"")+(t?("Ищу: "+t):"Интересует наличие.");
      window.open("https://wa.me/996509977792?text="+encodeURIComponent(msg),"_blank");
    });
  }
  var chips=document.querySelectorAll("[data-filter]");
  if(chips.length){
    chips.forEach(function(ch){
      ch.addEventListener("click",function(){
        chips.forEach(function(c){c.classList.remove("on")});
        ch.classList.add("on");
        var f=ch.getAttribute("data-filter");
        document.querySelectorAll("#grid .card").forEach(function(card){
          card.classList.toggle("hide",f!=="all"&&card.getAttribute("data-cat")!==f);
        });
      });
    });
  }
  var burger=document.getElementById("burger");
  if(burger){
    var menu=document.querySelector(".nav-links");
    burger.addEventListener("click",function(){
      var open=menu.classList.toggle("open");
      burger.classList.toggle("open",open);
      burger.setAttribute("aria-expanded",open?"true":"false");
      burger.setAttribute("aria-label",open?"Закрыть меню":"Открыть меню");
    });
    menu.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click",function(){menu.classList.remove("open");burger.classList.remove("open");burger.setAttribute("aria-expanded","false")});
    });
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&menu.classList.contains("open")){menu.classList.remove("open");burger.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
  }
})();
