let submit=document.querySelector('.submit')
let temp_input=document.querySelector('.temp-input');
let display_result=document.querySelector('.display-result');
let select_element=document.querySelector('#degree-type-select');



const converttemp=()=>{


const celtoFah=(cel)=>{

    let result=cel*1.8+32;
    return result;
}

const Fahtocel=(fah)=>{

    let result=(fah-32)*5/9;
    return result;
}


    if (select_element.selectedIndex==0){

        let res=celtoFah(temp_input.value);
        display_result.innerHTML=`${res} degree fahrenheit`;
    }
    else{

        let res=Fahtocel(temp_input.value);
        display_result.innerHTML=`${res} degree celsius`;
    }
    

}

submit.addEventListener('click',converttemp);


