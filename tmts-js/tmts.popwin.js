/* 功能說明: TMTS Javascript 模組 */

/*
'******************************************************************************************
'函式目的:檢查必輸欄位
'uField	-> FormName+FieldName
'uDesc	-> 欄位說明
'
'if (UtilCheckInput(document.表單名稱.欄位名稱,'欄位說明') == false) {return false}
*/
function UtilCheckInput(uField,uDesc) {
	if (uField.value == "") {
		alert("請輸入「"+uDesc+"」！");
		uField.focus();
		return false;
    }
}

/*
'******************************************************************************************
'函式目的:檢查數字
'uField	-> FormName+FieldName
'uValue	-> 欄位值
'
'if (UtilCheckNumeric(document.表單名稱.欄位名稱,document.表單名稱.欄位名稱.value) == false) {return false}
*/
function UtilCheckNumeric(uField,uValue)
{
	for( idx = 0 ; idx <uValue.length ; idx++ ) {
		if( !( ( uValue.charAt(idx)>= '0' && uValue.charAt(idx) <= '9' ) ) ) {
			alert ("只能輸入數字, 其他的符號都不能使用 !\n");
			uField.focus();
			return false;
			break;
		}
	}
	return true;
}
function isNumeric(fLng)
{
	for( idx = 0 ; idx <fLng.length ; idx++ ) {
		if( !( ( fLng.charAt(idx)>= '0' && fLng.charAt(idx) <= '9' ) ) ) {
			return false;
			break;
		}
	}
	return true;
}
/*
'******************************************************************************************
'函式目的:檢查email
'uField	-> FormName+FieldName
'
'if (UtilCheckEmail(document.表單名稱.欄位名稱) == false) {return false}
*/
function UtilCheckEmail(uField)
{
	if ((msgErr = UtilCheckEmailFormat(uField.value)) != "") {
		alert(msgErr);
		uField.focus();
		return false;
	}
} 

function UtilCheckEmailFormat(em) {
	var len = em.length;
	if (len == 0) {
		return "請輸入電子郵件";
	}
	for(var i = 0; i < len; i++) {
		var c = em.charAt(i);
		if(!((c >= "A" && c <= "Z")||(c >= "a" && c <= "z")||(c >= "0" && c <= "9")||(c == "-")||(c == "_")||(c == ".")||(c == "@"))) {
			return "請輸入限用英文，數字，點，'@'，橫線及底線的電子郵件";
		}
	}
	if((em.indexOf("@")==-1)||(em.indexOf("@")==0)||(em.indexOf("@")==(len-1))) {
		return "請輸入正確的電子郵件";
	}
	if((em.indexOf("@")!=-1)&&(em.substring(em.indexOf("@")+1,len).indexOf("@")!=-1)) {
		return "請輸入正確的電子郵件";
	}
	if((em.indexOf(".")==-1)||(em.indexOf(".")==0)||(em.lastIndexOf(".")==(len-1))) {
		return "您的電子郵件地址不完整";
	}
	return "";
}

/*
'******************************************************************************************
'函式目的:檢查字數
'uField	-> FormName+FieldName
'n	-> 指定長度
'uDesc	-> 欄位說明
'
'if (UtilCheckLength(document.表單名稱.欄位名稱,指定長度,'說明') == false) {return false}
*/
function check_numberbit(uField,n,uDesc) {
	if (uField.value.length != n) {
		alert (uDesc+"長度錯誤");
		uField.focus();
		return false;
	}
}

/*
'******************************************************************************************
'函式目的:檢查起迄日期
'函式輸入:strBeginDate	-> 判斷輸入的起日
'函式輸入:strEndDate	-> 判斷輸入的迄日
'
'if (UtilCheckBeginEndDate(document.表單名稱.欄位名稱.value,document.表單名稱.欄位名稱.value) == false) {return false}
*/
function UtilCheckBeginEndDate(uBeginDate,uEndDate) {
	strBDate = new Date(uBeginDate);
	strEDate = new Date(uEndDate);
	if (strBDate.getTime() > strEDate.getTime())
	{	
		alert("起始日期「"+uBeginDate+"」"+"不能大於"+"結束日期「"+uEndDate+"」");
		return false;
	};
	return true;
}

