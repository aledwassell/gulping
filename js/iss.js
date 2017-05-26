const url = 'http://api.open-notify.org/iss-now.json';


fetch(url)
  .then(
    function(res){
      if (res.status !== 200) {
        console.log('Somthing went wrong ' + res.status)
        return;
      }

      res.json().then(function(data){
        console.log(data.iss_position);
        console.log('latitude: ' + data.iss_position.latitude + ' longitude: ' + data.iss_position.longitude)
      })
    }
  )
  .catch(function(err){
    console.log('There was and error its: ' + err);
  })
