<script>
    let cnt =1;

    const adder=()=>cnt+=1
</script>

<button on:click={adder}>add {cnt}</button>