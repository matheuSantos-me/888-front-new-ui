<template>
  <div :class="isMobile ? 'container-search-mobile' : 'container-search'">
    <search-icon size="1.5x" class="custom-class" />

    <input
      type="text"
      :placeholder="placeholder"
      class="input-search"
      v-model="inputValue"
      @input="$emit('input', inputValue)"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: 'SearchInput',
  components: {
    SearchIcon
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
		...mapGetters({ isMobile: 'getIsMobile' })
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal
    }
  }
}
</script>

<style scoped>
.container-search {
  background-color: #14161B;
  border-radius: 50px;
  height: 40px;
  width: 500px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  margin-top: 10px;
}

.container-search-mobile {
  background-color: #14161B;
  border-radius: 50px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  margin-top: 10px;
}

.input-search {
  background-color: #14161B;
  border: none;
  height: 95%;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
}

.input-search:focus {
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
