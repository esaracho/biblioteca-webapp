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

public class LendingsController {
	
	@Autowired
	private LendingsRepository repository;
	
	//Devuelve todas las entradas
	@GetMapping("/lendings")
	public List<Lendings> allLendings(){
		return repository.findAll();
	}
	
	//Crea una nueva entrada prestamo en la tabla
	@PostMapping("/lendings")
	public Lendings createLending(@RequestBody Lendings prest) {
		return repository.save(prest);
	}
			
	//Modifica una entrada en la tabla
	@PutMapping("/lendings/{id}")
	public Lendings updateLending(@PathVariable Long id,@RequestBody Lendings prest) {
		return repository.save(prest);
	}
			
	//Borra una entrada en la tabla
	@DeleteMapping("/lendings/{id}")
	public void deleteLending(@PathVariable Long id) {
		repository.deleteById(id);
	}

}
