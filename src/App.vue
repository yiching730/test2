<template>
  <div id="app">
   <Card :cardData="cardData" />
  </div>
</template>

<script>
import Card from './components/Card.vue'
  export default {
    name: 'app',
    components:{
      Card
    },
    data(){
      return{
        cardData:[
          {
            name:'Adam',
            birthday:'1995.08.12',
            mail:'adam@xxx.com'
          },
          {
            name:'Jack',
            birthday:'1980.02.23',
            mail:'jack@xxx.com'
          },
          {
            name:'Candy',
            birthday:'1982.05.06',
            mail:'candy@xxx.com'
          },
          {
            name:'Louis',
            birthday:'1984.11.21',
            mail:'loui@xxx.com'
          },
          {
            name:'Lurry',
            birthday:'1982.01.17',
            mail:'lurry@xxx.com'
          }
        ]
      }
    }
  }
</script>

<style></style>

<!--  原來程式碼
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
-->
 