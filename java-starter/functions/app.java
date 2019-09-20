package example;

public class Hello {
    public String mainHandler(String name) {
        System.out.println("Hello world!");
        return String.format("Hello %s.", name);
    }
}