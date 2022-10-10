<script lang="ts">
  import { Input } from "@components/form/input";
  import { TextArea } from "@components/form/text-area";
  import { Button } from "@components/navigation/button";
  import { Text } from "@components/texts/text";
</script>

<form class="max-w-4xl p-4">
  <div class="mb-10">
    <Text type="h1" size="xl" fontWeight="medium">Nous envoyer un message</Text>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <Input label="Prénom" name="firstName" required/>
    <Input label="Nom" name="lastName" required/>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-6">
    <Input label="Adresse email" type="email" name="email" required/>
    <Input label="Téléphone" name="phone"/>
  </div>

  <div class="mt-6">
    <Input label="Sujet" name="subject"/>
  </div>
  <div class="mt-6">
    <TextArea label="Message" autoResize rows={4}/>
  </div>

  <div class="flex justify-end mt-2">
    <Button color="primary" size="large">Envoyer</Button>
  </div>
</form>