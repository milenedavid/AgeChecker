function verify() {
  var date = new Date()
  var year = date.getFullYear()
  
  var birth_year = window.document.getElementById('year')
  var res = window.document.getElementById('res') 
 
 
  if(birth_year.value.length == 0 || birth_year.value > year ){
    window.alert('Incorrect data, please check again!')
  }else {
    var gender = window.document.getElementsByName('gender')
    var age = year - birth_year.value
    var image = window.document.createElement('img')
    image.setAttribute('id', 'image')
    
    if (gender[0].checked){
      if( age >=0 && age <= 2){
        //Baby
        life_stage = 'Baby'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'baby-m.jpg') 
      } else if ( age <= 12) {
        //Boy
        life_stage = 'Boy'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'boy.jpg') 
      } else if (age <= 19){
        //Teenager
        life_stage = 'Teenager'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'teenager-m.jpg') 
      } else if (age <= 40){
        //Young Adult
        life_stage = 'Young Adult'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'young_adult-m.jpg') 
      } else if (age <= 65){
        //Adult
        life_stage = 'Adult'
        res.innerHTML = `We detected an ${life_stage} with ${age} years old`
        image.setAttribute('src', 'adult-m.jpg') 
      } else {
        //Elderly
        life_stage = 'Elderly'
        res.innerHTML = `We detected an ${life_stage} with ${age} years old`
        image.setAttribute('src', 'elderly-m.jpg') 
      }
    } else {
      if( age >=0 && age <= 2){
        //Baby
        life_stage = 'Baby'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'baby-f.jpg')
      } else if ( age <= 12) {
        //Girl
        life_stage = 'Girl'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'girl.jpg') 
      } else if (age <= 19){
        //Teenager
        life_stage = 'Teenager'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'teenager-f.jpg') 
      } else if (age <= 40){
        //Young Adult
        life_stage = 'Young Adult'
        res.innerHTML = `We detected a ${life_stage} with ${age} years old`
        image.setAttribute('src', 'young_adult-f.jpg') 
      } else if (age <= 65){
        //Adult
        life_stage = 'Adult'
        res.innerHTML =`We detected an ${life_stage} with ${age} years old`
        image.setAttribute('src', 'adult-f.jpg') 
      } else {
        //Elderly
        life_stage = 'Elderly'
        res.innerHTML = `We detected an ${life_stage} with ${age} years old`
        image.setAttribute('src', 'elderly-f.jpg') 
      }
    }
    res.appendChild(image);
  }
  
}
