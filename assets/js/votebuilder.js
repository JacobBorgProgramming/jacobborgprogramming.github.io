//Entry creator for Developer Designated Database

function generatepost(){

    document.getElementById("scriptopen").innerHTML = '<script>'
    document.getElementById("function").innerHTML = ' function loadpost'+document.getElementById("postnumber").value+'(){'


    document.getElementById("jspostname").innerHTML = 'document.getElementById("post'+document.getElementById("postnumber").value+'name").innerHTML ='+' "post'+document.getElementById("postnumber").value+'"'


    document.getElementById("jspostcontent").innerHTML = 'document.getElementById("post'+document.getElementById("postnumber").value+'content").innerHTML = '+'"'+document.getElementById("postcontent").value+'"'




    document.getElementById("end").innerHTML = '}'




    document.getElementById("htmloutput4").innerText = '<div id="post'+document.getElementById("postnumber").value+'"><a id="bcsspost"'+document.getElementById("postnumber").value+' href=#bcsspost'+document.getElementById("postnumber").value+'><h3 id="post'+document.getElementById("postnumber").value+'name"></h3></a><p>---</p><p id="post'+document.getElementById("postnumber").value+'content"></p></div>'

    document.getElementById("htmloutput5").innerText = '    <p><div class="btn btn-outline-dark disabled btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.26701 3.45496C6.91008 3.40364 7.52057 3.15077 8.01158 2.73234C9.15738 1.75589 10.8426 1.75589 11.9884 2.73234C12.4794 3.15077 13.0899 3.40364 13.733 3.45496C15.2336 3.57471 16.4253 4.76636 16.545 6.26701C16.5964 6.91008 16.8492 7.52057 17.2677 8.01158C18.2441 9.15738 18.2441 10.8426 17.2677 11.9884C16.8492 12.4794 16.5964 13.0899 16.545 13.733C16.4253 15.2336 15.2336 16.4253 13.733 16.545C13.0899 16.5964 12.4794 16.8492 11.9884 17.2677C10.8426 18.2441 9.15738 18.2441 8.01158 17.2677C7.52057 16.8492 6.91008 16.5964 6.26701 16.545C4.76636 16.4253 3.57471 15.2336 3.45496 13.733C3.40364 13.0899 3.15077 12.4794 2.73234 11.9884C1.75589 10.8426 1.75589 9.15738 2.73234 8.01158C3.15077 7.52057 3.40364 6.91008 3.45496 6.26701C3.57471 4.76636 4.76636 3.57471 6.26701 3.45496ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="currentColor"></path></svg>'+document.getElementById("author").value+'</div> <button id="voteupbutton'+document.getElementById("postnumber").value+'" onclick="voted()" class="btn btn-outline-dark btn-sm" type="button" title="Likes | 0 (Updated June 16th)">vote<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none"><path d="M2 10.5C2 9.67157 2.67157 9 3.5 9C4.32843 9 5 9.67157 5 10.5V16.5C5 17.3284 4.32843 18 3.5 18C2.67157 18 2 17.3284 2 16.5V10.5Z" fill="currentColor"></path><path d="M6 10.3333V15.7639C6 16.5215 6.428 17.214 7.10557 17.5528L7.15542 17.5777C7.71084 17.8554 8.32329 18 8.94427 18H14.3604C15.3138 18 16.1346 17.3271 16.3216 16.3922L17.5216 10.3922C17.7691 9.15465 16.8225 8 15.5604 8H12V4C12 2.89543 11.1046 2 10 2C9.44772 2 9 2.44772 9 3V3.66667C9 4.53215 8.71929 5.37428 8.2 6.06667L6.8 7.93333C6.28071 8.62572 6 9.46785 6 10.3333Z" fill="currentColor"></path></svg></button> <button id="votedownbutton'+document.getElementById("postnumber").value+'" onclick="voted()" class="btn btn-outline-danger btn-sm" type="button" title="Likes | 0 (Updated June 16th)" style="margin-left: 3px;">vote<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none"><path d="M18 9.5C18 10.3284 17.3285 11 16.5 11C15.6716 11 15 10.3284 15 9.5V3.5C15 2.67157 15.6716 2 16.5 2C17.3285 2 18 2.67157 18 3.5V9.5Z" fill="currentColor"></path><path d="M14 9.66667V4.23607C14 3.47852 13.572 2.786 12.8945 2.44721L12.8446 2.42229C12.2892 2.14458 11.6767 2 11.0558 2L5.63964 2C4.68628 2 3.86545 2.67292 3.67848 3.60777L2.47848 9.60777C2.23097 10.8453 3.17755 12 4.43964 12H8.00004V16C8.00004 17.1046 8.89547 18 10 18C10.5523 18 11 17.5523 11 17V16.3333C11 15.4679 11.2807 14.6257 11.8 13.9333L13.2 12.0667C13.7193 11.3743 14 10.5321 14 9.66667Z" fill="currentColor"></path></svg></button></p>'

    document.getElementById("htmloutput6").innerText = '<script>let votepost'+document.getElementById("postnumber").value+' = document.getElementById("voteupbutton'+document.getElementById("postnumber").value+'"); votepost'+document.getElementById("postnumber").value+'.addEventListener("click", function () { panelbear("track", "votepost'+document.getElementById("postnumber").value+'"); });   let votedownpost'+document.getElementById("postnumber").value+' = document.getElementById("votedownbutton'+document.getElementById("postnumber").value+'"); votedownpost'+document.getElementById("postnumber").value+'.addEventListener("click", function () { panelbear("track", "votedownpost'+document.getElementById("postnumber").value+'"); });</script>'


}
