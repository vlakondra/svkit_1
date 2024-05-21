<script>
    export let data;
    import { page } from '$app/stores';
    let pth =$page.url.pathname.split('/')[1]
</script>

<a href='/{pth}/{data.post.userId}'>&times;</a>
<p>{data.post.body}</p>

<p>
{pth}
</p>
