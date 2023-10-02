// ** Creacion de elemntos de chat en pagina web, inyeccion de html dentro de elemento body

//Lista de dominios permitidos
const dominiosPermitidos = ['localhost', '127.0.0.1','bajajecuador.com','corporativo.curbe.com.ec','ebi.corp.ec']

//Localicazion URL de servicio
const dominioAPI='https://apichatgpt.dev.curbe.com.ec/'
//Localicazion URL de repositorio contenedor
const dominioRepositorio='https://public.alexastudillo.com/'

//Creacion de elemento link de css
const css =document.createElement('link')
css.href=dominioRepositorio.concat('styleChat.css')
css.rel='stylesheet'
css.type='text/css'

//Creacion de elemento link fuente
const fuente =document.createElement('style')
fuente.innerHTML="@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');"

// **Inicio creacion de elemnto flotante de inicio
//Creacion de elemento de imagen avatar inicio chat
const botonAvatar=document.createElement('avatar-chat')

    //Creacion elemento img, lector de imagenes
    const imgAvatar = document.createElement('img')
    imgAvatar.classList.add('circle-avatar-chat')
    imgAvatar.src=dominioRepositorio.concat('avatar.png')

    //Adicion de la imagen al boton
    botonAvatar.appendChild(imgAvatar)
// **Fin de creacion de elemnto flotante de inicio

