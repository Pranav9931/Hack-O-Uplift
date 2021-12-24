let alertmsg = document.getElementById('alert-message');
let alertContent = document.getElementById('alert-msg-content');
let locationValue = document.getElementById('location');
let categoryValue = document.getElementById('category');
let salValue = document.getElementById('salary');

const newFunc = () => {
    alertmsg.style.display = 'none';
    alertContent.style.marginTop = '-200px';
};

function formFunc(){
    if(locationValue.value.trim() == "" || categoryValue.value.trim() == "" || salValue.value.trim() == ""){
        alert('All the fields are required');
        return false;
    }
    else{
        if((locationValue.value.toLowerCase() === "connaught place, new delhi" || locationValue.value.toLowerCase() === "connaught place")&& categoryValue.value.toLowerCase() === "plumbing"){
            return true;
        }
        else{
            alertmsg.style.display = 'block';
            alertContent.style.marginTop = '2em';
            alertContent.style.transition = 'all .3s ease';
            setTimeout(newFunc, 2000);
            return false;
        }
    }
};

