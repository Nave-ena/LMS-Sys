var app_fireBase = {};
(function () {
  var firebaseConfig = {
    
      apiKey: "AIzaSyDbVzQPUVGLyntWBnqbsvZ_7rqY3K4ovi0",
      authDomain: "lmsdev-7b9b8.firebaseapp.com",
      databaseURL: "https://lmsdev-7b9b8-default-rtdb.firebaseio.com",
      projectId: "lmsdev-7b9b8",
      storageBucket: "lmsdev-7b9b8.appspot.com",
      messagingSenderId: "328860004381",
      appId: "1:328860004381:web:1c9867f246555ffa7516f4"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})();
