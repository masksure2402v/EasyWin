function odnav(){
var url = (window.location).href;
var tab = url.substring(url.lastIndexOf('&') + 1);
if(tab=="type01"){FPOD();}
else if(tab=="type02"){ParOD();}
else if(tab=="type03"){SapOD();}
else if(tab=="type04"){DCOD();}
else if(tab=="type05"){ABOD();}
else if(tab=="type06"){WCOD();}
else if(tab=="type07"){MSOD();}
else if(tab=="type08"){HTOD();}
}

function FPOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt1').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type01");
	//load Data 
	$.get("/fparity/xm_orders", function(data, status){$("#dtaod").html(data); });
}
function ParOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt2').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type02");
	//load Data
	$.get("/parity/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function SapOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt3').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type03");
	//load Data
	$.get("/sapre/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function DCOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt4').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type04");
	//load Data
	$.get("/dice/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function ABOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt5').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type05");
	//load Data
	$.get("/AvB/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function WCOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt6').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type06");
	//load Data
	$.get("/wheelocity/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function MSOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt7').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type07");
	//load Data
	$.get("/msweeper/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}
function HTOD(){
	loading();clsodtnav();clsdtaod();
	$('#odt8').addClass('sel');
	window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type08");
	//load Data
	$.get("/HnT/xm_orders", function(data, status){$("#dtaod").html(data); });
	
}

function clsodtnav(){
	$('#odt1, #odt2, #odt3, #odt4, #odt5, #odt6, #odt7, #odt8').removeClass('sel');
}
function clsdtaod(){$('#dtaod').empty();}

function odback(){
	$('#odrea').empty();
	if (typeof $.cookie('pUrl') === 'undefined'){
		myacc();
	} else {
		var vlink=$.cookie("pUrl");
		var tab = vlink.substring(vlink.lastIndexOf('=') + 1);
		var warea=$("#warea").text();
		if(warea!==""){
			window.history.pushState("object or string", "Title", vlink);
			if(tab=="3"){$("#cpanel").show();}else{hcp();}
		}else{
			window.history.pushState("object or string", "Title", vlink);
			myacc();
		}
	}
}