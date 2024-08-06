var tab;var trcamt;var refbc;navi();loadApp();
function navi(){
var url = (window.location).href;
tab = url.substring(url.lastIndexOf('=') + 1);
if(tab=="0" || tab=="1" || tab=="2" || tab=="3" ){afnav();}
else if(tab=="dairy"){dairy();}
else if(tab=="RechargeList"){rclist();}
else if(tab=="withDrawType1"){wdmain();}
else if(tab=="withDrawType2"){wdcom();}
else if(tab=="complaint"){Opsup("0");}
else if(tab=="mylink"){ntmls();invite();}
else if(tab=="privilege"){ntpvl();invite();}
else if(tab=="IncomeDetail"){comr();invite();}
else if(tab=="InviteRecord"){invr();invite();}
else if(tab=="DailyIncome"){dincr();invite();}
else if(tab=="CheckIn"){CheckR();chinh();}
else if(tab=="Rewards"){taskR();chinh();}
else if(tab=="Coupons"){ccp();chinh();}
else if(tab=="FastParity"){fsmain();}
else if(tab=="HeadnTail"){htmain();}
else if(tab=="Parity"){pmain();}
else if(tab=="Sapre"){sapmain();}
else if(tab=="Dice"){dicemain();}
else if(tab=="AndarBahar"){abmain();}
else if(tab=="Wheelocity"){wcmain();}
else if(tab=="MineSweeper"){msmain();}
else if(tab=="JetX"){jxmain();}
else if(tab=="IPL"){iplMx();}
else if(tab=="Evolution"){getGames(1);}
else{
	var pattern = /OrderList/;
	var exists = pattern.test(tab);
	if (exists) {odlist();}
	else{
		var pattern = /recharge/;
		var exists = pattern.test(tab);
		if (exists) {rcstart();}
		else{
			var pattern = /rchash/;
			var exists = pattern.test(tab);
			if (exists) {
				var url = (window.location).href;
				var rcoid = url.substring(url.lastIndexOf('&') + 1);
				$.cookie("rchash", rcoid, {path:"/"});
				payod();
			}
			else{
				window.history.pushState("object or string", "Title", "#/TabIndex?index=0");
				tab="0";afnav();
			}
		}
	}
}
}

function loadApp(){Ranlex();OPbook(0);wRWU();chref(30000);setInterval(function() {usercheck();}, 30000);}
function afnav(){$('#footer').append(bnftind);}
function dairy(){loading();hcp();$('#warea').append(moreRDF);$("#backF").attr('onclick','myacc()');$("#MoreRCT").text('Transactions');setTimeout(function(){$.get("/my/dairy", function(data, status){$("#dtaod").html(data);clsload();});},200);}

function fsmain(){var result = rcpmns('fp');const data = JSON.parse(result);var rcV = data.rcV;	if(rcV=="on"){$('#warea').append(gmxfsfrm);setTimeout(function(){loadFS();},200);}else{pums('warea');}}
function htmain(){var result = rcpmns('ht');const data = JSON.parse(result);var rcV = data.rcV;	if(rcV=="on"){$('#warea').append(gmxhtfrm);setTimeout(function(){loadHT();},200);}else{pums('warea');}}
function pmain(){
	var result = rcpmns('pr');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(gmxocgfrm);$('#fxnam').text('Parity');
		$('#fxrcdn').text('Parity');$('#fxrule').attr('onclick','prule()');
		$('#fxmrcd').attr('onclick','prx20()');
		$('#vevod').attr('onclick','pevod()');
		$('#vmyod').attr('onclick','podx()');
		$('#moreod').attr('onclick','podx20()');
		setTimeout(function(){loadP();},200);
	}else{pums('warea');}
}

