import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);


	export  function load({ params,setHeaders,cookies }) {
	
		setHeaders({
			'Content-Type': 'text/html; charset=utf-8'
		});

		const selcont = cookies.get('selcont');
		const result2 = py.evalSync(pymodule, "getcountries()");
      
		if(selcont){
			console.log('page.server',selcont)
			result2.selcont=selcont
		}
		 return result2;

	}	
	