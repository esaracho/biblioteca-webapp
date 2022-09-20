package com.G25.bibliog25;
import javax.persistence.*;

@Entity
@Table(name = "books")
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "title")
	private String title;
	@Column(name = "date")
	private String date;
	@Column(name = "author")
	private String author;
	@Column(name = "category")
	private String category;
	@Column(name = "edit")
	private String edit;
	@Column(name = "lang")
	private String lang;
	@Column(name = "pages")
	private String pages;
	@Column(name = "description")
	private String description;
	@Column(name = "ejemplares")
	private String ejemplares;
	@Column(name = "stock")
	private int stock;
	@Column(name = "available")
	private int available;
	
	public Books() {
	}
	
	public Books(String title, String date, String author, String category, String edit, String lang, String pages, String description, 
			String ejemplares, int stock, int available) {
		this.title = title;
		this.date = date;
		this.author = author;
		this.category = category;
		this.edit = edit;
		this.lang = lang;
		this.pages = pages;
		this.description = description;
		this.ejemplares = ejemplares;
		this.stock = stock;
		this.available = available;
	}

	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEdit() {
		return edit;
	}

	public void setEdit(String edit) {
		this.edit = edit;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getPages() {
		return pages;
	}

	public void setPages(String pages) {
		this.pages = pages;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEjemplares() {
		return ejemplares;
	}

	public void setEjemplares(String ejemplares) {
		this.ejemplares = ejemplares;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getAvailable() {
		return available;
	}

	public void setAvailable(int available) {
		this.available = available;
	}

	@Override
	public String toString() {
		return "Books [id=" + id + ", title=" + title + ", date=" + date + ", author=" + author + ", category="
				+ category + ", edit=" + edit + ", lang=" + lang + ", pages=" + pages + ", description=" + description
				+ ", ejemplares=" + ejemplares + ", stock=" + stock + ", available=" + available + "]";
	}
	
	
	
}

