/**below code stores the information in the form of dictionary */
know={
	
	"andhrapradesh":"Bot: &nbspCapital:Amaravathi &nbsp Language=telugu &nbsp Most popular place=tirupathi",
	"arunachalpradesh":"Bot: &nbsp Capital:Itanagar &nbsp Language=English &nbsp Most popular place=Ziro valley",
	"assam":" Bot: &nbsp Capital:dispur &nbsp Language=Assamese &nbsp Most popular place=Kaziranga National park",
	"bihar":"Bot: &nbsp Capital:Patna &nbsp Language=Hindi &nbsp Most popular place=Bodh Gaya",
	"chattisgarh":"Bot: &nbsp Capital:Raipur &nbsp Language=Hindi &nbsp Most popular place=Chitrakote Waterfalls",
	"goa":"Bot: &nbsp Capital:Panaji &nbsp Language=konkani &nbsp Most popular place=Calangute",
	"gujarat":"Bot: &nbsp Capital:Ghandinagar &nbsp Language=Gujarathi &nbsp Most popular place=Gil National park",
	"haryana":"Bot: &nbsp Capital:Chandigarh &nbsp Language=Hindi &nbsp Most popular place=Firoz shah palace",
	"himachalpradesh":"Bot: &nbsp Capital:Shimla &nbsp Language=Hindi &nbsp Most popular place=Manali",
	"jharkand":"Bot: &nbsp Capital:Ranchi &nbsp Language=Hindi &nbsp Most popular place=Dassam falls",
	"karnataka":"Bot: &nbsp Capital:Banglore &nbsp Language=telugu &nbsp Most popular place=Bannergatta National park",
	"kerala":"Bot: &nbsp Capital:thiruvunantapuram &nbsp Language=Malayalam &nbsp Most popular place=Athirapally vachal falls",
	"madhyapradesh":"Bot: &nbsp Capital:Bhopal &nbsp Language=hindi &nbsp Most popular place=pachmari",
	"maharashtra":"Bot: &nbsp Capital:Mumbai  &nbsp Language=marathi &nbsp Most popular place=Ajanta caves",
	"manipur":"Bot: &nbsp Capital:Imphal &nbsp Language=Leiti &nbsp Most popular place=Loktak lake",
	"meghalaya":"Bot: &nbsp Capital:Shillong &nbsp Language=English &nbsp Most popular place=Seven sister waterfalls",
	"mizoram":"Bot: &nbsp Capital:Aizwal&nbsp Language=Mizo &nbsp Most popular place=Blue National park",
	"nagaland":"Bot: &nbsp Capital:kohima &nbsp Language=English &nbsp Most popular place=Naga hills",
	"odisha":"Bot: &nbsp Capital:bhuvaneshwar &nbsp Language=odia &nbsp Most popular place=chilka lake",
	"punjab":"Bot: &nbsp Capital:Chandigarh &nbsp Language=punjabi &nbsp Most popular place=Golden temple",
	"rajasthan":"Bot: &nbsp Capital:jaipur &nbsp Language=hindi &nbsp Most popular place=Hawa Mahal",
	"sikkim":"Bot:&nbsp Capital:Gangtop &nbsp Language=nepali &nbsp Most popular place=rumtek Monastery",
	"tamilnadu":"Bot: &nbsp Capital:Chennai &nbsp Language=tamil &nbsp Most popular place=Rameshwaram",
	"telangana":"Bot: &nbsp Capital:Hyderabad &nbsp Language=telugu &nbsp Most popular place=Golconda fort",
	"tripura":"Bot: &nbsp Capital:Agartala &nbsp Language=bengali &nbsp Most popular place=ujjayanta palace",
	"uttarpradesh":"Bot: &nbsp Capital:Lucknow &nbsp Language=hindi &nbsp Most popular place=Taj mahal",
	"uttarakhand":"Bot: &nbsp Capital:Gairsain &nbsp Language=hindi &nbsp Most popular place=mussorie",
	"westbengal":"Bot: &nbsp Capital:kolkota &nbsp Language=bengali &nbsp Most popular place=Victoria mahal",
	"jammuandkashmir":"Bot: &nbsp Capital:Srinagar &nbsp Language=dogri &nbsp Most popular place=Pahalgam"
	
    };
function talk(){
  var user=document.getElementById("userBox").value;
  
	document.getElementById("userBox").value="";
	document.getElementById("chatLog").innerHTML+=user+"<br>";
  user=user.split(" ").join("").toLowerCase();
  
	if(user in know){
		document.getElementById("chatLog").innerHTML+=know[user]+"<br>";
	}
	else{
		document.getElementById("chatLog").innerHTML+="Bot: I didn't get you please enter only state name in India <br>";
	}
}/**This function used to display the information of the state required by the user */