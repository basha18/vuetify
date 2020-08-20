<template>
     <div id="app">
      <v-container app  style="max-height: 400px max-width: 100px" class="mx-50 my-10">
        <v-row align="start" justify="center">
          <v-col  cols="12" sm="8" md="4">
            <v-card>

              <v-toolbar  color="blue">
                <v-toolbar-title>Patient Registration </v-toolbar-title>
                <v-spacer></v-spacer>                
              </v-toolbar>

              <v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form" scrollable>
                  <v-text-field label="Name"  v-model="name" type="text"></v-text-field>
                  <v-text-field v-model="age" label="Age"  type="number"></v-text-field>
                  <v-radio-group :disabled="disabled" :readonly="readonly" :mandatory="mandatory"
			:multiple="multiple" :error="error" :success="success" :row="row" v-model="gender">  
		     <v-radio label="Male" v-model="male"></v-radio>
		     <v-radio label="Female" v-model="female"></v-radio>
		  </v-radio-group>
                  <v-text-field v-model="mobile" label="Mobile"  type="number"></v-text-field>
                  <v-textarea   v-model="address" class="mx-2" label="Address" rows="2"></v-textarea>
                  <v-select     v-model="city" :items= "cities" label="City" type="text"></v-select>
                  <v-select     v-model="country" :items= "countries" label="Country" type="text"></v-select>
                  <v-text-field v-model="email" label="Email"  type="email"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn router to="/staff-home">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn type="submit" form="submit-form" color="blue">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>    
        </v-row>
      </v-container>
     </div>
</template> 

<script>
    export default {
        data () {
            return {
                name:'',
                age:'',
                mobile:'',
                address:'',
                cities:['Bengaluru','Hyderabad','Chennai'],
                countries: ['India'],
                email:'',
		disabled:false,
	        readonly:false,
	        mandatory:false,
	        multiple:false,
      		error:false,
	        success:false,
		row:true,
                male:null,
		female:null,
		city:null,
		country:null,
		gender:null
            }
        },
        methods: {

            onSubmit()
            {
                console.log("success")
		console.log(this.male)
		console.log(this.female)
		console.log(this.name)
		console.log(this.age)
		console.log(this.address)
		console.log(this.city)
		console.log(this.country)
		console.log(this.email)
		console.log(this.gender)
            }
        }
}
</script>

.scroll {
   overflow-y: scroll
}


