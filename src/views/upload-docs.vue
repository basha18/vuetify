<template>
 <div id="app">
      <v-container app  class="mx-50 my-10">
        <v-row align="start" justify="center">
          <v-col  cols="12" sm="8" md="4">
            <v-card>
		<v-toolbar  color="blue">
                   <v-toolbar-title>Upload Document </v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>

	    	<v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form">
		  <v-text-field label="Name"  v-model="name" type="text"></v-text-field>
                  <v-text-field label="Enter your phone"  v-model="phone" type="number"></v-text-field>
		  <v-text-field label="Date"  v-model="date" type="text">{{this.date}}</v-text-field>
		  <v-file-input  v-model="files"  color="orange lighten-1"  counter  label="File input"  multiple  placeholder="Select your files"  prepend-icon="mdi-paperclip" outlined :show-size="1000" >
		  <template v-slot:selection="{ text }"> 
			 <v-chip  color="orange lighten-1"  dark  label  small > {{text}} </v-chip>
		  </template>
		</v-file-input>
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
import moment from 'moment'
export default {
  data() {
    return {
      name: '',
      phone: '',
      date: '',
      files: [''],
    }
  },
  methods: {
    submit() {
	console.log(this.name)
    }
  }
}
</script>
