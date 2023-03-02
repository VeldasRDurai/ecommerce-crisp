const showHidden = () => {
    var currentStatusText = document.getElementById("visible-indicator").innerText.trim();
    if( currentStatusText === '+' ){
        document.getElementById("hidden").style.display = 'block';
        document.getElementById("visible-indicator").innerText = '-';
    } else if ( currentStatusText === '-' ){
        document.getElementById("hidden").style.display = 'none';
        document.getElementById("visible-indicator").innerText = '+';
    }
}