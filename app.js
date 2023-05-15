function prayerTimes(latitude,longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=4')
    .then(response => response.json())
    .then( function(response){
        // console.log(response.data[0].timings);
        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[0].timings;

        console.log(data);
        // console.log(response.data[today]);

        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for(i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            // let coba = row.insertCell(2);
            // let coba1 = row.insertCell(3);
            // let coba2 = row.insertCell(4);
            
            // coba.innerHTML =  i;
            // coba1.innerHTML =  'data kosong <=>';
            // coba2.innerHTML =  'data ga ada';
            name.innerHTML =  i;
            time.innerHTML = data[i];
            tableTbody.appendChild(row);
        }
        
        table.appendChild(tableTbody)
        app.appendChild(table);

    });
}

function success(position){
    prayerTimes(position.coords.latitude,position.coords.longitude);
    // console.log(position);
}
function error(){
    // alert('Auto jakarta');
    //default lokasi jakarta
    prayerTimes('-6.200000','106.816666');
}

function userLocation(){
    if(!navigator.geolocation){
        alert('Geolocation tidak di dukung browser anda, silahkan gunakan browser lain');
    }else{
        navigator.geolocation.getCurrentPosition(success,error);
    }
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);
    userLocation();
}

index();