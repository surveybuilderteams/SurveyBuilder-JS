# SurveyBuilder-JS
SurveyBuilder Now has a JavaScript Library now. You can import and Export codes from your work

# Installment

> $ npm install surveybuilerjs

# Languages
 | Languages | Current |
 | --------- | ------- |
 | English(En) | Yes |

# How to use

Use this code below

```js
let {variable} = new SurveyBuilder({
   lang: "en",
   sel: ".renamed",
   public_key: "Public_API",
   privite_key: "Privite_API",
   full_setup: true,
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

***

# Requirements

Will Require to download SurveyBuilder for API and Data Uses

