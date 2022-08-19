public class Cat {

    private String name; // these are fields or instance variables; same thing
    private String furColor;
    private int age;
    private int lives;

    public Cat(String name, String furColor, int age, int lives) {
        this.name = name;
        this.furColor = furColor;
        this.age = age;
        this.lives = lives;
    }

    public String getName() {
        return name;
    }
    // rest of getters (properties)


    public String getFurColor() {
        return furColor;
    }

    public int getAge() {
        return age;
    }

    public int getLives() {
        return lives;
    }
}
