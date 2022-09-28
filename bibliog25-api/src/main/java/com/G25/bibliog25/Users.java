package com.G25.bibliog25;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "last_name_p")
	private String last_name_p;
	@Column(name = "last_name_m")
	private String last_name_m;
	@Column(name = "domicilio")
	private String domicilio;
	@Column(name = "tel")
	private String tel;
	@Column(name = "sanctions")
	private int sanctions;
	@Column(name = "sanc_money")
	private int sanc_money;
	
	public Users() {
		
	}
	
	public Users(String name, String last_name_p, String last_name_m, String domicilio, String tel, int sanctions, int sanc_money) {
		this.name = name;
		this.last_name_p = last_name_p;
		this.last_name_m = last_name_m;
		this.domicilio = domicilio;
		this.tel = tel;
		this.sanctions = sanctions;
		this.sanc_money = sanc_money;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLast_name_p() {
		return last_name_p;
	}

	public void setLast_name_p(String last_name_p) {
		this.last_name_p = last_name_p;
	}

	public String getLast_name_m() {
		return last_name_m;
	}

	public void setLast_name_m(String last_name_m) {
		this.last_name_m = last_name_m;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public int getSanctions() {
		return sanctions;
	}

	public void setSanctions(int sanctions) {
		this.sanctions = sanctions;
	}

	public int getSanc_money() {
		return sanc_money;
	}

	public void setSanc_money(int sanc_money) {
		this.sanc_money = sanc_money;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", name=" + name + ", last_name_p=" + last_name_p + ", last_name_m=" + last_name_m
				+ ", domicilio=" + domicilio + ", tel=" + tel + ", sanctions=" + sanctions + ", sanc_money="
				+ sanc_money + "]";
	}
	
}