// ** Inicio creacion de contenedor de chat
//Creacion de contenedor de elemento mensajeria
const contenedorchat=document.createElement('container-chat')
contenedorchat.style.display='none'
contenedorchat.classList.add('border-cir')
contenedorchat.classList.add('box-shadow')

    // ** Inicio creacion de esquema de vista chat
    //Creacion elemnto de esquema de vista
    const esquema= document.createElement('layout-chat')
        //Creacion elemento de cabecera de esquema
        const cabecera=document.createElement('header-chat')
        cabecera.classList.add('top-border-radius')

            //Creacion de elementos de cabecera
            const filaCabecera =document.createElement('row-chat')
            filaCabecera.classList.add('row-middle')
            filaCabecera.classList.add('row-center')

                //Creacion contenedor de columna para imagen
                const columnaCabeceraImg=document.createElement('col-chat')
                columnaCabeceraImg.classList.add('col-xl-4')
                columnaCabeceraImg.classList.add('col-xxl-3')
                columnaCabeceraImg.classList.add('col-lg-5')
                columnaCabeceraImg.classList.add('col-md-6')
                columnaCabeceraImg.classList.add('col-sm-3')
                columnaCabeceraImg.classList.add('col-xs-3')

                    //Creacion contenedor para icono de avatar
                    const avatarIcono= document.createElement('avatar-icon-chat')

                        //Creacion de elemento imagen para avatar boton inicio
                        const imgAvatarIcn = document.createElement('img')
                        imgAvatarIcn.classList.add('circle-avatar-chat')
                        imgAvatarIcn.src=dominioRepositorio.concat('avatar.png')

                    //Adicion de elemento imagen a icono de avatar inicio
                    avatarIcono.appendChild(imgAvatarIcn)

                //Adicion de elemento imagen a columna de imagen
                columnaCabeceraImg.appendChild(avatarIcono)

                const columnaCabeceraTit=document.createElement('col-chat')
                columnaCabeceraTit.classList.add('col-xl-17')
                columnaCabeceraTit.classList.add('col-xxl-19')
                columnaCabeceraTit.classList.add('col-lg-15')
                columnaCabeceraTit.classList.add('col-md-13')
                columnaCabeceraTit.classList.add('col-sm-19')
                columnaCabeceraTit.classList.add('col-xs-19')
                columnaCabeceraTit.innerHTML='Gala, Asistencia al cliente'

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

            //Adicion de elemento de columna a fila cabecera
            filaCabecera.appendChild(columnaCabeceraImg)
            filaCabecera.appendChild(columnaCabeceraTit)
            filaCabecera.appendChild(columnaCabeceraBtn)
            
        cabecera.appendChild(filaCabecera)

        //Creacion de elemento contenido de esquema
        const contenido=document.createElement('content-chat')
        contenido.style="position:relative"

            const divBoton=document.createElement('div')
            divBoton.style="position:absolute;right:15px;bottom:16px;z-index:100001;display:none"

                const btnScrollFin=document.createElement('button-icon-chat')
                btnScrollFin.style="height: 24px;width: 24px;box-shadow: none;margin:0px;background-color:#667781"
                btnScrollFin.id='btn-scroll'

                    const imgAbajo=document.createElement('span-icon-chat')
                    imgAbajo.style="height: 24px;width: 24px"
                    imgAbajo.innerHTML='<svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"/></svg>'

                btnScrollFin.appendChild(imgAbajo)
            
            divBoton.appendChild(btnScrollFin)

            const divLista=document.createElement('div')
            divLista.style="position: absolute;height: 100%;width: 100%;overflow-y:auto"

                const listaMsg=document.createElement('list-chat')
            
            divLista.appendChild(listaMsg)            
        
        contenido.appendChild(divBoton)
        contenido.appendChild(divLista)
        

        //Creacion de elemnto pie de esquema
        const pie=document.createElement('footer-chat')
        pie.classList.add('bottom-border-radius')

            const filaPie= document.createElement('row-flex-chat')
            filaPie.classList.add('row-middle')
            filaPie.classList.add('row-center')
            filaPie.id='initRow'

                const colunmaInputPie= document.createElement('col-flex-chat')

                    const inputMsg=document.createElement('textarea')
                    inputMsg.tabIndex=0
                    inputMsg.rows=1
                    inputMsg.placeholder='Escribe un mensaje'
                    inputMsg.wrap='off'
                    inputMsg.id="txtMsg"
                    inputMsg.classList.add('input-chat')
                    
                    const buttonMic=document.createElement('button-icon-chat')
                    buttonMic.id='btn-snd-msg'

                        const imgbtnMic=document.createElement('span-icon-chat')
                        imgbtnMic.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'

                    buttonMic.appendChild(imgbtnMic)
                
                colunmaInputPie.appendChild(inputMsg)
                colunmaInputPie.appendChild(buttonMic)
                
            filaPie.appendChild(colunmaInputPie)

            // fila de contenido al grabar
            const filaPieRec= document.createElement('row-flex-chat')
            filaPieRec.classList.add('row-middle')
            filaPieRec.classList.add('row-center')
            filaPieRec.style.backgroundColor='#ffffff'
            filaPieRec.style.flexDirection='column'
            filaPieRec.classList.add('visible')
            filaPieRec.id='recRow'

                contenidoPieRec=document.createElement('col-flex-chat')
                contenidoPieRec.style.width='100%'

                    const txtPieSgRec=document.createElement('p-chat')
                    txtPieSgRec.style='color:black'
                    txtPieSgRec.innerHTML="00:00"

                    const waveAud=document.createElement('canvas')
                    waveAud.classList.add('canvas-chat')
                    waveAud.id='wave-aud'

                    const audio=new Audio()
                    audio.style.display="none"
                    audio.controls = true;
                    audio.id='audio-source-chat'

                contenidoPieRec.appendChild(txtPieSgRec)
                contenidoPieRec.appendChild(waveAud)
                contenidoPieRec.appendChild(audio)

                const opcionesPieRec=document.createElement('col-flex-chat')
                opcionesPieRec.style.width="100%"
                opcionesPieRec.style.display="grid"
                opcionesPieRec.style.gridAutoFlow="column"

                    const btnElmAud=document.createElement('button-transparent-chat')
                    btnElmAud.id="del-rec-chat"

                        const imgBtnDel=document.createElement('span-icon-chat')
                        imgBtnDel.style.color="#667781"
                        imgBtnDel.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"/></svg>'

                    btnElmAud.appendChild(imgBtnDel)

                    const btnPausAud=document.createElement('button-transparent-chat')
                    btnPausAud.id='pause-rec-chat'
                    btnPausAud.style.justifySelf="center"

                        const imgBtnPas=document.createElement('span-icon-chat')
                        imgBtnPas.style="color:red"
                        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="30px" height="30px"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" fill="#ffffff"></path><path d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"></path></svg>'

                    btnPausAud.appendChild(imgBtnPas)

                    const btnSndAud=document.createElement('button-icon-chat')
                    btnSndAud.id='stop-rec-chat'
                    btnSndAud.classList.add('btn-circle')
                    btnSndAud.style.justifySelf="end"
                    btnSndAud.style.marginTop="5px"
                    btnSndAud.style.marginBottom="5px"

                        const imgSndAud=document.createElement('span-icon-chat')
                        imgSndAud.innerHTML='<svg viewBox="0 0 24 24" focusable="false" height="24px" width="24px" fill="currentColor"><path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>'

                    btnSndAud.appendChild(imgSndAud)

                opcionesPieRec.appendChild(btnElmAud)
                opcionesPieRec.appendChild(btnPausAud)
                opcionesPieRec.appendChild(btnSndAud)

            filaPieRec.appendChild(contenidoPieRec)
            filaPieRec.appendChild(opcionesPieRec)

        pie.appendChild(filaPie)
        pie.appendChild(filaPieRec)

    //Adicion de elemntos: cabecera,contenido y pie al esquema
    esquema.appendChild(cabecera)
    esquema.appendChild(contenido)
    esquema.appendChild(pie)
    // ** Fin creacion de esquema de vista chat

