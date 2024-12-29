// Create an instance of Notyf for beatifull alerts
let notyf = new Notyf();
const d=document; 
const $inputText=d.querySelector("#taskInput");
const $bntAdd=d.querySelector("#addTaskButton");
const $sectionList=d.querySelector("#taskList");



// CLICK EVENTS

d.addEventListener("click",(e)=>{
    if(e.target === $bntAdd){ // When you click the document and is equals BntAdd
        if($inputText.value== ''){ // If cx did not fill out the Input
            notyf.error('You must fill out the Input / Is empty');
        }else{ // otherwise
            //We created a li and button so we can delete later
            let $div=d.createElement("div")
            $div.classList.add("div")
            let $button=d.createElement("button");
            $button.innerHTML=`DELETE`
            $button.classList.add('button')
            let $li=d.createElement("li");
            $li.textContent=`${$inputText.value}`;
           

            $div.appendChild($li)
            $div.appendChild($button)
            $sectionList.appendChild($div)
            notyf.success('Your changes have been successfully saved!');

            $inputText.value=''


        }
    }
    //If you click the document and i equals button delete you will remove it and show the alert
    if(e.target.innerHTML === 'DELETE'){
        e.target.parentNode.remove();
        notyf.success('This one is already removed')
    }
})