const allowedDomains = ['localhost', '127.0.0.1']

const css =document.createElement('link')
css.href='style.css'
css.rel='stylesheet'
css.type='text/css'

const botonAvatar=document.createElement('avatar-chat')

const imgC = document.createElement('img')
imgC.classList.add('circle-avatar-chat')
imgC.setAttribute('src','assets/avatar.png')

botonAvatar.appendChild(imgC)

const contenedorchat=document.createElement('container-chat')

const esquema= document.createElement('layout-chat')

contenedorchat.appendChild(esquema)

const cabecera=document.createElement('header-chat')

const contenido=document.createElement('content-chat')

const pie=document.createElement('footer-chat')

esquema.appendChild(cabecera)
esquema.appendChild(contenido)
esquema.appendChild(pie)

const filaCabecera =document.createElement('row-chat')
filaCabecera.classList.add('row-middle')
filaCabecera.classList.add('row-center')

const columnaCabeceraImg=document.createElement('col-chat')
columnaCabeceraImg.classList.add('col-xl-4')
columnaCabeceraImg.classList.add('col-xxl-3')
columnaCabeceraImg.classList.add('col-lg-5')
columnaCabeceraImg.classList.add('col-md-6')
columnaCabeceraImg.classList.add('col-sm-3')
columnaCabeceraImg.classList.add('col-xs-3')

const avatarIcono= document.createElement('avatar-icon-chat')

const imgCI = document.createElement('img')
imgCI.classList.add('circle-avatar-chat')
imgCI.setAttribute('src','assets/avatar.png')

avatarIcono.appendChild(imgCI)

columnaCabeceraImg.appendChild(avatarIcono)

filaCabecera.appendChild(columnaCabeceraImg)

const columnaCabeceraTit=document.createElement('col-chat')
columnaCabeceraTit.classList.add('col-xl-17')
columnaCabeceraTit.classList.add('col-xxl-19')
columnaCabeceraTit.classList.add('col-lg-15')
columnaCabeceraTit.classList.add('col-md-13')
columnaCabeceraTit.classList.add('col-sm-19')
columnaCabeceraTit.classList.add('col-xs-19')
columnaCabeceraTit.innerHTML='Chatbot'

filaCabecera.appendChild(columnaCabeceraTit)

const columnaCabeceraBtn = document.createElement('col-chat')
columnaCabeceraBtn.classList.add('col-xl-3')
columnaCabeceraBtn.classList.add('col-xxl-2')
columnaCabeceraBtn.classList.add('col-lg-4')
columnaCabeceraBtn.classList.add('col-md-5')
columnaCabeceraBtn.classList.add('col-sm-2')
columnaCabeceraBtn.classList.add('col-xs-2')

const btnSalida= document.createElement('button-chat')
btnSalida.id='close-container-chat'

const imgbtnSld=document.createElement('span-chat')

imgbtnSld.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="close" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'

btnSalida.appendChild(imgbtnSld)

columnaCabeceraBtn.appendChild(btnSalida)

filaCabecera.appendChild(columnaCabeceraBtn)

cabecera.appendChild(filaCabecera)

const listaMsg=document.createElement('list-chat')
contenido.appendChild(listaMsg)

const listaitemMsg=document.createElement('list-item-chat')


const filaPie= document.createElement('row-chat')
filaPie.classList.add('row-middle')
filaPie.classList.add('row-center')
filaPie.id='initRow'

const colunmaInputPie= document.createElement('col-chat')
colunmaInputPie.classList.add('col-xl-16')
colunmaInputPie.classList.add('col-xxl-18')
colunmaInputPie.classList.add('col-lg-14')
colunmaInputPie.classList.add('col-md-12')
colunmaInputPie.classList.add('col-sm-20')
colunmaInputPie.classList.add('col-xs-18')
colunmaInputPie.style='padding-left: 5px;padding-right: 5px;'

const inputMsg=document.createElement('input')
inputMsg.classList.add('input-chat')

colunmaInputPie.appendChild(inputMsg)

