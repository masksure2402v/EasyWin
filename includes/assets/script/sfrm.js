var hash;var timer;
function selINRF(){
	$('#rms0').addClass('active');
	$('#rms1').removeClass('active');
	$('#rcfam').html(inrfm);
	list();
}
function selUSDF(){
	$('#rms1').addClass('active');
	$('#rms0').removeClass('active');
	$('#rcfam').html(usdrfm);
	list();$("#rcamt").attr("placeholder", "1000 ~ 500000");
}


function list(c){

	$("#rcamt").attr("placeholder", rm+" ~ "+rx);
	var items1 = Array(rm,500,550,600,650,700,800,900,1000);
	var items2 = Array(1200,1500,2000,2400,2500,2800,3000);
	var items3 = Array(4000,4500,5600,6000,7200,8000,9500,1000);
	var items4 = Array(11000,12000,13000,15000,18000,20000);
	var items5 = Array(24000,25000,28000,30000,36000);
	var items6 = Array(40000,42000,45000,48000,rx);


	$('#alst').empty();
	for(i=1; i<=6; i++){
		
		if(i==1){var x = items1[Math.floor(Math.random()*items1.length)];}
		else if(i==2){var x = items2[Math.floor(Math.random()*items2.length)];}
		else if(i==3){var x = items3[Math.floor(Math.random()*items3.length)];}
		else if(i==4){var x = items4[Math.floor(Math.random()*items4.length)];}
		else if(i==5){var x = items5[Math.floor(Math.random()*items5.length)];}
		else if(i==6){var x = items6[Math.floor(Math.random()*items6.length)];}
		
		$('#alst').append('<div class="col-4 pda5"><div class="add-amt" id="'+i+'">₹'+x+'</div></div><div id="srca"><script>$("#'+i+'").click(function(){$(".rcamt").val("'+x+'");});$("#srca").remove();</script></div>');	
	}
	if(rcb>0){
		$('#rcblt').append('<div class="col-12 xtl mb-4 tf-20 pl-0 dipn" id="rcbsh"><input class="hw-20" type="radio" id="bonc"><span class="pl-2 tf-16" id="bonps">5% Bonus</span></div>');
		var v = rcbc.split(",");var rcmb = v[0];var rcbx = v[1];
		$("#bonps").text(rcb+"% bonus on recharge >= "+rcmb+", max:"+rcbx);
		$("#rcbsh").removeClass("dipn");
		$("#rcbsh").addClass("ddavc");
		$("#bonc").prop("checked", true);
	}
}

function srusdt() {
    var amount = $("#rcamt").val();

    if(amount !== "" && amount >= 1000 && amount <= 500000){
        $.ajax({
            url: '/recharge/crypto_pay',
            type: 'post',
            data: {'create': 1, 'amount': amount},
            success: function(res) {
                var response = JSON.parse(res);
                if(response.status === 'Success') {
                    window.location.href = response.message;
                } else {
					clsload();
					ssmg('bn',response.message);
                }
            },
			beforeSend: function(){
				loading();
			},
            error: function() {
				ssmg('bn','An error occurred. Please try again.');
				clsload();
            }
        });
    } else {
		ssmg('bn','Check amount.');
    }
}


function rchl(){setTimeout(function(){$('#odrea').empty();$('#odrea').append(rcinst);hcp();payinst();},200);}
function clsrcinst(){$('#odrea').empty();$("#cpanel").show();}

