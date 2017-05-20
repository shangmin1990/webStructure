Array.prototype.remove = function(index){
    var length = this.length;
    if(length == 0)
        return;
    if (index >= length){
        throw new Error('IndexOutOfBoundsException');
    }
    return this.splice(index, 1);
}

function redirectToLogin(){
    window.location.href = window.location.protocol+ '//' + window.location.host + '/admin/login.html';
}