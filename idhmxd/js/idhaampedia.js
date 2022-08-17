$(document).ready(function() {
    $('body').bind('contextmenu', function(e){
        return false;
    }); 
});

$(document).ready(function() {
    $('img').bind('contextmenu', function(e){
        return false;
    }); 
});

function pilihan() {
	var login = document.getElementById('login');
	login.style.display = 'block';
}

function tutup() {
	var login = document.getElementById('login');
	login.style.display = 'none';
}
