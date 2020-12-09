<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-primary">
        <router-link class="navbar-brand" to="/main">
          <b>Semirkhanova</b>
        </router-link >
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="navbar-link" to="/cars">
                <b>Каталог автомобилей</b>
              </router-link >
            </li>
          </ul>
        </div>
      </nav>
    </header>  
    <router-view/>
    <footer>
      <div class="container">
        <div class="footer-block">
          <div class="col1">
            <p>Семирханова Римма Мидхатовна</p>
            <p>гр. 181-361</p>
            <p>09.12.2020</p>
          </div>
          <div class="col2">
            <label>Источники</label>
            <p><a href="https://bootstrap-4.ru/" target="_blank">Бутстрап</a></p>
             <p><a href="https://ru.vuejs.org/" target="_blank">Документация Vue.js</a></p>
            <p><a href="http://htmlbook.ru/" target="_blank">htmlbook.ru</a></p>
          </div>
        </div>
      </div>
      
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  background: #d9f4ff;
  height: 100vh;
  width: 100%;
}
.footer-block{
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  padding: 10px 0;
}
.col1,.col2{
  flex-grow: 1;
  display: inline-block;
}
</style>
