//const BACKEND='http://10.0.1.148:8092/api';
//const BACKEND='http://localhost:28794/api';
const BACKEND='http://10.0.1.148:8092/api';

//import saveAs from 'file-saver';
import { AsyncStorage } from "react-native";




class Api{

	async buscarPorRFC(rfc){  
 
		const query= await fetch(BACKEND+"/personas/"+rfc,{
		    method: 'get',
		    headers: {
		      'Content-Type': 'application/json'
		     
		    }
		});	
		const data= await query.json();
		console.log(data)
		return data;	

	}

	async recibos(token){
 		
		
		const query= await fetch(BACKEND+"/recibosxml/15490044",{
		    method: 'get',
		    headers: {
		      'Authorization': 'Bearer '+token
		     
		    }
		});	
	 	
	 	const data= await query.json();
		//console.log(data)
		return data;

			

	}
	
	async getXML(ano,quincena,folio,token){
 		
		var query=await fetch(BACKEND+"/recibosxml/"+ano+"/"+quincena+"/"+folio,{
		    method: 'get',
		    headers: {
		      'Authorization': 'Bearer '+token,
		       //responseType: 'blob' 
		    }
		});	
		console.log(query)
		const data= await query.json();	

		return data;

/*
		fetch("data:application/xml;base64," + data.bytes)
		  .then(function(resp) {return resp.blob()})
		  .then(function(blob) {
		    saveAs(blob, data.nomArchivo)
		  });*/

	}
   
	async getPDF(ano,quincena,token){
 
		var query=await fetch(BACKEND+"/recibosxml/"+quincena+"/"+ano,{
		    method: 'get',
		    headers: {
		      'Authorization': 'Bearer '+token,
		       //responseType: 'blob' 
		    }
		});	
         
		const data= await query.json();	

/*
		fetch("data:application/pdf;base64," + data.bytes)
		  .then(function(resp) {return resp.blob()})
		  .then(function(blob) {
		    saveAs(blob, data.nomArchivo)
		  });
*/


         return data;
		

	}



	async IniciarSesion(user,type){
		
        const query= await fetch(BACKEND+"/account/"+type,{
			method: 'POST',
			headers:{
		    	'Content-Type': 'application/json'
			
		 	},
		 	body: JSON.stringify(user)
		    
		})
		console.log(user)
		const data= await query.json();		

		
		
		
		return data;
	}
 


	async microsoft(token){
 
		const query= await fetch("https://graph.microsoft.com/v1.0/me",{
		    method: 'get',		    
		 	headers:{
		 		'Authorization':'Bearer '+token,
		 		'Content-Type': 'application/json',
			}
		});
	
		const data= await query.json();
		
		return data;	

	}



	 
}

export default new Api();