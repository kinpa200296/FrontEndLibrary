var MouseMoveRotatingElements = new Array();

function Attach3DRotationById(id) {
    var elem = document.getElementById(id);
    if (elem !== null) {
        MouseMoveRotatingElements.push(elem);
    }
}

function Attach3DRotationByClassName(className){
    var newElements = document.getElementsByClassName(className);
    for (var i = 0; i < newElements.length; i++)
    {
        var elem = newElements.item(i);
        if (elem !== null) {
            MouseMoveRotatingElements.push(elem);
        }
    }
}

function RotateAllElementsOnMouseMove(params) {
    for (var i = 0; i < MouseMoveRotatingElements.length; i++)
    {
        var elem = MouseMoveRotatingElements[i];
        elem.style.mozTransform='rotateX('+params.pageY+'deg) rotateY('+params.pageX+'deg)';
        elem.style.webkitTransform='rotateX('+params.pageY+'deg) rotateY('+params.pageX+'deg)';
        elem.style.transform='rotateX('+params.pageY+'deg) rotateY('+params.pageX+'deg)';

    }
}

function RotateElement(params){
    var elem = params.toElement;
    if (elem !== null) {
        elem.style.mozTransform = 'rotateX(' + params.pageY + 'deg) rotateY(' + params.pageX + 'deg)';
        elem.style.webkitTransform = 'rotateX(' + params.pageY + 'deg) rotateY(' + params.pageX + 'deg)';
        elem.style.transform = 'rotateX(' + params.pageY + 'deg) rotateY(' + params.pageX + 'deg)';
    }
}

function RotateOnWindowMouseMove(){
    window.onmousemove = RotateAllElementsOnMouseMove;
}

function RotateOnElementMouseMove(){
    for (var i = 0; i < MouseMoveRotatingElements.length; i++)
    {
        var elem = MouseMoveRotatingElements[i];
        elem.onmousemove = RotateElement;
    }
}