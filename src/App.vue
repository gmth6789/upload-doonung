<template>
  <div id="app">
  <input type="file" ref="myfile">
  <button @click="upload">upload</button> 
  </div>
</template>

<script>
import { storage } from "./firebase"
import { ref,uploadBytes } from "firebase/storage"

export default {
  name: 'App',
  components: {
    
  },
  methods:{
    upload: function() {
      const: storageRef = ref(storage, 'folder/myfile.gif');
      uploadBytes(storageRef, this.$refs.myfile.files[0]).then(
        (snapshot)=> {
          console.log("uploaded")
        })
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
