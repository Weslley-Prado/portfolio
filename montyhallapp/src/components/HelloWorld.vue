<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body {
    color: #FFF;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}
#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}
.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
