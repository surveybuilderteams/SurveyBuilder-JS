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
	const ElRequired = this.create.el[set].required; 
	const SelectedIndex = this.create.el[set].selectedIndex;
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
   if(typeof(ElDataType) !== "number" && ElType === "heading"){
	   console.error("dataType isn't a valid number");
	   return false;
   }
   if(typeof(ElEdit) !== "boolean"){
	   console.error("editable must be a bool");
	   return false;
   }
   if(typeof(ElRequired) !== "boolean" && ElName === "input"){
	   console.error("required must be a bool");
	   return false;
   }
   if(typeof(SelectedIndex) !== "number" && ElName === "selectElement"){
	   console.error("SelectedIndex must be a number");
	   return false;
   }
   if(ElType !== "address" && SelectedIndex <= 0 || SelectedIndex >= 999999){
	   console.error(ElType + " isn't an valid SelectedIndex");
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
		let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = "<h" + ElDataType+ ">" + ElVal + "</h" + ElDataType + ">";
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
	}
	if(ElType === "paragraph"){
		let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = "<p>" + ElVal + "</p>";
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
	}
	if(ElType === "name"){
		if(ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i>First Name: <input type="text" placeholder="First Name" id="FirstName" name="FirstName" required="true"><br> <i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i>Middle Name: <input type="text" placeholder="Middle Name" id="MName" name="MName" required="true"><br> <i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i>Last Name: <input type="text" placeholder="Last name" id="LastName" name="LastName" required="true">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
		if(!ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'First Name: <input type="text" placeholder="First Name" id="FirstName" name="FirstName"> <br>Middle Name: <input type="text" placeholder="Middle Name" id="MName" name="MName"><br> Last Name: <input type="text" placeholder="Last name" id="LastName" name="LastName">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
		
	}
	if(ElType === "email"){
		if(ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Email: <input type="email" placeholder="Email" id="email" name="email" required="true">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
		if(!ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'Email: <input type="email" placeholder="Email" id="email" name="email" required="true">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
		
	}
	if(ElType === "address"){
		if(ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Street 1: <input type="text" placeholder="Street 1" id="Street" required="true"><br>Street 2: <input type="text" placeholder="Street 2" id="Street2"><br><i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> City: <input type="text" placeholder="City" id="City" required="true"><br><i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Zip Code: <input type="text" placeholder="Zip code" pattern="[0-9]{3,5}" id="Zip" required="true"><br><i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Country: <select id="countries-select" required="true"><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Côte dIvoire">Côte dIvoire</option><option value="Cabo Verde">Cabo Verde</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option><option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Eswatini (fmr. "Swaziland")">Eswatini (fmr. "Swaziland")</option><option value="Ethiopia">Ethiopia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Grenada">Grenada</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Holy See">Holy See</option><option value="Honduras">Honduras</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="North Korea">North Korea</option><option value="North Macedonia">North Macedonia</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine State">Palestine State</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States of America">United States of America</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="dnt" disabled="true">[Do Not Touch]</option></select>';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #countries-select").selectedIndex = SelectedIndex;
		}
		if(!ElRequired){
				let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'Street 1: <input type="text" placeholder="Street 1" id="Street"><br>Street 2: <input type="text" placeholder="Street 2" id="Street2"><br>City: <input type="text" placeholder="City" id="City"><br>Zip Code: <input type="text" placeholder="Zip code" pattern="[0-9]{3,5}" id="Zip"><br>Country: <select id="countries-select"><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Côte dIvoire">Côte dIvoire</option><option value="Cabo Verde">Cabo Verde</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option><option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Eswatini (fmr. "Swaziland")">Eswatini (fmr. "Swaziland")</option><option value="Ethiopia">Ethiopia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Grenada">Grenada</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Holy See">Holy See</option><option value="Honduras">Honduras</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="North Korea">North Korea</option><option value="North Macedonia">North Macedonia</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine State">Palestine State</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Timor-Leste">Timor-Leste</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States of America">United States of America</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="dnt" disabled="true">[Do Not Touch]</option></select>';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #countries-select").selectedIndex = SelectedIndex;
		}
	}
	
	if(ElType === "phone"){
		if(ElRequired){
				let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Phone Number: <input type="tel" placeholder="+#{##}(##)####-####" id="phoneNum" required="true" pattern="[\+]\d{1,3}[\(]\d{3}[\)]\d{3}[\-]\d{4}"><br><i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Area Code: <input type="text" placeholder="Area Code" required="true" pattern="[0-9]{3}">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
		if(!ElRequired){
			let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'Phone Number: <input type="tel" placeholder="+#{##}(##)####-####" id="phoneNum" pattern="[\+]\d{1,3}[\(]\d{3}[\)]\d{3}[-]\d{4}"><br>Area Code: <input type="text" placeholder="Area Code" pattern="[0-9]{3}">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		}
	}
	
	if(ElType === "date-picker"){
		if(ElRequired){
					let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Enter Date: <input type="date" id="Date" required="true" max="" min="">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #Date").value = ElVal; 
		}
		if(!ElRequired){
				let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'Enter Date: <input type="date" id="Date" max="" min="">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #Date").value = ElVal; 
		}
		
	}
	if(ElType === "time-picker"){
		if(ElRequired){
		let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);	
		element.innerHTML = '<i class="fas fa-asterisk" style="color:red;" aria-hidden="true"></i> Enter Time: <input type="time" id="Time" required="">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #Time").value = ElVal; 
		}
		if(!ElRequired){
		let element = document.createElement("DIV");
		element.id = ElID;
		element.className = ElClass;
		element.setAttribute("name", ElName);
		element.innerHTML = 'Enter Time: <input type="time" id="Time">';
		element.contentEditable = ElEdit;
		document.querySelector(sel).appendChild(element);
		document.querySelector("#" + ElID + "> #Time").value = ElVal; 
		}
	}
	
	
	
	
	}
	}
	}else{
		return false;
	}
};