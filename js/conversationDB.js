

var questionFound = "No question"
var button = document.getElementById("questionBtn")
var questions = []

window.addEventListener('cloudkitloaded', function() {
  console.log("listening for cloudkitloaded");
  CloudKit.configure({
    containers: [{
      containerIdentifier: 'iCloud.JakeDerouin.dateDoctor',
      apiToken: 'fbb3874839b5ffb7f38075472a24f8405514502d36869a1a514389b1504cb52b',
      environment: 'production'
    }]
  });
  console.log("cloudkitloaded");
  // 4                      
  function TILViewModel() {
    var self = this;
    console.log("get default container");
    var container = CloudKit.getDefaultContainer();
    console.log("set publicDB");
var publicDB = container.publicCloudDatabase;
self.items = ko.observableArray();
self.fetchRecords = function() {
  console.log("fetching records from " + publicDB);
  var query = { recordType: 'Question'};
  
  // Execute the query.
  return publicDB.performQuery(query).then(function(response) {
    if(response.hasErrors) {
      console.error(response.errors[0]);
      return;
    }
    var records = []
for(id in response.records){
  if(response.records[id].fields.status.value == 1){

    records.push(response.records[id])
  }
}




    var numberOfRecords = records.length;
    if (numberOfRecords === 0) {
      console.error('No matching items');
      return;
    }
    console.log(records.length)




    questionFound = records[Math.floor(Math.random()*records.length)].fields.question.value;
    console.log(questionFound)
    questions = records
    self.items(records);

  });
};
container.setUpAuth().then(function(userInfo) {
  console.log("setUpAuth");
  self.fetchRecords();  // Don't need user auth to fetch public records
});

  }

  // 5
  ko.applyBindings(new TILViewModel());       
});

function getQuestion(){
  questionFound = questions[Math.floor(Math.random()*questions.length)].fields.question.value;
console.log(questionFound)
document.getElementById("question").innerHTML = questionFound



}