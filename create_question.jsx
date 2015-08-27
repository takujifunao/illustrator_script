function main(){
	add_docment();
	paste_image();
	get_content();
	split_content(main_text);
	set_content(one_page);
}

function add_docment(){
	documents.add(DocumentColorSpace.RGB, 2048, 1536);
}
function paste_image(){
	fileRef = new File ("/Users/takujifunao/Desktop/illustrator_Script/ruby/bg_solid.jpg");
	docObj = activeDocument;
	pItem = docObj.placedItems.add();
	pItem.file = fileRef;
	pItem.position = [0,1536];
	pItem.width = 2048;
	pItem.height = 1536;
	redraw();
}
function get_content(){
	file = new Window("dialog", "txtのファイル名を入力", [200,100,580,245]);
	file.okBtn 		= file.add("button",[180,80,250,80+25], "OK", { name:"ok"});
	file.cancelBtn 	= file.add("button", [90,80,160,80+25], "Cancel", {name: "cancel"});
	file.eText 		= file.add("edittext",[100,10,275,10+25], "");
	file.show();
	filepath = "/Users/takujifunao/Desktop/illustrator_Script/text/" + file.eText.text;
	fileObj = new File(filepath);
	flag = fileObj.open("r");
	if (flag == true){
		main_text = fileObj.read();
		fileObj.close();
	}else{
		alert("ファイルが開けませんでした");
	}
}
function split_content(main_text){
	one_page = main_text.split("end");
}
function set_content(one_page){
	
}


main();