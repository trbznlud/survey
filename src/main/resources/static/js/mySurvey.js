var sayi = 0;
var bool = false;
var x = 1;
var derece = -1;
function sorular(){
	bool = true;
	x=1;
	derece = -1;
	for(i=0;i<soruList.length;i++){
		sayi++;
		var divSurvey = document.getElementById("survey");
		var divRow = document.createElement("div");
		divRow.className = "row d-flex justify-content-center mt-1";
		var colMd6 = document.createElement("div");
		colMd6.className = "col-md-12";
		colMd6.id = "divRow" + sayi;
		var inputGroupMb3 = document.createElement("div");
		inputGroupMb3.className = "input-group mb-3 mt-2";
		var inputGroupPrepend = document.createElement("div");
		inputGroupPrepend.className = "input-group-prepend";
		var spanSoruNo = document.createElement("SPAN");
		spanSoruNo.className = "input-group-text";
		spanSoruNo.innerHTML = "Soru"+soruList[i].soruSayisi;
		var soru = document.createElement("p");
		soru.className = "lead mt-2 ml-2";
		soru.innerHTML = soruList[i].soru;
		var hr = document.createElement("HR");
		divSurvey.appendChild(divRow);
		divRow.appendChild(colMd6);
		colMd6.appendChild(inputGroupMb3);
		inputGroupMb3.appendChild(inputGroupPrepend);
		inputGroupPrepend.appendChild(spanSoruNo);
		inputGroupMb3.appendChild(soru);
		colMd6.appendChild(hr);
		for(k=0;k<secenekList.length;k++){
			if(soruList[i].soruSayisi == secenekList[k].secenekSayisi){
				secenekler(colMd6.id,secenekList[k].soruTip,k,soruList[i].id);
			}
			else {
				continue;
			}
		}
	}
}
var txt;
function secenekler(div,soruTip,k,id){
	txt = soruTip;
	window[txt](div,k,id);
}
var txtAltSecenekler;
function altSecenekler(div,soruTip,l,id){
	txtAltSecenekler = soruTip;
	window[txtAltSecenekler](div,l,id);
}
//secenekler baslangıcı
var secenekSayi = 0;
function checkbox(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd1Mt1 = document.createElement("div");
	colMd1Mt1.className = "col-md-1 mt-1";
	var checkDiv1 = document.createElement("div");
	checkDiv1.className = "form-check";
	checkDiv1.setAttribute("th:object","${cevapSecenekler}");
	checkDiv1.id = "checboxDiv" + secenekSayi;
	var checkBox1 = document.createElement("input");
	checkBox1.type = "checkbox";
	checkBox1.className = "form-check-input";
	checkBox1.value = secenekList[k].secenek;
	checkBox1.setAttribute("th:value","${cevap}");
	checkBox1.id = "cevap" + secenekSayi;
	checkBox1.name = "cevap";
	checkBox1.setAttribute("onclick","checkboxFunction('"+checkDiv1.id+"','"+checkBox1.id+"','"+id+"','"+k+"')");
	var colMd8Mt11 = document.createElement("div");
	colMd8Mt11.className = "col-md-8 mt-1";
	var yanit1 = document.createElement("p");
	yanit1.className = "lead mt-1 ml-1";
	yanit1.innerHTML = secenekList[k].secenek;
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd1Mt1);
	colMd1Mt1.appendChild(checkDiv1);
	checkDiv1.appendChild(checkBox1);
	sorularDiv.appendChild(colMd8Mt11);
	colMd8Mt11.appendChild(yanit1);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function radio(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd1Mt1 = document.createElement("div");
	colMd1Mt1.className = "col-md-1 mt-1";
	var radioDiv1 = document.createElement("div");
	radioDiv1.className = "form-check";
	radioDiv1.setAttribute("th:object","${cevapSecenekler}");
	radioDiv1.id = "radioDiv" + secenekSayi;
	var radio1 = document.createElement("input");
	radio1.type = "radio";
	radio1.className = "form-check-input";
	radio1.value = secenekList[k].secenek;
	radio1.id = "cevap" + secenekSayi;
	radio1.name = "cevap" + sayi;
	radio1.setAttribute("onclick","radioFunction('"+radioDiv1.id+"','"+radio1.id+"','"+id+"','"+k+"','"+div+"','"+sayi+"')");
	var colMd8Mt11 = document.createElement("div");
	colMd8Mt11.className = "col-md-8 mt-1";
	var yanit1 = document.createElement("p");
	yanit1.className = "lead mt-1 ml-1";
	yanit1.innerHTML = secenekList[k].secenek;
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd1Mt1);
	colMd1Mt1.appendChild(radioDiv1);
	radioDiv1.appendChild(radio1);
	sorularDiv.appendChild(colMd8Mt11);
	colMd8Mt11.appendChild(yanit1);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function multitext(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var yanit1 = document.createElement("input");
	yanit1.type = "text";
	yanit1.className = "form-control";
	yanit1.setAttribute("th:value","${cevap}");
	yanit1.id = "cevap";
	yanit1.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdMultitext" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdMultitext" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function textbox(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var yanit1 = document.createElement("input");
	yanit1.type = "text";
	yanit1.className = "form-control";
	yanit1.setAttribute("th:value","${cevap}");
	yanit1.id = "cevap";
	yanit1.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdTextbox" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdTextbox" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function textarea(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var yanit1 = document.createElement("textarea");
	yanit1.rows = "3";
	yanit1.className = "form-control";
	yanit1.setAttribute("th:value","${cevap}");
	yanit1.id = "cevap";
	yanit1.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdTextarea" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdTextarea" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function upload(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var yanit1 = document.createElement("input");
	yanit1.className = "custom-file-input";
	yanit1.type = "file";
	yanit1.setAttribute("th:value","${cevap}");
	yanit1.id = "cevapUpload" + secenekSayi;
	yanit1.name = "cevap";
	var label = document.createElement("LABEL");
	label.className = "custom-file-label";
	label.innerHTML = "Dosya Seçiniz";
	label.setAttribute("for","cevapUpload" + secenekSayi);
	label.id = "uploadLabel" + secenekSayi;
	label.setAttribute("onchange","uploadChange('"+yanit1.id+"','"+label.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdUpload" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdUpload" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(label);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
	$(".custom-file-input").on("change", function() {
		  var fileName = $(this).val().split("\\").pop();
		  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
}
function tarih(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	colMd10Mt11.id = "tarihsecimi" + secenekSayi;
	var yanit = document.createElement("input");
	yanit.type = "date";
	yanit.className = "form-control";
	yanit.id = "tarih" + secenekSayi;
	yanit.setAttribute("onchange","tarihFunction('"+yanit.id+"','"+colMd10Mt11.id+"','"+k+"')");
	var yanitSaat = document.createElement("input");
	yanitSaat.type = "time";
	yanitSaat.className = "form-control";
	yanitSaat.id = "saat" + secenekSayi;
	yanitSaat.setAttribute("onchange","saatFunction('"+yanitSaat.id+"','"+k+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdTarih" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdTarih" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit);
	colMd10Mt11.appendChild(yanitSaat);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function combobox(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	colMd10Mt11.id = "divCombobox" + secenekSayi;
	var yanit1 = document.createElement("select");
	yanit1.id = "combobox" + secenekSayi;
	yanit1.className = "form-control";
	var secenekler = [];
	secenekler = secenekList[k].secenek.split(" ");
	secenekler.pop();
	for(a=0;a<secenekler.length;a++){
		var option = document.createElement("option");
		option.value = secenekler[a];
		option.innerHTML = secenekler[a];
		yanit1.appendChild(option);
	}
	var hiddenCombobox = document.createElement("input");
	hiddenCombobox.type = "hidden";
	hiddenCombobox.value = secenekler[0];
	hiddenCombobox.setAttribute("th:value","${cevap}");
	hiddenCombobox.id = "cevapCombobox" + secenekSayi;
	hiddenCombobox.name = "cevap";
	yanit1.setAttribute("onchange","comboboxFunction('"+colMd10Mt11.id+"','"+yanit1.id+"','"+hiddenCombobox.id+"','"+secenekSayi+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdCombobox" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdCombobox" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	colMd10Mt11.appendChild(hiddenCombobox);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function slider(div,k,id){
	secenekSayi++;
	var secenekler = [];
	secenekler = secenekList[k].secenek.split(" ");
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	colMd10Mt11.id = "divSlider" + secenekSayi;
	var yanit1 = document.createElement("input");
	yanit1.id = "slider" + secenekSayi;
	yanit1.type = "range";
	yanit1.min = secenekler[0];
	yanit1.max = secenekler[2];
	yanit1.setAttribute("value",secenekler[1]);
	yanit1.step = secenekler[3];
	yanit1.className = "slider";
	var labelDiv = document.createElement("div");
	labelDiv.className = "d-flex justify-content-center";
	var h5 = document.createElement("h5");
	var span = document.createElement("span");
	span.className = "label label-default";
	span.id = "deger"+secenekSayi;
	span.innerHTML = secenekler[1];
	var hiddenSlider = document.createElement("input");
	hiddenSlider.type = "hidden";
	hiddenSlider.value = secenekler[1];
	hiddenSlider.setAttribute("th:value","${cevap}");
	hiddenSlider.id = "cevapSlider" + secenekSayi;
	hiddenSlider.name = "cevap";
	yanit1.setAttribute("oninput","sliderFunction(this.value,"+"'"+span.id+"','"+secenekSayi+"','"+colMd10Mt11.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdSlider" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdSlider" + k;
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	colMd10Mt11.appendChild(hiddenSlider);
	colMd10Mt11.appendChild(labelDiv);
	labelDiv.appendChild(h5);
	h5.appendChild(span);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function iletisim(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var yanit1 = document.createElement("input");
	yanit1.type = "text";
	yanit1.className = "form-control";
	yanit1.placeholder = secenekList[k].secenek;
	yanit1.setAttribute("th:value","${cevap}");
	yanit1.id = "cevap";
	yanit1.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruId" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekId";
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(yanit1);
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function star(div,k,id){
	secenekSayi++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-7 mt-1 star-widget";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var deger = secenekList[k].secenek;
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	var css = 'input#rate-'+deger+':checked ~ label { color: #fe7; text-shadow: 0 0 20px #952; }',head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
	if (style.styleSheet){
 	 style.styleSheet.cssText = css;
	} else {
 	 style.appendChild(document.createTextNode(css));
	}
	var hiddenStar = document.createElement("input");
	hiddenStar.type = "hidden";
	hiddenStar.value = "";
	hiddenStar.setAttribute("th:value","${cevap}");
	hiddenStar.id = "cevapStar" + secenekSayi;
	hiddenStar.name = "cevap";
	for(var z=deger;z>0;z--){
		var label = document.createElement("LABEL");
		var genislik = (600-(deger*20)) / deger;
		label.setAttribute("for","rate-"+z);
		label.className = "fas fa-star";
		label.setAttribute("style","font-size:"+genislik+"px");
		var radio = document.createElement("input");
		radio.type = "radio";
		radio.id = "rate-"+z;
		radio.name = "rate-"+z;
		radio.value = z;
		radio.setAttribute("onclick","starFunction('"+radio.value+"','"+hiddenStar.id+"')");
		colMd10Mt11.appendChild(radio);
		colMd10Mt11.appendChild(label);
	}
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruId" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekId";
	cevapSecenekId.name = "cevapSecenekId";
	colMd10Mt11.appendChild(cevapSoruId);
	colMd10Mt11.appendChild(cevapSecenekId);
	colMd10Mt11.appendChild(hiddenStar);
	//yıldız kontrol
	const btn = document.querySelector("button");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }
        return false;
      }
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function derecelendirme(div,k,id){
	secenekSayi++;
	derece++;
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-8 mt-1 form-row";
	colMd10Mt11.setAttribute("th:object","${cevapSecenekler}");
	var c2 = document.createElement("div");
	c2.className = "col-md-2 mt-1";
	var c6 = document.createElement("div");
	c6.className = "col-md-6 mt-1";
	var hiddenDerecelendirme = document.createElement("input");
	hiddenDerecelendirme.type = "hidden";
	hiddenDerecelendirme.value =" ";
	hiddenDerecelendirme.setAttribute("th:value","${cevap}");
	hiddenDerecelendirme.id = "cevapDerecelendirme"+k;
	hiddenDerecelendirme.name = "cevap";
	var yanit1 = document.createElement("p");
	yanit1.className = "lead mt-1 ml-1";
	yanit1.value = secenekList[k].secenek;
	yanit1.innerHTML = secenekList[k].secenek;
	yanit1.id = "cevapTextboxDerecelendirme" + k;
	yanit1.name = "cevapTextboxDerecelendirme";
	var combobox = document.createElement("select");
	combobox.id = "cevapComboboxDerecelendirme"+k;
	combobox.className = "form-control";
	combobox.setAttribute("onchange","derecelendirmeOnChangeFunction('"+secenekList[k].secenek+"','"+hiddenDerecelendirme.id+"','"+combobox.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruId";
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekId";
	cevapSecenekId.name = "cevapSecenekId";
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(c2);
	c2.appendChild(combobox);
	colMd10Mt11.appendChild(c6);
	c6.appendChild(yanit1);
	c6.appendChild(cevapSoruId);
	c6.appendChild(cevapSecenekId);
	c6.appendChild(hiddenDerecelendirme);
	while(bool){
	    if(secenekList[k+x] === null || secenekList[k+x] === undefined || secenekList[k+x].soruTip != "derecelendirme"){
	    	bool = false;
			break;
		}
	    else if(secenekList[k+x].soruTip == "derecelendirme"){
			x++;
		}
	}
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
	derecelendirmeFunction(combobox.id,x,derece);
	derecelendirmeOnChangeFunction(secenekList[k].secenek,hiddenDerecelendirme.id,combobox.id);
}
function matris(div,k,id){
	secenekSayi++;
	var hiddenDerecelendirme = document.createElement("input");
	hiddenDerecelendirme.type = "hidden";
	hiddenDerecelendirme.value =" ";
	hiddenDerecelendirme.setAttribute("th:value","${cevap}");
	hiddenDerecelendirme.id = "cevapMatris" + k;
	hiddenDerecelendirme.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruId";
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekId";
	cevapSecenekId.name = "cevapSecenekId";
	var sorularDiv = document.createElement("div");
	sorularDiv.className = "form-row";
	sorularDiv.id = "soru" + secenekSayi;
	var colMd10Mt11 = document.createElement("div");
	colMd10Mt11.className = "col-md-12 mt-1 form-row";
	var colMd10Mt12 = document.createElement("div");
	colMd10Mt12.className = "col-md-11 mt-1 form-row";
	var colmd3mt11 = document.createElement("div");//Çok Kötü
	colmd3mt11.className = "col-md-2 mt-1 text-center";
	var spanck = document.createElement("span");
	spanck.className = "badge badge-pill badge-dark";
	spanck.innerHTML = "Çok Kötü";
	var colmd2mt11 = document.createElement("div");//Kötü
	colmd2mt11.className = "col-md-1 mt-1";
	var spank = document.createElement("span");
	spank.className = "badge badge-pill badge-secondary";
	spank.innerHTML = "Kötü";
	var colmd2mt12 = document.createElement("div");//Orta
	colmd2mt12.className = "col-md-1 mt-1";
	var spano = document.createElement("span");
	spano.className = "badge badge-pill badge-light";
	spano.innerHTML = "Orta";
	var colmd2mt13 = document.createElement("div");//İyi
	colmd2mt13.className = "col-md-1 mt-1";
	var spani = document.createElement("span");
	spani.className = "badge badge-pill badge-info";
	spani.innerHTML = "İyi";
	var colmd3mt12 = document.createElement("div");//Çok iyi
	colmd3mt12.className = "col-md-2 mt-1";
	var spanci = document.createElement("span");
	spanci.className = "badge badge-pill badge-success";
	spanci.innerHTML = "Çok İyi";
	var colMd3Mt1 = document.createElement("div");
	colMd3Mt1.className = "col-md-2 mt-1 form-check";
	var colMd2Mt1 = document.createElement("div");
	colMd2Mt1.className = "col-md-1 mt-1 form-check";
	var colMd2Mt2 = document.createElement("div");
	colMd2Mt2.className = "col-md-1 mt-1 form-check";
	var colMd2Mt3 = document.createElement("div");
	colMd2Mt3.className = "col-md-1 mt-1 form-check";
	var colMd3Mt2 = document.createElement("div");
	colMd3Mt2.className = "col-md-2 mt-1 form-check";
	var yanit1 = document.createElement("input");
	yanit1.type = "radio";
	yanit1.value = "Çok Kötü";
	yanit1.name = "cevapMatris" + k;
	yanit1.setAttribute("onclick","matrisFunction('"+yanit1.value+"','"+hiddenDerecelendirme.id+"')");
	var yanit2 = document.createElement("input");
	yanit2.type = "radio";
	yanit2.value = "Kötü";
	yanit2.name = "cevapMatris" + k;
	yanit2.setAttribute("onclick","matrisFunction('"+yanit2.value+"','"+hiddenDerecelendirme.id+"')");
	var yanit3 = document.createElement("input");
	yanit3.type = "radio";
	yanit3.className = "ml-2";
	yanit3.value = "Orta";
	yanit3.name = "cevapMatris" + k;
	yanit3.setAttribute("onclick","matrisFunction('"+yanit3.value+"','"+hiddenDerecelendirme.id+"')");
	var yanit4 = document.createElement("input");
	yanit4.type = "radio";
	yanit4.className = "ml-2";
	yanit4.value = "İyi";
	yanit4.name = "cevapMatris" + k;
	yanit4.setAttribute("onclick","matrisFunction('"+yanit4.value+"','"+hiddenDerecelendirme.id+"')");
	var yanit5 = document.createElement("input");
	yanit5.type = "radio";
	yanit5.value = "Çok İyi";
	yanit5.name = "cevapMatris" + k;
	yanit5.setAttribute("onclick","matrisFunction('"+yanit5.value+"','"+hiddenDerecelendirme.id+"')");
	var divSurvey = document.getElementById(div);
	divSurvey.appendChild(sorularDiv);
	sorularDiv.appendChild(colMd10Mt11);
	colMd10Mt11.appendChild(colmd3mt11);
	colmd3mt11.appendChild(spanck);
	colMd10Mt11.appendChild(colmd2mt11);
	colmd2mt11.appendChild(spank);
	colMd10Mt11.appendChild(colmd2mt12);
	colmd2mt12.appendChild(spano);
	colMd10Mt11.appendChild(colmd2mt13);
	colmd2mt13.appendChild(spani);
	colMd10Mt11.appendChild(colmd3mt12);
	colmd3mt12.appendChild(spanci);
	sorularDiv.appendChild(colMd10Mt12);
	colMd10Mt12.appendChild(colMd3Mt1);
	colMd3Mt1.appendChild(yanit1);
	colMd10Mt12.appendChild(colMd2Mt1);
	colMd2Mt1.appendChild(yanit2);
	colMd10Mt12.appendChild(colMd2Mt2);
	colMd2Mt2.appendChild(yanit3);
	colMd10Mt12.appendChild(colMd2Mt3);
	colMd2Mt3.appendChild(yanit4);
	colMd10Mt12.appendChild(colMd3Mt2);
	colMd3Mt2.appendChild(yanit5);
	colMd10Mt12.appendChild(hiddenDerecelendirme);
	colMd10Mt12.appendChild(cevapSoruId);
	colMd10Mt12.appendChild(cevapSecenekId);
	for(j=0;j<altSorularList.length;j++){
		if(secenekList[k].secenekAlt == altSorularList[j].altSoruSayisi){
			altSorular(sorularDiv.id,j);
		}
		else {
			continue;
		}
	}
}
function checkboxFunction(div,chkid,id,k){
	checkBox = document.getElementById(chkid);
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdCheckbox" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdCheckbox" + k;
	cevapSecenekId.name = "cevapSecenekId";
	checkDiv = document.getElementById(div);
	if (checkBox.checked == true){
		checkDiv.appendChild(cevapSoruId);
		checkDiv.appendChild(cevapSecenekId);
	}
	else {
		document.getElementById("cevapSecenekIdCheckbox" + k).remove();
		document.getElementById("cevapSoruIdCheckbox" + k).remove();
	  }
}
function radioFunction(div,chkid,id,k,denemeDiv,s){
	radio = document.getElementById(chkid);
	var cevap = document.createElement("input");
	cevap.type="hidden";
	cevap.value = radio.value;
	cevap.setAttribute("th:value","${cevap}");
	cevap.id = "cevap" + k;
	cevap.name = "cevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapSoruId}");
	cevapSoruId.id = "cevapSoruIdRadio" + k;
	cevapSoruId.name = "cevapSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = secenekList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapSecenekId}");
	cevapSecenekId.id = "cevapSecenekIdRadio" + k;
	cevapSecenekId.name = "cevapSecenekId";
	radioDiv = document.getElementById(div);
	radioDiv.appendChild(cevapSoruId);
	radioDiv.appendChild(cevapSecenekId);
	if (radio.checked == true){
		for(i=s-1;i<=document.getElementById(denemeDiv).childElementCount;i++){
			var z = document.getElementById("cevapSecenekIdRadio" + i);
			var x = document.getElementById("cevapSoruIdRadio" + i);
			if(z == null && x == null){
				continue;
			}
			else if(z != null && x != null){
				z.remove();
				x.remove();
			}
		}
	}
	radioDiv.appendChild(cevap);
	radioDiv.appendChild(cevapSoruId);
	radioDiv.appendChild(cevapSecenekId);
}
function tarihFunction(txtTarih,div,k){
	if(document.getElementById("cevapTarih" + k) == null){
		var tarih = document.getElementById(txtTarih);
		var anaDiv = document.getElementById(div);
		var hiddenTarihSaat = document.createElement("input");
		hiddenTarihSaat.type = "hidden";
		hiddenTarihSaat.value =tarih.value;
		hiddenTarihSaat.setAttribute("th:value","${cevap}");
		hiddenTarihSaat.id = "cevapTarih"+k;
		hiddenTarihSaat.name = "cevap";
		anaDiv.appendChild(hiddenTarihSaat);
	}
	else{
		document.getElementById("cevapTarih" + k).remove();
		var tarih = document.getElementById(txtTarih);
		var anaDiv = document.getElementById(div);
		var hiddenTarihSaat = document.createElement("input");
		hiddenTarihSaat.type = "hidden";
		hiddenTarihSaat.value = tarih.value;
		hiddenTarihSaat.setAttribute("th:value","${cevap}");
		hiddenTarihSaat.id = "cevapTarih"+k;
		hiddenTarihSaat.name = "cevap";
		anaDiv.appendChild(hiddenTarihSaat);
	}
}
function saatFunction(txtSaat,k){
	var saat = document.getElementById(txtSaat);
	var hiddenTarihSaat = document.getElementById("cevapTarih"+k);
	hiddenTarihSaat.value += " " + saat.value;
}
function comboboxFunction(div,cmbx,hidden,sayi){
	var anaDiv = document.getElementById(div);
	var combobox = document.getElementById(cmbx).value;
	var hiddenCombobox = document.getElementById(hidden);
	hiddenCombobox.remove();
	var hiddenCombobox = document.createElement("input");
	hiddenCombobox.type = "hidden";
	hiddenCombobox.value = combobox;
	hiddenCombobox.setAttribute("th:value","${cevap}");
	hiddenCombobox.id = "cevapCombobox" + sayi;
	hiddenCombobox.name = "cevap";
	anaDiv.appendChild(hiddenCombobox);
}
function sliderFunction(newValue,id,sayi,div) {
    document.getElementById(id).innerHTML = newValue;
    var a = document.getElementById("cevapSlider"+sayi);
    a.remove();
    var ekleDiv = document.getElementById(div);
    var hiddenSlider = document.createElement("input");
    hiddenSlider.type = "hidden";
    hiddenSlider.value = newValue;
    hiddenSlider.setAttribute("th:value","${cevap}");
    hiddenSlider.id = "cevapSlider" + sayi;
    hiddenSlider.name = "cevap";
    ekleDiv.appendChild(hiddenSlider);
}
function starFunction(value,hdn){
	var hiddenText = document.getElementById(hdn);
	hiddenText.value = value;
}
function derecelendirmeOnChangeFunction(yanit,hidden,combo){
	var hdn = document.getElementById(hidden);
	var cmb = document.getElementById(combo);
	hdn.value = yanit + " " +cmb.value;
}
function derecelendirmeFunction(id,x,z){
	var deger = x;
	var cmbx = document.getElementById(id);
	for(var a=1;a<=deger;a++){
		var option = document.createElement("option");
		option.value = a;
		option.innerHTML = a;
		cmbx.appendChild(option);
	}
	cmbx.selectedIndex = z;
}
function matrisFunction(value,hdn){
	var hidden = document.getElementById(hdn);
	hidden.value = value;
}
function altDerecelendirmeFunction(id,x,z){
	var deger = x;
	var cmbx = document.getElementById(id);
	for(var a=1;a<=deger;a++){
		var option = document.createElement("option");
		option.value = a;
		option.innerHTML = a;
		cmbx.appendChild(option);
	}
	cmbx.selectedIndex = z;
}
function altCheckboxFunction(div,chkid,id,k){
	checkBox = document.getElementById(chkid);
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdCheckbox" + k;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdCheckBox" + k;
	cevapSecenekId.name = "cevapAltSecenekId";
	checkDiv = document.getElementById(div);
	if (checkBox.checked == true){
		checkDiv.appendChild(cevapSoruId);
		checkDiv.appendChild(cevapSecenekId);
	}
	else {
		document.getElementById("cevapAltSoruIdCheckbox" + k).remove();
		document.getElementById("cevapAltSecenekIdCheckBox" + k).remove();
	  }
}
function altRadioFunction(div,chkid,id,k,denemeDiv){
	radio = document.getElementById(chkid);
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdRadio" + k;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[k].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdRadio" + k;
	cevapSecenekId.name = "cevapAltSecenekId";
	radioDiv = document.getElementById(div);
	radioDiv.appendChild(cevapSoruId);
	radioDiv.appendChild(cevapSecenekId);
	if (radio.checked == true){
		for(i=0;i<document.getElementById(denemeDiv).childElementCount;i++){
			var z = document.getElementById("cevapAltSoruIdRadio" + i);
			var x = document.getElementById("cevapAltSecenekIdRadio" + i);
			if(z == null && x == null){
				continue;
			}
			else if(z != null && x != null){
				z.remove();
				x.remove();
			}
		}
	}
	radioDiv.appendChild(cevapSoruId);
	radioDiv.appendChild(cevapSecenekId);
}
function altTarihFunction(txtTarih,div,l){
	if(document.getElementById("cevapAltTarih" + l) == null){
		var tarih = document.getElementById(txtTarih);
		var anaDiv = document.getElementById(div);
		var hiddenTarihSaat = document.createElement("input");
		hiddenTarihSaat.type = "hidden";
		hiddenTarihSaat.value =tarih.value;
		hiddenTarihSaat.setAttribute("th:value","${altCevap}");
		hiddenTarihSaat.id = "cevapAltTarih"+l;
		hiddenTarihSaat.name = "altCevap";
		anaDiv.appendChild(hiddenTarihSaat);
	}
	else{
		document.getElementById("cevapAltTarih" + l).remove();
		var tarih = document.getElementById(txtTarih);
		var anaDiv = document.getElementById(div);
		var hiddenTarihSaat = document.createElement("input");
		hiddenTarihSaat.type = "hidden";
		hiddenTarihSaat.value =tarih.value;
		hiddenTarihSaat.setAttribute("th:value","${altCevap}");
		hiddenTarihSaat.id = "cevapAltTarih"+l;
		hiddenTarihSaat.name = "altCevap";
		anaDiv.appendChild(hiddenTarihSaat);
	}
}
function altUploadChange(yanitId,labelId){
	yanit = document.getElementById(yanitId);
	label = document.getElementById(labelId);
	$(".custom-file-input").on("change", function() {
	  var fileName = $(this).val().split("\\").pop();
	  yanit.setAttribute("value",fileName);
	  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
	});
}
function altSaatFunction(txtSaat,l){
	var saat = document.getElementById(txtSaat);
	var hiddenTarihSaat = document.getElementById("cevapAltTarih"+l);
	hiddenTarihSaat.value += " " + saat.value;
}
function altUploadChange(yanitId,labelId){
	yanit = document.getElementById(yanitId);
	label = document.getElementById(labelId);
	$(".custom-file-input").on("change", function() {
	  var fileName = $(this).val().split("\\").pop();
	  yanit.setAttribute("value",fileName);
	  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
	});
}
function altComboboxFunction(div,cmbx,hidden,sayi){
	var anaDiv = document.getElementById(div);
	var combobox = document.getElementById(cmbx).value;
	var hiddenCombobox = document.getElementById(hidden);
	hiddenCombobox.remove();
	var hiddenCombobox = document.createElement("input");
	hiddenCombobox.type = "hidden";
	hiddenCombobox.value = combobox;
	hiddenCombobox.setAttribute("th:value","${altCevap}");
	hiddenCombobox.id = "cevapAltCombobox" + sayi;
	hiddenCombobox.name = "altCevap";
	anaDiv.appendChild(hiddenCombobox);
}
function altSliderFunction(newValue,id,sayi,div) {
    document.getElementById(id).innerHTML = newValue;
    var a = document.getElementById("cevapAltSlider"+sayi);
    a.remove();
    var ekleDiv = document.getElementById(div);
    var hiddenSlider = document.createElement("input");
    hiddenSlider.type = "hidden";
    hiddenSlider.value = newValue;
    hiddenSlider.setAttribute("th:value","${altCevap}");
    hiddenSlider.id = "cevapAltSlider" + sayi;
    hiddenSlider.name = "altCevap";
    ekleDiv.appendChild(hiddenSlider);
}
//altsoru ana ekleme fonksiyonu
var altSoruSayisi = 0;
var altBool = false;
var xx = 1;
var altDerece = -1;
function altSorular(div,j){
	altSoruSayisi++;
	altBool = true;
	altDerece = -1;
	xx=1;
	var dropDownDiv = document.getElementById(div);
	var denemeDiv = document.createElement("div");
	denemeDiv.className = "form-row";
	denemeDiv.id = "altSoruDiv" + altSoruSayisi;
	var colMd4 = document.createElement("div");
	colMd4.className = "col-md-6";
	var colMd8 = document.createElement("div");
	colMd8.className = "input-group col-md-6";
	var spanDiv = document.createElement("div");
	spanDiv.className = "input-group-prepend";
	var span = document.createElement("SPAN");
	span.className = "input-group-text";
	span.innerHTML = "Soru No";
	var soru = document.createElement("p");
	soru.className = "lead mt-1 ml-1";
	soru.innerHTML = altSorularList[j].altSoru;
	dropDownDiv.insertAdjacentElement("afterend",denemeDiv);
	denemeDiv.appendChild(colMd4);
	denemeDiv.appendChild(colMd8);
	colMd8.appendChild(spanDiv);
	spanDiv.appendChild(span);
	colMd8.appendChild(soru);
	for(l=0;l<altSeceneklerList.length;l++){
		if(altSorularList[j].altSoruSayisi == altSeceneklerList[l].altSecenekSayisi){
			altSecenekler(denemeDiv.id,altSeceneklerList[l].altSoruTip,l,altSorularList[j].id);
		}
		else {
			continue;
		}
	}
}
//altsenekler baslangıcı
var altSecenekSayisi = 0;
function altCheckbox(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd1Mt1 = document.createElement("div"); 
	colMd1Mt1.className = "col-md-1 mt-1 form-check";
	var divCheckBox = document.createElement("div");
	divCheckBox.className = "form-check";
	divCheckBox.setAttribute("th:object","${cevapAltSecenekler}");
	divCheckBox.id = "altChecboxDiv" + altSecenekSayisi;
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.className = "form-check-input form-control-sm";
	checkBox.value = altSeceneklerList[l].altSecenek;
	checkBox.setAttribute("th:value","${altCevap}");
	checkBox.id = "altCevap" + altSecenekSayisi;
	checkBox.name = "altCevap";
	checkBox.setAttribute("onclick","altCheckboxFunction('"+divCheckBox.id+"','"+checkBox.id+"','"+id+"','"+l+"')");
	var colMd5Mt1 = document.createElement("div");
	colMd5Mt1.className = "col-md-5 mt-1";
	var yanit = document.createElement("p");
	yanit.className = "lead mt-1 ml-1";
	yanit.innerHTML = altSeceneklerList[l].altSecenek;
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd1Mt1);
	colMd1Mt1.appendChild(divCheckBox);
	divCheckBox.appendChild(checkBox);
	denemeDiv.appendChild(colMd5Mt1);
	colMd5Mt1.appendChild(yanit);
}
function altRadio(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd1Mt1 = document.createElement("div"); 
	colMd1Mt1.className = "col-md-1 mt-1 form-check";
	var divRadio = document.createElement("div");
	divRadio.className = "form-check";
	divRadio.setAttribute("th:object","${cevapAltSecenekler}");
	divRadio.id = "altRadioDiv" + altSecenekSayisi;
	var radio = document.createElement("input");
	radio.type = "radio";
	radio.className = "form-check-input form-control-sm";
	radio.value = altSeceneklerList[l].altSecenek;
	radio.setAttribute("th:value","${altCevap}");
	radio.id = "altCevap" + altSecenekSayisi;
	radio.name = "altCevap";
	radio.setAttribute("onclick","altRadioFunction('"+divRadio.id+"','"+radio.id+"','"+id+"','"+l+"','"+div+"')");
	var colMd5Mt1 = document.createElement("div");
	colMd5Mt1.className = "col-md-5 mt-1";
	var yanit = document.createElement("p");
	yanit.className = "lead mt-1 ml-1";
	yanit.innerHTML = altSeceneklerList[l].altSecenek;
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd1Mt1);
	colMd1Mt1.appendChild(divRadio);
	divRadio.appendChild(radio);
	denemeDiv.appendChild(colMd5Mt1);
	colMd5Mt1.appendChild(yanit);
}
function altMultitext(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var yanit = document.createElement("input");
	yanit.type = "text";
	yanit.className = "form-control form-control-sm";
	yanit.setAttribute("th:value","${altCevap}");
	yanit.id = "altCevap";
	yanit.name = "altCevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdMultitext" + l;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdMultitext" + l;
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
}
function altTextbox(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var yanit = document.createElement("input");
	yanit.type = "text";
	yanit.className = "form-control form-control-sm";
	yanit.setAttribute("th:value","${altCevap}");
	yanit.id = "altCevap";
	yanit.name = "altCevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdTextbox" + l;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdTextbox" + l;
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
}
function altTextarea(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var yanit = document.createElement("textarea");
	yanit.rows = "3";
	yanit.className = "form-control form-control-sm";
	yanit.setAttribute("th:value","${altCevap}");
	yanit.id = "altCevap";
	yanit.name = "altCevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdTextarea" + l;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdTextarea" + l;
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
}
function altUpload(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var yanit1 = document.createElement("input");
	yanit1.className = "custom-file-input";
	yanit1.type = "file";
	yanit1.setAttribute("th:value","${altCevap}");
	yanit1.name = "altCevap";
	yanit1.id = "cevapAltUpload" + altSecenekSayisi;
	var label = document.createElement("LABEL");
	label.className = "custom-file-label";
	label.innerHTML = "Dosya Seçiniz";
	label.setAttribute("for","cevapAltUpload" + altSecenekSayisi);
	label.id = "altUploadLabel" + altSecenekSayisi;
	label.setAttribute("onchange","altUploadChange('"+yanit1.id+"','"+label.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdUpload" + l;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdUpload" + l;
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit1);
	colMd8Mt1.appendChild(label);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
	$(".custom-file-input").on("change", function() {
		  var fileName = $(this).val().split("\\").pop();
		  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
}
function altTarih(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	colMd8Mt1.id = "altTarihSecimi" + altSecenekSayisi;
	var yanit = document.createElement("input");
	yanit.type = "date";
	yanit.className = "form-control form-control-sm";
	yanit.id = "altTarih" + altSecenekSayisi;
	yanit.setAttribute("onchange","altTarihFunction('"+yanit.id+"','"+colMd8Mt1.id+"','"+l+"')");
	var yanitSaat = document.createElement("input");
	yanitSaat.type = "time";
	yanitSaat.className = "form-control form-control-sm";
	yanitSaat.id = "altSaat" + altSecenekSayisi;
	yanitSaat.setAttribute("onchange","altSaatFunction('"+yanitSaat.id+"','"+l+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruIdTarih" + l;
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekIdTarih" + l;
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(yanitSaat);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
}
function altIletisim(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var yanit = document.createElement("input");
	yanit.type = "text";
	yanit.className = "form-control form-control-sm";
	yanit.placeholder = altSeceneklerList[l].altSecenek;
	yanit.setAttribute("th:value","${altCevap}");
	yanit.id = "altCevap";
	yanit.name = "altCevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruId";
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekId";
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
}
function altCombobox(div,l,id){
	altSecenekSayisi++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	colMd8Mt1.id = "altComboboxDiv" + l;
	var yanit = document.createElement("select");
	yanit.type = "text";
	yanit.className = "form-control form-control-sm";
	yanit.id = "altCombobox" + l;
	var altSecenekler = [];
	altSecenekler = altSeceneklerList[l].altSecenek.split(" ");
	altSecenekler.pop();
	for(a=0;a<altSecenekler.length;a++){
		var option = document.createElement("option");
		option.value = altSecenekler[a];
		option.innerHTML = altSecenekler[a];
		yanit.appendChild(option);
	}
	var hiddenCombobox = document.createElement("input");
	hiddenCombobox.type = "hidden";
	hiddenCombobox.value = secenekler[0];
	hiddenCombobox.setAttribute("th:value","${altCevap}");
	hiddenCombobox.id = "cevapAltCombobox" + l;
	hiddenCombobox.name = "altCevap";
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruId";
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekId";
	cevapSecenekId.name = "cevapAltSecenekId";
	yanit.setAttribute("onchange","altComboboxFunction('"+colMd8Mt1.id+"','"+yanit.id+"','"+hiddenCombobox.id+"','"+l+"')");
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
	colMd8Mt1.appendChild(hiddenCombobox);
}
function altStar(div,l,id){
	altSecenekSayisi++;
	var denemeDiv = document.getElementById(div);
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1 star-widget";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var deger = altSeceneklerList[l].altSecenek;
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	var css = 'input#rateAlt-'+deger+':checked ~ label { color: #fe7; text-shadow: 0 0 20px #952; }',head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
	if (style.styleSheet){
 	 style.styleSheet.cssText = css;
	} else {
 	 style.appendChild(document.createTextNode(css));
	}
	var hiddenAltStar = document.createElement("input");
	hiddenAltStar.type = "hidden";
	hiddenAltStar.value = "";
	hiddenAltStar.setAttribute("th:value","${altCevap}");
	hiddenAltStar.id = "cevapAltStar" + l;
	hiddenAltStar.name = "altCevap";
	for(var z=deger;z>0;z--){
		var label = document.createElement("LABEL");
		var genislik = (600-(deger*33)) / deger;
		label.setAttribute("for","rateAlt-"+z);
		label.className = "fas fa-star";
		label.setAttribute("style","font-size:"+genislik+"px");
		var radio = document.createElement("input");
		radio.type = "radio";
		radio.id = "rateAlt-"+z;
		radio.name = "rateAlt-"+z;
		radio.value = z;
		radio.setAttribute("onclick","starFunction('"+radio.value+"','"+hiddenAltStar.id+"')");
		colMd8Mt1.appendChild(radio);
		colMd8Mt1.appendChild(label);
	}
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruId";
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekId";
	cevapSecenekId.name = "cevapAltSecenekId";
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
	colMd8Mt1.appendChild(hiddenAltStar);
	const btn = document.querySelector("button");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    const editBtn = document.querySelector(".edit");
    btn.onclick = ()=>{
      widget.style.display = "none";
      post.style.display = "block";
      editBtn.onclick = ()=>{
        widget.style.display = "block";
        post.style.display = "none";
      }
      return false;
    }
}
function altSlider(div,l,id){
	altSecenekSayisi++;
	var altSecenekler = [];
	altSecenekler = altSeceneklerList[l].altSecenek.split(" ");
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	colMd8Mt1.id = "altSliderDiv" + l;
	var yanit1 = document.createElement("input");
	yanit1.id = "altSlider" + l;
	yanit1.type = "range";
	yanit1.min = altSecenekler[0];
	yanit1.max = altSecenekler[2];
	yanit1.setAttribute("value",altSecenekler[1]);
	yanit1.step = altSecenekler[3];
	yanit1.className = "slider";
	var labelDiv = document.createElement("div");
	labelDiv.className = "d-flex justify-content-center";
	var h5 = document.createElement("h5");
	var span = document.createElement("span");
	span.className = "label label-default";
	span.id = "altDeger"+l;
	span.innerHTML = altSecenekler[1];
	var hiddenSlider = document.createElement("input");
	hiddenSlider.type = "hidden";
	hiddenSlider.value = altSecenekler[1];
	hiddenSlider.setAttribute("th:value","${altCevap}");
	hiddenSlider.id = "cevapAltSlider" + l;
	hiddenSlider.name = "altCevap";
	yanit1.setAttribute("oninput","altSliderFunction(this.value,"+"'"+span.id+"','"+l+"','"+colMd8Mt1.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruId";
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekId";
	cevapSecenekId.name = "cevapAltSecenekId";
	yanit1.setAttribute("onchange","altComboboxFunction('"+colMd8Mt1.id+"','"+yanit1.id+"','"+hiddenSlider.id+"','"+l+"')");
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(yanit1);
	colMd8Mt1.appendChild(cevapSoruId);
	colMd8Mt1.appendChild(cevapSecenekId);
	colMd8Mt1.appendChild(hiddenSlider);
	colMd8Mt1.appendChild(labelDiv);
	labelDiv.appendChild(h5);
	h5.appendChild(span);
}
function altDerecelendirme(div,l,id){
	altSecenekSayisi++;
	altDerece++;
	var colMd4Mt1 = document.createElement("div"); 
	colMd4Mt1.className = "col-md-6 mt-1";
	var colMd8Mt1 = document.createElement("div");
	colMd8Mt1.className = "col-md-6 mt-1 form-row";
	colMd8Mt1.setAttribute("th:object","${cevapAltSecenekler}");
	var c2 = document.createElement("div");
	c2.className = "col-md-2 mt-1";
	var c6 = document.createElement("div");
	c6.className = "col-md-6 mt-1";
	var hiddenDerecelendirme = document.createElement("input");
	hiddenDerecelendirme.type = "hidden";
	hiddenDerecelendirme.value =" ";
	hiddenDerecelendirme.setAttribute("th:value","${altCevap}");
	hiddenDerecelendirme.id = "cevapAltDerecelendirme"+l;
	hiddenDerecelendirme.name = "altCevap";
	var yanit1 = document.createElement("p");
	yanit1.className = "lead mt-1 ml-1";
	yanit1.value = altSeceneklerList[l].altSecenekk;
	yanit1.innerHTML = altSeceneklerList[l].altSecenek;
	yanit1.id = "cevapAltTextboxDerecelendirme" + l;
	yanit1.name = "cevapAltTextboxDerecelendirme";
	var combobox = document.createElement("select");
	combobox.id = "cevapAltComboboxDerecelendirme"+l;
	combobox.className = "form-control";
	combobox.setAttribute("onchange","derecelendirmeOnChangeFunction('"+altSeceneklerList[l].altSecenek+"','"+hiddenDerecelendirme.id+"','"+combobox.id+"')");
	var cevapSoruId = document.createElement("input");
	cevapSoruId.type="hidden";
	cevapSoruId.value = id;
	cevapSoruId.setAttribute("th:value","${cevapAltSoruId}");
	cevapSoruId.id = "cevapAltSoruId";
	cevapSoruId.name = "cevapAltSoruId";
	var cevapSecenekId = document.createElement("input");
	cevapSecenekId.type="hidden";
	cevapSecenekId.value = altSeceneklerList[l].id;
	cevapSecenekId.setAttribute("th:value","${cevapAltSecenekId}");
	cevapSecenekId.id = "cevapAltSecenekId";
	cevapSecenekId.name = "cevapAltSecenekId";
	var denemeDiv = document.getElementById(div);
	denemeDiv.appendChild(colMd4Mt1);
	denemeDiv.appendChild(colMd8Mt1);
	colMd8Mt1.appendChild(c2);
	c2.appendChild(combobox);
	colMd8Mt1.appendChild(c6);
	c6.appendChild(yanit1);
	c6.appendChild(cevapSoruId);
	c6.appendChild(cevapSecenekId);
	c6.appendChild(hiddenDerecelendirme);
	while(altBool){
	    if(altSeceneklerList[l+xx] === null || altSeceneklerList[l+xx] === undefined || altSeceneklerList[l+xx].altSoruTip != "altDerecelendirme"){
	    	altBool = false;
			break;
		}
	    else if(altSeceneklerList[l+xx].altSoruTip == "altDerecelendirme"){
			xx++;
		}
	}
	altDerecelendirmeFunction(combobox.id,xx,altDerece);
	derecelendirmeOnChangeFunction(altSeceneklerList[l].altSecenek,hiddenDerecelendirme.id,combobox.id);
}