/*
'******************************************************************************************
'函式目的:檢查台灣電話號碼
*/

function UtilCheckPhoneNumber(fNum) {
	fNum = fNum.replace(/[ ]/g, "");
	var len = fNum.length;
	if (len == 0) {
		return 0;
	} else {
		var CellReg = /09[0-3|5-8]\d{7}$/;
		var PhoneReg2 = /02\d{8}$/;
		var PhoneReg3 = /03\d{7}$/;
		var PhoneReg41 = /04[2-6]\d{7}$/;
		var PhoneReg42 = /04[7-9]\d{6}$/;
		var PhoneReg5 = /0[5-8]\d{7}$/;
		if (CellReg.exec(fNum)!=null) {
			return 10;
		} else if (PhoneReg2.exec(fNum)!=null || PhoneReg41.exec(fNum)!=null) {
			return 8;
		} else if (PhoneReg3.exec(fNum)!=null || PhoneReg42.exec(fNum)!=null || PhoneReg5.exec(fNum)!=null) {
			return 7;
		} else {
			return -1;
		}
	}
}

/*
'******************************************************************************************
'函式目的:簡訊專用文字區域初始化及計數器
'使用方式:文字區域 onkeydown=refresh_counter(this.form,this.form.欄位名稱) onkeyup=refresh_counter(this.form,this.form.欄位名稱) onKeyChange=refresh_counter(this.form,this.form.欄位名稱)
*/

function refresh_counter(strFormName,strFieldName)
{
	var msg = strFieldName.value;
	var maxlen = 70;
	var msglen;
         
	if( msg.length > maxlen ){
		strFieldName.value = msg.substr(0,maxlen);
		msglen = maxlen;
	} else {
		msglen = msg.length;
	}
	strFormName.counter.value = maxlen - msglen;
}

/*
'******************************************************************************************
'函式目的:判斷是否為中文
'JavaScript 函式內專用
'傳回值　: True/False
'使用方法: if( UtilityIsChinese(msg) )
*/
	
function UtilityIsChinese(str) {
	var i;
	var result = false;		
	if( str.length > 0 ) {
		for(i=0; i<str.length; i++) {
			if( str.charCodeAt(i) > 0xff00) {
				result = true;
				break;
		      	}
    		}
	}
	return result;
}

/* 選項變更物件變色 */
function objBGColorChange(fObj){
	$(fObj).css({'background-color':'#99ff99'})
}

function setCaseMark(iNum, iMark) {
	$.ajax({
		url: 'ajax_casemark.asp?_NUM='+iNum+'&_MARK='+iMark,
		success: function(response) {
			$('#'+iNum+'-'+iMark).attr('src', '/service/image/item_mark_'+response+'.png');
			/* opener.window.location.reload(); */
		}
	});
}

function searchPhone(iNum, iObj) {
	iNum = iNum.replace(/[ ]/g, "");
	$.ajax({
		url: 'ajax_searchphone.asp?_PHONE='+iNum,
		success: function(response) {
			if (response!='0') {
				$('#'+iObj).css('background-color', '#D11');
				$('#filter_keyword').attr('value', iNum);
				alert('已有相同內容的 '+response+' 筆記錄!!\n\n請點選下方的『搜尋』鈕檢查記錄');
			}
		}
	});
}

function searchAddress(iZone, iAddress, iObj) {
	$.ajax({
		url: 'ajax_searchaddress.asp?_Zone='+iZone+'&_Address='+iAddress,
		success: function(response) {
			if (response!='0') {
				$('#'+iObj).css('background-color', '#D11');
				$('#filter_keyword').attr('value', iAddress);
				alert('已有相同內容的 '+response+' 筆記錄!!\n\n請點選下方的『搜尋』鈕檢查記錄');
			}
		}
	});
}

function CallMainWin() {
	var MainWin = window.open('','Main','');
	MainWin.focus();
}