//Adicion del esquema a contenedor total
contenedorchat.appendChild(esquema)

// ** Inicio de agrehacion de funcionalidades

// Adicion de elementos a pagina principal
if(dominiosPermitidos.includes(window.location.host)){
    document.body.appendChild(contenedorchat)
    document.body.appendChild(botonAvatar)
    // document.head.appendChild(css)    
    document.head.appendChild(fuente)
}else{
    console.error("Domain not allowed")
    console.info(window.location.host)
}

var msgTipo=true
var recordPause=false
var contMsg=0
var audioRecordStartTime,elapsedTimeTimer,context;
var audioRecordPausedTime=0
let elapsedTime

window.onload=obtainToken;

inputMsg.addEventListener('input', () => {
    const scrollHeight = inputMsg.scrollHeight;
    if(!jQuery("#txtMsg").val()){
        msgTipo=true
        inputMsg.style.overflowY = 'hidden';
        inputMsg.style.height = '37px';        
        cambiarIcnBtnInic()
    }else {
        msgTipo=false
        cambiarIcnBtnInic()
        if (scrollHeight > 100) {
            inputMsg.style.overflowY = 'scroll';
            inputMsg.style.height = '100px';
        } else {
            inputMsg.style.overflowY = 'hidden';
            inputMsg.style.height = scrollHeight + 'px';
        }
    }    
});

divLista.addEventListener('scroll',() => {    
    if (divLista.offsetHeight + divLista.scrollTop < divLista.scrollHeight) {
        divBoton.style.display='flex'
        divBoton.style.zIndex="100001"
    }else{
        divBoton.style.display='none'
    }
})


function cambiarIcnBtnInic(){
    if(msgTipo){
        imgbtnMic.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'
    }else{
        imgbtnMic.innerHTML='<svg viewBox="0 0 24 24" focusable="false" height="24px" width="24px" fill="currentColor"><path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>'   
    }
}

function generateLoading(origin){
    const actualMsg=document.createElement('list-item-chat')    
    actualMsg.id="loading"
    if(origin){
        actualMsg.classList.add('inverse-row')
    }
        
    const loadingIcon=document.createElement('loading-chat')
    loadingIcon.classList.add('lds-dual-ring')
    loadingIcon.id="loadingIcon"
        
    actualMsg.appendChild(loadingIcon)
    listaMsg.appendChild(actualMsg)
    inputMsg.value=""
    
    divLista.scrollTo(0, divLista.scrollHeight);
}

function deleteLoading(){
    jQuery('#loading').remove()
}

function obtainToken(){
    axios.post(dominioAPI.concat('token'),{
        username:'initUserTest',
        password:'initP455W0RD'        
    })
    .then(function (response) {
        sessionStorage.setItem('token',response.data.token);
        jQuery("avatar-chat").click(function() {
            jQuery("avatar-chat").toggle('scale');
            jQuery("container-chat").toggle('scale');
        })
    })
    .catch(function(error){
        console.error(error)
    })
}

