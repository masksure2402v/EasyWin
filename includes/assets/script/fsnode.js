function rcpmns(ser){
	
	let x = '{"rcV":"off"}';

	$.ajax({
		async: false,
		type: "POST",
        global: false,
        dataType: 'html',
		url: "/api_v1/pst",
		data: {'ser': ser,},
		success: function(res) {			
			x = res;
		}
	});

	return x;
	
}

function evLOD(x,p,w,c){
	
	var data = { x: x, p: p, w: w };
	var jsonData = JSON.stringify(data);
		
	$.ajax({
		url: "/api_v1/eOrder",
		type: "POST",
		data: jsonData,
		contentType: "application/json",
		success: function(res) {			
			if(res.length) {
				evCElm(res,c,w);
				const x = res[res.length - 1].id;
				evd=setTimeout(function(){evLOD(x,p,w,c);},1000);
			}else{
				evd=setTimeout(function(){evLOD(x,p,w,c);},2000);
			}		
		}
	});
}

function evCElm(res,c,w){
	var html = "";
	$.each(res, function(key,value) {
		var sel = value.sel;
		if(w=='sw'){

			if(sel=="Black"){sel='<span class="sm wlrcd wlb black xwsc">2x</span>';}
			else if(sel=="Red"){sel='<span class="sm wlrcd wlb red xwsc">3x</span>';}
			else if(sel=="Blue"){sel='<span class="sm wlrcd wlb blue xwsc">5x</span>';}
			else if(sel=="Green"){sel='<span class="sm wlrcd wlb green xwsc">50x</span>';}
			
		}else{
			
			if(sel=="Red"){sel='<span class="RS">R</span>';}
			else if(sel=="Green"){sel='<span class="GS">G</span>';}
			else if(sel=="Violet"){sel='<span class="VS">V</span>';}
			else if(sel=="Andar"){sel='<span class="GS A">A</span>';}
			else if(sel=="Bahar"){sel='<span class="RS B">B</span>';}
			else if(sel=="Tie"){sel='<span class="VS T">T</span>';}
			else if(sel=="Head"){sel='<span class="RS H">H</span>';}
			else if(sel=="Tail"){sel='<span class="GS T">T</span>';}
			else{sel='<span class="NS">'+sel+'</span>';}
		}
		
		html += '<div class="row pt-2 pb-2 lih-32 evnewod">';
		html += '<div class="col-4 xtl">'+value.period+'</div>';
		html += '<div class="col-3 cgray">'+value.uid+'</div>';
		html += '<div class="col-2 ">'+sel+'</div>';
		html += '<div class="col-3 xtr">₹'+value.amt+'</div>';
		html += '</div>';
	});
	
	$("#"+c).prepend(html);	
	$(".evnewod").height("32");setTimeout(function () {$(".evnewod").removeClass("evnewod");}, 300);$(".xnew_id").remove();
	
}

function wnxRCS(n){
	let x = false;
	if (typeof $.cookie('rowid') === 'undefined'){$.cookie("rowid", 19, {path:"/"});var rxid = 19;}else{var rxid = $.cookie("rowid");}
	var data = { i: rxid, n: n};
	var jsonData = JSON.stringify(data);
		
	$.ajax({
		async: false,
		type: "POST",
        global: false,
        dataType: 'json',
		url: "/api_v1/smrcd",
		data: jsonData,
		contentType: "application/json",
		success: function(res) {			
			x = res;		
		}
	});
	
	return x;
}

function wnxM(n){
	var data = {n: n};
	var jsonData = JSON.stringify(data);
	$.ajax({
		async: false,
		type: "POST",
        global: false,
        dataType: 'json',
		url: "/api/xmrcd",
		data: jsonData,
		contentType: "application/json",
		success: function(res) {
			if(res.length) {
				var elm = "";
				$.each(res, function(key,value) {
					elm +='<div class="row mt-2 mb-2 lih-32">';
					elm +='<div class="col-4 xtl">'+value.p+'</div>';
					elm +='<div class="col-2">'+value.w+'</div>';
					elm +='	<div class="col-2"><div class="'+value.c+'"><div class="'+value.v+'"></div><div class="tpr">'+value.s+'</div></div></div>';
					elm +='	<div class="col-4 xtr tfwr">'+value.t+'</div>';
					elm +='</div>';
				});
				$('#dtaod').html(elm);
			}
		}
	});
	clsload();
}

function lsCRC(p,n){
	let x = false;
	var data = {p: p, n: n};
	var jsonData = JSON.stringify(data);
		
	$.ajax({
		async: false,
		type: "POST",
        global: false,
        dataType: 'json',
		url: "/api_v1/lsrc",
		data: jsonData,
		contentType: "application/json",
		success: function(res) {			
			x = res;		
		}
	});
	
	return x;
}

function Odresult(n,r,w,s,a,p){
	let x = false;
	var data = {n: n, r: r, w: w, s: s, a: a, p: p};
	var jsonData = JSON.stringify(data);
	
	$.ajax({
		async: false,
		type: "POST",
        global: false,
        dataType: 'json',
		url: "/api_v1/odresult",
		data: jsonData,
		contentType: "application/json",
		success: function(res) {
			if(res.ws !== undefined && res.ws === 'true'){
				winxLWB(res.rc,res.rm,p,w,res.sc,a,res.wa,res.rs);
				wall();x = true;
			}
		}
	});
	return x;
}