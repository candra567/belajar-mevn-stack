<template>
  <div class="container">
    <div class="row mt-5">
        <div class="col-12">
            <div class="card-header bg-danger text-white">{{title}}</div>
            <div class="card-body table-responsive">
              <slot></slot>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
  const props=defineProps({
    title:String
  })
</script>