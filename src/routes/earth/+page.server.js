import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);


	export  function load({ params,setHeaders,cookies,events }) {
	
		setHeaders({
			'Content-Type': 'text/html; charset=utf-8'
		});

        const viscount = cookies.get("viscount")
		let vis_count = 0;
		
		if (viscount){
			console.log('Viscount',viscount)
			vis_count += 1//Number(viscount)
			console.log(vis_count)
		}else{
			console.log('no viscount')
		}
        
		// setHeaders({
		// 	'Set-Cookie': 'viscount=vis_count'
		// })

		cookies.set("viscount", vis_count.toString(), {path:'/'})
		// console.log(cookies)

		const selcont = cookies.get('selcont');
		const result2 = py.evalSync(pymodule, "getcountries()");
      
		if(selcont){
			console.log('page.server',selcont)
			result2.selcont=selcont
		}
		 return result2;

	}	
	