filaPie.appendChild(colunmaInputPie)

const columnaPieBtnEnv=document.createElement('col-chat')
columnaPieBtnEnv.classList.add('col-xl-4')
columnaPieBtnEnv.classList.add('col-xxl-3')
columnaPieBtnEnv.classList.add('col-lg-5')
columnaPieBtnEnv.classList.add('col-md-6')
columnaPieBtnEnv.classList.add('col-sm-2')
columnaPieBtnEnv.classList.add('col-xs-3')

const buttonEnv=document.createElement('button-icon-chat')
buttonEnv.classList.add('btn-circle')
buttonEnv.id='send-msg-chat'

const imgbtnEnv=document.createElement('span-icon-chat')

imgbtnEnv.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="send" aria-hidden="true"><defs><style></style></defs><path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path></svg>'

buttonEnv.appendChild(imgbtnEnv)

columnaPieBtnEnv.appendChild(buttonEnv)

filaPie.appendChild(columnaPieBtnEnv)

const columnaPieBtnMic=document.createElement('col-chat')
columnaPieBtnMic.classList.add('col-xl-4')
columnaPieBtnMic.classList.add('col-xxl-3')
columnaPieBtnMic.classList.add('col-lg-5')
columnaPieBtnMic.classList.add('col-md-6')
columnaPieBtnMic.classList.add('col-sm-2')
columnaPieBtnMic.classList.add('col-xs-3')

const buttonMic=document.createElement('button-icon-chat')
buttonMic.classList.add('btn-circle')
buttonMic.id='activate-rec-chat'

const imgbtnMic=document.createElement('span-icon-chat')

imgbtnMic.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="audio" aria-hidden="true"><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"></path></svg>'

buttonMic.appendChild(imgbtnMic)

columnaPieBtnMic.appendChild(buttonMic)

filaPie.appendChild(columnaPieBtnMic)

const filaPieRec= document.createElement('row-chat')
filaPieRec.classList.add('row-middle')
filaPieRec.classList.add('row-center')
filaPieRec.classList.add('visible')
filaPieRec.id='recRow'

columnaPieSgRec=document.createElement('col-chat')
columnaPieSgRec.style='color:black'
columnaPieSgRec.classList.add('col-xl-6')
columnaPieSgRec.classList.add('col-xxl-5')
columnaPieSgRec.classList.add('col-lg-7')
columnaPieSgRec.classList.add('col-md-8')
columnaPieSgRec.classList.add('col-sm-4')
columnaPieSgRec.classList.add('col-xs-4')
columnaPieSgRec.innerHTML='00:00'

columnaPieGifRec=document.createElement('col-chat')
columnaPieGifRec.classList.add('col-xl-14')
columnaPieGifRec.classList.add('col-xxl-16')
columnaPieGifRec.classList.add('col-lg-12')
columnaPieGifRec.classList.add('col-md-10')
columnaPieGifRec.classList.add('col-sm-18')
columnaPieGifRec.classList.add('col-xs-18')

const gif = document.createElement('img')
gif.classList.add('gif')
gif.src='set-diet-sound-bars.gif'

columnaPieGifRec.appendChild(gif)

columnaPieElmRec=document.createElement('col-chat')
columnaPieElmRec.classList.add('col-xl-4')
columnaPieElmRec.classList.add('col-xxl-3')
columnaPieElmRec.classList.add('col-lg-5')
columnaPieElmRec.classList.add('col-md-6')
columnaPieElmRec.classList.add('col-sm-2')
columnaPieElmRec.classList.add('col-xs-2')

const buttonElm=document.createElement('button-icon-chat')
buttonElm.classList.add('btn-circle')
buttonElm.id='stop-rec-chat'

const imgbtnElm=document.createElement('span-icon-chat')
imgbtnElm.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="stop" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"></path></svg>'

buttonElm.appendChild(imgbtnElm)

columnaPieElmRec.appendChild(buttonElm)

filaPieRec.appendChild(columnaPieSgRec)
filaPieRec.appendChild(columnaPieGifRec)
filaPieRec.appendChild(columnaPieElmRec)

