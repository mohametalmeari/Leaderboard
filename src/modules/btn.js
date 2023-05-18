var btnColor = `#03e9f4`
var hoverColor = `#fff`
var btnClass = `button`;
var btnElem = document.querySelectorAll(btnClass);
for(let i=0; i<btnElem.length; i += 1){
    for (let j=0; j<4; j += 1){
        btnElem[i].appendChild(document.createElement('span'));
    }
}
var styleSheet = document.createElement('style');
styleSheet.innerHTML=`
${btnClass}{
    background: transparent;
    border: none;
    outline: none;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: ${btnColor};
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
}
${btnClass}:hover{
    background: ${btnColor};
    border: none;
    outline: none;
    color: ${hoverColor};
    border-radius: 5px;
    box-shadow: 0 0 5px ${btnColor},
    0 0 25px ${btnColor},
    0 0 50px ${btnColor},
    0 0 100px ${btnColor};
}
${btnClass} span{
    position: absolute;
    display: block;
    padding: 0;
}
${btnClass} span:nth-child(1){
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${btnColor});
    animation: btn-anim1 1s linear infinite;
}
@keyframes btn-anim1 {
    0%{
        left: -100%;
    }
    50%, 100%{
        left:100%
    }
}
${btnClass} span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${btnColor});
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes btn-anim2 {
    0%{
        top: -100%;
    }
    50%, 100%{
        top: 100%;
    }
}
${btnClass} span:nth-child(3){
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, ${btnColor});
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes btn-anim3{
    0%{
        right: -100%;
    }
    50%, 100%{
        right: 100%;
    }
}
${btnClass} span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, ${btnColor});
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes btn-anim4{
    0%{
        bottom: -100%;
    }
    50%, 100%{
        bottom: 100%;
    }
}
`;
document.head.appendChild(styleSheet);