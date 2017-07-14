// JavaScript Document
var neoJsLib={
	 g : function(id){
		return document.getElementById(id);
	},
	
	css : function(id,key,value){
		document.getElementById(id).style[key]= value;
		//this.g.style[key]= value;
		
	},
	attr : function(id,key,value){
		document.getElementById(id)[key]= value;
		
	},
	html : function(id,html){
		
		document.getElementById(id).innerHTML=html;
		
	},
	on : function(id,type,fn){
		document.getElementById(id)["on"+type]=fn;
		
	}
	
	
	
	
	
};

neoJsLib.css('demo','background-color','yellow');
neoJsLib.html('demo','demo哦');
neoJsLib.on('box','click',function(){alert("ok");});