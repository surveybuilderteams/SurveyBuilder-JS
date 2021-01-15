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


</div>
<script type="text/javascript">
let sb = new SurveyBuilder({
   lang: "en",
   sel: ".renamed",
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
       "/SurveyBuilder/Builder/InsertItems.js"
   ],
   el:[{
	type: "heading",
	dataType: 1,
	name: "heading",
    id: "test",
    classNames: "heading",
    val: "Hello World",
	editable: true
   }
  
  ]
   
   
});
console.log(sb);
</script>
</body>
</html>