const filaPieAud= document.createElement('row-chat')
filaPieAud.classList.add('row-middle')
filaPieAud.classList.add('row-center')
filaPieAud.classList.add('visible')
filaPieAud.id='audRow'

columnaPieAud=document.createElement('col-chat')
columnaPieAud.classList.add('col-xl-16')
columnaPieAud.classList.add('col-xxl-18')
columnaPieAud.classList.add('col-lg-14')
columnaPieAud.classList.add('col-md-12')
columnaPieAud.classList.add('col-sm-20')
columnaPieAud.classList.add('col-xs-18')

const audio=new Audio()
audio.controls = true;

columnaPieAud.appendChild(audio)

columnaPieAudDel=document.createElement('col-chat')
columnaPieAudDel.classList.add('col-xl-4')
columnaPieAudDel.classList.add('col-xxl-3')
columnaPieAudDel.classList.add('col-lg-5')
columnaPieAudDel.classList.add('col-md-6')
columnaPieAudDel.classList.add('col-sm-2')
columnaPieAudDel.classList.add('col-xs-3')

columnaPieAudChk=document.createElement('col-chat')
columnaPieAudChk.classList.add('col-xl-4')
columnaPieAudChk.classList.add('col-xxl-3')
columnaPieAudChk.classList.add('col-lg-5')
columnaPieAudChk.classList.add('col-md-6')
columnaPieAudChk.classList.add('col-sm-2')
columnaPieAudChk.classList.add('col-xs-3')

const buttonDel=document.createElement('button-icon-chat')
buttonDel.classList.add('btn-circle')
buttonDel.id='del-rec-chat'

const imgbtnDel=document.createElement('span-icon-chat')
imgbtnDel.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="delete" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'

buttonDel.appendChild(imgbtnDel)

columnaPieAudDel.appendChild(buttonDel)

const buttonChk=document.createElement('button-icon-chat')
buttonChk.classList.add('btn-circle')

const imgbtnChk=document.createElement('span-icon-chat')
imgbtnChk.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="check" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>'

buttonChk.appendChild(imgbtnChk)

columnaPieAudChk.appendChild(buttonChk)

filaPieAud.appendChild(columnaPieAud)
filaPieAud.appendChild(columnaPieAudDel)
filaPieAud.appendChild(columnaPieAudChk)

pie.appendChild(filaPie)
pie.appendChild(filaPieRec)
pie.appendChild(filaPieAud)

if(allowedDomains.includes(window.location.host)){
    document.body.appendChild(contenedorchat)
    document.body.appendChild(botonAvatar)
    document.head.appendChild(css)
}