function sapmain(){
	
	var result = rcpmns('sp');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(gmxocgfrm);$('#fxnam').text('Sapre');
		$('#fxrcdn').text('Sapre');
		$('#fxrule').attr('onclick','srule()');
		$('#fxmrcd').attr('onclick','srx20()');
		$('#vevod').attr('onclick','sevod()');
		$('#vmyod').attr('onclick','sodx()');
		$('#moreod').attr('onclick','sodx20()');
		setTimeout(function(){loadS();},200);
	}else{pums('warea');}
}
function dicemain(){
	var result = rcpmns('dc');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(dcmfrm);setTimeout(function(){loadD();},200);
	}else{pums('warea');}
}
function abmain(){
	var result = rcpmns('ab');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(abgmxmf);setTimeout(function(){loadAB();},200);
	}else{pums('warea');}
}
function wcmain(){
	var result = rcpmns('sw');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(wcgmxf);setTimeout(function(){loadWC();},200);
	}else{pums('warea');}
}
function msmain(){
	var result = rcpmns('ms');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').append(msmf);setTimeout(function(){mstype="3x3";loadMS();},200);
	}else{pums('warea');}
}
function jxmain(){
	var result = rcpmns('jx');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$('#warea').load('jetxm');
		setTimeout(function(){
			wall();
			loadJX();
		},200);	
	}else{pums('warea');}
}
function iplMx(){clswar();$('#warea').append(evnF);setTimeout(function(){wall();loadEVN();},200);window.history.pushState("object or string", "Title", "#/TabIndex?index=IPL");}

function getGames(x){
	var result = rcpmns('lv');const data = JSON.parse(result);var rcV = data.rcV;	
	if(rcV=="on"){
		$.ajax({
			url: "/games/get",
			type: "post",
			data: {
			"x" : x,
			},
			success: function(res){
				clsload();
				if(res!=='sO'){
					if(res!==false){
						var frm = '<div class="col-12 nav-top"><div class="row lgsnv"><div class="col-6 xtl ddavc"><span class="nav-back wt" onclick="main()"></span> <span class="tf-20" id="lgn"></span></div><div class="col-6 xtr lgdbf"><span><img src="/includes/images/svg/zoom.svg" height="24"></span> <span><label class="switch"><input type="checkbox" id="scnm"> <span class="slide round"></span></label></span></div></div></div><div class="col-12"><div class="row sgstk"><div class="col-12 sgfrm" id="frame"><div class="sgifrm"></div></div></div><div class="row tfwr pt-1 mb-3" id="gdata"></div></div><div class="col-12 mr-0" id="lfsm"></div>';
						$("#warea").html(frm);
						setTimeout(function(){
							var n;
							if(x==1){n='Evolution';}
							clsfoot();$("#lgn").html(n);$("#gdata").html(res);
							window.history.pushState("object or string", "Title", "#/TabIndex?index="+n);
						},200);
					}else{
						ssmg('bn','Fail to load games.');
					}
				}else{
					reSC(res);
				}
			},
			beforeSend: function(){
				loading();
			}
		});
	}else{
		pums('warea');
	}
}

function screenslider(){
	var checkbox = document.getElementById('scnm');
	var isChecked = checkbox.checked;

	if (isChecked) {
		return true;
	} else {
		return false;
	}
	
}

function initGames(i,m){
	$.ajax({
		url: "/games/init",
		type: "post",
		data: {
		"i" : i,
		},
		success: function(res){
			clsload();
			if(res!=='sO'){
				if(res!=='false'){
					
					var s = screenslider();
					if(s==true){
						
						var a;
						
						// Create iframe element
						var iframe = document.createElement('iframe');
						iframe.src = res;
						
						if(m=='a'){
							$("#frame").html('<div class="sgifrm"></div>');
							a = 'exitGame';
							
						}else if(m=='JetX' || m=='DoubleX'){
							
							iframe.style.marginTop = '-26px';
							
						}else{
							a = 'main';
						}
						
						var fsm='<div class="row lgdfm"><div class="col-12 nav-top fsg"><div class="row"><div class="col-12 xtl ddavc"><span class="nav-back wt fsg" onclick="'+a+'()"></span></div></div></div><div class="col-12" id="fscn"><div class="col-12" style="padding:0;"><div class="pt-4">Loading game . . .</div></div></div></div>';
						$("#lfsm").html(fsm);

						iframe.style.position = 'fixed';
						iframe.style.inset = '0';
						iframe.style.zIndex = '10';
						iframe.style.width = '100%';
						iframe.style.height = '100%';
						iframe.style.border = 'none';
						
		
						// Insert iframe into section with id "1"
						$("#frame").empty;
						var section = document.getElementById('fscn');
						section.innerHTML = ''; // Clear existing content
						section.appendChild(iframe);

						
					}else{
															
						// Create iframe element
						var iframe = document.createElement('iframe');
						
						iframe.src = res;
						iframe.style.width = '100%';
						iframe.style.height = 'auto';
						iframe.style.border = 'none';
						iframe.style.aspectRatio = '386 / 224';
						iframe.style.background = '#000';
						iframe.style.paddingTop = '5px;';
						iframe.style.borderRadius = '0 0 10px 10px';
		
						// Insert iframe into section with id "1"
						$("#frame").empty;
						var section = document.getElementById('frame');
						section.innerHTML = ''; // Clear existing content
						section.appendChild(iframe);
					}
					
					//Scanning
					scn = setInterval(function() {betScan();}, 20000);
					
				}else{
					ssmg('bn','The game failed to load due to an unexpected issue. Please try again or choose another game to play.');
				}
			}else{
				reSC(res);
			}
		},
		beforeSend: function(){
			loading();
		}
	});
	
	
}

