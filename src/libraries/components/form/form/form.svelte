<script lang="ts">
  import { setContext, createEventDispatcher } from "svelte";
  import type { FormContext } from "./form.type";

  // Props :
  export let valid = true;

  const dispatch = createEventDispatcher();

  const validators: {(): string | null}[] = [];

  const context: FormContext = {
    register: (fn: () => string | null) => validators.push(fn),
    unregister: (fn: () => string | null) => validators.splice(validators.indexOf(fn), 1),
    validate: (): boolean => {
        valid = validators.filter((fn) => fn()?.length !== 0).length === 0;
        return valid;
    }
  };

  setContext("validator", context);

  const onSubmit = () => {
    if (context.validate()) dispatch("submit");
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <slot />
</form>