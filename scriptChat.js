const allowedDomainsList = ['localhost', '127.0.0.1','bajajecuador.com','corporativo.curbe.com.ec','ebi.corp.ec']

const APIDomain='https://apichatgpt.dev.curbe.com.ec/'
const RepositoryDomain='https://public.alexastudillo.com/'

const css =document.createElement('link')
css.href=RepositoryDomain.concat('styleChat.css')
css.rel='stylesheet'
css.type='text/css'

const font =document.createElement('style')
font.innerHTML="@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');"

const pdfjs=document.createElement('script')
pdfjs.src="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js"

const botonAvatar=document.createElement('avatar-chat')

const imgC = document.createElement('img')
imgC.classList.add('circle-avatar-chat')
imgC.setAttribute('src',RepositoryDomain.concat('avatar.png'))

botonAvatar.appendChild(imgC)

const contenedorchat=document.createElement('container-chat')
contenedorchat.style='display:none'
contenedorchat.classList.add('border-cir')
contenedorchat.classList.add('box-shadow')

const esquema= document.createElement('layout-chat')

contenedorchat.appendChild(esquema)

const cabecera=document.createElement('header-chat')
cabecera.classList.add('top-border-radius')

const contenido=document.createElement('content-chat')

const pie=document.createElement('footer-chat')
pie.classList.add('bottom-border-radius')

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
imgCI.setAttribute('src',RepositoryDomain.concat('avatar.png'))

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
columnaCabeceraTit.innerHTML='Gala, Asistencia al cliente'

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
colunmaInputPie.classList.add('row-middle')
colunmaInputPie.classList.add('row-center')
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
columnaPieBtnEnv.classList.add('row-middle')
columnaPieBtnEnv.classList.add('row-center')

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
columnaPieBtnMic.classList.add('row-middle')
columnaPieBtnMic.classList.add('row-center')

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
columnaPieSgRec.classList.add('row-middle')
columnaPieSgRec.classList.add('row-center')

columnaPieGifRec=document.createElement('col-chat')
columnaPieGifRec.classList.add('col-xl-14')
columnaPieGifRec.classList.add('col-xxl-16')
columnaPieGifRec.classList.add('col-lg-12')
columnaPieGifRec.classList.add('col-md-10')
columnaPieGifRec.classList.add('col-sm-18')
columnaPieGifRec.classList.add('col-xs-18')
columnaPieGifRec.classList.add('row-middle')
columnaPieGifRec.classList.add('row-center')
columnaPieGifRec.style='color:black'

columnaPieGifRec.innerHTML="Recording..."

columnaPieElmRec=document.createElement('col-chat')
columnaPieElmRec.classList.add('col-xl-4')
columnaPieElmRec.classList.add('col-xxl-3')
columnaPieElmRec.classList.add('col-lg-5')
columnaPieElmRec.classList.add('col-md-6')
columnaPieElmRec.classList.add('col-sm-2')
columnaPieElmRec.classList.add('col-xs-2')
columnaPieElmRec.classList.add('row-middle')
columnaPieElmRec.classList.add('row-center')

const buttonElm=document.createElement('button-icon-chat')
buttonElm.classList.add('btn-circle')
buttonElm.id='stop-rec-chat'

const imgbtnElm=document.createElement('span-icon-chat')
imgbtnElm.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="plus" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>'

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
columnaPieAud.classList.add('row-middle')
columnaPieAud.classList.add('row-center')

const audio=new Audio()
audio.controls = true;
audio.id='audio-source-chat'

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
columnaPieAudChk.classList.add('row-middle')
columnaPieAudChk.classList.add('row-center')

const buttonDel=document.createElement('button-icon-chat')
buttonDel.classList.add('btn-circle')
buttonDel.id='del-rec-chat'

const imgbtnDel=document.createElement('span-icon-chat')
imgbtnDel.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em" data-icon="delete" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>'

