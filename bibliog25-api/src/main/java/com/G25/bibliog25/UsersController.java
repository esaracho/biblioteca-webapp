package com.G25.bibliog25;

//import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;

//import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")

public class UsersController {

	@Autowired
	private UsersRepository repository;
	
	//Devuelve todas las entradas
	@GetMapping("/users")
	public List<Users> allUsers(){
		return repository.findAll();
	}
	
	//Devuelve por nombre
	@GetMapping("/users/{nombre}")
	public List<Users> findByNombre(@PathVariable("nombre") String nombre){
		return repository.findByNameContaining(nombre);
	}

	//Crea una nueva entrada usuario en la tabla
	@PostMapping("/users")
	public Users createUser(@RequestBody Users user) {
		return repository.save(user);
	}
		
	//Modifica una entrada en la tabla
	@PutMapping("/users/{id}")
	public Users updateUser(@PathVariable Long id,@RequestBody Users user) {
		return repository.save(user);
	}
		
	//Borra una entrada en la tabla
	@DeleteMapping("/users/{id}")
	public void deleteUser(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}