function selInit(i,m){
	var fsm='<div class="col-12 lgdfm pa-0"><div class="col-row nav-top fsg"><div class="col-8 xtl ddavc"><span class="nav-back wt fsg" onclick="main()"></span></div><div class="col-4 xtr lgdbf"><span hidden><label class="switch"><input type="checkbox" id="scnm"> <span class="slide round"></span></label></span></div></div></div><div class="col-12 mr-0" id="lfsm"></div>';
	$("#warea").html(fsm);$("#scnm").prop("checked", true);
	initGames(i,m);
}

function exitGame(){$("#lfsm").empty();clearInterval(scn);}
function betScan(){$.get("/games/scan", function(res, status){reSC(res);});}

function clsCD(){clearInterval(wccdown);clearInterval(abcdown);clearInterval(cdown);}

function odlist(){$('#odrea').empty();$('#odrea').append(odPif4);hcp();setTimeout(function(){odnav();},200);}

function wdmain(){

	window.history.pushState("object or string", "Title", "#/TabIndex?index=withDrawType1");
	clswar();$('#warea').append(wdmf);WdType="A";
	
	var result = rcpmns('wdS');
	const data = JSON.parse(result);
	var rcV = data.rcV;	
	if(rcV=="on"){
		Lcard();setTimeout(function(){wall();},200);setTimeout(function(){wdinfo();},1000);
	}else{
		$("#xv08").css('padding','0');$("#xv08").removeClass('mt-3');
		$("#xv08").empty();$("#xv09").remove();cpum('xv08');
	}

}
function wdcom(){
	window.history.pushState("object or string", "Title", "#/TabIndex?index=withDrawType2");
	clswar();$('#warea').append(wdmf);WdType="B";
	
	var result = rcpmns('wdS');
	const data = JSON.parse(result);
	var rcV = data.rcV;	
	if(rcV=="on"){
		Lcard();setTimeout(function(){$('#u_bal').load('/invite/avcom');wdinfo();},200);
		setTimeout(function(){wdinfo();},1000);
	}else{
		$("#xv08").css('padding','0');$("#xv08").removeClass('mt-3');
		$("#xv08").empty();$("#xv09").remove();cpum('xv08');
	}
	
	
}
function Lcard(){
    hcp();
    
    $.get("/modules/wallet/upi_card", function(data, status){$("#upcard").html(data);});

    $.get("/modules/wallet/paytm_card", function(data, status){$("#pwcard").html(data);});

    $.get("/modules/wallet/bank_card", function(data, status){$("#bankcard").html(data);});
    
}
function wdinfo(){
	$("#wdamt").attr("placeholder", wm+" ~ "+wx);
	var sdwb = $('#u_bal').text();sdwb = parseInt(sdwb);wx = parseInt(wx);if(sdwb>wx){sdwb=wx;}
	$('#mwa').text('₹'+sdwb);$('#mwda').text('₹'+wm);
	var v = wc.split(",");var x = v[0];var y = v[1];var z = v[2];
	$('#wdw').text(y);$('#wdx').text(x);$('#wdy').text(y);$('#wdz').text(z);
}

function loading(){$('#dta_ref').append(loader);}

function clstab(){$('#moxht2b4u').removeClass('sel');$('#raeiyf2m0').removeClass('sel');$('#sfrm6bvy').removeClass('sel');$('#mcpnvd2my').removeClass('sel');$('#adsob').removeClass('adsob');$('#home').removeClass('sel');$('#group').removeClass('sel');$('#wallet').removeClass('sel');$('#my').removeClass('sel');$("#cpanel").removeClass("active");}
function clswar(){$('#warea').empty();}
function clsfoot(){$('#footer').empty();}
function clsload(){$('#dta_ref').empty();$("#dtl").remove();}
function exit(){$('#lfprd').empty();$('#moreRcd').remove();$('.main').removeClass('scrollOff');}
function exitS(x){$('#'+x).remove();}
function clsxrule(){$("#xrule").empty();$("#xrule").removeClass("bbg");$(".main").removeClass("scrollOff");}

