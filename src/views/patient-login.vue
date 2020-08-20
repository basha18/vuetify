<template>
  <v-app id="inspire">
    <v-main>
     <Appbar />
      <v-container
        fluid
      >
        <v-row
          align="start"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="blue"
                flat
              >
                <v-toolbar-title>Patient Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSubmit" id="submit-form">
                  <v-text-field
                    label="Enter your phone"
                    v-model="Username"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    label="Password"
                    v-model="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" form="submit-form" color="blue">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails
  } from 'amazon-cognito-identity-js';

  export default {
    data () {
      return {
        Username: '',
        Password: '',
      }
    },
    methods: {
      onSubmit () {
        const authData = {
                Username: this.Username,
                Password: this.Password
        }
        console.log(authData)
        const authDetails = new AuthenticationDetails(authData)
        const poolData = {
              UserPoolId: this.$store.state.cognito_userpool_id,
              ClientId: this.$store.state.cognito_appclient_id
        }
        console.log(poolData)
        const userPool = new CognitoUserPool(poolData)
        const userData = {
              Username: this.Username,
              Pool: userPool
        }
        console.log(userData)
        const cognitoUser = new CognitoUser(userData)
        cognitoUser.authenticateUser(authDetails, {
                   onSuccess: function(result) {
                        console.log('Successfully logged!')
                        },
                   onFailure: function(err) {
                        console.log('erro')
                        alert(err.message || JSON.stringify(err))
                   }

        })
        this.$router.push('/patient-home')
     }
    }
  }
</script>
