
var arrayImg = new Array();
arrayImg[0] = "empathy.jpg";
arrayImg[1] = "alice.jpg";
arrayImg[2] = "opportunities.jpg";
arrayImg[3] = "travel.jpg";
arrayImg[4] = "somebody.jpg";
arrayImg[5] = "workToBecome.jpg";
arrayImg[6] = "tomorrow is not promised.jpg";
arrayImg[7] = "cant stop thinking.jpg";
arrayImg[8] = "dies doesn't mean dead.jpg";
arrayImg[9] = "leader.jpg";
arrayImg[10] ="don't wait for the right person.jpg";


getRandomImage(arrayImg, "");

function getRandomImage(imgAr, path) {
    path = path || 'file:///Users/facebook/Desktop/SFPC/SFPC.html'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