function ppinst(){
	$("#odt2").removeClass('sel');
	$("#odt3").removeClass('sel');
	$("#odt1").addClass('sel');
	$('#dtaod').empty();
	$('#dtaod').append('<div class="mb-2 xtl tf-18 tfcdb">Recharge using PhonePe</div><video controls autoplay width="100%"><source src="/recharge/instruction/phonepe.mp4" type="video/mp4"><source src="/recharge/instruction/phonepe.mp4" type="video/ogg">Your browser does not support HTML video.</video>');
}
function payinst(){
	$("#odt1").removeClass('sel');
	$("#odt3").removeClass('sel');
	$("#odt2").addClass('sel');
	$('#dtaod').empty();
	$('#dtaod').append('<div class="mb-2 xtl tf-18 tfcdb">Recharge using Paytm</div><video controls muted autoplay width="100%"><source src="/recharge/instruction/paytm.mp4" type="video/mp4"><source src="/recharge/instruction/paytm.mp4" type="video/ogg">Your browser does not support HTML video.</video>');
}
function gpinst(){
	$("#odt1").removeClass('sel');
	$("#odt2").removeClass('sel');
	$("#odt3").addClass('sel');
	$('#dtaod').empty();
	$('#dtaod').append('<div class="mb-2 xtl tf-18 tfcdb">Recharge using Google Pay</div><video controls autoplay width="100%"><source src="/recharge/instruction/gpay.mp4" type="video/mp4"><source src="/recharge/instruction/gpay.mp4" type="video/ogg">Your browser does not support HTML video.</video>');
}
function srcp(){
	window.location.href = 'Recharge2.html';
}

function rcenk(){
}

function refAL(){
	loading();
	$.ajax({
		url: "/modules/wallet/updrcA",
		type: "post",
		data: {
		"a" : amount,
		},
		success: function(x){
		$("#dtaod").html(x);
		clsload();
	}});
	
}

function upiPay(upi,mod){
	paymode = mod;$('#dtaod').addClass('clickOff');
	if(paymode=="PhonePe"){$('#ppc').prop('checked', true);$('#upx1').removeClass('dipn');}
	if(paymode=="Paytm"){$('#payc').prop('checked', true);$('#upx2').removeClass('dipn');}
	if(paymode=="GPay"){$('#gpc').prop('checked', true);$('#upx3').removeClass('dipn');}
	if(paymode=="UPI"){$('#upc').prop('checked', true);$('#upx4').removeClass('dipn');}
	setTimeout(function(){copyUPI(upi);},400);
	setTimeout(function () {neworder(upi);}, 800);
}

function autopay(paylink,GID,memid){
	$('#gatp').prop('checked', true);
	var pLink=paylink+"?user_id="+memid+"&amount="+amount+"&gid="+GID;
	window.location.href = pLink;
}

function paybqr(){if(QRLink!=""){window.location.href= QRLink;}}

function copyUPI(upid){
	var Cupid = document.createElement("textarea");
	document.body.appendChild(Cupid);
	Cupid.value = upid;
	Cupid.focus();
	Cupid.select();
	document.execCommand("copy");
	document.body.removeChild(Cupid);
	$('#cu').text('Success');
	if(paymode=="PhonePe"){$('#upx1').text('copied successfully');}
	if(paymode=="Paytm"){$('#upx2').text('copied successfully');}
	if(paymode=="GPay"){$('#upx3').text('copied successfully');}
	
}
function copyText(x){
	var Cupid = document.createElement("textarea");
	document.body.appendChild(Cupid);
	Cupid.value = x;
	Cupid.focus();
	Cupid.select();
	document.execCommand("copy");
	document.body.removeChild(Cupid);
	ssmg('gn','copied successfully')
}

function copyAMT(){
	var Cupid = document.createElement("textarea");
	document.body.appendChild(Cupid);
	Cupid.value = amount;
	Cupid.focus();
	Cupid.select();
	document.execCommand("copy");
	document.body.removeChild(Cupid);
	ssmg('gn','copied successfully')
}


function neworder(upid){
	
	var bonus="No";
	$.ajax({url: '/recharge/neworder',type: 'post',data: {'neworder' : 1,'amount' : amount,'paymode' : paymode,'upid' : upid,'bonus' : bonus,},
	success: function(response){
	if (response == 'true' ) {
		payod();
	}else{
		if(response=="session timeout!"){
			ssmg('bn','Session timeout! Signing out . . .');
			setTimeout(function(){sot();},1500);
		}else{ssmg('bn',response);}
		$('#dtaod').removeClass('clickOff');
		}
	}
});
}

