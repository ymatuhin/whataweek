<script lang="ts">
  import Toast from "./Toast.svelte";
</script>

<div class="fixed right-4 top-4 flex flex-col space-y-2 w-64 {$$props.class}">
  <Toast type="success" title="Успешно загружено" />
  <Toast type="warning" message="Что-то пошло не так" />
  <Toast type="info" title="200" message="Да все ок" />
  <Toast type="error" title="Упс..." message="Что-то пошло не так" retry={true} />
</div>
