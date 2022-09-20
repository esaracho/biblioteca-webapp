package com.G25.bibliog25;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

public class BooksController {
	
	@Autowired
	private BooksRepository repository;
	
	//Devuelve todas las entradas
	@GetMapping("/books")
	public List<Books> allBooks(){
		return repository.findAll();
	}
	
	//Devuelve por título
	@GetMapping("/books/{title}")
	public List<Books> findByTitle(@PathVariable("title") String title){
		return repository.findByTitleContaining(title);
	}
	
	//Devuelve por id de libro
	@GetMapping("/books/id/{id}")
	public Optional<Books> findById(@PathVariable Long id){
		return repository.findById(id);
	}
	
	//Devuelve por autor
	@GetMapping("/books/author/{author}")
	public List<Books> findByAuthor(@PathVariable("author") String author){
		return repository.findByAuthorContaining(author);
	}
	
	//Devuelve por categoría
	@GetMapping("/books/category/{category}")
	public List<Books> findBycategory(@PathVariable("category") String category){
		return repository.findByCategoryContaining(category);
	}
	
	//Crea una nueva entrada libro en la tabla
	@PostMapping("/books")
	public Books createBook(@RequestBody Books book) {
		return repository.save(book);
	}
	
	//Modifica una entrada en la tabla
	@PutMapping("/books/{id}")
	public Books updateBook(@PathVariable Long id,@RequestBody Books book) {
		return repository.save(book);
	}
	
	//Borra una entrada en la tabla
	@DeleteMapping("/books/{id}")
	public void deleteBook(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}
	