const url = 'http://api.open-notify.org/iss-now.json';


fetch(url)
  .then(
    function(res){
      if (res.status !== 200) {
        console.log('Somthing went wrong ' + res.status)
        return;
      }

      res.json().then(function(data){
        console.log(data)
      })
    }
  )
  .catch(function(err){
    console.log('There was and error its: ' + err);
  })
