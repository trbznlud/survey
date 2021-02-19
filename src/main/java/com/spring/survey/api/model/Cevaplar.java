package com.spring.survey.api.model;

public class Cevaplar {
	
	private String cevapSoru;
	
	private int cevapSayisi;
	
	private String cevapSecenek;
	
	private String cevapYuzde;

	public Cevaplar(String cevapSoru, int cevapSayisi, String cevapSecenek, String cevapYuzde) {
		this.cevapSoru = cevapSoru;
		this.cevapSayisi = cevapSayisi;
		this.cevapSecenek = cevapSecenek;
		this.cevapYuzde = cevapYuzde;
	}

	public String getCevapSoru() {
		return cevapSoru;
	}

	public void setCevapSoru(String cevapSoru) {
		this.cevapSoru = cevapSoru;
	}

	public int getCevapSayisi() {
		return cevapSayisi;
	}

	public void setCevapSayisi(int cevapSayisi) {
		this.cevapSayisi = cevapSayisi;
	}

	public String getCevapSecenek() {
		return cevapSecenek;
	}

	public void setCevapSecenek(String cevapSecenek) {
		this.cevapSecenek = cevapSecenek;
	}

	public String getCevapYuzde() {
		return cevapYuzde;
	}

	public void setCevapYuzde(String cevapYuzde) {
		this.cevapYuzde = cevapYuzde;
	}
}
