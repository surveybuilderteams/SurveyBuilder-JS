function SurveyBuilder(create){
    this.create = create;
    //set variables
    const lang = this.create.lang;
    const sel = this.create.sel;
    const public_api = this.create.public_key;
    const privite_api = this.create.privite_key;
    const fullSetup = this.create.full_setup;
    const author = this.create.author; 
    const title = this.create.title;
    const stylesheet = this.create.styles; 
    const jscript = this.create.scripts; 
	if(lang === "en"){
    //elements
	const El = this.create.el;
	for(set=0;set<El.length;set++){
	const ElType = this.create.el[set].type;
    const ElName = this.create.el[set].name;
	const ElID = this.create.el[set].id;
    const ElClass= this.create.el[set].classNames;
    const ElVal = this.create.el[set].val;
	const ElDataType = this.create.el[set].dataType;
	const ElEdit = this.create.el[set].editable;
   /*requirements*/
   
   //undefined types or incorrect properties
   
   if(!this.create.hasOwnProperty("lang") || typeof(lang) !== "string"){
	   console.error("lang doesn't exist");
	   return false;
   }
   
   if(!this.create.hasOwnProperty("sel") || typeof(sel) !== "string"){
	   console.error("selector<sel> doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("public_key") || typeof(public_api) !== "string"){
	   console.error("public_key doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("privite_key") || typeof(privite_api) !== "string"){
	   console.error("privite_key doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("full_setup") || typeof(fullSetup) !== "boolean"){
	   console.error("full_setup doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("author") || typeof(author) !== "string"){
	   console.error("author doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("title") || typeof(title) !== "string"){
	   console.error("private doesn't exist");
	   return false;
   }
    if(!this.create.hasOwnProperty("styles")){
	   console.error("styles doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("scripts")){
	   console.error("scripts doesn't exist");
	   return false;
   }
   if(!this.create.hasOwnProperty("el")){
	   console.error("elements<el> doesn't exist");
	   return false;
   }
   if(typeof(ElDataType) !== "number"){
	   console.error("dataType isn't a valid number");
	   return false;
   }
   if(typeof(ElEdit) !== "boolean"){
	   console.error("editable must be a bool");
	   return false;
   }
   if(ElType === "heading" && ElDataType < 1 || ElDataType > 6){
	   console.error("heading has an invalid dataType");
	   return false;
   }
   if(ElType !== "heading" && typeof(ElDataType) !== "undefined"){
	   console.error(ElType + " isn't a valid element to have dataType");
	   return false;
   }
  
    $.get("/SurveyBuilder/Builder/API/Public_API.txt", function(Pubdata){
        if (public_api !== Pubdata) {
            console.error("Invalid Public API key");
            return false;
        }
    });
    $.get("/SurveyBuilder/Builder/API/Privite_API.txt", function(Pridata){

        if (privite_api !== Pridata){
            console.error("Invalid Privite API key");
            return false;
        }
    });

    if(fullSetup){
        let builder = document.createElement("iframe");
        builder.src = "/SurveyBuilder/Builder/SurveyBuilder.php";
		builder.width = "100%";
		builder.height = "100%";
        document.querySelector(sel).appendChild(builder);
    }

    if(title === "" || author === ""){
		document.title = "Untitled - SurveyBuilder";
	}else{
	document.title = title + " - " + author + " - SurveyBuilder";
	}
	
	if(!fullSetup){
	for(i=0;i<stylesheet.length;i++){
		let linkStyleSheet = document.createElement("link");
		linkStyleSheet.rel = "stylesheet";
		linkStyleSheet.href = stylesheet[i];
		document.querySelector("head").appendChild(linkStyleSheet);
	}
	for(i=0;i<jscript.length;i++){
		let linkJavaScript = document.createElement("script");
		linkJavaScript.type = "text/javascript";
		linkJavaScript.src = jscript[i];
		document.querySelector("head").appendChild(linkJavaScript);
	}
	//create elements
	if(ElType === "heading"){
		let element = document.createElement("H" + ElDataType);
		element.id = ElID;
		element.className = ElClass;
		element.name = ElName;
		element.innerHTML = ElVal;
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
	}
	
	
	
	}
	}
	}else{
		return false;
	}
};