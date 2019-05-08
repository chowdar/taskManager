function Task(id, title, description, resourceURL){
    this.id = id;
    this.title = title;
    this.description = description;
    
    if( resourceURL !== ''){
        this.resourceURL = resourceURL
    }else{
        this.resourceURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYiohISabIu2KfkOfG4jXZjqbWxW7fgxcTrvc0Wglp8_hQCi-KQ';
    }
    this.completed = false;
    this.date = new Date();
}

module.exports = Task;