buttonDel.appendChild(imgbtnDel)

columnaPieAudDel.appendChild(buttonDel)

const buttonChk=document.createElement('button-icon-chat')
buttonChk.classList.add('btn-circle')
buttonChk.id='send-aud-chat'

const imgbtnChk=document.createElement('span-icon-chat')
imgbtnChk.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>'

buttonChk.appendChild(imgbtnChk)

columnaPieAudChk.appendChild(buttonChk)

filaPieAud.appendChild(columnaPieAud)
filaPieAud.appendChild(columnaPieAudDel)
filaPieAud.appendChild(columnaPieAudChk)

pie.appendChild(filaPie)
pie.appendChild(filaPieRec)
pie.appendChild(filaPieAud)

window.onload=obtainToken;

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
    
    contenido.scrollTo(0, contenido.scrollHeight);
}

function deleteLoading(){
    jQuery('#loading').remove()
}

function obtainToken(){
    axios.post(APIDomain.concat('token'),{
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

var loadingTask,pdfDoc,canvas,ctx,scale,numPage
var pdfExists=false

function readPDF(path){
    initFunctions()
    loadingTask=pdfjsLib.getDocument(RepositoryDomain.concat(path))
    loadingTask.promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        document.querySelector('#numMax').innerHTML ="de ".concat(pdfDoc.numPages);
        renderPDF()
    });
}

function initFunctions(){    
    pdfDoc= null
    canvas= document.querySelector('#pdf-canvas-chat')
    ctx= canvas.getContext('2d')
    scale=1
    numPage=1
    document.querySelector('#prev').addEventListener('click', prevPage)
    document.querySelector('#next').addEventListener('click', nextPage)
    document.querySelector('#ZmIn').addEventListener('click', ZoomIn)
    document.querySelector('#ZmOut').addEventListener('click', ZoomOut)
}

function renderPDF(){    
    pdfDoc.getPage(numPage).then(page=>{
        let viewport=page.getViewport({scale:scale});
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
            canvasContext : ctx,
            viewport:  viewport
        }
        page.render(renderContext);
    })
    pdfExists=true
}

function prevPage(){
    if(numPage === 1){
        return
    }
    numPage-=1;
    document.querySelector('#numAct').innerHTML=numPage
    renderPDF();
}

function nextPage(){
    if(numPage >= pdfDoc.numPages){
        return
    }
    numPage+=1;
    document.querySelector('#numAct').innerHTML=numPage
    renderPDF();
}

function ZoomIn(){
    if(scale >= 3){
        return
    }
    scale+=0.25;
    renderPDF();
}

function ZoomOut(){
    if(scale <= 0.25){
        return
    }
    scale-=0.25
    renderPDF();
}

if(allowedDomainsList.includes(window.location.host)){
    document.body.appendChild(contenedorchat)
    document.body.appendChild(botonAvatar)
    // document.head.appendChild(css)    
    document.head.appendChild(font)
    document.head.appendChild(pdfjs)
}else{
    console.error("Domain not allowed")
    console.info(window.location.host)
}

var contMsg=0
var audioRecordStartTime;
let reader
var elapsedTimeTimer;

