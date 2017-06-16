
function resetPage() {
	var htmls = document.getElementsByTagName('html')[0];	
	var deviceWidth = document.documentElement.clientWidth;
	htmls.style.fontSize = deviceWidth*0.1333333 + 'px';
	//html字体的大小 = 当前页面的宽度*（html的字体大小/psd的页面宽度）
	// 等价于html.style.fontSize = windowWidth*(10/750)+ 'px';
	// 等价于html.style.fontSize = windowWidth / 750 * 10 + 'px';   此时设计图大小为640px html{font-size:62.5%/*即10px*/
	if(	parseInt($('html').css('fontSize'))>100){
		$('html').css('fontSize','100px')
	}
}
window.onload = function(){
	resetPage();
};
window.onresize = function(){
	resetPage();
};