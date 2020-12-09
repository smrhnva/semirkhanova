<template>
<main class="cars">
    <h2>Каталог автомобилей</h2>
    <div class="container">
        <div class="row" v-for="(item,id) in cars" v-bind:key=id>
            <div class="col-lg-3">
                <button @click="Hide(id)" class="btn btn-link">{{item.brand}}{{item.model}}</button>
            </div>
            <div class="col-lg-5">
                <label class="description" v-if="item.show">{{item.description}}</label>
            </div>
                
        </div>
    </div>
</main>
</template>

<script>
export default {
    
    data(){
        return{
            elem:{
                brand:"",
                model:"",
                description:"",
                show:false
				},
				cars:[]
        }
    },
    methods:{
    Hide(id){
        this.cars[id].show=!this.cars[id].show;
    },
        async Update(){
			try{
					let res=await this.$http.get("http://localhost:3000/cars");
					this.cars=await res.json();
				}

			catch(err){
				console.error(err);
			}
        }
    },
    created(){
			this.Update();
		} 
}
</script>

<style>

</style>