$(function() {
    var contMsg=0
    var audioRecordStartTime;
    function createMsgElement(origin,message){
        const actualMsg=document.createElement('list-item-chat')
        const containerMsg=document.createElement('card-chat')        
        if(origin){
            actualMsg.classList.add('inverse-row')
            containerMsg.classList.add('systemMsg')
            containerMsg.innerHTML=message
        }else{
            containerMsg.classList.add('userMsg')
            containerMsg.innerHTML=message
        }        
        actualMsg.appendChild(containerMsg)
        listaMsg.appendChild(actualMsg)
        inputMsg.value=""
        contenido.scrollTo(0, contenido.scrollHeight);
    }
    function showInitFooter() {
        //clearInterval(elapsedTimeTimer);
    }
    function playAudio(recorderAudioAsBlob) {
        
        let reader = new FileReader();

        //once content has been read
        reader.onload = (e) => {
            //store the base64 URL that represents the URL of the recording audio
            let base64URL = e.target.result;
    
            //If this is the first audio playing, create a source element
            //as pre populating the HTML with a source of empty src causes error
            // if (!audioElementSource) //if its not defined create it (happens first time only)
            //     createSourceForAudioElement();
            let sourceElement = document.createElement("source");
            audio.appendChild(sourceElement);
    
            //set the audio element's source using the base64 URL
            sourceElement.src = base64URL;
    
            //set the type of the audio element based on the recorded audio's Blob type
            let BlobType = recorderAudioAsBlob.type.includes(";") ?
                recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
                sourceElement.type = BlobType
    
            //call the load method as it is used to update the audio element after changing the source or other settings
            audio.load();
    
            // //play the audio after successfully setting new src and type that corresponds to the recorded audio
            // console.log("Playing audio...");
            // audioElement.play();
    
            // //Display text indicator of having the audio play in the background
            // displayTextIndicatorOfAudioPlaying();
        };
    
        //read content and convert it to a URL (base64)
        reader.readAsDataURL(recorderAudioAsBlob);
    }
    $("avatar-chat").click(function() {    
        $("avatar-chat").toggle('scale');
        $("container-chat").toggle('scale');
    })
    $("#close-container-chat").click(function() {    
        $("avatar-chat").toggle('scale');
        $("container-chat").toggle('scale');
    })
    $('#send-msg-chat').click(function() {
        var msgContent=$('.input-chat').val()
        createMsgElement(false,msgContent)
        axios.post('http://localhost:5000/bot-question',{
            question:msgContent
        })
        .then(function (response) {
            contMsg++
            createMsgElement(true,response.data.data.content)            
        })
        .catch(function(error){
            console.log(error)
        })
    })
    $('#activate-rec-chat').click(function(){
    $("#initRow").toggle();
    $("#recRow").toggle();    
    console.log("Recording Audio...");
    //If a previous audio recording is playing, pause it
    let recorderAudioIsPlaying = !audio.paused; // the paused property tells whether the media element is paused or not
    console.log("paused?", !recorderAudioIsPlaying);
    // if (recorderAudioIsPlaying) {
    //     audioElement.pause();
    //     //also hide the audio playing indicator displayed on the screen        
    // }
    //start recording using the audio recording API
    audioRecorder.start()
        .then(() => { //on success

            //store the recording start time to display the elapsed time according to it
            audioRecordStartTime = new Date();

            //display control buttons to offer the functionality of stop and cancel
            showInitFooter();
        })
        .catch(error => { //on error
            //No Browser Support Error
            if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
                console.log("To record audio, use browsers like Chrome and Firefox.");                
            }

            //Error handling structure
            switch (error.name) {
                case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                    console.log("An AbortError has occured.");
                    break;
                case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                    console.log("A NotAllowedError has occured. User might have denied permission.");
                    break;
                case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                    console.log("A NotFoundError has occured.");
                    break;
                case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                    console.log("A NotReadableError has occured.");
                    break;
                case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                    console.log("A SecurityError has occured.");
                    break;
                case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                    console.log("A TypeError has occured.");
                    break;
                case 'InvalidStateError': //error from the MediaRecorder.start
                    console.log("An InvalidStateError has occured.");
                    break;
                case 'UnknownError': //error from the MediaRecorder.start
                    console.log("An UnknownError has occured.");
                    break;
                default:
                    console.log("An error occured with the error name " + error.name);
            };
        });
    })
    $('#stop-rec-chat').click(function(){    
    $("#recRow").toggle(); 
    $("#audRow").toggle(); 
    console.log("Stopping Audio Recording...");
    //stop the recording using the audio recording API
    audioRecorder.stop()
        .then(audioAsblob => {
            //Play recorder audio
            playAudio(audioAsblob);            

            //hide recording control button & return record icon
            showInitFooter();
        })
        .catch(error => {
            //Error handling structure
            switch (error.name) {
                case 'InvalidStateError': //error from the MediaRecorder.stop
                    console.log("An InvalidStateError has occured.");
                    break;
                default:
                    console.log("An error occured with the error name " + error.name);
            };
        });
    })
    $('#del-rec-chat').click(function(){
        console.log("Canceling audio...");

        //cancel the recording using the audio recording API
        $("#initRow").toggle(); 
        $("#audRow").toggle();
        audio.cancel();
        
        //hide recording control button & return record icon
        // handleHidingRecordingControlButtons();
    })    
})