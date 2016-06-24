function wh(){

writeHeaderOrFooter('header');

}

function wf(){

writeHeaderOrFooter('footer');

}

function writeHeaderOrFooter(whatToDo){
	document.write('<center>');

	if (whatToDo=='footer'){
		document.write('<br><hr noshade >');
	}

	var path;

	if(document.URL.indexOf('annex') >= 0 
		|| document.URL.indexOf('parody') >= 0 
		|| document.URL.indexOf('ib') >= 0
		|| document.URL.indexOf('mday') >= 0
	){
		path = '../';
	}
	else{
		path = './';
	}

	document.write(
'<font size ="1"> <a href="http://www.vif2ne.ru">ОСПОРИТЬ!!</a>'
+' | <a href="'+path+'index.htm">Главная</a>'
+' | <a href="'+path+'books.htm">Книги с комментариями</a>'
+' | <a href="'+path+'annex/index.htm">Приложения</a>'
+' | <a href="'+path+'news.htm">Новости</a>'
+' | <a href="'+path+'authors.htm">Авторы</a>'
+' | <a href="'+path+'parody/index.htm">Пародии</a></font>'
	);

	if (whatToDo=='header'){
		document.write('<hr noshade ><br>');
	}

	document.write('</center>');

}