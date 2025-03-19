<script setup></script>
<template>
  <nav>
    <ul>
      <li>
        <router-link :to="`/`">Home</router-link>
      </li>
      <li>
        <router-link :to="`/aigua`">Aigua</router-link>
      </li>
      <li>
        <router-link :to="`/compra`">Llista Compra</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  background-color: #d6d6d6;
  padding: 1%;
}
ul{
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin-right: 5%;
}

li {
  margin: 1%;
  
}

a {
    border-radius: 10px;
    border: 2px solid rgb(0, 109, 233);
    text-decoration: none;
    color: rgb(0, 109, 233);;
    padding: 1rem;
}
</style>