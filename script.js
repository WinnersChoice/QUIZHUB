function redirectToClass(classNumber) {
    var C = confirm("You are being redirected to another page. Do you agree with this?");
    if(C){
    window.location.href = 'PAGES/'+classNumber+'TH-SUB-SELECT/class'+ classNumber+'.html';
    }
    else{
        alert('You are not redirecting to another page.');
    }
}

// /PAGES/10TH-SUB-SELECT/class10.html
// /PAGES/12TH-SUB-SELECT/class12.html
