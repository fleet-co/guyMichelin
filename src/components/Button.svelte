<script>
    export let onClick = () => {};
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    export let buttonText = "click me";
</script>

<button class="button" on:click={handleClick}>
    {buttonText}
</button>

<style>
    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 4px 8px;
        gap: 4px;
        color: white;
        background: #609966;
        border-radius: 8px;
        border: none;
    }
    .button:hover {
        background: #6e955a;
        cursor: pointer;
    }
</style>
