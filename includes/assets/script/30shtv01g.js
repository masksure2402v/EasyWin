var htodata; var y=0;
function loadHT(){
	var element = document.getElementById("evod");
	element.id = "hteod";clearInterval(cdown);htcd();ghtarrd();
	setTimeout(function(){myhtord(0);myhtword();},1000);
}
function reloadHT(){ghtarrd();myhtord(0);myhtword();}

function htcd(){
	var data = GETPNOT('30','4');
	Period = data.Period;if(Period==2881){htcd();return false;}
	fullPeriod = data.fullPeriod;$('#cpd').text(fullPeriod);loadEV(fullPeriod);
	OpenT = data.OpenT;cx = new Date(OpenT).getTime();
	cdown = setInterval(function() {
		var nd = CurTime();var now = nd.getTime();var htc= cx - now;
		var seconds = Math.floor((htc% (1000 * 60)) / 1000);
		if(seconds < 10){$("#fs0").text('0');$("#fs1").text(seconds);}
		else{let num = seconds;let arr = Array.from(String(num), Number);var fs0 = arr[0];var fs1 = arr[1];$("#fs0").text(fs0);$("#fs1").text(fs1);}
		if(seconds <= 9){joinDis();clsbfrm();clearTimeout(evd);rotateCoin();}
		if (htc < 0){clearInterval(cdown);$("#fs0").text('0');$("#fs1").text('0');ghtrcd(fullPeriod,1);}
	}, 1000);
}

function rotateCoin(){if(y==0){y = 1;$("#coin").addClass('spinm');}}

function ghtarrd(){
	var res = wnxRCS('ht');
	if(res != false){
		if(res.length) {
			var elm = "";
			$.each(res, function(key,value) {
				var c,v, p = value.p, r = value.r;
				if(r=='Head'){c = 'RS H'; v = 'H';}else{c = 'GS T'; v = 'T';}
				p = p.substr(p.length - 3);
				elm = '<div class="rcd-pillar mb-2"><div class="'+c+'"><div class="tpr">'+v+'</div></div><div class="rcd-per">'+p+'</div></div>'+elm;
			});
			$("#rx10").html(elm);
		}
	}
	upnextht();
}

function ghtrcd(xPeriod,x){
	var res = lsCRC(xPeriod,'ht');
	if(res==false){
		setTimeout(function(){
			if(x <= 3){ghtrcd(xPeriod,x);x = x + 1;}
			else{
				location.reload();
			}
		},2000);
	}else{
		r = res.r;
		c = res.c;
		s = res.s;
		w = res.w;
		d = res.d;
		xSP = xPeriod.substr(xPeriod.length - 3);
		var coinElement = document.getElementById('coin');
		$("#coin").css("-webkit-transform","rotateY("+d+"deg)");
		$("#coin").removeClass('spinm');
		setTimeout(function(){
			$("#upcp").remove();
			$("#rx10").append('<div class="rcd-pillar mb-2"><div class="'+c+'"><div class="tpr">'+s+'</div></div><div class="rcd-per">'+xSP+'</div></div>');	
			upnextht();if(htod==xPeriod){wnxhtbanner(r,w);}else{htod==="";}
			joinEnab();htcd();y=0;
			var rxid = $.cookie("rowid");rxid = parseInt(rxid);rxid = rxid + 1;
			if(rxid <= 29){$.cookie("rowid", rxid, {path:"/"});}else{$.cookie("rowid", 19, {path:"/"});ghtarrd();}
		},500);
	}
	
}

function upnextht(){
	var xpd = GETPNOT('30','4');
	xperido = xpd.fullPeriod;
	xperido = xperido.substr(xperido.length - 3);
	$("#rx10").append('<div class="rcd-pillar mb-2" id="upcp"><div class="per-rcd dn upn"><b>?</b></div><div class="rcd-per">'+xperido+'</div></div>');	
}
function wnxhtbanner(r,w){
	s = htodata.xSelect;
	a = htodata.xAmount;
	p = htodata.xPeriod;
	var res = Odresult('ht',r,w,s,a,p);
	if(res==true){htod="";myhtord(1);}
	
}

function myhtord(x){$.get("/HnT/x10_order", function(data, status){$("#myod").html(data);if(x==1){$("#mywod").empty();}});}
function myhtword(){$.get("/HnT/worder", function(data, status){$("#mywod").html(data);});}

function newhtod(){
	amount=$('#tca').text();
	var sdwb= $('#u_bal').text();sdwb = parseInt(sdwb);
	if(amount > sdwb){ssmg('bn','Low Balance!');clsbfrm();return false;}
	else if(amount=="" || amount < 10){ssmg('bn','Please check contract amount!');clsbfrm();return false;}
	$('#nod').empty();$('#nod').append(lodsm);$('#nod').addClass('clickOff');
	$.ajax({
		url: 'HnT/neworder',
		type: 'post',
		data: {
			'neworder' : 1,
			'amount' : amount,
			'sel' : sel,
			'period' : fullPeriod,},
	success: function(response){
		if (response == 'true' ){
			wall();LvHTBonus();clsbfrm();ssmg('gn',amount + ' Successfully');setTimeout(function(){clink();},1000);
			htod = fullPeriod;
			htodata = new Object();
			htodata.xSelect = sel;
			htodata.xAmount = amount;
			htodata.xPeriod = fullPeriod;
		}else{
			clsbfrm();if(response=="session timeout!"){ssmg('bn','Session timeout! Signing out . . .');setTimeout(function(){sot();},1500);}else{ssmg('bn',response);}
			}
		}
	});
}
function LvHTBonus(){myhtword();$.ajax({url: 'HnT/level_bonus',type: 'post',data: {'Bonus' : 1,'amount' : amount,'sel' : sel,'period' : fullPeriod,},success: function(response){if (response == 'true' ){}else{ssmg('bn',response);}}});}

function htrx20(){loading();$('#lfprd').append(mxgrdf);$('#mxGRT').text('HeadTail');$('.main').addClass('scrollOff');wnxM('ht');}
function htrule(){$(".main").addClass("scrollOff");$("#xrule").addClass("bbg");$('#xrule').append(htrl);}
function htevod(){$('#ev').show();$('#order').hide();$('#vmyod').removeClass('active');$('#vevod').addClass('active');}
function htodx(){$('#ev').hide();$('#order').show();$('#vmyod').addClass('active');$('#vevod').removeClass('active');$("#evod").empty();}
function htodx20(){$.cookie("pUrl", "#/TabIndex?index=HeadTail", {path:"/"});window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type08");loading();odlist();}
