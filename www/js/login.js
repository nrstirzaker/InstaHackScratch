$('#loginForm').submit(function() {
	doLogin();
});


function doLogin(){
    
    //var firebase = new Firebase("https://instahack-d127e.firebaseio.com");



    var username = $('#txt-email').val();
    var password = $('#txt-password').val();

    console.log(username);
    console.log(password);

var config = {
    apiKey: "AIzaSyAUykmXEOreOqb1W2w_XsRR-UxobaI4SkM",
    authDomain: "instahack-d127e.firebaseapp.com"
};

firebase.initializeApp(config);
var auth = firebase.auth();
auth.signInWithEmailAndPassword(username, password).then(function (result) {
  // Handle Errors here.
  console.log(result);
  // ...
},function (error) {
      var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);
});
    
}