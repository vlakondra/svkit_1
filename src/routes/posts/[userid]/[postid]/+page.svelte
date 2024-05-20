<script>
    export let data;
    import { page } from '$app/stores';
</script>

<a href='/posts/{data.post.userId}'>&times;</a>
<p>{data.post.body}</p>