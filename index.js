//create an AJX request


//create a function to get our data
var searchForms= document.querySelector('#search-form');
searchForms.addEventListener('submit',function(e){
    e.preventDefault();

    var textValue= document.querySelector('#search-bar').value
    console.log(textValue)
    const youtube_url= `https://www.googleapis.com/youtube/v3/search?part=snippet%20&q=${textValue}%20&maxResults=9&key=AIzaSyCsh-xolPfDlcq-hRQ-bW66_6M-i2DCvU4`
async function getData(){
    const response= await fetch(youtube_url);
    const data= await response.json();
    var videoData=data.items.map(function(item){
        return item.snippet
    });
   
     var container= document.querySelector('#video-divs');
     container.innerHTML='';
    videoData.forEach(video=> {
         console.log(video)
         var videoDiv= document.createElement('div');
       videoDiv.classList.add('video-div');
       videoDiv.innerHTML= `
       <img height=200 src= ${video.thumbnails.high.url}>
        <h4>${video.title}</h4>
        <p>${video.channelTitle}</p>
         <p>${new Date(video.publishTime).toLocaleDateString()}</p>
         `;
        container.appendChild(videoDiv)
    });
 }
getData()

})