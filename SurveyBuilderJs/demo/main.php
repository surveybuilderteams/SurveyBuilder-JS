<html>
<head>
<title>SurveyBuilder.JS - Demo</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="/SurveyBuilderJs/dist/src/libs/en/libJs.js"></script>
<link rel="shortcut icon" href="/SurveyBuilder/favicon.ico"/>
<style>
*{
	margin:0;
	padding:0;
	border:0;
}
body{
	background:gray;
	color:white;
}
</style>
</head>
<body>

<div class="renamed">
<center id="Form-Center" onload="Autosave()"><form id="Editors-Form" method="post" action=""><div id="Insert-Object" contenteditable="true"></div></form>

</div>
<script type="text/javascript">
 let sb = new SurveyBuilder({
   lang: "en",
   sel: "#Insert-Object",
   public_key: "VmgzuAUN2hKjdr65Sxs3BOHQqeDXYlwfC0vMJypFkcoP9WGIL47nt81iRbTaEZ",
   privite_key: "Y0TkA$thxD4f5IldZj#aB?Wy*Hic%C8Ur3eMgRu9wvnON@So&b6^q2K7LFVJQX1mG!zEspP",
   full_setup: false,
   author: "",
   title: "",
   styles:[
	   "/SurveyBuilder/Builder/SurveyBuilder.css",
	   "/SurveyBuilder/Builder/FormInsert.css",
	   "/SurveyBuilder/Builder/SurveyBuilderMobile.css"
   ],
   scripts:[
       "/SurveyBuilder/Builder/Apps_Insert.js",
       "/SurveyBuilder/Builder/SurveyBuilder.js",
       "/SurveyBuilder/Builder/InsertItems.js",
	   "https://kit.fontawesome.com/46bb4793e2.js"
   ],
   el:[{
	type: "heading",
	dataType: 1,
	name: "heading",
    id: "test",
    classNames: "heading",
    val: "Hello World",
	editable: true
   },
   {
	type: "paragraph",
	name: "MyPara",
    id: "MyPara",
    classNames: "para",
    val: "Hello World",
	editable: true  
   },
   {
	type: "name",
	name: "input",
	id: "MyName",
	classNames: "Name",
	editable: false,
	required: true
   },
   {
	  type: "email",
	name: "input",
	id: "MyEmail",
	classNames: "Email",
	editable: false,
	required: true 
   },
   {
	    type: "address",
	name: "selectElement",
	id: "MyAddress",
	classNames: "Address",
	selectedIndex: 186,
	editable: false,
	required: true 
   },
   {
	 type: "phone",
	name: "input",
	id: "MyPhone",
	classNames: "Phone",
	editable: false,
	required: true   
   },
   {
	    type: "date-picker",
	name: "",
	id: "MyDate",
	val: "",
	classNames: "Date",
	editable: false,
	required: true   
   },
   {
	  type: "time-picker",
	name: "",
	id: "MyTime",
	val: "22:00:00",
	classNames: "Time",
	editable: false,
	required: true    
   }
  
  ]
   
   
});
console.log(sb);


</script>
</body>
</html>