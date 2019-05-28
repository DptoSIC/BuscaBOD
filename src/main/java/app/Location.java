package app;

public class Location {
	int page;
	int position;
	String paragraph;
	String param;
	int len;

	public Location(int page, int position, String paragraph, String param) {
		this.page = page;
		this.position = position;
		this.paragraph = paragraph;
		this.param = param;
		len = param.length();
	}

}
