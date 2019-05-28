package app;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Result {
	String path;
	String filename;
	float score;
	List<Location> locations;
	
	public Result() {
		locations = new ArrayList<>();
	}
	
	public Result(String path) {
		this();
		setPath(path);
		
	}
	
	public void addLocation(int page, int position, String paragraph, String param){
		Location loc = new Location(page, position, paragraph, param);
		locations.add(loc);
	}
	
	public void addLocation(Location loc) {
		locations.add(loc);
	}
	
	public void addScore(float score) {
		this.score = score;
	}

	public void setPath(String path) {
		this.path = path;
		File file = new File(path);
		this.filename = file.getName(); //get filename from path
		
	}

}