function payod(){
if (typeof $.cookie('rchash') === 'undefined'){
	recharge();
	} else {
		hash = $.cookie("rchash");
		if(hash !="" ){
			
			clsfoot();clswar();clsload();hcp();
			window.history.pushState("object or string", "Title", "#/TabIndex?index=rchash&"+hash);
			$('#warea').append(rcpayp);
			setTimeout(function(){gettrdata();},200);
		}else{
			recharge();
		}
	}
}

function subUTR(){
	
	var utr = $("#utrn").val();
	if(utr==""){alert('Enter UTR');return false;}
	$.ajax({
		url: "/recharge/utr",
		type: "post",
		data: {
		"subutr" : 1,
		"utr" : utr,
		"trid" : trid,
		},
		success: function(response){
		if (response == "true" ) {
			
			clearInterval(timer);
			lfutr(utr);rctimer();check();
		}
		else{
			$('#dta_ref').append('<div class="col-12 conod LR"><div class="tffm ssmg suc"><span class="tf-24">'+response+'</div></div>');
			setTimeout(function(){$('#dta_ref').empty();},400);
		}
	}});
	
}

function lfutr(utr){
	$('#utf').empty();
	$("#utf").html('<div class="tfw-6 tf-24" style="color: #8d00e2;font-style: italic;">UTR: '+utr+'</div>');
	$("#ln1").addClass("bg");
	$("#rcagnt").attr("src", "/includes/icons/tick_p.svg");
}

Dropzone.options.ssupload = {
	method: "post",
	maxFiles:1,
	maxFilesize: 10,
	timeout: 120000,
	acceptedFiles:".png,.PNG,.jpg,.jpeg,.JPG,.JPEG",
	thumbnailWidth: null,
    thumbnailHeight: null,
	init: function() {
		this.on("sending", function (file, xhr, formData) {
			var u = $("#utrn").val();
			if(u==undefined){u="";}
			formData.append("utr", u);
			formData.append("trid", trid);
        });
		this.on("success", function(file, res) {
						
			if(res=='success'){
				clearInterval(timer);
				$("#ln1").addClass("bg");
				$("#rcagnt").attr("src", "/includes/icons/tick_p.svg");
				rctimer();check();
			}else{
				alert('There was an error uploading the file, please try again.');
				location.reload();
			}
			
		});
		this.on("thumbnail", function(file, dataUrl) {
			
			setTimeout(function(){
				$('#upimg').empty();
				$('#upimg').append(uimgf);
				$("#payss").attr("src", ''+dataUrl+'');
			},1000);
			
			
			
        });
}};

function gettrdata(){
	$.ajax({
		url: "/modules/wallet/getRCData",
		type: "GET",
		data: {
		hash: hash
		},
		cache: false,
		success: function(result){
			$("#dtaod").html(result);
			var result = rcpmns('rcM');
			const data = JSON.parse(result);
			var rcV = data.rcV;
			if(rcV=="screenshot"){
				$('#upimg').append(upssf);
				$("#ssupload").attr("action", "/recharge/upload");
				Dropzone.discover();
			}else if(rcV=="utr"){
				$('#upimg').append(utrf);
			}else if(rcV=="both"){
				$('#upimg').html(ssutrf);
				$("#ssupload").attr("action", "/recharge/upload");
				Dropzone.discover();
			}
		}
	});
}

