<script>
	/** @type {import('./$types').PageData} */
	export let data;
   // import { getCookie, setCookie, deleteCookie } from 'svelte-cookie';
	import { onMount } from 'svelte';
    //let selected =data.regions[0]//'AFRICA'
	//let sel_cont = getCookie('selcont');
	//console.log('sel_cont',sel_cont)
	
	let selected;

	onMount(() => {
        console.log(document.cookie)
		const cookieValue = document.cookie
             .split("; ")
             .find((row) => row.startsWith("selcont="))
             ?.split("=")[1];

             if(cookieValue){
			   selected = cookieValue}
			 else{
				selected =data.regions[0]//'AFRICA'
			 }  

			})

    const selcontinent =(cont)=>{
		selected=cont;
		document.cookie = `selcont=${cont}`;
   };

</script>
<!-- {JSON.stringify(data.selcont)} -->

<div class="layout">
	<main>
		<div style="border:1px solid blue;padding:25px">
        <h1>проверка</h1>
            {#each data.alldata.filter(cntr =>cntr[1]==selected ) as item}
                <p>{item[0]}</p>
            {/each}
        </div>
	</main>

	<!-- class={active ? 'active' : ''} -->
	<!-- class:active={current === 'foo'}  -->

	<aside>
		<ul>
			{#each data.regions as reg}
				<li on:click={()=>selcontinent(reg)} 
					class:active={selected ==reg }
					style="cursor: pointer">
                    {reg.toLowerCase()}
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>

	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
	li {
		padding: 0 20px;
	}

	.active{
		background-color: red;
		color:azure;
	}
</style>