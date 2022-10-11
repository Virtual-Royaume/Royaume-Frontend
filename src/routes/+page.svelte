<script lang="ts">
  import { z } from "zod";
  import { Input } from "@components/form/input";
  import { TextArea } from "@components/form/text-area";
  import { Button } from "@components/navigation/button";
  import { Text } from "@components/texts/text";
  import { Form } from "@components/form/form";

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
      <Input label="Prénom" name="firstName"/>
      <Input label="Nom" name="lastName"/>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6">
      <Input label="Adresse email" name="email"/>
      <Input label="Téléphone" name="phone"/>
    </div>
  
    <div class="mt-6">
      <Input label="Sujet" name="subject"/>
    </div>
    <div class="mt-6">
      <TextArea label="Message" name="message" autoResize rows={4}/>
    </div>
  
    <div class="flex justify-end mt-2">
      <Button color="primary" size="large">Envoyer</Button>
    </div>
  </div>
</Form>