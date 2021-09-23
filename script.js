
var oldcp = 'col-1';
var oldcc = 'id-1';
var temp = 'null';
var temp1 = 'null';

function whichcol(clicked_cp)
{

    var cp = clicked_cp;    
    document.getElementById(oldcp).classList.remove('zoom2');
    document.getElementById(cp).classList.add("zoom2");
    temp = cp;
    cp = oldcp;
    oldcp = temp;

}

function whichdiv(clicked_cc)
{ 
    var cc = clicked_cc;       
    document.getElementById(oldcc).classList.remove('zoom1');
    document.getElementById(cc).classList.add("zoom1");   
    temp1 = cc;
    cc = oldcc; 
    oldcc = temp1;
}


    // if(cc == "id-1"){
    //     document.querySelector('div.flex-column').nextElementSibling.classList.add("zoom2");}
    // if(cc == "id-2"){
    //     document.querySelector('div.flex-column').previousElementSibling.classList.add("zoom2");}



