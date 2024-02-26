import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);


	export  function load({ params,setHeaders,cookies,events }) {
	
		setHeaders({
			'Content-Type': 'text/html; charset=utf-8'
		});

		/** @type {?string} */
        const viscount = cookies.get("viscount")
		
		if (Number(viscount)>0){
			cookies.set("viscount", (Number(viscount)+1).toString(), {path:'/'})
		}else{
			console.log('no viscount')
			cookies.set("viscount", 1, {path:'/'})
		}
        
		// setHeaders({
		// 	'Set-Cookie': 'viscount=vis_count'
		// })

		
		// console.log(cookies)

		const selcont = cookies.get('selcont');
		const result2 = py.evalSync(pymodule, "getcountries()");
      
		if(selcont){
			console.log('page.server',selcont)
			result2.selcont=selcont
		}
		 return result2;

	}	
	