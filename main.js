function loadJson(file,callback)
{
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState===4&&xhr.status=="200")
		{
			callback(xhr.responseText);
		}
	};
	xhr.send();
}
loadJson("kavya.json",function(text)
	{
	var data=JSON.parse(text);
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
	var heading=document.createElement("h2");
	heading.textContent="Career Objective";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	heading.appendChild(hr);
	var careerP=document.createElement("p");
	careerP.textContent=careerInfo.info;
	childTwo.appendChild(careerP);

}
function education(edu){
	var heading1=document.createElement("h2");
	heading1.textContent="Educational Qualifications";
	childTwo.appendChild(heading1);
	var hr=document.createElement("hr");
	heading1.appendChild(hr);
var table=document.createElement("table");
table.border="1";
childTwo.appendChild(table);
var tr1="<tr><td>Degree</td><td>Institute</td><td>data</td></tr>";
var tr2="";
for(var i=0;i<edu.length;i++){
	tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
}
table.innerHTML=tr1+tr2;

}
function skills(sk){
	var heading2=document.createElement("h2");
	heading2.textContent="Skills";
	childTwo.appendChild(heading2);
	var hr=document.createElement("hr");
	heading2.appendChild(hr);
	for(var i=0;i<sk.length;i++){
		var titleH=document.createElement("h3");
		titleH.textContent=sk[i].title;
		childTwo.appendChild(titleH);
		var ul=document.createElement("ul");
		childTwo.appendChild(ul);
		for(var j=0;j<sk[i].info.length;j++){
			var li=document.createElement("li");
            li.textContent=sk[i].info[j];
		ul.appendChild(li);
	}

}
}
