<script lang="ts">
  import { Input } from "@components/form/input";
  import { TextArea } from "@components/form/text-area";
  import { Button } from "@components/navigation/button";
  import { Text } from "@components/texts/text";
  import { Form } from "@components/form/form";
  import { isString, isEmail, isNumber } from "../libraries/utils/validator";

  export let data: any;
  let members = data.members.members;

  const onSubmit = async () => {
    console.log("COUCOU");
  }
</script>

<Form on:submit={onSubmit}>
  <div class="max-w-4xl p-4">
    <div class="mb-10">
      <Text type="h1" size="xl" fontWeight="medium">Nous envoyer un message</Text>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <Input label="Prénom" name="firstName" validators={[isNumber]} required/>
      <Input label="Nom" name="lastName" validators={[isString]} required/>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6">
      <Input label="Adresse email" name="email" validators={[isEmail]} required/>
      <Input label="Téléphone" name="phone"  validators={[isString]} required/>
    </div>
  
    <div class="mt-6">
      <Input label="Sujet" name="subject" validators={[isEmail]} required/>
    </div>
    <div class="mt-6">
      <TextArea label="Message" name="message" autoResize rows={4}/>
    </div>
  
    <div class="flex justify-end mt-2">
      <Button color="primary" size="large">Envoyer</Button>
    </div>
  </div>
</Form>

<div class="grid grid-cols-5 gap-4">
  {#each members as member}
    <div class="flex items-center gap-4 p-4 rounded-md bg-gray-1 shadow-md border border-gray-2">
      <img src={member.profilePicture} alt="" class="w-12 h-12 rounded-full object-cover">
      <p>{member.username}</p>
    </div>
  {/each}
</div>