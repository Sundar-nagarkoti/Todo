let input=document.querySelector("#inp");
let list=document.querySelector(".list");


input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
          
        let taskname=e.currentTarget.value;
        taskname = taskname.trim();        //to trim the sapce before and after the text
        if(taskname == "") return;         //if nothing is on input area
        d=document.createElement("div"); 
        d.className="list task"
         //give class to new created div.
        
        d.addEventListener("dblclick",(e)=>{
            e.currentTarget.remove();
        })

        d.innerText=taskname;          // console.log(d.innerText);       
        list.appendChild(d);
        e.currentTarget.value="";
    }
})