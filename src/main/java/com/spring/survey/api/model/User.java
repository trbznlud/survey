package com.spring.survey.api.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "user_email")
    @Email(message = "*Lütfen geçerli bir e-mail giriniz.")
    @NotEmpty(message = "*Lütfen geçerli bir e-mail giriniz.")
    private String email;
	
	@Column(name="user_name")
	@NotEmpty(message = "*Lütfen geçerli bir kullanıcı adınız giriniz.")
	@Length(min = 5, message = "*Kullanıcı adı en az 5 karakter içermelidir.")
	private String userName;
	
	@Column(name="user_password")
	@NotEmpty(message = "*Lütfen geçerli bir şifre giriniz.")
	@Length(min = 5, message = "*Şifreniz en az 5 karakter içermelidir.")
	private String password;
	
	@Column(name = "active")
    private Boolean active;
	
	@ManyToMany(cascade = CascadeType.MERGE)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	
	private Set<Role> roles;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean getActive() {
		return active;
	}
	
	public void setActive(boolean active) {
		this.active = active;
	}
	
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	
}
