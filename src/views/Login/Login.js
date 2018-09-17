import { validationMixin } from 'vuelidate'
import { required, minLength} from 'vuelidate/lib/validators';

import router from './../../router';
import navigation from "../../constants/navigation";

export default {
  name: "Quizzical-Login",
  mixins: [
      validationMixin
  ],
  data: () => ({
      username: null,
      password: null,
      sending: false
  }),
  validations: {
    username: {
        required
    },
    password: {
        required,
        minLength: minLength(8)
    }
  },
  methods: {
      getValidationClass(fieldName) {
        const field = this.$v[fieldName];
        if (field) {
            return {
                'md-invalid': field.$invalid && field.$dirty
            }
        }
      },
      attemptLogin () {
        this.$v.$touch();
        if (!this.$v.$invalid) {
            this.sending = true;
            this.$store.dispatch('login', { 
                username: this.$v.username.$model, 
                password: this.$v.password.$model
            })
            .then(() => {
                router.push(navigation.landing);
            })
            .finally(() => this.sending = false);
        }
      }
  }
};