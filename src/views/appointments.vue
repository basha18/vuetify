<template>
 <div id="app">
      <v-container app  class="mx-50 my-10">
        <v-row align="start" justify="center">
          <v-col  cols="12" sm="8" md="4">
            <v-card>
		<v-toolbar  color="blue">
                   <v-toolbar-title>Appointment</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>

	    	<v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form" scrollable>
		  <v-text-field label="Name"  v-model="name" type="text"></v-text-field>
                  <v-text-field label="Enter your phone"  v-model="phone" type="number"></v-text-field>
		  <v-text-field label="Enter your mail"  v-model="email" type="email"></v-text-field>
		  <v-text-field label="Date"  v-model="date" type="text">{{this.date}}</v-text-field>
		  <v-select     v-model="city" :items= "cities" label="City" type="text"></v-select>
		  <v-select     v-model="country" :items= "countries" label="Country" type="text"></v-select>
		  <v-select     v-model="dept" :items= "depts" label="Dept" type="text"></v-select>
		  <v-select     v-model="doctor" :items= "doctors" label="Doctor" type="text"></v-select>
		</v-form>
              </v-card-text>
	     <v-card-actions>
                <v-btn router to="/patient-home">Cancel</v-btn>
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
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      cities:['Bengaluru','Hyderabad','Chennai'],
      countries: ['India'],
      depts:['Neurology','Optomology','General Medicine'],
      doctors:['Arvind Kumar','Somesh'],
      doctor:'',
      city: '',
      dept: '',
      country:'',
      date: ''
    }
  },
  methods: {
    submit() {
      console.log(this.name, this.date,this.phone,this.city,this.country,this.dept.this.doctor,this.email)
    }
  }
}
</script>
