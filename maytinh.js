

function insert(number) {
    document.form.textview.value=document.form.textview.value+number;
}

function equal() {
    let num = document.form.textview.value ;
    if(num) {
        document.form.textview.value=eval(num);
    }
}

function clean() {
    document.form.textview.value=" ";

}