function createMsgElement(origin,message){
    const actualMsg=document.createElement('list-item-chat')
    const containerMsg=document.createElement('card-chat')
    if(origin){
        actualMsg.classList.add('inverse-row')
        containerMsg.classList.add('systemMsg')
        if(message.search(".pdf{1}")!=-1){
            if(pdfExists){
                deletePdfViewer()
            }
            // createPDFViewer(containerMsg)
            downloadPDF(message.substring(message.indexOf("pdf")+3,message.indexOf(".pdf")+4),containerMsg)
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
    // if(message.search(".pdf{1}")!=-1){
    //     readPDF(message.substring(message.indexOf("pdf")+3,message.indexOf(".pdf")+4))
    // }
    contenido.scrollTo(0, contenido.scrollHeight);
}

function createPDFViewer(element){
    const pdfContainer=document.createElement('pdf-container-chat')

    const filaCnvPDF=document.createElement('row-chat')
    filaCnvPDF.style='height: 54vh;'
    filaCnvPDF.classList.add('double-overflow')

    const columnaCnvPDF=document.createElement('col-chat')
    columnaCnvPDF.classList.add('col-24')    

    const pdfViewer=document.createElement('canvas')    
    pdfViewer.id='pdf-canvas-chat'

    columnaCnvPDF.appendChild(pdfViewer)

    filaCnvPDF.appendChild(columnaCnvPDF)
    
    const filaBtnPdf=document.createElement('row-chat')
    filaBtnPdf.style='height: 6vh;'
    const columnaBtnAnt=document.createElement('col-chat')
    columnaBtnAnt.classList.add('col-4')
    columnaBtnAnt.classList.add('row-middle')
    columnaBtnAnt.classList.add('row-center')
    
    const pdfAntBtn= document.createElement('button-pdf-chat')
    pdfAntBtn.id='prev'
    const imgAntBtn= document.createElement('span-icon-chat')
    imgAntBtn.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"/></svg>'
    
    pdfAntBtn.appendChild(imgAntBtn)
    columnaBtnAnt.appendChild(pdfAntBtn)
    
    const columnaBtnSig=document.createElement('col-chat')
    columnaBtnSig.classList.add('col-4')
    columnaBtnSig.classList.add('row-middle')
    columnaBtnSig.classList.add('row-center')
    
    const pdfSigBtn= document.createElement('button-pdf-chat')
    pdfSigBtn.id='next'
    const imgSigBtn=document.createElement('span-icon-chat')
    imgSigBtn.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"/></svg>'
    
    pdfSigBtn.appendChild(imgSigBtn)
    
    columnaBtnSig.appendChild(pdfSigBtn)
    
    const columnaBtnZmI=document.createElement('col-chat')
    columnaBtnZmI.classList.add('col-4')
    columnaBtnZmI.classList.add('row-middle')
    columnaBtnZmI.classList.add('row-center')
    
    const pdfZmIBtn= document.createElement('button-pdf-chat')
    pdfZmIBtn.id='ZmIn'
    const imgZmIn=document.createElement('span-icon-chat')
    imgZmIn.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"/></svg>'
    
    pdfZmIBtn.appendChild(imgZmIn)
    
    columnaBtnZmI.appendChild(pdfZmIBtn)
    
    const columnaBtnZmO=document.createElement('col-chat')
    columnaBtnZmO.classList.add('col-4')
    columnaBtnZmO.classList.add('row-middle')
    columnaBtnZmO.classList.add('row-center')
    
    const pdfZmOBtn= document.createElement('button-pdf-chat')
    pdfZmOBtn.id='ZmOut'
    const imgZmOt=document.createElement('span-icon-chat')
    imgZmOt.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"/></svg>'
    
    pdfZmOBtn.appendChild(imgZmOt)
    
    columnaBtnZmO.appendChild(pdfZmOBtn)
    
    const columnaNumPagAct=document.createElement('col-chat')
    columnaNumPagAct.id='numAct'
    columnaNumPagAct.classList.add('col-4')
    columnaNumPagAct.classList.add('row-middle')
    columnaNumPagAct.classList.add('row-center')
    columnaNumPagAct.innerHTML='1'
    
    const columnaNumPagMax=document.createElement('col-chat')
    columnaNumPagMax.id='numMax'
    columnaNumPagMax.classList.add('col-4')
    columnaNumPagMax.classList.add('row-middle')
    columnaNumPagMax.classList.add('row-center')
    columnaNumPagMax.innerHTML='de 1'
    
    filaBtnPdf.appendChild(columnaBtnAnt)
    filaBtnPdf.appendChild(columnaBtnSig)
    filaBtnPdf.appendChild(columnaBtnZmI)
    filaBtnPdf.appendChild(columnaBtnZmO)
    filaBtnPdf.appendChild(columnaNumPagAct)
    filaBtnPdf.appendChild(columnaNumPagMax)
    
    pdfContainer.appendChild(filaCnvPDF)
    pdfContainer.appendChild(filaBtnPdf)

    element.classList.add('pdfViewer')
    element.appendChild(pdfContainer)
}

function deletePdfViewer(){
    if(pdfExists){
        document.querySelector('#prev').innerHTML=""
        document.querySelector('#prev').id=""
        document.querySelector('#next').innerHTML=""
        document.querySelector('#next').id=""
        document.querySelector('#ZmOut').innerHTML=""
        document.querySelector('#ZmOut').id=""
        document.querySelector('#ZmIn').innerHTML=""
        document.querySelector('#ZmIn').id=""
        document.querySelector('#pdf-canvas-chat').id=""
        document.querySelector('#numMax').innerHTML=""
        document.querySelector('#numMax').id=""
        document.querySelector('#numAct').innerHTML=""
        document.querySelector('#numAct').id=""
        pdfExists=false
    }
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
    columnaNombre.innerHTML=fileName

    const columnaDescargar=document.createElement('col-chat')
    columnaDescargar.id='downloadPDF'
    columnaDescargar.classList.add('col-4')
    columnaDescargar.classList.add('row-middle')
    columnaDescargar.classList.add('row-center')

    const linkDesc= document.createElement('a')
    linkDesc.href=RepositoryDomain.concat(fileName)
    linkDesc.download=fileName
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
    axios.post(APIDomain.concat('bot-question'),{
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

jQuery('#send-msg-chat').click(function() {
    var msgContent=jQuery('.input-chat').val()
    createMsgElement(false,msgContent)
    sendTextMsg(msgContent)
})

jQuery('.input-chat').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        var msgContent=jQuery('.input-chat').val()
        createMsgElement(false,msgContent)
        sendTextMsg(msgContent)
    }
})

jQuery('#activate-rec-chat').click(function(){
jQuery("#initRow").toggle();
jQuery("#recRow").toggle();
console.log("Recording Audio...");

let recorderAudioIsPlaying = !audio.paused;
console.log("paused?", !recorderAudioIsPlaying);
// if (recorderAudioIsPlaying) {
//     audioElement.pause();
//     //also hide the audio playing indicator displayed on the screen
// }
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
    });
})

