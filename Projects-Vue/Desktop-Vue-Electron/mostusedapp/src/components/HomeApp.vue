<template>
   <v-container fluid> 
     


  
         <div class="pills"> 
           <PillApp v-for="word in groupedWords" :key="word.name"
           :name="word.name" :amount="word.amount"/>
      </div>       
    </v-container>
</template>

<script>
import PillApp from './PillApp.vue'

export default {
  name: 'HomeApp',
  components: {PillApp},
  data: function(){
      return {
          groupedWords: [
              {name: 'you', amount:2 },
              {name: 'I', amount:1 },
              {name: 'he', amount:2 },
              {name: 'he', amount:2 },
             
          ]
      }

  }
}


</script>

<style>

.pills{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>