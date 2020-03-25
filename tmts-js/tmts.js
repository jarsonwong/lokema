/* 功能說明: TMTS Javascript 模組 */

/*
'******************************************************************************************
'函式目的:開啟新視窗
'函式輸入:strUrl	-> 視窗網址
*/
var popupWin;
function TMTSNewWin(strUrl) {
	if (popupWin == null || popupWin.closed) {
		popupWin = window.open(strUrl,'popupWin','width=840,height=650,scrollbars=no,resizable=no');
	} else {
		popupWin.location.replace(strUrl);
	}
	popupWin.focus();
}

/* 設定游標移動時，指定文字區塊顏色變化. */
function onbold(fObj) {
	$('#'+fObj).css({'border-style':'solid', 'border-width':'2pt', 'border-color':'red', 'color':'#800000'});
}
function outbold(fObj) {
	$('#'+fObj).css({'border-style':'solid', 'border-width':'1pt', 'border-color':'black', 'color':'black'});
}

function setCaseMark(iNum, iMark) {
	$.ajax({
		url: 'ajax_casemark.asp?_NUM='+iNum+'&_MARK='+iMark,
		success: function(response) {
			$('#'+iNum+'-'+iMark).attr('src', '/service/image/item_mark_'+response+'.png'); 
		}
	});
}