jQuery('#stop-rec-chat').click(function(){
jQuery("#recRow").toggle();
jQuery("#audRow").toggle();
console.log("Stopping Audio Recording...");
audioRecorder.stop()
    .then(audioAsblob => {
        loadAudio(audioAsblob);
        stopTimer();
        columnaPieSgRec.innerHTML="00:00"
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
    audio.innerHTML=""
    jQuery("#initRow").toggle();
    jQuery("#audRow").toggle();
})

jQuery('#send-aud-chat').click(function(){
    generateLoading(false)
    var form = new FormData();
    const blob = new Blob(audioRecorder.audioBlobs,{'type':'audio/mpeg-3'})
    form.append("file", blob);
    axios.post(APIDomain.concat('get-audio'),
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
        jQuery("#initRow").toggle();
        jQuery("#audRow").toggle();
    })
    .catch(error=>{
        console.error("Error al obtener texto: ".concat(error))
    })
})

function handleElapsedRecordingTime() {
    columnaPieSgRec.innerHTML="00:00"
    elapsedTimeTimer = setInterval(() => {
        let elapsedTime = computeElapsedTime(audioRecordStartTime);
        columnaPieSgRec.innerHTML=elapsedTime;
    }, 1000);
}

function computeElapsedTime(startTime) {
    let endTime = new Date();
    let timeDiff = endTime - startTime;
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