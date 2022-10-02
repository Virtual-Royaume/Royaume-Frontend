<script lang="ts">
    export let name: string;

	let text = "Button";

	const handleClick = () => {
		text = "Button Clicked";
    }
</script>

<h1>Hello {name}</h1>

<button on:click={handleClick}>{text}</button>