function createMsgElement(origin,message){
    const actualMsg=document.createElement('list-item-chat')
    const containerMsg=document.createElement('card-chat')
    if(origin){
        actualMsg.classList.add('inverse-row')
        containerMsg.classList.add('systemMsg')
        if(message.search(".pdf{1}")!=-1){            
            downloadPDF(message.substring(message.indexOf("https"),message.indexOf(".pdf")+4),containerMsg)
        }else{
            containerMsg.innerHTML=message
        }
    }else{
        containerMsg.classList.add('userMsg')
        containerMsg.innerHTML=message
    }
    actualMsg.appendChild(containerMsg)
    listaMsg.appendChild(actualMsg)
    inputMsg.value=""    
    divLista.scrollTo(0, divLista.scrollHeight);
}

function downloadPDF(fileName,element){
    const filaDscPdf = document.createElement('row-chat')

    const columnaIcono=document.createElement('col-chat')
    columnaIcono.classList.add('col-4')
    columnaIcono.classList.add('row-middle')
    columnaIcono.classList.add('row-center')    
    columnaIcono.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="40px" height="40px"><path d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"/></svg>'
    
    const columnaNombre=document.createElement('col-chat')
    columnaNombre.classList.add('col-16')
    columnaNombre.classList.add('row-middle')
    columnaNombre.classList.add('row-center')
    columnaNombre.innerHTML=fileName.substring(fileName.lastIndexOf('/')+1,fileName.indexOf(".pdf")+4)

    const columnaDescargar=document.createElement('col-chat')
    columnaDescargar.id='downloadPDF'
    columnaDescargar.classList.add('col-4')
    columnaDescargar.classList.add('row-middle')
    columnaDescargar.classList.add('row-center')

    const linkDesc= document.createElement('a')
    linkDesc.href=fileName
    linkDesc.download=fileName.substring(fileName.lastIndexOf('/')+1,fileName.indexOf(".pdf")+4)
    linkDesc.style="color:#ffffff"
    linkDesc.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="32px" height="40px"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"/></svg>'   

    columnaDescargar.appendChild(linkDesc)
    
    filaDscPdf.appendChild(columnaIcono)
    filaDscPdf.appendChild(columnaNombre)
    filaDscPdf.appendChild(columnaDescargar)    

    element.appendChild(filaDscPdf)        
}

function stopTimer() {
    clearInterval(elapsedTimeTimer);
}

function loadAudio(recorderAudioAsBlob) {
    
    reader = new FileReader();

    reader.onload = (e) => {
        
        let base64URL = e.target.result;

        let sourceElement = document.createElement("source");        
        audio.appendChild(sourceElement);

        sourceElement.src = base64URL;

        let BlobType = recorderAudioAsBlob.type.includes(";") ?
            recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
            sourceElement.type=BlobType

        audio.load();
    };
    reader.readAsDataURL(recorderAudioAsBlob);
}

function sendTextMsg(message){
    generateLoading(true)
    axios.post(dominioAPI.concat('bot-question'),{
        question:message
    },
    {
        headers: {
            Authorization: "Bearer ".concat(sessionStorage.getItem('token'))
        }
    })
    .then(function (response) {
        contMsg++
        deleteLoading()
        createMsgElement(true,response.data.data.content)
    })
    .catch(function(error){
        console.error(error)
    })
}

jQuery("#close-container-chat").click(function() {
    jQuery("avatar-chat").toggle('scale');
    jQuery("container-chat").toggle('scale');
})

jQuery('#btn-snd-msg').click(function(){
    if(!msgTipo){
        sendMsgTxt()
        msgTipo=true
        cambiarIcnBtnInic()
    }else{
        startRecording()
    }
})

function sendMsgTxt() {    
    var msgContent=jQuery('.input-chat').val()
    createMsgElement(false,msgContent)
    sendTextMsg(msgContent)
}

jQuery('.input-chat').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        var msgContent=jQuery('.input-chat').val()
        createMsgElement(false,msgContent)
        sendTextMsg(msgContent)
    }
})

jQuery('#btn-scroll').click(() =>{
    divLista.scrollTo(0, divLista.scrollHeight);
})

