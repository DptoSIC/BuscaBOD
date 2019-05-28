package app;

import java.io.IOException;
import java.util.List;
import org.apache.lucene.document.Document;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.search.highlight.InvalidTokenOffsetsException;

import com.esotericsoftware.jsonbeans.Json;

public class App {

	
    public static void main(String[] args)
    {
        
        String indexPath = "indexes";
        String docsPath = "pdfs";
        String[] toFind = {"recibidas", "UNIDO"};
        String path = "pdfs\\informe-brechas-2019-03.pdf";
        boolean create = true;
        
        
        IndexPDFFiles indexer = new IndexPDFFiles(indexPath, docsPath, create);
        indexer.index();
        Searcher searcher = new Searcher(indexPath, docsPath);
        try {
        	for (String word: toFind) {
			searcher.search("", word);
			
        	}
		} catch (IOException | ParseException | InvalidTokenOffsetsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        
        try {
        	High h = new High();
        	String jsonString = h.highlight(path, toFind );
        	Json json = new Json();
        	System.out.println(json.prettyPrint(jsonString));
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        
    }

}
