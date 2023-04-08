var questionnaire = [
  {points:"0123",  statement:"Little interest or pleasure in doing things" },
  {points:"0123",  statement:"Feeling down, depressed, or hopeless." },
  {points:"0123",  statement:"Trouble falling or staying asleep, or sleeping too much" },
  {points:"0123",  statement:"Feeling tired or having little energy" },
  {points:"0123",  statement:"Poor appetite or overeating" },
  {points:"0123",  statement:"Feeling bad about yourself or that you are a failure or have let yourself or your family down" },
  {points:"0123",  statement:"Trouble concentrating on things, such as reading thenewspaper or watching television" },
  {points:"0123",  statement:"Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual" },
  {points:"0123",  statement:"Thoughts that you would be better off dead, or of hurting yourself." },
  {points:"0000",  statement:"In a social group, I can easily keep track of several different people’s conversations." },
  
],
  cols = [
       
       // &nbsp,
         // &nbsp,
      "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day"
      
    ];
var message = { 
  alert :`<p id="alert" class="btn btn-warning warning hidden"><i class="glyphicon glyphicon-time"></i> Important : you must select a preference in each of the 10 choices provided.</p>` ,
  result : `<div id="result" class="btn btn-success success hidden"><i class="glyphicon glyphicon-time"></i> Your score is <span></span> See the legend below.</div>`,
  legend: `<div id="legend" class="hidden">
<ul>
<li>0-4 "normal" or Minimal depression </li>
<li>11-21 Mild depression</li>
<li>22-25 Moderate depression 
</li>
<li>26-31 Moderately severe depression</li>
<li>32-50 Severe depression</li>
</ul></div>`,
disclaimer: `<h3 id="disclaimer">Disclaimer</h3>
<p class="">Please fill out all 10 questions of the questionairre to analyse your mental state.
</p>
`};


$("#hook").append(`<table id='table'></table>`);
$("#table").prepend(`
<thead>
<tr class="">
<td class="thead blank">&nbsp;</td>
<td class="thead blank">`+cols[0]+`</td>
<th class="thead cell">`+cols[1]+`</th>
<th class="thead cell">`+cols[2]+`</th>
<th class="thead cell">`+cols[3]+`</th>
<th class="thead cell">`+cols[4]+`</th>
</tr>
</thead>
`);



for (var i=0; i<questionnaire.length; i++){
  var q = questionnaire[i],
      p = q.points,
      j=i;
  j.toString().length==1?j="0"+(i+1):j=i+1;
  var html = `<tr><td class="col q"> Q`+j
  +`</td><td>`+ q.statement
  +`</td><td class="cell"><input type="radio" name="s`+j+`" value="`+p[0]+`" required="">`
  +`</td><td class="cell"><input type="radio" name="s`+j+`" value="`+p[1]+`" required="">`
  +`</td><td class="cell"><input type="radio" name="s`+j+`" value="`+p[2]+`" required="">`
  +`</td><td class="cell"><input type="radio" name="s`+j+`" value="`+p[3]+`" required="">`
  +`</td></tr>`;
  $("#table").append(html)
}

$( "#hook" ).append(`<button id="button">Score</button>`);

$(".cell").click(function (){ this.getElementsByTagName('input')[0].checked=true;})

$("#hook").append(`<div id="message"></div>`);
$("#message").append(message.alert );
$("#message").append(message.result);
$("#message").append(message.legend+`<br>`+message.disclaimer);

$("#button").click(function () {
  var checked = $('input:radio:checked'),
      score = 0;
  if (checked.length != 10) {
    $("#alert").removeClass("hidden");
    $("#result").addClass("hidden");
    $("#legend").addClass("hidden");
  }else { 
    $("#alert").removeClass("hidden").addClass("hidden");
    $("#result").removeClass("hidden");
    $("#legend").removeClass("hidden");
  }

  for (var i=0; i< checked.length;i++){ score = score + +checked[i].value; }
  console.log(score+"/50");
  $("#result > span").text(score);
  document.getElementById("score").value = score;
});