function startRecording(){
jQuery("#initRow").toggle();
jQuery("#recRow").toggle();
console.log("Recording Audio...");
let recorderAudioIsPlaying = !audio.paused;
audioRecorder.start()
    .then(() => {
        audioRecordStartTime = new Date();
        handleElapsedRecordingTime()
    })
    .catch(error => {
        if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
            console.log("To record audio, use browsers like Chrome and Firefox.");
        }
        switch (error.name) {
            case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                console.error("An AbortError has occured.");
                break;
            case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotAllowedError has occured. User might have denied permission.");
                break;
            case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotFoundError has occured. No Audio Record Device");
                break;
            case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotReadableError has occured.");
                break;
            case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                console.error("A SecurityError has occured.");
                break;
            case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                console.error("A TypeError has occured.");
                break;
            case 'InvalidStateError': //error from the MediaRecorder.start
                console.error("An InvalidStateError has occured.");
                break;
            case 'UnknownError': //error from the MediaRecorder.start
                console.error("An UnknownError has occured.");
                break;
            default:
                console.error("An error occured with the error name " + error.name);
        };
        console.log(error)
    });
}

jQuery('#pause-rec-chat').click(function() {
    if(!recordPause){
        console.log('Recording pause...')
        audioRecorder.pause()
        .then(blob=>{
            loadAudio(blob)
        })        
        recordPause=!recordPause
        cambiarIconoPause()
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }else{        
        audioRecorder.resume()
        console.log('Recording resume...')
        recordPause=!recordPause
        cambiarIconoPause()
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }    
})

jQuery('#stop-rec-chat').click(function(){
jQuery("#recRow").toggle();
jQuery("#initRow").toggle();
console.log("Stopping Audio Recording...");
audioRecorder.stop()
    .then(audioAsblob => {
        loadAudio(audioAsblob);
        stopTimer();
        txtPieSgRec.innerHTML="00:00"
        sendAudMsg()
        recordPause=false
    })
    .catch(error => {
        switch (error.name) {
            case 'InvalidStateError':
                console.error("An InvalidStateError has occured.");
                break;
            default:
                console.error("An error occured with the error name " + error.name);
        };
    });    
})

jQuery('#del-rec-chat').click(function(){
    console.log("Canceling audio...");
    audioRecorder.cancel()
    recordPause=false
    audio.innerHTML=""
    txtPieSgRec.innerHTML="00:00"
    stopTimer()    
    if(document.getElementsByTagName('audio')[0].style.display!='none'){
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }    
    jQuery("#initRow").toggle();
    jQuery("#recRow").toggle();    
})

function sendAudMsg(){
    generateLoading(false)    
    var form = new FormData();
    const blob = new Blob(audioRecorder.audioBlobs,{'type':'audio/mpeg-3'})
    form.append("file", blob);
    axios.post(dominioAPI.concat('get-audio'),
    form,
    {
        headers: {
            "Accept": "application/json",
            "Content-type": "audio/mpeg-3",
            Authorization: "Bearer ".concat(sessionStorage.getItem('token'))
        }
    }
    )
    .then(result => {
        deleteLoading()
        createMsgElement(false,result.data.data.content)
        sendTextMsg(result.data.data.content)        
    })
    .catch(error=>{
        console.error("Error al obtener texto: ".concat(error))
    })
}

function handleElapsedRecordingTime() {    
    elapsedTimeTimer = window.setInterval(() => {
        if(!recordPause){            
            elapsedTime = computeElapsedTime(audioRecordStartTime);            
            txtPieSgRec.innerHTML=elapsedTime;
        }else{
            audioRecordPausedTime+=1000;            
        }     
    }, 1000);
}

function cambiarIconoPause(){
    if(recordPause){
        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'
    }else{
        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="30px" height="30px"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" fill="#ffffff"></path><path d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"></path></svg>'
    }
    
}

function computeElapsedTime(startTime) {
    let endTime = new Date();
    let timeDiff = (endTime - startTime) - audioRecordPausedTime;    
    timeDiff = timeDiff / 1000;
    let seconds = Math.floor(timeDiff % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeDiff = Math.floor(timeDiff / 60);
    let minutes = timeDiff % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeDiff = Math.floor(timeDiff / 60);
    let hours = timeDiff % 24;
    timeDiff = Math.floor(timeDiff / 24);
    let days = timeDiff;
    let totalHours = hours + (days * 24);
    totalHours = totalHours < 10 ? "0" + totalHours : totalHours;
    if (totalHours === "00") {
        return minutes + ":" + seconds;
    } else {
        return totalHours + ":" + minutes + ":" + seconds;
    }
}
var dictionary={
    'Recording...':{
        'es':'Grabando...'
    }
}

window.onlanguagechange=(event)=>{
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

var langs = ['es','us'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}