function wRWU(){$.ajax({url: '/modules/wallet/wRWU',success: function (response) {trcamt=response;}});}

function wall(){
	if (!!$.cookie('WallBal')) {
		var WallBal = $.cookie("WallBal");
		$('#u_bal').text(WallBal);
		$('#lhsd').removeClass('wals');
	}else{
		$.ajax({url: '/modules/wallet/WallBal',success: function (response) {$('#u_bal').text(response);$('#lhsd').removeClass('wals');}});
	}
}
function wallU(){$.ajax({url: '/modules/wallet/opdaybook',success: function (response) {$('#u_bal').text(response);$('#lhsd').removeClass('wals');}});}

function OPbook(x){
	$('#lhsd').addClass('wals');
	if(x==1){
		wallU();
	}else if(x==0){
		//check if user already logged in
		if (!!$.cookie('usrli')) {
			var cnx = $.cookie("usrli");
			if(cnx==0){
				//set new cookie
				$.cookie("usrli", "1", {path:"/"});
				wallU();
			}else{
				wall();
			}
		}else{
			//set new cookie
			$.cookie("usrli", "1", {path:"/"});
			wallU();
		}
		
	}
}

function userInfo(){var uid = $.cookie("uid");var umob = $.cookie("umob");  var unam = $.cookie("unam");$("#u_id").text(uid);$("#u_mob").text(umob);$("#u_nam").text(unam);}

function BonBall(){$('#u_com').load('/invite/avcom');}
function loadInv(){
	
	var upd = $.cookie("UPD");
	if(upd=="N"){
		var d ='<div class="col-12 conod" id="clink"><div class="ssmg fadein"><div class="xtc"><div class="xtc"><img src="/includes/icons/update.svg"></div><div class="tf-16 pt-1">Updating, please wait...</div><div class="tf-12 pt-1 pb-1">Do not close or refresh this page.</div></div></div></div></div>';$('#dta_ref').html(d);
		
		$.ajax({url: '/invite/UPD',success: function (x) {
			
			if(x=="true"){
				$.cookie("UPD", 'Y', {path:"/"});clink();uinvInfo();
				
			}else{
				clink();ssmg('bn','Something went wrong!');
			}
			
		}});
		
	}else{
	    uinvInfo();
	}
}
function submitBUR(){$.get("/invite/pbur", function(res, status){if(res=="true"){$("#brst").css("width","100%");$("#brst").html("Thank you for your response. You will receive an update within 24 hours.")}});}
function uinvInfo(){

	BonBall();
	$("#open").load("/invite/invite_info");
	$.get("/invite/insort", function(data, status){$("#insort").html(data);});

}

function hcp(){$("#cpanel").hide();}
function scp(){$("#cpanel").show();}
function main(){clsfoot();afnav();home();scp();}
function myacc(){clsfoot();afnav();my();scp();}
function invite(){afnav();clstab();$('#raeiyf2m0').addClass('sel');$('#warea').append(minrid);setTimeout(function(){loadInv();},200);}
function recharge(){clsfoot();afnav();wallet();scp();rcpen();}
function tabid0(){afnav();clstab();$('#moxht2b4u').addClass('sel');$('#warea').append(mphs);setTimeout(function(){wall();userInfo();},200);}
function chinh(){afnav();$('#moxht2b4u').addClass('sel');$('#home').addClass('sel');$('#warea').append(mphs);setTimeout(function(){wall();userInfo();},200);}
function chref(x){refbc = setTimeout(function(){$.get("/invite/refer_bonus", function(data, status){$("#opffp").html(data);});},x);}
function usercheck(){$.ajax({url: "/my/check",type: "post",data: {"check" : 1,},success: function(x){reSC(x);}});}
function reSC(x){if(x==='sO'){ssmg('bn','Session out!');window.location.href='/signout';}else if(x!=''){clsbfrm();ssmg('bn',x);}}
var WdType,cdown,abcdown,wccdown,scn,evd,amount,paymode,mylink,sel="",fpod="",pod="",sod="",dod="",abod="",wcod="",htod="",jbm,cunx,mstype;
