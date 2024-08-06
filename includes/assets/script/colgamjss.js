$(document).ready(function () {
  $(window).on('focus', function () {
	var GTB = getGTB();
	if(GTB=="FastParity"){reloadFS();}
	else if(GTB=="HeadnTail"){reloadHT();}
	else if(GTB=="Parity"){reloadP();}
	else if(GTB=="Sapre"){reloadS();}
	else if(GTB=="Dice"){reloadD();}
	else if(GTB=="AndarBahar"){reloadAB();}
	else if(GTB=="Wheelocity"){reloadWC();}
	else if(GTB=="IPL"){reloadEVN();}
  });
  $(window).on('blur', function () {
	  //clsCD();
  });
});

function loadEV(period){
	var GTB = getGTB();
	setTimeout(function(){
		if(GTB=="FastParity"){$("#fseod").empty();evLOD(0,period,'fs','fseod');}
		else if(GTB=="HeadnTail"){$("#hteod").empty();evLOD(0,period,'ht','hteod');}
		else if(GTB=="Parity"){$("#peod").empty();evPO(0,period);}
		else if(GTB=="Sapre"){$("#seod").empty();evLOD(0,period,'sp','seod');}
		else if(GTB=="Dice"){$("#deod").empty();evLOD(0,period,'dc','deod');}
		else if(GTB=="AndarBahar"){$("#abeod").empty();evLOD(0,period,'ab','abeod');}
		else if(GTB=="Wheelocity"){$("#wceod").empty();evLOD(0,period,'sw','wceod');}
	},2000);
}