function check(){
	$.ajax({url: '/recharge/status-check',type: 'post',data: {'check' : 1,'trid' : trid,},
	success: function(response){
		if (response == 'Processing' ) {
			setTimeout(function(){check();}, 5000);
			}
		else if(response == 'Completed' ) {
			$('#dta_ref').append('<div class="col-12 conod"><div class="tffm ssmg rc"><div class="tf-28"><img class="ivam" src="/includes/images/success.png"></div><div class="tf-36 pt-2 tfw-7 tfcdb xtc">₹'+amount+'</div><div class="tf-16 tfcdb">Your ₹'+amount+' recharge successfully completed.</div><div class="mt-2 btn-main act xtc" onclick="recharge()">OK</div></div></div>');
			clearInterval(timer);rconcom();wRWU();OPbook(1);
			$('#timer').empty();
			$('#timer').append('<img src="/includes/images/tick_green.png" height="56">');
		}else if(response == 'Failed' ) {
				$('#dta_ref').append('<div class="col-12 conod"><div class="tffm ssmg rc"><div class="tf-28"><img class="ivam" src="/includes/images/fail.png"></div><div class="tf-36 pt-2 tfw-7 tfcdb txc">₹'+amount+'</div><div class="tf-16 tfcdb">Your ₹'+amount+' recharge was failed.</div><div class="mt-2 btn-main act xtc" onclick="conrc()">CLOSE</div></div></div>');
				clearInterval(timer);rconfail();usercheck();
				$('#timer').empty();$('#timer').append('<img src="/includes/images/cross_red.png" height="56">');
			}
	}});
}


function rctimer(){
	var Validity = 90;
	timer = setInterval(function() {
		$('#timer').text(Validity); Validity -= 1; if (Validity < 0) { clearInterval(timer);
		$('#timer').text("?");$('#spuvt').addClass('zooani');}
	}, 1000);}
	
function conrc(){
	$('#dta_ref').empty();
}
function canrc(){
	$.ajax({
	url: "/recharge/canorder",
	type: "post",
	data: {
  	"canorder" : 1,
	},
	success: function(response){
	if (response == "true" ) {
		recharge();
	}
	else{
		$('#dta_ref').append('<div class="col-12 conod LR"><div class="tffm ssmg suc"><span class="tf-24">'+response+'</div></div>');
		setTimeout(function(){$('#dta_ref').empty();},400);
	}
}});	
}
function telgram(){
	var Cupid = document.createElement("textarea");
	document.body.appendChild(Cupid);
	Cupid.value = 'Hello\n\n I have recharge ₹'+amount+ ' via '+paymode+' and uploaded a screenshot.\n Order No:'+trid+'\n\n Please confirm as soon as possiple.';
	Cupid.focus();
	Cupid.select();
	document.execCommand("copy");
	document.body.removeChild(Cupid);
	$('#spuvt').text('Message copied');
	setTimeout(function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {window.location.href=telLink;}
		else{
			var win = window.open(telLink);win.focus();
			if (win) {win.focus();}
			else {$('#spuvt').append('<a href='+telLink+' target="blank"> Open Telegram</a>');}
		}
	}, 2000);
}

function rconcom(){
	$("#rcpro").addClass("clickOff");
	$("#ccomod").addClass("clickOff");
	$("#ssupload").removeClass("zooani");
	$("#ln2").addClass("bg");
	$("#rccmp").attr("src", "/includes/images/tick_ac.png");
	$("#canod").addClass("xc");
	$("#concs").addClass("xc");
}
function rconfail(){
	$("#rcpro").addClass("clickOff");
	$("#canod").addClass("xc");
	$("#canod").addClass("clickOff");
	$("#ssupload").removeClass("zooani");
}
function rcstart(){
	var url = (window.location).href;
	amount = url.substring(url.lastIndexOf('@') + 1);hcp();
	$('#warea').append(rcpstm);
setTimeout(function(){
	$.ajax({
		url: "/modules/wallet/recharge",
		type: "post",
		data: {
		"a" : amount,
		},
		success: function(x){
		$("#dtaod").html(x); 
		$("#rmt").text(amount);
		$("#rcmtl").text(amount);
	}});
},200);}
function rcpen(){$.get("/modules/wallet/rcpen", function(data, status){$("#dta_ref").html(data);});}
function rclist(){hcp();window.history.pushState("object or string", "Title", "#/TabIndex?index=RechargeList");setTimeout(function(){$('#warea').append(moreRDF);loading();backF('recharge','Recharge Records');$.get("/recharge/record", function(data, status){$("#dtaod").html(data);clsload();});},200);}
