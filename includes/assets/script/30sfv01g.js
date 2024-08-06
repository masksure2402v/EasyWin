var fsodata;function loadFS(){var element = document.getElementById("evod");element.id = "fseod";clearInterval(cdown);fpcd();gfsarrd();setTimeout(function(){myfsord(0);myfsword();},1000);}
function reloadFS(){gfsarrd();myfsord(0);myfsword();}

function fpcd(){
	var data = GETPNOT('30','4');
	Period = data.Period;if(Period==2881){fpcd();return false;}
	fullPeriod = data.fullPeriod;$('#cpd').text(fullPeriod);loadEV(fullPeriod);
	OpenT = data.OpenT;cx = new Date(OpenT).getTime();
	cdown = setInterval(function() {
		var nd = CurTime();var now = nd.getTime();var fpc= cx - now;
		var seconds = Math.floor((fpc% (1000 * 60)) / 1000);
		if(seconds < 10){$("#fs0").text('0');$("#fs1").text(seconds);}
		else{let num = seconds;let arr = Array.from(String(num), Number);var fs0 = arr[0];var fs1 = arr[1];$("#fs0").text(fs0);$("#fs1").text(fs1);}
		if(seconds <= 9){joinDis();clsbfrm();clearTimeout(evd);}
		if (fpc < 0){clearInterval(cdown);$("#fs0").text('0');$("#fs1").text('0');joinEnab();gfsrcd(fullPeriod,1);fpcd();}
	}, 1000);
}

function gfsarrd(){
	var res = wnxRCS('fs');
	if(res != false){
		if(res.length) {
			var elm = "";
			$.each(res, function(key,value) {
				var c,v, p = value.p, r = value.r;				
				if(r=="1" || r=="3" || r=="7" || r=="9"){c="GS";v="";}
				else if(r=="2" || r=="4" || r=="6" || r=="8"){c="RS";v="";}
				else if(r=="0"){c="RS";v="vil";}
				else if(r=="5"){c="GS";v="vil";}
				p = p.substr(p.length - 3);
				elm = '<div class="rcd-pillar mb-2"><div class="'+c+'"><div class="'+v+'"></div><div class="tpr">'+r+'</div></div><div class="rcd-per">'+p+'</div></div>'+elm;
			});
			$("#rx10").html(elm);
		}
	}
	upnextfs();
}

function gfsrcd(xPeriod,x){
	var res = lsCRC(xPeriod,'fs');
	if(res==false){
		setTimeout(function(){
			if(x <= 3){gfsrcd(xPeriod,x);x = x + 1;}
			else{
				location.reload();
			}
		},2000);
	}else{
		r = res.r;
		c = res.c;
		v = res.v;
		s = res.s;
		w = res.w;
		d = res.d;
		xSP = xPeriod.substr(xPeriod.length - 3);
		$("#upcp").remove();
		$("#rx10").append('<div class="rcd-pillar mb-2"><div class="'+c+'"><div class="'+v+'"></div><div class="tpr">'+r+'</div></div><div class="rcd-per">'+xSP+'</div></div>');	
		upnextfs();if(fpod==xPeriod){wnxfsbanner(r,w);}else{fpod==="";}
		var rxid = $.cookie("rowid");rxid = parseInt(rxid);rxid = rxid + 1;
		if(rxid <= 29){$.cookie("rowid", rxid, {path:"/"});}else{$.cookie("rowid", 19, {path:"/"});gfsarrd();}
	}
}
function upnextfs(){
	var xpd = GETPNOT('30','4');
	xperido = xpd.fullPeriod;
	xperido = xperido.substr(xperido.length - 3);
	$("#rx10").append('<div class="rcd-pillar mb-2" id="upcp"><div class="per-rcd dn upn"><b>?</b></div><div class="rcd-per">'+xperido+'</div></div>');	
}
function wnxfsbanner(r,w){
	s = fsodata.xSelect;
	a = fsodata.xAmount;
	p = fsodata.xPeriod;
	var res = Odresult('fs',r,w,s,a,p);
	if(res==true){fpod="";myfsord(1);}
	
}
function myfsord(x){$.get("/fparity/x10_order", function(data, status){$("#myod").html(data);if(x==1){$("#mywod").empty();}});}
function myfsword(){$.get("/fparity/worder", function(data, status){$("#mywod").html(data);});}

function newfsod(){
	amount=$('#tca').text();
	var sdwb= $('#u_bal').text();sdwb = parseInt(sdwb);
	if(amount > sdwb){ssmg('bn','Low Balance!');clsbfrm();return false;}
	else if(amount=="" || amount < 10){ssmg('bn','Please check contract amount!');clsbfrm();return false;}
	$('#nod').empty();$('#nod').append(lodsm);$('#nod').addClass('clickOff');
	$.ajax({
		url: 'fparity/neworder',
		type: 'post',
		data: {
			'neworder' : 1,
			'amount' : amount,
			'sel' : sel,
			'period' : fullPeriod,},
	success: function(res){
		if (res == 'true' ){
			wall();LvFSBonus();clsbfrm();ssmg('gn',amount + ' Successfully');setTimeout(function(){clink();},1000);
			fpod = fullPeriod;
			fsodata = new Object();
			fsodata.xSelect = sel;
			fsodata.xAmount = amount;
			fsodata.xPeriod = fullPeriod;
		}else{
			reSC(res);
		}
	}});
}
function LvFSBonus(){myfsword();$.ajax({url: 'fparity/level_bonus',type: 'post',data: {'Bonus' : 1,'amount' : amount,'sel' : sel,'period' : fullPeriod,},success: function(res){
	if (res != 'true' ){
		reSC(res);
	}
}});}

function fsrx20(){loading();$('#lfprd').append(mxgrdf);$('#mxGRT').text('FastParity');$('.main').addClass('scrollOff');$('#dtaod').load('/fparity/xm_records');}
function fsrule(){$(".main").addClass("scrollOff");$("#xrule").addClass("bbg");$('#xrule').append(fsrl);}
function fsevod(){$('#ev').show();$('#order').hide();$('#vmyod').removeClass('active');$('#vevod').addClass('active');}
function fsodx(){$('#ev').hide();$('#order').show();$('#vmyod').addClass('active');$('#vevod').removeClass('active');$("#evod").empty();}
function fsodx20(){$.cookie("pUrl", "#/TabIndex?index=FastParity", {path:"/"});window.history.pushState("object or string", "Title", "#/TabIndex?index=OrderList&type01");loading();odlist();}