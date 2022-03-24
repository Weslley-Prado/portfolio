<template>
   
     <div class="pill">
         <span class="name">{{ name }}</span>
         <span class="amount">{{ amount }}</span>

     </div>
  
</template>

<script>
export default {
      name:'PillApp',
      props:['name', 'amount']
}
</script>

<style>

.pill{
    background-color: #dc143c;
    color: #fff;
    margin:10px;
    height: 55px;
    border-radius: 30px;
    font-size: 13rem;
    font-weight: bold;
    display: flex;
    align-items:center ;
}

.pill .name{
    margin: 15px;
    font-size: 10px;
}

.pill .amount{
    margin:10;
    padding: 5px;
    height: 35;
    width: 35;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    background-color: white;
    color:black;
    font-size: 10px;
}


</style>