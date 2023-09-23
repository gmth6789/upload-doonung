<template>
  <div id="app">
    <CloudImage path="folder/profile.png"/>
  <input type="file" ref="myfile">
  <button @click="upload">upload</button>
  </div>
</template>

<script>
import  { storage } from "./firebase"
import  { ref,uploadBytes } from "firebase/storage"
import  CloudImage  from './components/CloudImage.vue'

export default {
  name: 'App',
  components: {
    CloudImage
  },
  methods:{
    upload: function() {
      const storageRef = ref(storage, 'folder/profile.png');
      uploadBytes(storageRef,this.$refs.myfile.files[0]).then((snapshot)=> {
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
