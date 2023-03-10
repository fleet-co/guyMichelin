<script>
    let criteriaValue = 3;
    export let criteria;
    export let onChange;
</script>

<div>
    <input
        class="customInput"
        type="range"
        bind:value={criteriaValue}
        on:change={() => onChange(criteria, criteriaValue)}
        min="1"
        max="5"
    />
</div>

<style>
    .customInput {
        height: 30px;
        -webkit-appearance: none;
        background: transparent;
        margin: 10px 0;
        width: 100%;
    }
    .customInput:focus {
        outline: none;
    }
    .customInput::-webkit-slider-runnable-track {
        width: 100%;
        height: 14px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #609966;
        border-radius: 5px;
        border: 0px solid #000000;
    }
    .customInput::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 24px;
        width: 24px;
        border-radius: 50px;
        background: #9dc08b;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
    }
    .customInput:focus::-webkit-slider-runnable-track {
        background: #609966;
    }
    .customInput::-moz-range-track {
        width: 100%;
        height: 14px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #609966;
        border-radius: 5px;
        border: 0px solid #000000;
    }
    .customInput::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 24px;
        width: 24px;
        border-radius: 50px;
        background: #9dc08b;
        cursor: pointer;
    }
    .customInput::-ms-track {
        width: 100%;
        height: 14px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    .customInput::-ms-fill-lower {
        background: #609966;
        border: 0px solid #000000;
        border-radius: 10px;
        box-shadow: 0px 0px 0px #000000;
    }
    .customInput::-ms-fill-upper {
        background: #609966;
        border: 0px solid #000000;
        border-radius: 10px;
        box-shadow: 0px 0px 0px #000000;
    }
    .customInput::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 24px;
        width: 24px;
        border-radius: 50px;
        background: #9dc08b;
        cursor: pointer;
    }
    .customInput:focus::-ms-fill-lower {
        background: #609966;
    }
    .customInput:focus::-ms-fill-upper {
        background: #609966;
    }
</style>
