var d,h,m,s,animate;

function init(){
  d=new Date();
  h=d.getHours();//0-23 hours
  m=d.getMinutes();//0-59 minutes
  s=d.getSeconds();//0-59 seconds
  clock();
};

function clock(){
  s++;
  if(s==60){
    s=0;
    m++;
    if(m==60){
      m=o;
      h++;
      if(h==24){
        h=0;
      }
    }
  }
  $('sec',s);
  $('min',m);
  $('hr',h);
  animate=setTimeout(clock,1000);
};

function $(id,val){
  if(val<10){
    val='0'+val;
  }
  document.getElementById(id).innerHTML=val;
};

window.onload=init;
