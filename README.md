# SurveyBuilder-JS
SurveyBuilder Now has a JavaScript Library now. You can import and Export codes from your work

# Installment

> $ npm install surveybuilerjs

# Languages
 | Languages | Current |
 | --------- | ------- |
 | English(En) | Yes |

# How to use

Use can use a default base plate using this HTML code

```html
<center id="Form-Center" onload="Autosave()">
	<form id="Editors-Form" method="post" action="">
		<div id="Insert-Object" contenteditable="true"></div>
	</form>
```

then set ```sel:``` to ```#Inser-Object```

Use this code below

```js
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

```

# Details about the script

```new SurveyBuilder``` create a configeration for SurveyBuilder

# Configeration
| Config | type | info |
| ----- | ---- | ----- |
| lang  | string | sets to a language |
| sel | string | set the data to a certin selector element |
| Public_key | string | set you public API |
| Privite_key | string | sets your privite API |
| full_setup | boolean | creats an IFrame to display SurveyBuilder |
| author | string | sets your current username |
| title | string | gives a title to your survey |
| styles | array + string| sets custom or default ```CSS``` files | 
| scripts | array + string | sets custom or default ```JavaScript``` files|
| el.type | string | gives a element type |
| el.dataType | int | sets a dataType to an element ex. headings |
| el.name | string | sets a name to an element |
| el.id | string | sets a id to an element |
| el.classNames | string | sets a ClassName to an element |
| el.val | string | sets a default value/text to an element |
| el.editable | boolean | allow the element to be editable |
| el.required | boolean | requires and element |
| el.selectedIndex | int | sets a default selector for dropdowns |

***

# Requirements

Will Require to download SurveyBuilder for API and Data Uses

***

# Supported Element types

| type | relase date |
| --- | ------- |
| heading | 01/15/2021 |
| paragraph | 01/21/2021 |
| Full Name | 01/21/2021 |
| Email | 01/21/2021 |
| Address | 01/21/2021 |
| Phone | 01/21/2021 |
| Date Picker | 01/21/2021 |
| Time Picker | 01/21/2021 |
