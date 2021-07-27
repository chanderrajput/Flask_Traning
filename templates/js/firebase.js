var firebaseConfig = {
    apiKey: "AIzaSyCWqzM9fHPHUgEF4lK3FfHpWl411W1sTMc",
    authDomain: "finalyearproject-33698.firebaseapp.com",
    projectId: "finalyearproject-33698",
    storageBucket: "finalyearproject-33698.appspot.com",
    messagingSenderId: "718914752067",
    appId: "1:718914752067:web:b3dc7972e8f793facc0ef6"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signUp(){
      var email = document.getElementById('email');
      var password = document.getElementById('password');

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise
      .catch(e => alert(e.message));

      alert('Signed Up Successfully');
    }
    function signIn(){
        var email=document.getElementById('email');
        var password=document.getElementById('password');

        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise
        .then(user => {
          window.location.href='emotion.html';
        })
    }
   