<template>
  <div
    class="btn"
    @click="$emit('onClick')"
    :class="{ isRounded: isRounded, isDanger: isDanger }"
    style="">
    <v-icon v-if="hasIcon" class="icon" color="white" :icon="btnIcon" size="x-small"></v-icon>
    <span class="btn-label">{{ btnLabel }}</span>
    <span v-if="hasSuffix" class="btn-suffix-label">{{ btnLabelCount }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      btnLabel: {
        type: String,
        required: true,
      },
      btnLabelCount: {
        type: Number,
        default: 0,
      },
      isRounded: {
        type: Boolean,
        default: true,
      },
      hasSuffix: {
        type: Boolean,
        default: false,
      },
      hasIcon: {
        type: Boolean,
        default: false,
      },
      btnIcon: {
        type: String,
        default: "mdi-delete",
      },
      isDanger: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style scoped>
  .btn {
    width: auto;
    max-width: 120px;
    height: auto;
    padding: 2px 5px;
    background-color: #3371b5;
    display: flex;
    text-align: center;
    justify-content: space-between;
    cursor: pointer;
    flex-wrap: wrap;
    gap: 5px;
  }

  .isRounded {
    border-radius: 10px;
  }
  
  .isDanger {
    background-color: red;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    width:auto;
  }
  .btn-label {

    color: #fff;
  }
  .btn-suffix-label {
    border-radius: 50%;
    width: 20px;
    color: #3371b5;
    background-color: #fff;
  }
</style>