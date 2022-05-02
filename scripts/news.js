// Ude Import export (MANDATORY)

import {navbar} from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();

import {searchNews1,append} from "./fetchsearch.js"


let search=(e)=>{
    if(e.key=="Enter"){
        let value=document.getElementById("search_input").value;
     searchNews1(value)
     .then((data)=>{
         console.log(data)
         
         let container=document.getElementById("detailed_news");
         container.innerHTML=null
         append(data.articles,container)
     })
    console.log(value)
    }
   }
   
   
   document.getElementById("search_input").addEventListener("keydown",search);