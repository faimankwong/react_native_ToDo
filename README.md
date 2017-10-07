# What is it?
Simple self-learning product with basic redux, firebase and react native

# Example
Code for adding items to firebase
```
addTodo(){
    this.itemsRef.push({
        first_name: this.store.getState().new_first_name,
        last_name: this.store.getState().new_last_name,
        company: this.store.getState().new_company,
        department:this.store.getState().new_department,
        position: this.store.getState().new_position,
        email: this.store.getState().new_email

    });



}

```
