import java.util.List;
import java.util.Arrays;

// Class to represent a section item (Job or Education)
class CvEntry {
    String title;
    String organization;
    String dates;
    List<String> bulletPoints;

    public CvEntry(String title, String organization, String dates, List<String> bulletPoints) {
        this.title = title;
        this.organization = organization;
        this.dates = dates;
        this.bulletPoints = bulletPoints;
    }
}

public class CvDataModel {
    public static void main(String[] args) {
        
        // --- Personal Information ---
        String name = "Arshia Jadoon";
        String degree = "B.S. Software Engineering";
        String github = "github.com/arshiajadoon1";

        // --- Technical Skills ---
        List<String> programmingLanguages = Arrays.asList("Java", "Python", "JavaScript", "SQL");
        List<String> frameworks = Arrays.asList("Spring Boot", "React", "Node.js", "Django");
        List<String> tools = Arrays.asList("Git/GitHub", "Docker", "AWS", "JIRA");
        
        // --- Education ---
        CvEntry education = new CvEntry(
            degree,
            "University Name",
            "Sep 2019 – May 2023",
            Arrays.asList(
                "Completed degree with a focus on Object-Oriented Design and Data Structures.",
                "Final Project: Developed a full-stack task management application."
            )
        );

        // --- Experience ---
        CvEntry experience = new CvEntry(
            "Software Development Intern",
            "Innovative Tech Solutions",
            "Summer 2022",
            Arrays.asList(
                "Refactored legacy Java code for performance optimization.",
                "Developed and tested 5 new API endpoints.",
                "Used Git for version control in a collaborative environment."
            )
        );

        // Compile all data for processing
        List<CvEntry> allEntries = Arrays.asList(education, experience);
        
        // --- Output Demonstration (Simulating Data Access) ---
        System.out.println("CV Data for: " + name);
        System.out.println("Degree: " + degree);
        System.out.println("GitHub: " + github);

        System.out.println("\n--- Skills ---");
        System.out.println("Languages: " + programmingLanguages);
        System.out.println("Frameworks: " + frameworks);
        System.out.println("Tools: " + tools);

        System.out.println("\n--- Education & Experience Details ---");
        for (CvEntry entry : allEntries) {
            System.out.println("\n" + entry.title + " (" + entry.organization + ")");
            for (String detail : entry.bulletPoints) {
                System.out.println("  - " + detail);
            }
        }
    }
}