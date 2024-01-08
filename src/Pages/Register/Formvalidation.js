const Formvalidation = (data) => {
     const errors = {};
     const {name, email, password, confirmpassword} = data
     if (!name.trim()){
          errors.name = 'invalid name**'
     }else if(name.length < 4){
          errors.name = 'name must have more than 4 char**'
     }else if(name.length > 14){
          errors.name = 'name must have less than 14 char**'
     }
     if (!email.trim() || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) {
          errors.email = 'Invalid email address';
     }
     if(!password.trim() || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/){
          errors.password = 'provide a strong valid password' 
     }
     if(!confirmpassword.trim || confirmpassword.trim() !== password){
          errors.confirmpassword= `password doesn't match`
     }



     return errors
}

export default Formvalidation