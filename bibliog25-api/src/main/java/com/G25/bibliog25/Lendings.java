package com.G25.bibliog25;
import javax.persistence.*;

@Entity
@Table(name = "lendings")
public class Lendings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "user_id")
	private int user_id;
	@Column(name = "book_id")
	private int book_id;
	@Column(name = "date_out")
	private String date_out;
	@Column(name = "date_return")
	private String date_return;

	public Lendings() {
	}

	public Lendings(int user_id, int book_id, String date_out, String date_return) {
		
		this.user_id = user_id;
		this.book_id = book_id;
		this.date_out = date_out;
		this.date_return = date_return;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public String getDate_out() {
		return date_out;
	}

	public void setDate_out(String date_out) {
		this.date_out = date_out;
	}

	public String getDate_return() {
		return date_return;
	}

	public void setDate_return(String date_return) {
		this.date_return = date_return;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Lendings [id=" + id + ", user_id=" + user_id + ", book_id=" + book_id + ", date_out=" + date_out
				+ ", date_return=" + date_return + "]";
	}
	
}