function evHTO(x,period){$.ajax({url: "/ev_order/evodHT",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#hteod").prepend(data);}});}
function evPO(x,period){$.ajax({url: "/ev_order/evodP",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#peod").prepend(data);}});}
function evSO(x,period){$.ajax({url: "/ev_order/evodS",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#seod").prepend(data);}});}
function evDO(x,period){$.ajax({url: "/ev_order/evodD",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#deod").prepend(data);}});}
function evABO(x,period){$.ajax({url: "/ev_order/evodAB",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#abeod").prepend(data);}});}
function evWCO(x,period){$.ajax({url: "/ev_order/evodWC",type: "POST",data: {x: x, period: period,},cache: false,success: function(data){$("#wceod").prepend(data);}});}

function getGTB(){var url = (window.location).href;var GTB = url.substring(url.lastIndexOf('=') + 1);return GTB;}

//Get Period & Open Time
function GETPNOT(ops,nod){
	var CTime = CurTime();
	var date = CTime.getDate();
	if(date <= 9){date = '0' + date;}
	var month = name[CTime.getMonth()];var xmon = num[CTime.getMonth()];var year = CTime.getFullYear();var hours = CTime.getHours();var minutes = CTime.getMinutes();var seconds = CTime.getSeconds();
	var SumT =  (hours * 60 * 60) + (minutes * 60) + seconds;
	
	var Mod = SumT / ops;
	Period = Math.ceil(Mod);
	if(Mod == Period){Period = Period + 1;}
	Period = Period.toString().padStart(nod, "0");
	fullPeriod = year+xmon+date+Period;
	
	var OpenT = Period * ops;
	
	hours = OpenT / 3600;
	hours = Math.floor(hours);
	if(hours==0){hours=='00';}

	OpenT = OpenT - (hours * 60 *60);
	minutes = OpenT / 60;
	minutes = Math.floor(minutes);
	if(minutes==0){minutes=='00';}

	OpenT = OpenT - (minutes * 60);
	if(OpenT==0){OpenT=='00';}
	
	OpenT = hours+':'+minutes+':'+OpenT;
	OpenT = month+' '+date+', '+year+' '+OpenT;

	return {Period: Period, fullPeriod: fullPeriod, OpenT: OpenT};
}

function CurTime(){var localTime = new Date().getTime();var localOffset = new Date().getTimezoneOffset() * 60000;var utc = localTime + localOffset;var offset = 5.5;var bombay = utc + (3600000*offset);var nd = new Date(bombay);return nd;}
function red(){sel='Red';fShow('red');$('#nxsel').append('Join Red');}
function green(){sel='Green';fShow('green');$('#nxsel').append('Join Green');}
function violet(){sel='Violet';fShow('violet');$('#nxsel').append('Join Violet');}
function andar(){$("#nxsel").addClass("andar");sel='Andar';fShow('andar');$('#nxsel').append('Join Andar');}
function bahar(){$("#nxsel").addClass("bahar");sel='Bahar';fShow('bahar');$('#nxsel').append('Join Bahar');}
function tie(){$("#nxsel").addClass("tie");sel='Tie';fShow('tie');$('#nxsel').append('Join Tie');}
function Head(){sel='Head';fShow('head');$('#nxsel').append('Join Head');}
function Tail(){sel='Tail';fShow('tail');$('#nxsel').append('Join Tail');}
function n0(){sel='0';fShow('');$('#nxsel').append('Select '+ sel);}
function n1(){sel='1';fShow('');$('#nxsel').append('Select '+ sel);}
function n2(){sel='2';fShow('');$('#nxsel').append('Select '+ sel);}
function n3(){sel='3';fShow('');$('#nxsel').append('Select '+ sel);}
function n4(){sel='4';fShow('');$('#nxsel').append('Select '+ sel);}
function n5(){sel='5';fShow('');$('#nxsel').append('Select '+ sel);}
function n6(){sel='6';fShow('');$('#nxsel').append('Select '+ sel);}
function n7(){sel='7';fShow('');$('#nxsel').append('Select '+ sel);}
function n8(){sel='8';fShow('');$('#nxsel').append('Select '+ sel);}
function n9(){sel='9';fShow('');$('#nxsel').append('Select '+ sel);}
function jdnx(){sel = $('#dns').val();fShow('');$('#nxsel').append('Less than '+ sel);}
function jnms(){fShow('green');}
function fShow(cls){
	$('#nfrm').html(betosfrm);
	$('#nxsel, #bfrc, #ca1, #ca2, #ca3, #ca4, #nod').addClass(cls);
	$('.main').addClass('scrollOff');$('#bfbg').show();wall();
	
	var GTB = getGTB();
	if(GTB=="FastParity"){$('#nod').attr('onclick','newfsod()');}
	if(GTB=="HeadnTail"){$('#nod').attr('onclick','newhtod()');}
	else if(GTB=="Parity"){$('#nod').attr('onclick','newpod()');}
	else if(GTB=="Sapre"){$('#nod').attr('onclick','newsod()');}
	else if(GTB=="Dice"){$('#nod').attr('onclick','newdod()');}
	else if(GTB=="AndarBahar"){$('#nod').attr('onclick','newabod()');}
	else if(GTB=="Wheelocity"){$('#nod').attr('onclick','newwcod()');}
	else if(GTB=="MineSweeper"){
		if(mstype=="3x3"){$('#nod').attr("onclick","newmsod('3x3')");}
		$('#nod').html("START");
	}

}
function clsbfrm(){$('.main').removeClass('scrollOff');$('#nfrm').empty();$('#bfbg').fadeOut(100);$("#nxsel").removeClass("red");$("#nxsel").removeClass("green");$("#nxsel").removeClass("violet");}
function ca1(){clscal();$('#ca1').addClass("selected");xcal();}
function ca2(){clscal();$('#ca2').addClass("selected");xcal();}
function ca3(){clscal();$('#ca3').addClass("selected");xcal();}
function ca4(){clscal();$('#ca4').addClass("selected");xcal();}
function clscal(){$('#ca1').removeClass("selected");$('#ca2').removeClass("selected");$('#ca3').removeClass("selected");$('#ca4').removeClass("selected");}
function xm(){xn=$("#xn").text();xn = parseInt(xn);xn--;if(xn>="1"){$("#xn").text(xn);}xcal();}
function xm5(){xn=$("#xn").text();xn = parseInt(xn);xn=xn-5;if(xn>="1"){$("#xn").text(xn);}else{$("#xn").text("1");}xcal();}
function xp(){xn=$("#xn").text();xn = parseInt(xn);xn++;if(xn<="50"){$("#xn").text(xn);}xcal();}
function xp5(){xn=$("#xn").text();xn = parseInt(xn);xn=xn+5;if(xn<="50"){$("#xn").text(xn);}else{$("#xn").text("50");}xcal();}
function xcal(){var xn=$("#xn").text();xn = parseInt(xn);var cm=$('.selected').text();cm = parseInt(cm);amount=cm*xn;$('#tca').text(amount);}
function dcnin(){sel = $('#dns').val();if(sel < 4){$('#dns').val('4');$('#dsnL').text('4');}else if(sel > 92){$('#dns').val('92');$('#dsnL').text('92');}else{$('#dsn').text(sel);$('#dsnL').text(sel);var pxm = 95 / sel;pxm = pxm.toFixed(2);$('#pxm').text(pxm);var slidW = parseInt(sel);if(slidW <= 40 && slidW > 30){slidW = slidW + 1;}else if(slidW <= 30  && slidW > 10){slidW = slidW + 2;}else if(slidW <= 10  && slidW > 1){slidW = slidW + 3;}else if(slidW >= 80  && slidW < 99){slidW = slidW - 3;}else if(slidW >= 70  && slidW < 80){slidW = slidW - 2;}else if(slidW >= 60  && slidW < 70){slidW = slidW - 1;}$('#slidPro').css('width', slidW+'%');}}
function joinDis(){toggleJoinButtons(true);}
function joinEnab(){toggleJoinButtons(false);}
function toggleJoinButtons(disabled) {
    const elements = ["#jcg", "#jcv", "#jcr", "#jaba", "#jabb", "#jabt", "#jHead", "#jTail", "#jn1", "#jn2", "#jn3", "#jn4", "#jn5", "#jn6", "#jn7", "#jn8", "#jn9", "#jn0", "#jndn"];
    
    elements.forEach(element => {
        if (disabled) {
            $(element).addClass('disabled');
        } else {
            $(element).removeClass('disabled');
        }
    });
}

function winxLWB(rest,restn,period,price,sel,conm,wlamt,sts){
	var conW='<div class="col-12 conod" onclick="clink()" id="clink"><div class="row podfs fadein" id="smgid"><div class="col-12 wnls win">WIN</div><div class="col-12"><img class="winxIMG" src="includes/images/win.png" width="320"></div><div class="col-12 pt-2 pb-2"><span class="'+rest+'">'+restn+'</span></div><div class="col-12"><div class="row tfcdb tf-16 xtl"><div class="col-4 pb-1">Period</div><div class="col-8 pb-1 xtr">'+period+'</div><div class="col-4">Price</div><div class="col-8 xtr">'+price+'</div></div></div><div class="col-12"><div class="row tfcdb selwnlbx xtl"><div class="col-4 pl-1 pb-1">Select</div><div class="col-8 pr-1 xtr pb-1">'+sel+'</div><div class="col-4 pl-1 pb-1">Point</div><div class="col-8 pr-1 xtr pb-1 tf-16">'+conm+'</div><div class="col-4 pl-1 pb-1">Amount</div><div class="col-8 pr-1 xtr pl-0 pb-1 tf-24 tfwr"><g>+₹'+wlamt+'</g></div></div></div><div class="col-12 mb-3"><div class="btn-main act">CLOSE</div></div></div></div>';
	var conL='<div class="col-12 conod" onclick="clink()" id="clink"><div class="row podfs fadein" id="smgid"><div class="col-12 wnls loss">LOSS</div><div class="col-12 pt-2 pb-2"><span class="'+rest+'">'+restn+'</span></div><div class="col-12"><div class="row tfcdb tf-16 xtl"><div class="col-4 pb-1">Period</div><div class="col-8 pb-1 xtr">'+period+'</div><div class="col-4">Price</div><div class="col-8 xtr">'+price+'</div></div></div><div class="col-12"><div class="row tfcdb selwnlbx xtl"><div class="col-4 pl-1 pb-1">Select</div><div class="col-8 pr-1 xtr pb-1">'+sel+'</div><div class="col-4 pl-1 pb-1">Point</div><div class="col-8 pr-1 xtr pb-1 tf-16">'+conm+'</div><div class="col-4 pl-1 pb-1">Amount</div><div class="col-8 pr-1 xtr pl-0 pb-1 tf-24 tfwr"><r>-₹'+wlamt+'</r></div></div></div><div class="col-12 mb-3"><div class="btn-main act">CLOSE</div></div></div></div>';
	if(sts=="WIN"){$('#suc-fail').html(conW);}else{$('#suc-fail').html(conL);}	
}
const name = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const num = ["01","02","03","04","05","06","07","08","09","10","11","12"];